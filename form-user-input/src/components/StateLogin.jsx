import { useState } from "react";

export default function Login() {
  //const [enterEmail, setEnterEmail] = useState("");
  //const [enterPassword, setEnterPassword] = useState("");
  const [enterValues, setEnterValues] = useState({ email: "", password: "" });
  const [didEdit, setDidEdit] = useState({ email: false, password: false });

  const emailIsInvalid = didEdit.email && !enterValues.email.includes("@");

  function handleSubmit(e) {
    //form 태그 안에 있는 버튼은 기본적으로 폼 양식을 제출하는 동작을 한다.
    //1. type="button"으로 설정(기본타입 submit)
    //2. 기본동작을 막는다. preventDefault=> 브라우저 기본동작을 막는다.
    //3. 리액트 19 이상 useForm
    e.preventDefault();

    console.log("values : ", enterValues);
    setEnterValues({ email: "", password: "" });
  }

  // function handleEmailChange(e) {
  //   setEnterEmail(e.target.value);
  // }

  // function handlePasswordChange(e) {
  //   setEnterPassword(e.target.value);
  // }
  function handleInputChange(e) {
    setEnterValues((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
    setDidEdit((prevState) => ({
      ...prevState,
      [e.target.id]: false,
    }));
  }

  function handleBlur(e) {
    setDidEdit((prevState) => ({
      ...prevState,
      [e.target.id]: true,
    }));
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onBlur={handleBlur}
            onChange={handleInputChange}
            value={enterValues.email}
          />
          {emailIsInvalid && (
            <div className="control-error">
              <p>Please enter Email</p>
            </div>
          )}
        </div>
        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onBlur={handleBlur}
            onChange={handleInputChange}
            value={enterValues.password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
