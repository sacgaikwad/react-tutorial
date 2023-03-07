import { useState } from "react";

function Dropdown({ options, handleOptionSelected, optionSelected }) {
  const [isOpen, setIsOpen] = useState(false);

  console.log(
    "Selected option  " + optionSelected?.value + optionSelected?.label
  );

  const handleClick = () => {
    console.log(isOpen);
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setIsOpen(false);
    handleOptionSelected(option);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div onClick={() => handleOptionClick(option)} key={option.value}>
        {option.label}
      </div>
    );
  });

  return (
    <div>
      <div onClick={handleClick}>{optionSelected?.label || "---select---"}</div>
      {isOpen && <div>{renderedOptions}</div>}
    </div>
  );
}
export default Dropdown;
