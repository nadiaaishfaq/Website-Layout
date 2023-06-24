import React from "react";
import "../styles/security.css";

function Security() {
  return (
    <>
    <div className="security">
      <div className="innerSecurityDiv">
      <div className="heading">
      <h1>Smartest protection for your site</h1>
      </div>
      <div className="flex-container">
        <div>
          <img src="images/smart-protect-1.jpg" />
          <h2>Anti-spam</h2>
          <p>Lorem ipsum dolor sit amet porro his no his deleniti</p>
        </div>
        <div>
          <img src="images/smart-protect-2.jpg" />
          <h2>Phishing Detect</h2>
          <p>Ne error antiopam usu. Sed vocen concludaturque ea</p>
        </div>
        <div>
          <img src="images/smart-protect-3.jpg" />
          <h2>Smart Scan</h2>
          <p>Et usu ocurreret elaboraret doctus prodesse assueverit.</p>
        </div>
      </div>
      </div>
      
      </div>
    </>
  );
}

export default Security;
