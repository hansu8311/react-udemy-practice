import { useEffect, useState } from "react";
import Places from "./Places.jsx";

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true);
      const res = await fetch("http://localhost:3000/places");
      const { places } = await res.json();
      setAvailablePlaces(places);
      setIsFetching(false);
    }
    fetchPlaces();
  }, []);
  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Fetching place date..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
