import "bulma/css/bulma.css";
import React from "react";
import ReactDOM from "react-dom/client";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

import ProfileCard from "./components/ProfileCard";

console.log(AlexaImage);
console.log(CortanaImage);
console.log(SiriImage);

function App() {
  return (
    <>
      <section class="hero is-primary">
        <div class="hero-body">
          <p class="title">Personal Digital Assistant</p>
        </div>
      </section>

      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard title="alexa" handle="@alexa" image={AlexaImage} />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="cortana"
                handle="@cortana"
                image={CortanaImage}
              />
            </div>
            <div className="column is-4">
              <ProfileCard title="siri" handle="@siri" image={SiriImage} />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
