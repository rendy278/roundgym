import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { useState, useEffect } from "react";
const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentYear(new Date().getFullYear());
    }, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <footer>
      <div className="container footer__container">
        <article>
          <Link to="/" className="logo">
            <h5>
              Round<span className="gym__logo">Gym</span>
            </h5>
          </Link>
          <p>
            Ayo bergabunglah bersama Round Gym untuk mendapatkan badan seperti
            Toji Fushiguro dan ayo hidup sehat bersama kami
          </p>
          <div className="footer__socials">
            <a href="/">
              <FaLinkedin />
            </a>
            <a href="/">
              <FaFacebook />
            </a>
            <a href="/">
              <AiFillInstagram />
            </a>
            <a href="/">
              <AiOutlineTwitter />
            </a>
          </div>
        </article>
        <article>
          <h4>PermaLink</h4>
          <Link to="./about">About</Link>
          <Link to="./plans">Plans</Link>
          <Link to="./trainers">Trainers</Link>
          <Link to="./gallery">Gallery</Link>
          <Link to="./contact">Contact</Link>
        </article>
        <article>
          <h4>PermaLink</h4>
          <Link to="./about">About</Link>
          <Link to="./plans">Plans</Link>
          <Link to="./trainers">Trainers</Link>
          <Link to="./gallery">Gallery</Link>
          <Link to="./contact">Contact</Link>
        </article>
        <article>
          <h4>PermaLink</h4>
          <Link to="./about">About</Link>
          <Link to="./plans">Plans</Link>
          <Link to="./trainers">Trainers</Link>
          <Link to="./gallery">Gallery</Link>
          <Link to="./contact">Contact</Link>
        </article>
      </div>
      <div className="footer__copyright">
        <small>{currentYear} RenDev &copy; All Rights Reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
