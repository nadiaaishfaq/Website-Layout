import React from "react";
import "../styles/display.css";

function Display() {
  return (
    <>
      <div className="main">
        <div className="innerdiv">
          <div className="flex-container-display">
            <div className="innerFlex"><img src="images/logo.png" /></div>
            <div className="innerFlex"><a>Get Early Access</a></div>
          </div>
          <div className="displayInfo">
            <h1>A New Way<br/>
To Start Business</h1>
            <p>
              Lorem ipsum dolor sit amet, id nec enim autem oblique, ei dico
              mentitum duo.
              <br />
              Illum iusto laoreet his te. Lorem partiendo mel ex. Ad vitae
              admodum voluptatum per.
            </p>
            <button>Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Display;

//https://start-business.netlify.app/
