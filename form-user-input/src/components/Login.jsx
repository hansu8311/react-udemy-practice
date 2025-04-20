import { useRef } from "react";

export default function Login() {
  const email = useRef();
  const password = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;

    console.log("values : ", enteredEmail, enteredPassword);

    //Dom 업데이트는 리액트에 맏겨야하므로 추천하지않는 초기화방법이다.
    email.current.value = "";
    password.current.value = "";
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" ref={email} />
        </div>
        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" ref={password} />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
