import Accordion from "./components/Accordion";

function App() {


  const items = [
    {
      id:'react',
      label:'can I use react on a project',
      content:'You can use rect on any project'
    },
    {
      id:'javascript',
      label:'can I use Javascript',
      content:'You can use javascript on any project'
    },
    {
      id:'css',
      label:'can I use css on a project',
      content:'You can use css on any project'
    }
  ]

  return  <Accordion items={items}/>
}

export default App;
