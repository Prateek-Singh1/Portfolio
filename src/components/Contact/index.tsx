import React, { useState, useRef } from "react";
import "./Contact.css";
import { ContactInfo } from "../../constants";
import ScrollAnimation from "../../common/ScrollAnimation";
import AnimatedButton from "../../common/Button/AnimatedButton";
import emailjs from "@emailjs/browser";

const Contact: React.FunctionComponent = () => {
  const form = useRef<HTMLFormElement>(null);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current?.reset();
        },
        (error) => {
          console.log("Failed to send message: " + error.text);
        }
      );
  };

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
        <div className="contact-container bg-white md:border-2 md:border-[#F2F2F2] md:dark:border-0 dark:bg-[#131313] md:dark:outline-offset-4 md:dark:outline md:dark:outline-[#383737]">
          <ScrollAnimation>
            <div className="contact-content">
              <div className="contact-title text-[#132238] dark:text-white">
                Get in<span> Touch </span>
              </div>
              <div className="contact-description text-[#87909d] dark:text-white">
                Feel free to use any of these channels to get in touch. I'm
                excited to connect with you!
              </div>
              <div className="flex flex-col md:flex-row gap-15">
                <div className="flex-1 justify-center contact-info-main">
                  {ContactInfo.map((info, index) => {
                    return (
                      <div
                        key={index}
                        className={`w-fit flex items-center justify-center p-[12px] md:p-[24px] gap-[15px] rounded-[10px] ${
                          index === 1
                            ? "dark:border-1 border-1 shadow-md bg-white border-[#f2f2f2] dark:border-[#383737] dark:bg-[#383737]"
                            : ""
                        }`}
                      >
                        <div className="contact-info-svg">{info.svg}</div>
                        <div>
                          <div className="info-title  dark:text-[#808080]">
                            {info.title}
                          </div>
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
                <div className="w-full flex-1">
                  <form ref={form} onSubmit={sendEmail} className="w-full mb-[70px] md:mb-0">
                    <div className="mb-5 flex flex-col gap-[20px]">
                      <input
                        name="name"
                        type="text"
                        id="text"
                        className="shadow-xs bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 dark:bg-[#0D0D0D] dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:shadow-xs-light"
                        placeholder="name"
                        required
                      />
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="shadow-xs bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 dark:bg-[#0D0D0D] dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:shadow-xs-light"
                        placeholder="email@example.com"
                        required
                      />
                      <textarea
                        name="message"
                        id="message"
                        rows={4}
                        className="mb-[20px] resize-none block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg focus:ring-blue-500 dark:bg-[#0D0D0D] dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500"
                        placeholder="Leave a message..."
                      />
                    </div>
                    <AnimatedButton
                      text={"Send"}
                      angle="180"
                      onClick={() => form.current?.requestSubmit()}
                    />
                  </form>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </>
  );
};

export default Contact;
