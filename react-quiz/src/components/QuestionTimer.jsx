import { useEffect } from "react";
import ProgressBar from "./ProgressBar";

function QuestionTimer({ timeout, onTimeOut, mode }) {
  useEffect(() => {
    const timerId = setTimeout(() => {
      onTimeOut(null);
    }, timeout);

    return () => {
      clearTimeout(timerId);
    };
  }, [timeout, onTimeOut]);
  return <ProgressBar timeout={timeout} mode={mode} />;
}

export default QuestionTimer;
