import { useCurrentLocation } from "./useCurrentLocation";

export function CurrentLocation() {
  const { location, loading, error, getCurrentLocation } = useCurrentLocation();

  return (
    <div>
      <h1>Current Location</h1>
      <button onClick={getCurrentLocation} disabled={loading}>
        Get Current Location
      </button>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {location && (
        <p>
          Latitude: {location.latitude}, Longitude: {location.longitude}
        </p>
      )}
    </div>
  );
}
