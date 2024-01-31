import React from "react";
import MainHeader from "../../components/MainHeader";
import HeaderImage from "../../images/header_bg_1.jpg";
import StoryImage from "../../images/about1.jpg";
import VisionImage from "../../images/about2.jpg";
import MissionImage from "../../images/about3.jpg";
import "./About.css";
const About = () => {
  return (
    <div>
      <MainHeader title="About Us" image={HeaderImage}>
        Tingkatkan masa otot mu bersama kami dan hidup sehat bersama kami
      </MainHeader>
      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="Our Story imagess" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
              Round Gym telah berdiri dari tahun 1998 Round gym didirikan oleh
              bapak ambatukam yang menguasai seluruh daratan ngawi. jika anda
              berminat untuk masuk ke Round gym ayo bergabung sekarang dibimbing
              langsung oleh pelatih fuad sebastian
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
              maxime amet exercitationem dolorum unde sequi, iste pariatur illo
              sed. Provident atque esse iusto! Voluptates est neque eum tempore
              eos animi.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
              enim fuga nesciunt eos itaque autem temporibus blanditiis impedit
              tenetur corporis magnam vel fugit, velit fugiat dolorum, quod
              consequatur vitae quo!
            </p>
          </div>
        </div>
      </section>
      <section className="about__vision">
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
              Visi dari Round Gym sendiri adalah membuat setiap tubuh seseorang
              memiliki badan seperti toji fushiguro maupun maki zenin, jadi jika
              anda ingin mempunyai badan seperti anime maka tepat sekali bagi
              anda untuk join round gym
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ab
              quos iste non, sapiente quisquam assumenda facilis rerum nisi
              consequuntur temporibus aliquam, voluptas dignissimos nesciunt
              possimus soluta exercitationem tempora illo.
            </p>
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="Our Vision imagess" />
          </div>
        </div>
      </section>

      <section className="about__mission">
        <div className="container about__mision-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="Our mision imagess" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
              Round Gym telah berdiri dari tahun 1998 Round gym didirikan oleh
              bapak ambatukam yang menguasai seluruh daratan ngawi. jika anda
              berminat untuk masuk ke Round gym ayo bergabung sekarang dibimbing
              langsung oleh pelatih fuad sebastian
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              provident quam ut, unde assumenda aliquid corporis eius similique
              ullam eos magnam in beatae, hic deleniti aspernatur alias
              consequatur, iste aut.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
