import { useState } from "react";

export default function UserInput({ userInput, onChangeValue }) {
  

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initial_investment">INITAL INVESTMENT</label>
          <input
            type="number"
            id="inital_investment"
            name="initial_investment"
            value={userInput.initialInvestment}
            onChange={(event) =>
              onChangeValue("initialInvestment", event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="annual_investment">ANNUAL INVESTMENT</label>
          <input
            type="number"
            id="annual_investment"
            name="annual_investment"
            value={userInput.annualInvestment}
            onChange={(event) =>
              onChangeValue("annualInvestment", event.target.value)
            }
          />
        </p>
      </div>

      <div className="input-group">
        <p>
          <label htmlFor="expected_return">EXPECTED RETURN</label>
          <input
            type="number"
            id="expected_return"
            name="expected_return"
            value={userInput.expectedReturn}
            onChange={(event) =>
              onChangeValue("expectedReturn", event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="duration">DURATION</label>
          <input
            type="number"
            id="duration"
            name="duration"
            value={userInput.duration}
            onChange={(event) => onChangeValue("duration", event.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
