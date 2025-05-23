import React from "react";
import "./AboutUs.css";
import Footer from "../../components/Footer/Footer";
import baseImg from "../../assets/9.webp";

const AboutUs = () => {
  return (
    <>
      <section id="about_us">
        <div className="about_us_text_container">
          <h2 className="Anton">About Us</h2>
          <p className="nue">
            Welcome to Combat24 &mdash; your ultimate fitness destination!
            &nbsp;We are committed to helping you unlock your full potential and
            embrace a healthier, stronger lifestyle. With expert trainers,
            personalized guidance, and a motivating environment, we&apos;re here
            to support you every step of the way.
          </p>
        </div>
      </section>

      <section id="why_us">
        <div className="why_us_text_container">
          <div className="why_us_text_content_container">
            <h3 className="Anton">Why Choose Combat24 Over Other Gyms?</h3>
            <p className="nue">
              Combat24 isn&apos;t just a gym &mdash; it&apos;s a community built
              around transformation and growth. We offer a holistic approach to
              fitness with experienced coaches, nutrition plans, and dynamic
              training programs that are designed to fit all levels. Our
              results-driven culture and supportive atmosphere set us apart from
              the rest.
            </p>
          </div>
        </div>
        <div className="why_us_image_container">
          <img src={baseImg} alt="" />
        </div>
      </section>

      <section id="our_mission">
        <div className="our_mission_image_container">
          <img src={baseImg} alt="" />
        </div>
        <div className="our_mission_text_container">
          <h3 className="Anton">Our Mission</h3>
          <p className="nue">
            Our mission at Combat24 is to inspire and empower people of all
            backgrounds to lead healthier, more active lives. We believe in
            making fitness accessible, inclusive, and enjoyable — breaking
            barriers and creating opportunities for everyone to thrive through
            movement and discipline.
          </p>
        </div>
      </section>

      <section id="why_us">
        <div className="why_us_text_container">
          <div className="why_us_text_content_container">
            <h3 className="Anton">Tailored Retreats for All Groups</h3>
            <p className="nue">
              Whether you're a beginner, athlete, or corporate team, our
              specialized fitness retreats are designed to energize, motivate,
              and strengthen every participant. Experience customized sessions
              that blend training, wellness, and camaraderie — all in a setting
              built for transformation.
            </p>
          </div>
        </div>
        <div className="why_us_image_container">
          <img src={baseImg} alt="" />
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AboutUs;
