import React from "react";
import "./Classes.css";
import Footer from "../../components/Footer/Footer";
import SEO from "../../components/SEO/SEO";
import useInView from "../../utils/useInView";

import boxing      from "../../assets/boxing.webp";
import kickboxing  from "../../assets/kickboxing.webp";
import muaithai    from "../../assets/muay thai.webp";
import mmaGrappling from "../../assets/mma grappling.webp";
import mmaStriking from "../../assets/mma striking.webp";
import sc          from "../../assets/S&C.webp";
import crossFit    from "../../assets/cross fit.webp";
import sd          from "../../assets/sd.webp";

const classesArr = [
  { id: 1, name: "Boxing",          image: boxing,       description: "Learn the fundamentals of footwork, head movement, and punching techniques through high-intensity drills and sparring." },
  { id: 2, name: "Muay Thai",       image: muaithai,     description: "Master the art of 8 limbs — fists, elbows, knees, and shins — in a powerful striking-focused martial art from Thailand." },
  { id: 3, name: "MMA (Grappling)", image: mmaGrappling, description: "Focuses on takedowns, submissions, and ground control using techniques from wrestling and Brazilian Jiu-Jitsu." },
  { id: 4, name: "MMA (Striking)",  image: mmaStriking,  description: "Blends elements of boxing, Muay Thai, and kickboxing to improve striking accuracy, defense, and movement." },
  { id: 5, name: "Kick Boxing",     image: kickboxing,   description: "Combine punches and kicks for a dynamic cardio workout that builds endurance, speed, and coordination." },
  { id: 6, name: "S & C",           image: sc,           description: "Strength and Conditioning sessions designed to boost athletic performance, muscle strength, and endurance." },
  { id: 7, name: "Cross-Fit",       image: crossFit,     description: "High-intensity functional training focused on improving strength, flexibility, and overall fitness." },
  { id: 8, name: "Self Defence",    image: sd,           description: "Practical techniques to stay safe in real-world situations, building confidence, awareness, and quick response skills." },
];

const Classes = () => {
  const [headingRef, headingVisible] = useInView(0.3);
  const [gridRef,    gridVisible]    = useInView(0.08);

  const classesStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Combat 24 Martial Arts Classes",
    url: "https://combat24.com/classes",
    numberOfItems: classesArr.length,
    itemListElement: classesArr.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: { "@type": "Service", name: c.name, description: c.description },
    })),
  };

  return (
    <>
      <SEO
        title="Martial Arts Classes - Boxing, MMA, Muay Thai, Kickboxing | Combat 24"
        description="Explore our comprehensive martial arts classes including Boxing, Muay Thai, MMA, Kickboxing, Strength & Conditioning, Crossfit, and Self Defense."
        keywords="martial arts classes, boxing, MMA, muay thai, kickboxing, strength conditioning, crossfit, self defense, Bengaluru"
        url="/classes"
        structuredData={classesStructuredData}
      />

      <section id="classes-page">
        {/* Heading */}
        <div
          ref={headingRef}
          className={`classes_page_heading reveal${headingVisible ? " visible" : ""}`}
        >
          <p className="classes_label nue">What We Offer</p>
          <h1 className="Anton classes_page_title">Our Classes</h1>
        </div>

        {/* Grid */}
        <div className="classes_grid" ref={gridRef}>
          {classesArr.map((cls, i) => (
            <div
              key={cls.id}
              className={`class_card reveal stagger-${(i % 4) + 1}${gridVisible ? " visible" : ""}`}
            >
              <div className="class_card_image">
                <img
                  src={cls.image}
                  alt={`${cls.name} class at Combat 24`}
                  loading={i < 4 ? "eager" : "lazy"}
                />
                <div className="class_card_overlay" />
              </div>
              <div className="class_card_details">
                <h3 className="Anton class_card_name">{cls.name}</h3>
                <p className="nue class_card_desc">{cls.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Classes;
