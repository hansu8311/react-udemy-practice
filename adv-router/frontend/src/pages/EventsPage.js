import { Link } from "react-router-dom";

function EventsPage() {
  return (
    <h1>
      EventsPage
      <Link to={"aa"}> aa link</Link>
      <Link to="new">new</Link>
    </h1>
  );
}

export default EventsPage;
