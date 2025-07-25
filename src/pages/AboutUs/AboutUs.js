import React from "react";
import "./AboutUs.css";
import Footer from "../../components/Footer/Footer";
import SEO from "../../components/SEO/SEO";

import group from "../../assets/group.webp";
import group3 from "../../assets/group3.webp";
import group4 from "../../assets/group4.webp";

const AboutUs = () => {
  const aboutStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Combat 24",
    "description": "Combat 24 is a premium martial arts and fitness training facility founded by Head Coach Pavan Kumar and National Muay Thai champion Sourabh Patil.",
    "url": "https://combat24.com/about",
    "logo": "https://combat24.com/c24Logo.webp",
    "image": "https://combat24.com/c24Logo.webp",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "No.28, 3rd Floor, Anjanadri Arcade, 1st Main, CBI Road, Ganganagar",
      "addressLocality": "Bengaluru",
      "addressRegion": "Karnataka",
      "postalCode": "560032",
      "addressCountry": "IN"
    },
    "telephone": "+91-8073423859",
    "email": "combat24india@gmail.com",
    "founder": [
      {
        "@type": "Person",
        "name": "Pavan Kumar",
        "jobTitle": "Head Coach",
        "description": "Founder and Head Coach with 12+ years of combat experience"
      },
      {
        "@type": "Person", 
        "name": "Sourabh Patil",
        "jobTitle": "Coach",
        "description": "National Muay Thai Champion 2024"
      }
    ],
    "mission": "To empower individuals of all backgrounds to unlock their full potential through combat sports",
    "sameAs": [
      "https://www.facebook.com/combat.24",
      "https://www.instagram.com/combat.24"
    ]
  };

  return (
    <>
      <SEO
        title="About Combat 24 - Our Story, Mission & Values | Martial Arts Training"
        description="Discover the story behind Combat 24. Founded by Head Coach Pavan Kumar and National Muay Thai champion Sourabh Patil. Learn about our mission to make quality combat sports training accessible to everyone."
        keywords="about combat 24, martial arts story, pavan kumar coach, sourabh patil muay thai champion, combat sports mission, martial arts values, Bengaluru martial arts"
        url="/about"
        structuredData={aboutStructuredData}
      />
      <section id="about_us">
        <div className="about_us_text_container">
          <h2 className="Anton"> OUR STORY</h2>
          <p className="nue"></p>
        </div>
      </section>

      <section id="why_us">
        <div className="why_us_text_container">
          <div className="why_us_text_content_container">
            <h3 className="Anton">GET TO KNOW US</h3>
            <p className="nue">
              Founder and Head Coach Pavan Kumar spent years working in various
              gyms, helping people transform — whether they were training to get
              fit or chasing championship dreams. Sourabh, a dedicated student
              of Pavan Kumar, rose through the ranks to become a national Muay
              Thai champion. As their bond grew, so did a bigger purpose: to
              make quality combat sports training affordable and accessible to
              everyone. With the support of their close friend Arvind Acharya,
              that vision became a reality.
            </p>
          </div>
        </div>
        <div className="why_us_image_container">
          <img src={group} alt="" />
        </div>
      </section>

      <section id="our_mission">
        <div className="our_mission_image_container">
          <img src={group3} alt="" />
        </div>
        <div className="our_mission_text_container">
          <h3 className="Anton">Our Mission</h3>
          <p className="nue">
            At Combat 24, our mission is to empower individuals of all
            backgrounds to unlock their full potential through combat sports. We
            believe training is more than just physical — it&apos;s a journey of
            mental strength, confidence, and discipline. We are committed to
            providing a welcoming, safe, and affordable space where everyone can
            grow, push limits, and transform their lives inside and outside the
            gym.
          </p>
        </div>
      </section>

      <section id="why_us">
        <div className="why_us_text_container">
          <div className="why_us_text_content_container">
            <h3 className="Anton">CORE VALUES</h3>
            <p className="nue">
              At Combat 24, we believe that the mat is a level playing field.
              Whether you're a beginner or a seasoned fighter, young or old,
              male or female — everyone trains as equals. We lead with respect,
              support one another, and grow stronger together. Our gym is&apos;t
              just a place to train — it&apos;s a community where every punch,
              every rep, and every win is celebrated as one.
            </p>
          </div>
        </div>
        <div className="why_us_image_container">
          <img src={group4} alt="" />
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AboutUs;
