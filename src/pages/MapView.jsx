import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Box, Text } from "@chakra-ui/react";
import L from "leaflet";

const MapView = () => {
  const [position, setPosition] = useState([51.505, -0.09]);
  const [nearbyTaxis, setNearbyTaxis] = useState([]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        const { latitude, longitude } = pos.coords;
        setPosition([latitude, longitude]);
      });
    }

    // Mock data for nearby taxis
    setNearbyTaxis([
      { id: 1, position: [51.505, -0.08], name: "Taxi 1" },
      { id: 2, position: [51.51, -0.1], name: "Taxi 2" },
      { id: 3, position: [51.51, -0.12], name: "Taxi 3" },
    ]);
  }, []);

  const customIcon = new L.Icon({
    iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });

  return (
    <Box height="100vh">
      <Text fontSize="2xl" textAlign="center" my={4}>
        Nearby Taxis
      </Text>
      <MapContainer center={position} zoom={13} style={{ height: "90%", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&amp;copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position} icon={customIcon}>
          <Popup>Your Location</Popup>
        </Marker>
        {nearbyTaxis.map((taxi) => (
          <Marker key={taxi.id} position={taxi.position} icon={customIcon}>
            <Popup>{taxi.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </Box>
  );
};

export default MapView;