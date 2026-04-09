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
    { id: 1, image: baseImg,  alt: "Combat 24 gym floor" },
    { id: 2, image: footer2,  alt: "Combat 24 training session" },
    { id: 3, image: footer3,  alt: "Combat 24 members" },
    { id: 4, image: footer4,  alt: "Combat 24 class in action" },
    { id: 5, image: foote5,   alt: "Combat 24 coaching" },
    { id: 6, image: footer1,  alt: "Combat 24 facility" },
  ];

  return (
    <footer>
      <div className="location_container">
        <h3 className="Anton location_header">Bengaluru</h3>
        <p className="nue">
          No.28, 3rd Floor,
          <br />Anjanadri Arcade, 1st Main,
          <br />CBI Road, Ganganagar, Bengaluru&nbsp;560032
        </p>
      </div>

      <div className="footer_image_container" aria-label="Combat 24 photo gallery">
        {gridImages.map((img) => (
          <div key={img.id} className="footer_image">
            <img src={img.image} alt={img.alt} loading="lazy" />
          </div>
        ))}
      </div>

      <div className="footer_divider" role="separator" />

      <div className="copyright_container">
        <div className="contact_container">
          <h3 className="Anton">Contact Us</h3>
          <p className="nue">+91&nbsp;8073423859</p>
          <p className="nue">combat24india@gmail.com</p>
        </div>
        <Link to="/" aria-label="Combat 24 — Back to home">
          <h2 className="Anton footer_title">COMBAT 24</h2>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
