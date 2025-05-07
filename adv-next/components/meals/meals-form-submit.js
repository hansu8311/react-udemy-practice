"use client";
import { useFormStatus } from "react-dom";

function MealsFormSubmit({ btnTxt }) {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending}>
      {pending ? "submitting..." : btnTxt}
    </button>
  );
}

export default MealsFormSubmit;
