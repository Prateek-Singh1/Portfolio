import React, { useState } from "react";
import "./Contact.css";
import { ContactInfo } from "../../constants";
import contactImage from "../../assets/images/contact-image3.png";
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
        <div className="contact-container bg-white border-2 border-[#F2F2F2] dark:border-0 dark:bg-[#131313] dark:outline-offset-4 dark:outline dark:outline-[#383737]">
          <ScrollAnimation>
            <div className="contact-content">
              <div className="contact-title text-[#132238] dark:text-white">
              Get in<span> Touch </span>
              </div>
              <div className="contact-description text-[#87909d] dark:text-white">
                Feel free to use any of these channels to get in touch. I'm
                excited to connect with you!
              </div>
              <div className="contact-info-main">
                {ContactInfo.map((info, index) => {
                  return (
                    <div key={index} className={`w-fit flex items-center justify-center p-[12px] md:p-[24px] gap-[15px] rounded-[10px] ${index === 1 ? 'dark:border-1 border-1 shadow-md bg-white border-[#f2f2f2] dark:border-[#383737] dark:bg-[#383737]' : ''}`}>
                      <div className="contact-info-svg">{info.svg}</div>
                      <div>
                        <div className="info-title  dark:text-[#808080]">{info.title}</div>
                        <div className="info-email">
                          <div className="info-description dark:text-[#C5C5C5]">
                            {info.description}
                          </div>
                          {copiedIndex === index ? (
                            <img
                            loading="lazy"
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
                                loading="lazy"
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
              <div className="contact-image dark:hidden">
                <img loading="lazy" src={contactImage} alt="Contact Image"/>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </>
  );
};

export default Contact;
