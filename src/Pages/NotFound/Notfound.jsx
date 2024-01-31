import React from "react";
import { Link } from "react-router-dom";
import "./Notfound.css";
const Notfound = () => {
  return (
    <section>
      <div className="container notfound__container">
        <h2>Page Not Found</h2>
        <Link to="/" className="btn">
          Go Back Home
        </Link>
      </div>
    </section>
  );
};

export default Notfound;
