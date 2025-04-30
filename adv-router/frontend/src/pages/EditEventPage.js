import { useParams } from "react-router-dom";

function EditEventPage() {
  const params = useParams();
  return <h1>EditEventPage {params.eventId}</h1>;
}

export default EditEventPage;
