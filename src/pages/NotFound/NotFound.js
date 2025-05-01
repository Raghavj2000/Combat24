import React from "react";
import "./NotFound.css";
import notFound from "../../assets/404Error.png";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section id="notfound">
      <img src={notFound} alt="" />
      <h1 className="Anton">Page Not Found</h1>
      <Link to="/">
        <button className="Anton">Back to Home</button>
      </Link>
    </section>
  );
};

export default NotFound;
