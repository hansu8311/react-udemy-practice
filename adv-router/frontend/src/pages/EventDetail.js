import {
  data,
  redirect,
  useLoaderData,
  useRouteLoaderData,
} from "react-router-dom";
import EventItem from "../components/EventItem";

function EventDetailPage() {
  const data = useRouteLoaderData("event-detail");
  console.log(data);
  const event = data.event;
  return <EventItem event={event} />;
}

export default EventDetailPage;

export async function loader({ request, params }) {
  console.log(params);
  const id = params.eventId;

  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok) {
    throw data({ message: "Could not fetch detail" }, { status: 500 });
  } else {
    return response;
  }
}

export async function action({ request, params }) {
  const id = params.eventId;

  const response = await fetch("http://localhost:8080/events/" + id, {
    method: request.method,
  });

  if (!response.ok) {
    throw data({ message: "Could not delete event" }, { status: 500 });
  }
  return redirect("..");
}
