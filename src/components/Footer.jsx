import React from "react";
import "../styles/footer.css";
function Footer() {
  return (
    <>
      <div className="flex-container-footer">
        <div className="innerContainer">
          <div>
            <h6>
              Copyright <i class="fa fa-copyright" aria-hidden="true"></i> 2018
              Chen, Yi-Ya.
            </h6>
          </div>
          <div className="icons">
            <div className="iconsList">
              <i class="fa fa-facebook" aria-hidden="true"></i>
            </div>
            <div className="iconsList">
              <i class="fa fa-twitter" aria-hidden="true"></i>
            </div>
            <div className="iconsList">
              <i class="fa fa-linkedin" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
