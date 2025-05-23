import React from "react";
import "./Classes.css";
import Footer from "../../components/Footer/Footer";
import cardioGuy from "../../assets/cardioGuy.webp";
const Classes = () => {
  const classesArr = [
    {
      id: 1,
      name: "Boxing",
      image: cardioGuy,
      description:
        "Learn the fundamentals of footwork, head movement, and punching techniques through high-intensity drills and sparring.",
    },
    {
      id: 2,
      name: "Muay Thai",
      image: cardioGuy,
      description:
        "Master the art of 8 limbs — fists, elbows, knees, and shins — in a powerful striking-focused martial art from Thailand.",
    },
    {
      id: 3,
      name: "MMA (Grappling)",
      image: cardioGuy,
      description:
        "Focuses on takedowns, submissions, and ground control using techniques from wrestling and Brazilian Jiu-Jitsu.",
    },
    {
      id: 4,
      name: "MMA (Striking)",
      image: cardioGuy,
      description:
        "Blends elements of boxing, Muay Thai, and kickboxing to improve striking accuracy, defense, and movement.",
    },
    {
      id: 5,
      name: "Kick Boxing",
      image: cardioGuy,
      description:
        "Combine punches and kicks for a dynamic cardio workout that builds endurance, speed, and coordination.",
    },
    {
      id: 6,
      name: "S & C",
      image: cardioGuy,
      description:
        "Strength and Conditioning sessions designed to boost athletic performance, muscle strength, and endurance.",
    },
    {
      id: 7,
      name: "Cross-Fit",
      image: cardioGuy,
      description:
        "High-intensity functional training focused on improving strength, flexibility, and overall fitness through varied workouts.",
    },
    {
      id: 8,
      name: "Self Defence",
      image: cardioGuy,
      description:
        "Practical techniques to stay safe in real-world situations, building confidence, awareness, and quick response skills.",
    },
  ];

  return (
    <>
      <section id="coaches">
        <div className="coaches_wrapper">
          {classesArr.map((coach) => {
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

export default Classes;
