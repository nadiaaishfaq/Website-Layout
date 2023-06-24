import React from "react";
import "../styles/contact.css";

function Contact() {
  return (
    <>
      <div className="flex-container-contact">
        <div className="innerContactDiv">
          <div className="contact">
            <h1>Contact Us</h1>
            <span>
              Te iisque labitur eos, nec sale argumentum scribentur, <br/>augue
              disputando in vim. Erat fugit sit at, ius lorem.
            </span>
            <div className="info">
              <div className="infoSpan">Email : company_email@com</div>
              <div className="infoSpan">Phone : 361-688-5824</div>
              <div className="infoSpan">
                Address : 4826 White Avenue, Corpus Christi, Texas
              </div>
            </div>
          </div>

          <div className="formclass">
            <form>
              <div className="column">
                <div className="inputsFields">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" size={27}/>
                </div>
                <div className="inputsFields">
                  <label htmlFor="email">Your Email</label>
                  <input type="email" size={27}/>
                </div>
              </div>

              <div className="message">
                <div className="inputsTextarea">
                  <label htmlFor="message">Message</label>
                  <textarea typeof="text"></textarea>
                </div>
              </div>

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
