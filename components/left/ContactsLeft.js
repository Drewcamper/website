import React, { useState } from "react";
import "../../style/left/contactsLeft.css";
function ContactsLeft() {
  const [emailText, setEmailText] = useState("Email");
  const [phoneText, setPhoneText] = useState("Phone");
  const handlePhoneClick = () => {
    const phoneNumber = "+36 20 368 8363"; // Replace with the desired phone number
    window.location.href = `tel:${phoneNumber}`;
  };
  return (
    <div className="contactsLeft">
      <div className="tileWrapper">
        <div className="tile leftTop">
          <a
            href="https://www.linkedin.com/in/andr%C3%A1s-k%C5%91r%C3%B6si-535b27177/"
            target="_blank"></a>
          LinkedIn
        </div>
        <div className="tile rightTop">
          <a href="https://github.com/Drewcamper" target="_blank"></a>
          GitHub
        </div>
        <div
          className="tile email leftBottom"
          onClick={handlePhoneClick}
          onMouseEnter={() => setPhoneText("+36 20 368 8363")}
          onMouseLeave={() => setPhoneText("Phone")}>
          {phoneText}
        </div>
        <a
          className="tile phone rightBottom"
          href="mailto:korosiandris@gmail.com"
          target="_blank"
          onMouseEnter={() => setEmailText("korosiandris @ gmail.com")}
          onMouseLeave={() => setEmailText("Email")}>
          {emailText}
        </a>
      </div>
    </div>
  );
}

export default ContactsLeft;
