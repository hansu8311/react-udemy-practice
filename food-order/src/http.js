export async function fetchMeals() {
  const res = await fetch("http://localhost:3000/meals");
  const data = await res.json();

  //400,500
  if (!res.ok) {
    throw new Error("Failed to fetch places");
  }

  return data;
}
export async function postOrder(order) {
  const res = await fetch("http://localhost:3000/orders", {
    method: "POST",
    body: JSON.stringify({ order }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  //400,500
  if (!res.ok) {
    throw new Error("Failed to update orders");
  }

  const data = await res.json();

  return data.message;
}

export const imgBaseUrl = "http://localhost:3000/";
