import { useLoaderData, data, defer, Await } from "react-router-dom";
import EventsList from "../components/EventsList";
import { Suspense } from "react";

async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
    //return { isError: true, message: "Could not fetch events" };
    //throw new Response(
    //  JSON.stringify({ messßße: "Could not fetch events" }, { status: 500 })
    //);
    throw data({ message: "Could not fetch events" }, { status: 500 });
  } else {
    const resData = await response.json();
    return resData.events;
  }
}

function EventsPage() {
  const { events } = useLoaderData();

  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>....loading</p>}>
      <Await resolve={events}>
        {(loadEvents) => <EventsList events={loadEvents} />}
      </Await>
    </Suspense>
  );
}

export default EventsPage;

export async function loader() {
  return defer({
    events: loadEvents(),
  });
}
