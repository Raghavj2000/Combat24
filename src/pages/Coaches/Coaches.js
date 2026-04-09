import React from "react";
import "./Coaches.css";
import Footer from "../../components/Footer/Footer";
import SEO from "../../components/SEO/SEO";
import useInView from "../../utils/useInView";
import coach_priya    from "../../assets/Coach Priya.webp";
import coach_Sourabh  from "../../assets/Coach Sourabh.webp";
import coach_kaustabh from "../../assets/kaustubh_coach.webp";
import coach_Pavan    from "../../assets/pavan_coach.webp";

const coachesArr = [
  {
    id: 1,
    name: "Pavan Kumar",
    designation: "Head Coach",
    image: coach_Pavan,
    description:
      "Boasting 12+ years of combat experience, he led Team India to the Muay Thai World Championships in 2023 and 2024.",
  },
  {
    id: 2,
    name: "Kausthubh Ramesh",
    designation: "Coach",
    image: coach_kaustabh,
    description:
      "Currently holds Gold in the South zone Muay Thai Championship. Certified nutritionist and S&C Coach.",
  },
  {
    id: 3,
    name: "Sourabh Patil",
    designation: "Coach",
    image: coach_Sourabh,
    description:
      "National Muay Thai Champion 2024. Certified in Functional Training with over 5 years of experience.",
  },
  {
    id: 4,
    name: "Priya Yatanoor",
    designation: "Coach",
    image: coach_priya,
    description:
      "With over 12 years of experience in Strength and Conditioning, she is a former Gold medalist in the National Muay Thai Series.",
  },
];

const Coaches = () => {
  const [headingRef, headingVisible] = useInView(0.3);
  const [gridRef,    gridVisible]    = useInView(0.1);

  const coachesStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Combat 24 Coaches",
    url: "https://combat24.com/coaches",
    numberOfItems: 4,
    itemListElement: coachesArr.map((c, i) => ({
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
          {coachesArr.map((coach, i) => (
            <div
              key={coach.id}
              className={`coaches_container reveal stagger-${i + 1}${gridVisible ? " visible" : ""}`}
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
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Coaches;
