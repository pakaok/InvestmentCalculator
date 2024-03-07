import Header from "./components/Header.jsx";
import Result from "./components/Result.jsx";
import UserInput from "./components/UserInput.jsx";
import { useState } from "react";
function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 500,
    annualInvestment: 6000,
    expectedReturn: 6,
    duration: 10,
  });
  const inputValid = userInput.duration > 0

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevInput) => {
      const updatedInput = { ...prevInput, [inputIdentifier]: +newValue };
      return updatedInput;
    });
  }
  
  return (
    <>
      <Header />
      <UserInput onChangeValue={handleChange} userInput={userInput}/>
      {!inputValid && <p className="center">Duration must be greater than 0</p>}
      {inputValid && <Result userInput={userInput}/>}
    </>
  );
}

export default App;
