import { useState } from "react";

function Greeting() {
  const [chanageText, setChangeText] = useState(false);
  return (
    <div>
      <h2>Hello World!</h2>
      {chanageText ? <p>Changed!</p> : <p>It's good to see you!</p>}
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
