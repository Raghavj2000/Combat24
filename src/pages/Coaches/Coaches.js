import React from "react";
import "./Coaches.css";
import Footer from "../../components/Footer/Footer";
import cardioGuy from "../../assets/image.webp";

const Coaches = () => {
  const coachesArr = [
    {
      id: 1,
      name: "Pavan Kumar",
      designation: "Head Coach",
      image: cardioGuy,
      description:
        "Boasting 12+ years of combat experience, he led Team India to the Muay Thai World Championships in 2023 and 2024.",
    },
    {
      id: 2,
      name: "Kausthubh Ramesh",
      designation: "Coach",
      image: cardioGuy,
      description:
        "Currently holds Gold in the South zone Muay Thai Championship Certified nutritionist and S&C Coach",
    },
    {
      id: 3,
      name: "Sourabh Patil",
      designation: "Coach",
      image: cardioGuy,
      description:
        "National Muay Thai Champion 2024 Certified in Functional Training and has an experience of over 5 years",
    },
    {
      id: 4,
      name: "Priya Yatanoor",
      designation: "Coach",
      image: cardioGuy,
      description:
        "With over 12 years of experience in Strength and Conditioning, she is a former Gold medalist in the National Muay Thai Series.",
    },
  ];
  return (
    <>
      <section id="coaches">
        <div className="coaches_wrapper">
          {coachesArr.map((coach) => {
            return (
              <div className="coaches_container" key={coach.id}>
                <div className="coach_image">
                  <div className="coach_overlay" />
                  <img src={coach.image} alt="" />
                </div>
                <div className="coach_details">
                  <h3 className="coach_name Anton">{coach.name}</h3>
                  <p className="coach_designation nue">{coach.designation}</p>
                  <p className="coach_description nue">{coach.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Coaches;
