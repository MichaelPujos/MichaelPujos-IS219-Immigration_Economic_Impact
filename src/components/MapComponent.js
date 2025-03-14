import { GoogleMap, useLoadScript } from "@react-google-maps/api";

const MapComponent = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY, // Ensure this is correct
  });

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading maps...</div>;

  return (
    <GoogleMap
      mapContainerStyle={{ width: "100%", height: "400px" }}
      center={{ lat: 40.7128, lng: -74.006 }} // Example: New York
      zoom={10}
    />
  );
};

export default MapComponent;
