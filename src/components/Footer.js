import { useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const [emailModal, setEmailModal] = useState(false);

  function copyEmail() {
    navigator.clipboard.writeText("mattericksen93@gmail.com");
    setEmailModal(true);
    setTimeout(() => {
      setEmailModal(false);
    }, 2000);
  }

  return (
    <>
      <div className={`email-modal${emailModal ? " email-modal-show" : ""}`}>
        E-mail copied!
      </div>
      <div className="footer">
        <a href="https://github.com/mattie43" rel="noreferrer" target="_blank">
          <FaGithub
            className="footer-icon"
            size="40"
            style={{ backgroundColor: "#4f545a" }}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/matt-ericksen/"
          rel="noreferrer"
          target="_blank"
        >
          <FaLinkedin
            className="footer-icon"
            size="40"
            style={{ backgroundColor: "#2d72ba" }}
          />
        </a>
        <a
          href="https://twitter.com/MattEricksen13"
          rel="noreferrer"
          target="_blank"
        >
          <FaTwitter
            className="footer-icon"
            size="40"
            style={{ backgroundColor: "#5090fe" }}
          />
        </a>
        <div id="email" onClick={copyEmail}>
          <FaEnvelope
            className="footer-icon"
            size="40"
            style={{ backgroundColor: "#d92121" }}
          />
        </div>
      </div>
    </>
  );
}
