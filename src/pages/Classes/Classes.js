import React from "react";
import "./Classes.css";
import Footer from "../../components/Footer/Footer";
import SEO from "../../components/SEO/SEO";

import boxing from "../../assets/boxing.webp";
import kickboxing from "../../assets/kickboxing.webp";
import muaithai from "../../assets/muay thai.webp";
import mmaGrappling from "../../assets/mma grappling.webp";
import mmaStriking from "../../assets/mma striking.webp";
import sc from "../../assets/S&C.webp";
import crossFit from "../../assets/cross fit.webp";
import sd from "../../assets/sd.webp";

const Classes = () => {
  const classesStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Combat 24 Martial Arts Classes",
    "description": "Comprehensive martial arts and fitness classes including Boxing, Muay Thai, MMA, Kickboxing, and Strength & Conditioning",
    "url": "https://combat24.com/classes",
    "numberOfItems": 8,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Service",
          "name": "Boxing",
          "description": "Learn the fundamentals of footwork, head movement, and punching techniques through high-intensity drills and sparring."
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "Service",
          "name": "Muay Thai",
          "description": "Master the art of 8 limbs — fists, elbows, knees, and shins — in a powerful striking-focused martial art from Thailand."
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "Service",
          "name": "MMA (Grappling)",
          "description": "Focuses on takedowns, submissions, and ground control using techniques from wrestling and Brazilian Jiu-Jitsu."
        }
      },
      {
        "@type": "ListItem",
        "position": 4,
        "item": {
          "@type": "Service",
          "name": "MMA (Striking)",
          "description": "Blends elements of boxing, Muay Thai, and kickboxing to improve striking accuracy, defense, and movement."
        }
      },
      {
        "@type": "ListItem",
        "position": 5,
        "item": {
          "@type": "Service",
          "name": "Kick Boxing",
          "description": "Combine punches and kicks for a dynamic cardio workout that builds endurance, speed, and coordination."
        }
      },
      {
        "@type": "ListItem",
        "position": 6,
        "item": {
          "@type": "Service",
          "name": "Strength & Conditioning",
          "description": "Strength and Conditioning sessions designed to boost athletic performance, muscle strength, and endurance."
        }
      },
      {
        "@type": "ListItem",
        "position": 7,
        "item": {
          "@type": "Service",
          "name": "Crossfit",
          "description": "High-intensity functional fitness training that combines strength training, cardio, and flexibility."
        }
      },
      {
        "@type": "ListItem",
        "position": 8,
        "item": {
          "@type": "Service",
          "name": "Self Defense",
          "description": "Practical self-defense techniques for real-world situations, focusing on awareness and effective response."
        }
      }
    ]
  };

  const classesArr = [
    {
      id: 1,
      name: "Boxing",
      image: boxing,
      description:
        "Learn the fundamentals of footwork, head movement, and punching techniques through high-intensity drills and sparring.",
    },
    {
      id: 2,
      name: "Muay Thai",
      image: muaithai,
      description:
        "Master the art of 8 limbs — fists, elbows, knees, and shins — in a powerful striking-focused martial art from Thailand.",
    },
    {
      id: 3,
      name: "MMA (Grappling)",
      image: mmaGrappling,
      description:
        "Focuses on takedowns, submissions, and ground control using techniques from wrestling and Brazilian Jiu-Jitsu.",
    },
    {
      id: 4,
      name: "MMA (Striking)",
      image: mmaStriking,
      description:
        "Blends elements of boxing, Muay Thai, and kickboxing to improve striking accuracy, defense, and movement.",
    },
    {
      id: 5,
      name: "Kick Boxing",
      image: kickboxing,
      description:
        "Combine punches and kicks for a dynamic cardio workout that builds endurance, speed, and coordination.",
    },
    {
      id: 6,
      name: "S & C",
      image: sc,
      description:
        "Strength and Conditioning sessions designed to boost athletic performance, muscle strength, and endurance.",
    },
    {
      id: 7,
      name: "Cross-Fit",
      image: crossFit,
      description:
        "High-intensity functional training focused on improving strength, flexibility, and overall fitness through varied workouts.",
    },
    {
      id: 8,
      name: "Self Defence",
      image: sd,
      description:
        "Practical techniques to stay safe in real-world situations, building confidence, awareness, and quick response skills.",
    },
  ];

  return (
    <>
      <SEO
        title="Martial Arts Classes - Boxing, MMA, Muay Thai, Kickboxing | Combat 24"
        description="Explore our comprehensive martial arts classes including Boxing, Muay Thai, MMA (Grappling & Striking), Kickboxing, Strength & Conditioning, Crossfit, and Self Defense. Expert training in Bengaluru."
        keywords="martial arts classes, boxing classes, MMA training, muay thai classes, kickboxing, strength conditioning, crossfit, self defense, martial arts training Bengaluru, combat sports classes"
        url="/classes"
        structuredData={classesStructuredData}
      />
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
