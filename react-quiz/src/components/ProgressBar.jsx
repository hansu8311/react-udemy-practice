import { useEffect, useState } from "react";

const INTERVALTIME = 100;

export default function ProgressBar({ timeout, mode }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    const IntervalID = setInterval(() => {
      setRemainingTime((preState) => preState - INTERVALTIME);
    }, INTERVALTIME);

    return () => {
      clearInterval(IntervalID);
    };
  }, []);
  return (
    <progress
      id="question-time"
      className={mode}
      value={remainingTime}
      max={timeout}
    />
  );
}
