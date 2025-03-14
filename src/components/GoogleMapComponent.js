import React from "react";
import { GoogleMap, LoadScript, HeatmapLayer, Marker } from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: 37.7749, // Default: San Francisco
  lng: -122.4194,
};

// Sample Heatmap Data (Replace with real workforce data)
const heatmapData = [
  { location: new window.google.maps.LatLng(34.0522, -118.2437), weight: 5 }, // LA
  { location: new window.google.maps.LatLng(40.7128, -74.006), weight: 8 }, // NYC
  { location: new window.google.maps.LatLng(41.8781, -87.6298), weight: 6 }, // Chicago
];

// Sample Job Distribution Markers
const jobMarkers = [
  { lat: 34.0522, lng: -118.2437, title: "Construction Jobs (LA)" },
  { lat: 40.7128, lng: -74.006, title: "Healthcare Jobs (NYC)" },
  { lat: 41.8781, lng: -87.6298, title: "Tech Jobs (Chicago)" },
];

// Deportation Impact Regions
const deportationData = [
  { lat: 29.7604, lng: -95.3698, title: "High Deportation (Houston)" },
  { lat: 33.4484, lng: -112.074, title: "High Deportation (Phoenix)" },
];

const GoogleMapComponent = () => {
  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
      <GoogleMap mapContainerStyle={mapContainerStyle} zoom={4} center={center}>
        {/* Heatmap Layer */}
        <HeatmapLayer data={heatmapData} />

        {/* Job Distribution Markers */}
        {jobMarkers.map((marker, index) => (
          <Marker key={index} position={{ lat: marker.lat, lng: marker.lng }} title={marker.title} />
        ))}

        {/* Deportation Impact Markers */}
        {deportationData.map((marker, index) => (
          <Marker key={index} position={{ lat: marker.lat, lng: marker.lng }} title={marker.title} icon="http://maps.google.com/mapfiles/ms/icons/red-dot.png" />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
