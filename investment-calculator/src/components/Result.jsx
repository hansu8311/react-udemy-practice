import React from "react";
import { calculateInvestmentResults, formatter } from "../util/investment";

function Result({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
}) {
  const results = calculateInvestmentResults({
    initialInvestment,
    annualInvestment,
    expectedReturn,
    duration,
  });
  let sum = 0;
  console.log(results);
  return (
    <>
      <table id="result">
        <colgroup>
          <col />
          <col />
        </colgroup>
        <thead>
          <tr>
            <th>Year</th>
            <th>interest value</th>
            <th>interest(value)</th>
            <th>Total interest</th>
            <th>interest copital</th>
          </tr>
        </thead>
        <tbody>
          {results.length == 0 ? (
            <tr>
              <td colSpan={5} className="center">
                no data
              </td>
            </tr>
          ) : (
            results.map((item) => {
              sum += item.interest;
              return (
                <tr key={item.year}>
                  <td>{item.year}</td>
                  <td>{formatter.format(item.valueEndOfYear)}</td>
                  <td>{formatter.format(item.interest)}</td>
                  <td>{formatter.format(sum)}</td>
                  <td>{formatter.format(item.valueEndOfYear - sum)}</td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </>
  );
}

export default Result;
