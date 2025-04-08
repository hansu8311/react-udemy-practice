import { useRef, useState } from "react";

export default function Player() {
  const playerName = useRef(""); //자바스크립트객체이며 항상참조값을 가지고있음.
  const [enName, setEnName] = useState(false);

  function handleClcick() {
    setEnName(playerName.current.value);
    playerName.current.value = "";
  }
  return (
    <section id="player">
      <h2>Welcome {enName ?? "unknown name"}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClcick}>Set Name</button>
      </p>
    </section>
  );
}
