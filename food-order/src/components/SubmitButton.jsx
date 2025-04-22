import { useFormStatus } from "react-dom";

function SubmitButton({ children, pendingTxt = "Submitting..." }) {
  const { pending } = useFormStatus();
  return (
    <button className="button" disabled={pending}>
      {pending ? pendingTxt : children}
    </button>
  );
}

export default SubmitButton;
