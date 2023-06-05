import React, { forwardRef, useState, useEffect } from "react";
import emailjs from "emailjs-com";
import "../../style/right/contactsRight.css";
const ContactsRight = forwardRef((props, ref) => {
  const [emailText, setEmailText] = useState("korosiandris@gmail.com");
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

  return (
    <div ref={ref} id="contacts" className="contactsRight">
      <div className="contactsWrapper">
        <form onSubmit={sendEmail}>
          <div className="flexBoxContainer">
            <div className="antiFlexBox">
              <div className="field">
                <input
                  type="text"
                  className="form-control leftForm"
                  placeholder="Name"
                  name="name"
                  required
                />
              </div>
              <div className="field">
                <input
                  type="email"
                  className="form-control leftForm"
                  placeholder="Email Address"
                  name="email"
                  required
                />
              </div>
            </div>
            <div className="antiFlexBox">
              <div className="field">
                <input
                  type="text"
                  className="form-control rightForm"
                  placeholder="Subject"
                  name="subject"
                  required
                />
              </div>
              <div className="mailToContainer ">
                <div className="mailTo rightForm">mail to: korosiandris@gmail.com</div>
              </div>
            </div>
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

          <div className="send-button">
            <button type="submit" className="btn btn-info" onClick={(e) => handleClick(e)}>
              {buttonText}
            </button>
          </div>
        </form>

        <div className="contactSquare">
          <div className="tileWrapperRight">
            <div className="tileRight leftTopRight">
              <a
                href="https://www.linkedin.com/in/andr%C3%A1s-k%C5%91r%C3%B6si-535b27177/"
                target="_blank"></a>
              LinkedIn
            </div>
            <div className="tileRight rightTopRight">
              <a href="https://github.com/Drewcamper" target="_blank"></a>
              GitHub
            </div>
            <div className="tileRight emailRight leftBottomRight" onClick={handlePhoneClick}>
              {phoneNumber}
            </div>
            <a
              className="tileRight phoneRight rightBottomRight"
              href="mailto:korosiandris@gmail.com"
              target="_blank">
              {emailText}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
});

export default ContactsRight;
