import { useState } from "react";
import Output from "./Output";

function Greeting() {
  const [chanageText, setChangeText] = useState(false);
  return (
    <div>
      <h2>Hello World!</h2>
      {chanageText ? (
        <Output>Changed!</Output>
      ) : (
        <Output>It's good to see you!</Output>
      )}
      <button
        onClick={() => {
          setChangeText(true);
        }}
      >
        Change Text!
      </button>
    </div>
  );
}

export default Greeting;
