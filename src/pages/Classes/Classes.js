import React from "react";
import { Link } from "react-router-dom";
import "./Classes.css";
import Footer from "../../components/Footer/Footer";
import SEO from "../../components/SEO/SEO";
import useInView from "../../utils/useInView";
import { CLASSES_DATA } from "../../data/classesData";

const Classes = () => {
  const [headingRef, headingVisible] = useInView(0.3);
  const [gridRef,    gridVisible]    = useInView(0.08);

  const classesStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Combat 24 Martial Arts Classes",
    url: "https://combat24.com/classes",
    numberOfItems: CLASSES_DATA.length,
    itemListElement: CLASSES_DATA.map((c, i) => ({
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
          {CLASSES_DATA.map((cls, i) => (
            <Link
              key={cls.id}
              to={`/classes/${cls.slug}`}
              className={`class_card reveal stagger-${(i % 4) + 1}${gridVisible ? " visible" : ""}`}
              aria-label={`Learn more about ${cls.name}`}
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
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Classes;
