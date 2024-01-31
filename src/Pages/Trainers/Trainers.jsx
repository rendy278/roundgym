import React from "react";
import MainHeader from "../../components/MainHeader";
import HeaderImage from "../../images/header_bg_5.jpg";
import { trainers } from "../../data";
import Trainer from "../../components/Trainer";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import "./Trainers.css";
const Trainers = () => {
  return (
    <div>
      <MainHeader title="Our Trainers" image={HeaderImage}>
        berikut adalah para pelatih kami yang sangat profesional
      </MainHeader>
      <section className="trainers">
        <div className="container trainers__container">
          {trainers.map(({ id, image, name, job, socials }) => {
            return (
              <Trainer
                key={id}
                image={image}
                name={name}
                job={job}
                socials={[
                  {
                    icon: <BsInstagram />,
                    link: socials[0],
                  },
                  {
                    icon: <AiOutlineTwitter />,
                    link: socials[1],
                  },
                  {
                    icon: <FaFacebookF />,
                    link: socials[2],
                  },
                  {
                    icon: <FaLinkedin />,
                    link: socials[3],
                  },
                ]}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Trainers;
