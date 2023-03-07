import Accordion from "../components/Accordion";
import Dropdown from "./components/Dropdown";

function AccordionPage() {
  const items = [
    {
      id: "react",
      label: "can I use react on a project",
      content: "You can use rect on any project",
    },
    {
      id: "javascript",
      label: "can I use Javascript",
      content: "You can use javascript on any project",
    },
    {
      id: "css",
      label: "can I use css on a project",
      content: "You can use css on any project",
    },
  ];

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

  return (
    <div>
      <Accordion items={items} />
      <Dropdown options={options} />
    </div>
  );
}

export default AccordionPage;
