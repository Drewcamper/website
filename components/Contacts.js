import React, { forwardRef, useState, useRef } from "react";
import emailjs from "@emailjs/browser";

import "../style/components.css";
import "../style/contacts.css";

import linkedIn from "../images/logos/LI-In-Bug.png";
import github from "../images/logos/github-mark.png";

const Contacts = forwardRef(() => {
  const phoneNumber = "+36 20 368 8363";
  const initialText = "Send Message";
  const [buttonText, setButtonText] = useState(initialText);
  const form = useRef();

  const handlePhoneClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  function sendEmail(e) {
    e.preventDefault();

    setButtonText("Sending...");

    emailjs.sendForm("service_kp3khf9", "template_t8aoj8e", form.current, "uyknzUYEbp_nj_YhI").then(
      (result) => {
        if (result.text === "OK") {
          console.log(result.text);
          setButtonText("Message Sent, thank you");

          setTimeout(() => {
            setButtonText(initialText);
          }, 2000);
        } else {
          // Handle error case
          console.log(result.text);
          setButtonText(initialText);
        }
      },
      (error) => {
        console.log(error.text);
        setButtonText(initialText);
      }
    );
  }

  const ContactTiles = () => {
    return (
      <div className="contactTileWrapper">
        <div className="tile">
          <a
            className="callMe"
            href="https://www.linkedin.com/in/andr%C3%A1s-k%C5%91r%C3%B6si-535b27177/"
            target="_blank">
            LinkedIn
          </a>
          <div className="logo">
            <img className="logoImage" src={linkedIn} loading="lazy"></img>
          </div>
        </div>
        <div className="tile">
          <a className="callMe" href="https://github.com/Drewcamper" target="_blank">
            GitHub
          </a>
          <div className="logo">
            <img className="logoImage" src={github} loading="lazy"></img>
          </div>
        </div>
        <div className="tile">
          <div className="callMe" onClick={handlePhoneClick}>
            {phoneNumber}
          </div>
          <div className="logo">
            <div className="old-phone-logo">
              <div className="phone-body">
                <div className="speaker"></div>
              </div>
              <div className="phone-handle"></div>
            </div>
          </div>
        </div>
        <div className="tile">
          <a className="callMe" href="mailto:korosiandris@gmail.com" target="_blank">
            korosiandris@gmail.com
          </a>
          <div className="logo">
            <div className="email-logo">
              <div className="envelope">
                <div className="top"></div>
                <div className="body">
                  <div className="line"></div>
                  <div className="line"></div>
                  <div className="line"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const SendEmailForm = () => {
    return (
      <>
        <form ref={form}>
          <div className="field">
            <input type="text" className="form-control" placeholder="Name" name="name" required />
          </div>
          <div className="field">
            <input
              type="email"
              className="form-control"
              placeholder="Email Address"
              name="email"
              required
            />
          </div>

          <div className="field">
            <input
              type="text"
              className="form-control "
              placeholder="Subject"
              name="subject"
              required
            />
          </div>

          <div className="messageContainer">
            <textarea
              className="message-form"
              cols="30"
              rows="8"
              placeholder="Your message"
              name="message"
              required></textarea>
          </div>
        </form>
        <div type="submit" className="sendEmailButton" onClick={(e) => sendEmail(e)}>
          {buttonText}
        </div>
      </>
    );
  };

  return (
    <div className="componentWrapper">
      <div className="contactWrapper">
        <div className="linkWrapper">
          <ContactTiles />
        </div>
        <div className="emailWrapper">
          <SendEmailForm />
        </div>
      </div>
    </div>
  );
});

export default Contacts;
