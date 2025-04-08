import React, { useState } from "react";

function TimerChallenge({ title, targetTime }) {
  const [started, setStarted] = useState(false);
  const [expired, setExpired] = useState(false);
  const timerRef = useRef(null);
  function handleStart(intargetTime) {
    timerRef.current = setTimeout(() => {
      setExpired(true);
    }, intargetTime * 1000);

    setStarted(true);
  }
  function handleStop() {
    clearTimeout(timerRef.current);
    setStarted(false);
  }

  return (
    <section className="challenge">
      <h2>{title}</h2>
      {expired && <p>you lost!</p>}
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button
          onClick={started ? () => handleStart(targetTime) : () => handleStop()}
        >
          {started ? "stop" : "start"} Challenge
        </button>
      </p>
      <p className={started ? "active" : undefined}>
        {started ? "running" : "inactive"}
      </p>
    </section>
  );
}

export default TimerChallenge;
