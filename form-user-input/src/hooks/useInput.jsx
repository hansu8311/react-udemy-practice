import { useState } from "react";

export default function useInput(defaultValue, validFn) {
  const [enterValue, setEnterValue] = useState(defaultValue);
  const [didEdit, setDidEdit] = useState(false);

  const vakueIsValid = validFn(enterValue);

  function handleInputChange(e) {
    setEnterValue(e.target.value);
    setDidEdit(false);
  }

  function handleBlur(e) {
    setDidEdit(true);
  }

  return {
    value: enterValue,
    onChange: handleInputChange,
    onBlur: handleBlur,
    hasError: didEdit && !vakueIsValid,
  };
}
