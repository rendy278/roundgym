import React from "react";
import MainHeader from "../../components/MainHeader";
import HeaderImage from "../../images/header_bg_4.jpg";
import Card from "../../components/Card";
import { plans } from "../../data";
import "./Plans.css";
const Plans = () => {
  return (
    <div>
      <MainHeader title="Membership Plans" image={HeaderImage}>
        Berikut adalah harga membership di gym kami
      </MainHeader>
      <section className="plans">
        <div className="container plans__container">
          {plans.map(({ id, name, desc, price, features }) => {
            return (
              <Card key={id} className="plans">
                <h3>{name}</h3>
                <small>{desc}</small>
                <h1>{`${price}`}</h1>
                <h2>/mo</h2>
                <h4>Features</h4>
                {features.map(({ feature, available }, index) => {
                  return (
                    <p key={index} className={!available ? "disable" : ""}>
                      {feature}
                    </p>
                  );
                })}
                <button className="btn lg">Choose Plan</button>
              </Card>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Plans;
