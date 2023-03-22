import React from "react";
import { GoogleMap, Marker, InfoWindow } from "@react-google-maps/api";

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
  },
];

function Map() {
  const [selectedState, setSelectedState] = React.useState(null);

  const onSelect = (state) => {
    setSelectedState(state);
  };

  return (
    <div className="w-full h-full">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={6}>
        {stateData.map((state) => (
          <Marker
            key={state.name}
            position={state.position}
            onClick={() => onSelect(state)}
            icon={{
              url: "https://maps.google.com/mapfiles/ms/icons/green-dot.png",
            }}
          />
        ))}

        {selectedState && (
          <InfoWindow
            position={selectedState.position}
            onCloseClick={() => setSelectedState(null)}
          >
            <div>
              <h2 className="text-lg font-bold">{selectedState.name}</h2>
              <p className="text-md">{selectedState.buildings} Buildings</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  );
}

export default Map;
