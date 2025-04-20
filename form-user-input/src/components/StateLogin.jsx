import Input from "./Input";
import { hasMinLength, isEmail, isNotEmpty } from "../util/validation";
import useInput from "../hooks/useInput";

export default function Login() {
  const { hasError: emailIsInvalid, ...restE } = useInput(
    "",
    (emai) => isEmail(emai) && isNotEmpty(emai)
  );
  const { hasError: passwordIsInvalid, ...restP } = useInput("", (password) =>
    hasMinLength(password, 6)
  );

  function handleSubmit(e) {
    //form 태그 안에 있는 버튼은 기본적으로 폼 양식을 제출하는 동작을 한다.
    //1. type="button"으로 설정(기본타입 submit)
    //2. 기본동작을 막는다. preventDefault=> 브라우저 기본동작을 막는다.
    //3. 리액트 19 이상 useForm
    e.preventDefault();

    console.log("values : ", { email: restE.value, password: restP.value });
    //setEnterValues({ email: "", password: "" });
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          error={emailIsInvalid ? "check email" : ""}
          {...restE}
        />
        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          error={passwordIsInvalid ? "check password" : ""}
          {...restP}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
