import React, { forwardRef, useState } from "react";
import emailjs from "emailjs-com";
import "../style/components.css";
import "../style/contacts.css";
const Contacts = forwardRef((props, ref) => {
  const [phoneNumber, setPhoneNumber] = useState("+36 20 368 8363");
  const handlePhoneClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const initialText = "Send Message";
  const [buttonText, setButtonText] = useState(initialText);

  function sendEmail(e) {
    e.preventDefault();

    const form = e.currentTarget.form;
    setButtonText("Sending...");

    emailjs.sendForm("service_pohvodv", "template_t8aoj8e", form, "uyknzUYEbp_nj_YhI").then(
      (result) => {
        if (result.text === "OK") {
          console.log(result.text);
          form.reset();
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

  function handleClick(e) {
    e.preventDefault();

    // Validate inputs
    const nameInput = e.target.form.elements.name.value.trim();
    const emailInput = e.target.form.elements.email.value.trim();
    const subjectInput = e.target.form.elements.subject.value.trim();
    const messageInput = e.target.form.elements.message.value.trim();

    if (!nameInput || !emailInput || !subjectInput || !messageInput) {
      alert("Please fill in all the required fields.");
      return;
    }
    if (!emailInput.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }
    sendEmail(e);
  }

  const ContactTiles = () => {
    return (
      <div className="contactTileWrapper">
        <div className="tile">
          <a
            href="https://www.linkedin.com/in/andr%C3%A1s-k%C5%91r%C3%B6si-535b27177/"
            target="_blank">
            LinkedIn
          </a>
        </div>
        <div className="tile">
          <a href="https://github.com/Drewcamper" target="_blank">
            GitHub
          </a>
        </div>
        <div className="tile">
          <div className="callMe" onClick={handlePhoneClick}>
            {phoneNumber}
          </div>
        </div>
        <div className="tile">
          <a className="callMe" href="mailto:korosiandris@gmail.com" target="_blank">
            korosiandris@gmail.com
          </a>
        </div>
      </div>
    );
  };

  const SendEmailForm = () => {
    return (
      <>
        <form onSubmit={sendEmail}>
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
        <div type="submit" className="sendEmailButton" onClick={(e) => handleClick(e)}>
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
        </div>{" "}
        <div className="emailWrapper">
          <SendEmailForm />
        </div>
      </div>
    </div>
  );
});

export default Contacts;
