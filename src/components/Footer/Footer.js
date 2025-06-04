import React from "react";
import "./Footer.css";
import baseImg from "../../assets/baseImg.webp";
import { Link } from "react-router-dom";
import footer1 from "../../assets/footer.webp";
import footer2 from "../../assets/footer 2.webp";
import footer3 from "../../assets/footer 3.webp";
import footer4 from "../../assets/footer 4.webp";
import foote5 from "../../assets/footer 5.webp";

const Footer = () => {
  const gridImages = [
    {
      id: 1,
      image: baseImg,
    },
    {
      id: 2,
      image: footer2,
    },
    {
      id: 3,
      image: footer3,
    },
    {
      id: 4,
      image: footer4,
    },
    {
      id: 5,
      image: foote5,
    },
    {
      id: 6,
      image: footer1,
    },
  ];
  return (
    <footer>
      <div className="location_container">
        <h3 className="Anton location_header">BENGALURU</h3>
        <p className="nue">
          No.28, 3rd Floor,
          <br /> Anjanadri Arcade, 1st Main,
          <br /> CBI Road, Ganganagar, Bengaluru-560032
        </p>
      </div>
      <div className="footer_image_container">
        {gridImages.map((image) => (
          <div key={image.id} className="footer_image">
            <img src={image.image} alt="" />
          </div>
        ))}
      </div>
      <div style={{ width: "90%", height: "1px", background: "white" }}></div>
      <div className="copyright_container">
        <div className="contact_container">
          <h3 className="Anton">CONTACT US</h3>
          <p className="nue">+91 8073423859</p>
          <p className="nue">combat24india@gmail.com</p>
        </div>
        <Link to="/">
          <h2 className="Anton footer_title">COMBAT 24</h2>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
