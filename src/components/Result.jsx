import { useState } from "react";
import { calculateInvestmentResults,formatter } from "../util/investment.js";
export default function Result({ userInput }) {
  const annualData = calculateInvestmentResults(userInput);
  const initialInvestment =
    annualData[0].valueEndOfYear -
    annualData[0].interest -
    annualData[0].annualInvestment;
  console.log(annualData);
  return (
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {annualData.map((data) => {
            const totalInterest =
              data.valueEndOfYear -
              data.year * data.annualInvestment -
              initialInvestment;

            const totalInvestedAmout = data.valueEndOfYear - totalInterest
            return (
              <tr>
                <td>{data.year}</td>
                <td>{formatter.format(data.valueEndOfYear)}</td>
                <td>{formatter.format(data.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(totalInvestedAmout)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
  );
}
