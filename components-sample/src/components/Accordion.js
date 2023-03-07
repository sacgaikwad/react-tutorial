import { useState } from "react";
import { GoTriangleDown, GoTriangleLeft } from "react-icons/go";

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleClick = (index) => {
    setExpandedIndex(index);
  };

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    // return (
    //   <div key={item.id}>
    //     <div onClick={handleClick}>{item.label}</div>
    //     {isExpanded && <div>{item.content}</div>}
    //   </div>
    // );

    const icon = (
      <span>{isExpanded ? <GoTriangleDown /> : <GoTriangleLeft />}</span>
    );

    return (
      <div key={item.id}>
        <div className="flex p-3 bg-gray-50 items-center cursor-pointer" onClick={() => handleClick(index)}>
           {item.label} {icon}
        </div>
        {isExpanded && <div className="border-b p-5">{item.content}</div>}
      </div>
    );
  });

  return <div>{renderedItems}</div>;
}

export default Accordion;
