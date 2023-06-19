import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import bg from "./assets/radiant-gradient.svg";
import { ImOffice, ImMail } from "react-icons/im";
import { MdLocationOn, MdLocalPostOffice, MdPhone } from "react-icons/md";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

function Contact() {
  const [done, setDone] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_SERVICE_ID,
        process.env.REACT_APP_EMAIL_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAIL_PUBLIC_KEY
      )
      .then(
        (result) => {
          form.current.reset();
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div
      id="contacts"
      className="flex flex-col lg:flex-row border-t-[1px] border-neutral-900 justify-between text-white sm:mt-20 border-b"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "",
      }}
    >
      <div className="lg:w-1/2 bg-[#09080D] border-r-[1px] border-neutral-900 py-10 lg:py-20 px-6 sm:px-10 lg:px-24 order-2 lg:order-1 border-t-[1px] lg:border-t-0">
        <form className="flex flex-col gap-4 " ref={form} onSubmit={sendEmail}>
          <div className="flex flex-col gap-3 lg:w-3/4">
            <label className=" font-bold select-none">Name</label>
            <input
              type="text"
              required
              name="from_name"
              className="bg-black/80 border border-neutral-900  px-3 py-2 rounded-md"
            ></input>
          </div>
          <div className="flex flex-col gap-3 lg:w-3/4">
            <label className=" font-bold select-none">Email</label>
            <input
              type="email"
              required
              name="from_email"
              className="bg-black/80 border border-neutral-900  px-3 py-2 rounded-md"
            ></input>
          </div>
          <div className="flex flex-col gap-3 lg:w-3/4">
            <label className=" font-bold select-none">Phone number</label>
            <input
              type="text"
              required
              name="from_phone"
              className="bg-black/80 border border-neutral-900  px-3 py-2 rounded-md"
            ></input>
          </div>
          <div className="flex flex-col gap-3 lg:w-3/4">
            <label className=" font-bold select-none">Message</label>
            <textarea
              type="text"
              required
              name="message"
              className="bg-black/80 border border-neutral-900  px-3 py-2 rounded-md min-h-[100px]"
            ></textarea>
          </div>
          <button className="text-white bg-[#724FE5] font-Inter py-3 mt-5  font-bold text-[14px] rounded-[8px] max-w-[160px] hover:bg-[#4c3598] duration-300 self-sta28">
            Send message
          </button>
          {done && <h2 className="font-bold text-[#724FE5]">Message sent</h2>}
        </form>
      </div>
      <div className="lg:w-1/2 py-16 lg:py-20 px-6 sm:px-10 lg:px-24 lg:order-2">
        <div className="flex flex-col gap-8">
          <h1 className="text-3xl sm:text-4xl font-bold ">Get in Touch</h1>
          <p className="sm:text-lg text-grey">
            Do not hesitate to contact me using the provided contact details. I
            greatly welcome the opportunity to engage in meaningful discussions,
            explore potential collaborations, or address any inquiries you may
            have.
          </p>
          <div className="flex flex-col gap-5 mt-5">
            <div className="flex gap-3">
              <MdLocationOn style={{ fontSize: "28px" }}></MdLocationOn>
              <h2 className="text-grey">1114, Budapest - Hungary</h2>
            </div>
            <div className="flex gap-3">
              <MdLocalPostOffice
                style={{ fontSize: "28px" }}
              ></MdLocalPostOffice>
              <a
                href="mailto:lehoanghai9@gmail.com"
                className="text-grey hover:text-white duration-200 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                lehoanghai9@gmail.com
              </a>
            </div>

            <div className="flex gap-3">
              <MdPhone style={{ fontSize: "28px" }}></MdPhone>
              <a
                href="tel:+36308166388"
                className="text-grey hover:text-white duration-200 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                +36 30 816 6388
              </a>
            </div>

            <div className="flex gap-3">
              <AiFillGithub style={{ fontSize: "28px" }}></AiFillGithub>
              <a
                href="https://github.com/lehoanghai9"
                className="text-grey hover:text-white duration-200 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/lehoanghai9
              </a>
            </div>
            <div className="flex gap-3">
              <AiFillLinkedin style={{ fontSize: "28px" }}></AiFillLinkedin>
              <a
                href="https://www.linkedin.com/in/hai-le-hoang-50bb0b1ba/"
                className="text-grey hover:text-white duration-200 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/hai-le-hoang-50bb0b1ba/
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
