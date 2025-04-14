import { useEffect } from "react";
import ProgressBar from "./ProgressBar";

function QuestionTimer({ index, timeout, onTimeOut }) {
  useEffect(() => {
    const timerId = setTimeout(() => {
      onTimeOut(null);
    }, timeout);

    return () => {
      clearTimeout(timerId);
    };
  }, [timeout, onTimeOut]);
  return <ProgressBar index={index} timeout={timeout} />;
}

export default QuestionTimer;
