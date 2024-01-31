import React from "react";
import { MdEmail } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import MainHeader from "../../components/MainHeader";
import HeaderImage from "../../images/header_bg_2.jpg";
import "./Contact.css";
const Contact = () => {
  return (
    <div>
      <MainHeader title="Get in touch" image={HeaderImage}>
        Hubungi kontak dibawah jika anda ingin bergabung bersama kami
      </MainHeader>
      <section className="contact">
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a href="/" target="_blank" rel="noreferrer noopener">
              <MdEmail />
              <br />
              Email
            </a>
            <a href="/" target="_blank" rel="noreferrer noopener">
              <BsMessenger />
              <br />
              Messenger
            </a>
            <a href="/" target="_blank" rel="noreferrer noopener">
              <IoLogoWhatsapp />
              <br />
              Whatsapp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
