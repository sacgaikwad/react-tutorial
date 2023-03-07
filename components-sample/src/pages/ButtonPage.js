import Button from "../components/Button"
import { GoBell, GoAlert } from "react-icons/go";

function ButtonPage() {
  const handleClick = () => {
    console.log("clicked");
  };
  return (
    <div>
      app
      <div>
        <Button primary rounded className="mb-5" onClick={handleClick} >
          <GoBell />
          primary!
        </Button>
      </div>
      <div>
        <Button secondary>secondary!</Button>
      </div>
      <div>
        <Button danger>
          <GoAlert />
          danger!
        </Button>
      </div>
      <div>
        <Button warning>warning</Button>
      </div>
      <div>
        <Button success rounded>
          success
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
