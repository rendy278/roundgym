import React from "react";
import Image from "../images/values.jpg";
import { GiCutDiamond } from "react-icons/gi";
import { values } from "../data";
import Card from "./Card";
import SectionHead from "./SectionHead";
const Values = () => {
  return (
    <section className="values">
      <div className="container values__container">
        <div className="values__left">
          <div className="values__image">
            <img src={Image} alt="value img" />
          </div>
        </div>
        <div className="values__right">
          <SectionHead icon={<GiCutDiamond />} title="Values"></SectionHead>
          <p>
            Ayo mulai berolahraga untuk menyehatkan badan agar terhindar dari
            segala berbagai macam penyakit
          </p>
          <div className="values__wrapper">
            {values.map(({ id, icon, title, desc }) => {
              return (
                <Card className="values__value" key={id}>
                  <span>{icon}</span>
                  <h4>{title}</h4>
                  <small>{desc}</small>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
