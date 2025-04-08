import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import UserInputWrap from "./components/UserInputWrap";
import Result from "./components/Result";
const INPUT_LABELS = [
  "initialInvestment",
  "annualInvestment",
  "expectedReturn",
  "duration",
];
function App() {
  const [data, setData] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function onChangeData(label, newVal) {
    console.log(label, newVal);
    setData((preState) => ({
      ...preState,
      [label]: newVal || 0,
    }));
  }
  const isValid = data.duration > 0;
  return (
    <>
      <Header>Investment Calculator</Header>
      <UserInputWrap>
        {INPUT_LABELS.map((label) => {
          return (
            <UserInput
              key={label}
              value={data[label]}
              onChange={onChangeData}
              label={label}
            />
          );
        })}
      </UserInputWrap>
      {isValid ? (
        <Result {...data}></Result>
      ) : (
        <p className="center">invalid data</p>
      )}
    </>
  );
}

export default App;
