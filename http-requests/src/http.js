export async function fetchAvailablePlaces() {
  const res = await fetch("http://localhost:3000/places");
  const { places } = await res.json();

  //400,500
  if (!res.ok) {
    throw new Error("Failed to fetch places");
  }

  return places;
}
export async function fetchUserPlaces() {
  const res = await fetch("http://localhost:3000/user-places");
  const { places } = await res.json();

  //400,500
  if (!res.ok) {
    throw new Error("Failed to fetch user places");
  }

  return places;
}
export async function updateUserPlaces(places) {
  const res = await fetch("http://localhost:3000/user-places", {
    method: "PUT",
    body: JSON.stringify({ places }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  //400,500
  if (!res.ok) {
    throw new Error("Failed to update places");
  }

  const data = await res.json();

  return data.message;
}
