import { useEffect, useState } from "react";

export default function ProgressBar({ timer }) {
  const [remainingTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    const IntervalID = setInterval(() => {
      setRemainingTime((preState) => preState - 10);
    }, 10);

    return () => {
      clearInterval(IntervalID);
    };
  }, []);
  return <progress value={remainingTime} max={timer} />;
}
