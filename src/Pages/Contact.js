import React, { Component } from "react";
import emailjs from "emailjs-com";
import { useAuth0 } from "@auth0/auth0-react";

function Contact() {

  const {loginWithRedirect, isAuthenticated} = useAuth0();

  function contactForm(e) {
    if(isAuthenticated){
      if (this.props.isLogged === true) {
        e.preventDefault();
        emailjs
          .sendForm(
            "service_uaxwktv",
            "template_zhmszrn",
            e.target,
            "QXKIOsJR522n30JF-"
          )
          .then(
            (result) => {
              console.log("Code: ", result, "Email Sent");
            },
            (error) => {
              console.log("Error while Sending email", error.text);
            }
          );
      } else {
        alert("User must be logged");
      }
    }else{
      alert("must be authenticated to perform operation")
      loginWithRedirect();
    }
  }
  return (
    <div>
      <h1 className="text-black md:text-3xl text-2xl flex justify-center md:m-3 m-8 align-center">
        Contact
      </h1>
      <form onSubmit={(e)=>contactForm(e)}>
        <div className="mx-5 mb-10 mt-2">
          <div className="fields">
            <div className="input-field">
              <label>Name</label>
              <input type="text" name="subject" hidden></input>
            </div>
            <div className="input-field">
              <label>Email</label>
              <input
                type="email"
                name="email"
                className="sm:mx-9 md:mx-9"
                placeholder="enter your email"
              ></input>
            </div>
            <div className="input-field">
              <label>Message</label>
              <input
                type="text"
                name="message"
                className="sm:mx-9 md:mx-9"
                placeholder="send sum love..."
              ></input>
            </div>
            <div className="flex justify-center align-center items-center">
              <button className="sendBtn">send</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Contact;
