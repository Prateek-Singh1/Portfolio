import React, { useState } from "react";
import "./Contact.css";
import { ContactInfo } from "../../constants";
import contactImage from "../../assets/images/contact-image.png";
import ScrollAnimation from "../../common/ScrollAnimation";

const Contact: React.FunctionComponent = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 3000);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <>
      <section id="Contact" className="contact-wrapper">
        <div className="contact-container">
          <ScrollAnimation>
            <div className="contact-content">
              <div className="contact-title">
                <span>Contact</span> information
              </div>
              <div className="contact-description">
                Feel free to use any of these channels to get in touch. I'm
                excited to connect with you!
              </div>
              <div className="contact-info-main">
                {ContactInfo.map((info, index) => {
                  return (
                    <div key={index} className="contact-info-contaier">
                      <div className="contact-info-svg">{info.svg}</div>
                      <div>
                        <div className="info-title">{info.title}</div>
                        <div className="info-email">
                          <div className="info-description">
                            {info.description}
                          </div>
                          {copiedIndex === index ? (
                            <img
                            src={info.iconThumb}
                            alt="Copy Icon"
                            onClick={() =>
                              handleCopy(info.description, index)
                            }
                            className="copy-icon"
                            title="Copy to clipboard"
                          />
                          ) : (
                            info.icon && (
                              <img
                                src={info.icon}
                                alt="Copy Icon"
                                onClick={() =>
                                  handleCopy(info.description, index)
                                }
                                className="copy-icon"
                                title="Copy to clipboard"
                              />
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="contact-image">
                <img src={contactImage} />
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </>
  );
};

export default Contact;
