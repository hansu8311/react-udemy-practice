import { Link, useParams } from "react-router-dom";

function EventDetailPage() {
  const params = useParams();
  return (
    <h1>
      EventDetailPage {params.eventId}
      <Link to="edit">edit</Link>
    </h1>
  );
}

export default EventDetailPage;
