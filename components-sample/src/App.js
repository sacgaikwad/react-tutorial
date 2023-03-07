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

  const [selectedOption, setSelectedOption] = useState(null);

  const optionSelected = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <Dropdown
        options={options}
        handleOptionSelected={optionSelected}
        optionSelected={selectedOption}
      />
    </div>
  );
}

export default App;
