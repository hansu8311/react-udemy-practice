import { useEffect, useState } from "react";
import Places from "./Places.jsx";
import ErrorPage from "./Error.jsx";

export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetching, setIsFetching] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [error, setError] = useState();
  useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true);
      try {
        const res = await fetch("http://localhost:3000/places");
        const { places } = await res.json();

        //400,500
        if (!res.ok) {
          throw new Error("Failed to fetch places");
        }

        setAvailablePlaces(places);
        setIsFetching(false);
      } catch (error) {
        setError({
          message:
            error.message || "Could not fetch places, please try again later.",
        });
      }
      setIsFetching(false);
    }
    fetchPlaces();
  }, []);
  if (error) {
    return <ErrorPage title="An error occured" message={error.message} />;
  }
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
