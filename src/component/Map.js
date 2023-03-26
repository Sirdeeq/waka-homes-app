import { useEffect, useState } from "react";
import { GoogleMap, Marker, InfoWindow, Autocomplete,DrawingManager } from "@react-google-maps/api";
import img from '../assets/green-dot.png'
import axios from "axios";
import { API_URL } from "../utils/helpers";


const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 9.081999,
  lng: 8.675277,
};

function Map() {
  const [selectedState, setSelectedState] = useState(null);
  const [statesProps,setStatesProps] = useState([])
  const [drawingMode, setDrawingMode] = useState(null);
  const [polygon, setPolygon] = useState(null);

  const onSelect = (state) => {
    setSelectedState(state);
  };

  const onCloseClick = () => {
    setSelectedState(null);
  };

  useEffect(()=>{
    axios.get(`${API_URL}/properties/state-props`)
    .then(resp=>{
      console.log({resp});
      setStatesProps(resp.data.data)
    })
    .catch(error=>{
      console.error(error);
    })
  },[])

  const onPolygonComplete = (polygon) => {
    setDrawingMode(null);
    setPolygon(polygon);
  };

  return (
    <div className="w-full h-full">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={6}>
        
      <DrawingManager
          drawingMode={drawingMode}
          onPolygonComplete={onPolygonComplete}
          options={{
            drawingControl: true,
            drawingControlOptions: { position: window.google.maps.ControlPosition.LEFT_TOP,
              drawingModes: [window.google.maps.drawing.OverlayType.MARKER,
                window.google.maps.drawing.OverlayType.POLYGON],
            },
          }}
        />
        {statesProps.map((state) => (
          <Marker
          key={state.name}
          title={state.name}
            position={{lat:state.positions.coordinates[1], lng:state.positions.coordinates[0]}}
            onClick={() => onSelect(state)}
            onMouseOver={() => onSelect(state)}
            icon={{
              url: img,
            }}
          />
        ))}

        {selectedState && (
          <InfoWindow
            position={{lat:selectedState.positions.coordinates[1], lng:selectedState.positions.coordinates[0]}}
            onCloseClick={() => onCloseClick}
          >
            <div>
              <h2 className="text-lg font-bold">{selectedState.name}</h2>
              <p className="text-md">{selectedState.buildings} {selectedState.buildings > 1? 'Apartments':'Apartment'}</p>
              <p><a href="/open-state-view">view</a></p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  );
}

export default Map;
