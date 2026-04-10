import React from "react";
import { Link } from "react-router-dom";
import "./Coaches.css";
import Footer from "../../components/Footer/Footer";
import SEO from "../../components/SEO/SEO";
import useInView from "../../utils/useInView";
import { COACHES_DATA } from "../../data/coachesData";

const Coaches = () => {
  const [headingRef, headingVisible] = useInView(0.3);
  const [gridRef,    gridVisible]    = useInView(0.1);

  const coachesStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Combat 24 Coaches",
    url: "https://combat24.com/coaches",
    numberOfItems: COACHES_DATA.length,
    itemListElement: COACHES_DATA.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Person",
        name: c.name,
        jobTitle: c.designation,
        description: c.description,
        worksFor: { "@type": "Organization", name: "Combat 24" },
      },
    })),
  };

  return (
    <>
      <SEO
        title="Meet Our Coaches - Expert Martial Arts Trainers | Combat 24"
        description="Meet our expert martial arts coaches including Head Coach Pavan Kumar, National Muay Thai Champion Sourabh Patil, Kausthubh Ramesh, and Priya Yatanoor."
        keywords="martial arts coaches, pavan kumar coach, sourabh patil muay thai champion, kausthubh ramesh coach, priya yatanoor coach, Bengaluru"
        url="/coaches"
        structuredData={coachesStructuredData}
      />

      <section id="coaches">
        {/* Page heading */}
        <div
          ref={headingRef}
          className={`coaches_page_heading reveal${headingVisible ? " visible" : ""}`}
        >
          <p className="coaches_label nue">The Team</p>
          <h1 className="Anton coaches_page_title">Meet Your Coaches</h1>
        </div>

        {/* Cards grid */}
        <div className="coaches_wrapper" ref={gridRef}>
          {COACHES_DATA.map((coach, i) => (
            <Link
              key={coach.id}
              to={`/coaches/${coach.slug}`}
              className={`coaches_container reveal stagger-${i + 1}${gridVisible ? " visible" : ""}`}
              aria-label={`View ${coach.name}'s profile`}
            >
              <div className="coach_image">
                <div className="coach_overlay" />
                <img
                  src={coach.image}
                  alt={`${coach.name} — ${coach.designation} at Combat 24`}
                  loading={i < 2 ? "eager" : "lazy"}
                />
              </div>
              <div className="coach_details">
                <h3 className="coach_name Anton">{coach.name}</h3>
                <p className="coach_designation nue">{coach.designation}</p>
                <p className="coach_description nue">{coach.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Coaches;
