import { Link, useNavigate } from "react-router-dom";

import Modal from "../UI/Modal.jsx";
import EventForm from "./EventForm.jsx";
import { useMutation } from "../../../node_modules/@tanstack/react-query/src/useMutation";
import { createNewEvent } from "../../util/http.js";
import { useQueryClient } from "@tanstack/react-query";
import ErrorBlock from "../UI/ErrorBlock.jsx";

export default function NewEvent() {
  const qc = useQueryClient();
  const navigate = useNavigate();
  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: createNewEvent,
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["events"] });
      navigate("/events");
    },
  });

  function handleSubmit(formData) {
    mutate({ event: formData });
  }

  return (
    <Modal onClose={() => navigate("../")}>
      <EventForm onSubmit={handleSubmit}>
        {isPending && "submitting..."}
        {!isPending && (
          <>
            <Link to="../" className="button-text">
              Cancel
            </Link>
            <button type="submit" className="button" disabled={isPending}>
              Create
            </button>
          </>
        )}
      </EventForm>
      {isError && (
        <ErrorBlock
          title="Failed to create event "
          message={error.info?.message || "Fail!!!"}
        ></ErrorBlock>
      )}
    </Modal>
  );
}
