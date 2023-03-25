import React from "react";
import { GoogleMap, Marker, InfoWindow, LoadScript } from "@react-google-maps/api";
import img from '../assets/green-dot.png'
const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 9.081999,
  lng: 8.675277,
};

const stateData = [
  {
    name: "Lagos",
    position: {
      lat: 6.4550575,
      lng: 3.3941795,
    },
    buildings: 5000,
  },
  {
    name: "Abuja",
    position: {
      lat: 9.055122,
      lng: 7.489142,
    },
    buildings: 3000,
  },{
    name: "Kano",
    position: {
      lat: 12.0094,
      lng: 8.5393,
    },
    buildings: 3000,
  },
];

function Map() {
  const [selectedState, setSelectedState] = React.useState(null);

  const onSelect = (state) => {
    setSelectedState(state);
  };

  const onCloseClick = () => {
    setSelectedState(null);
  };


  return (
    <div className="w-full h-full">
      <LoadScript
         googleMapsApiKey="AIzaSyDf-yIqxErTkbWzKhLox7nAANnrfDIY190"
      >
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={6}>
        {stateData.map((state) => (
          <Marker
          key={state.name}
          title={state.name}
            position={state.position}
            onClick={() => onSelect(state)}
            icon={{
              url: img,
            }}
          />
        ))}

        {selectedState && (
          <InfoWindow
            position={selectedState.position}
            onCloseClick={() => onCloseClick}
          >
            <div>
              <h2 className="text-lg font-bold">{selectedState.name}</h2>
              <p className="text-md">{selectedState.buildings} Buildings</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default Map;
