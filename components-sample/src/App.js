import { useState } from "react";
import Dropdown from "./components/Dropdown";

function App() {
  const options = [
    {
      label: "Red",
      value: "red",
    },
    {
      label: "Green",
      value: "green",
    },
    {
      label: "Blue",
      value: "blue",
    },
  ];

  const [selectedOption, setSelectedOption] = useState("");

  const optionSelected = (option) => {
    setSelectedOption(option);
    console.log("App component: " + selectedOption.value);
  };

  return (
    <div>
      <Dropdown options={options} handleOptionSelected={optionSelected} />
    </div>
  );
}

export default App;
