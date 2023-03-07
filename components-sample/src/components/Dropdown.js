import { useState } from "react";

function Dropdown({ options,handleOptionSelected }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    console.log("option selected   : " + option.value);
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
      <div onClick={handleClick}>---Select---</div>
      {isOpen && <div>{renderedOptions}</div>}
    </div>
  );
}
export default Dropdown;
