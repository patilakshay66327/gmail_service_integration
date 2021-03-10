import React from "react";
import emailjs from "emailjs-com";
import "./App.css";

const App = () => {
  const {
    REACT_APP_EMAIL_SERVICE_USER_ID,
    REACT_APP_EMAIL_SERVICE_TEMPLATE_ID,
    REACT_APP_EMAIL_SERVICE_SERVICE_ID,
  } = process.env;

  console.log("sdkajfhkljd : ", REACT_APP_EMAIL_SERVICE_USER_ID);

  const sendMail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        REACT_APP_EMAIL_SERVICE_SERVICE_ID,
        REACT_APP_EMAIL_SERVICE_TEMPLATE_ID,
        e.target,
        REACT_APP_EMAIL_SERVICE_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="App container">
      <form onSubmit={sendMail}>
        <div className="row" style={{ padding: "50px", marginTop: "10%" }}>
          <div className="col-2"></div>
          <div className="col-7">
          <h2>Send Mail for Enquiry</h2>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Name"
                name="name"
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="email"
                placeholder="Email Address"
                name="email"
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Subject"
                name="subject"
              />
            </div>
            <div className="form-group">
              <textarea
                className="form-control"
                rows="8"
                type="text"
                placeholder="Your Message"
                name="message"
              />
            </div>
            <div className="form-group">
              <input className="btn btn-primary" type="submit" value="Send Mail" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default App;
