import React from "react";
import "../Pages/Home/Home.css";
import { Link } from "react-router-dom";
import Image from "../images/main_header.png";
import { useEffect } from "react";
import Aos from "aos";
const Header = () => {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4 data-aos="fade-up">#100DaysOfWorkOut</h4>
          <h1 data-aos="fade-up" data-aos-delay="100">
            Join The Legends Of The Fitness World
          </h1>
          <p data-aos="fade-up" data-aos-delay="200">
            Ayo bergabunglah bersama Round Gym untuk mendapatkan badan seperti
            Toji Fushiguro dan ayo hidup sehat bersama kami
          </p>
          <Link
            data-aos="fade-up"
            data-aos-delay="300"
            to="/plans"
            className="btn lg"
          >
            Get Started
          </Link>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-duration="1500"
          className="main__header-right"
        >
          <div className="main__header-circle"></div>
          <div className="main__header-img">
            <img src={Image} alt="main headerImage" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
