import React from "react";
import "./home.css";
import CoachPriya from "../../assets/Coach Priya.jpg";
import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  const amenities = [
    {
      id: 1,
      title: "Cardio",
    },
    {
      id: 2,
      title: "Modern Facilities",
    },
    {
      id: 3,
      title: "Personal Trainers",
    },
    {
      id: 4,
      title: "Lockers",
    },
    {
      id: 5,
      title: "Crossfit",
    },
  ];
  return (
    <>
      <section id="landing">
        <div className="landing_container">
          <h1 className="Anton">
            Discipline is the bridge between goals <br /> and accomplishments.
          </h1>
          <button className="nue">JOIN OUR GYM</button>
        </div>
      </section>
      <section id="quality">
        <div className="quality_container">
          <h2 className="Anton">
            WE&apos;RE A HIGH QUALITY GYM DEDICATED TO AFFORDABLE HEALTH AND
            WELLNESS.
          </h2>
          <p className="nue">
            Combat 24 is a gym where you come as you are, and do your best. Our
            membership offers both digital and in-club programming aimed at
            helping you achieve your fitness goals. Discover all of our
            club&apos;s offerings below.
          </p>
        </div>
        <div className="quality_image_container">
          <img src={CoachPriya} alt="" />
        </div>
      </section>
      <section id="quote">
        <h2 className="Anton">
          “The resistance that you fight physically in the gym and the
          resistance that you fight in life can only build a strong character.”
        </h2>
        <h4 className="nue">- Arnold Schwarzenegger</h4>
      </section>
      <section id="amenities">
        <h2 className="Anton">AMENITIES</h2>
        <h4 className="nue">
          At Combat 24, we&apos;re always expanding our amenities to meet the
          needs of our community. Something you&apos;d like to see added to our
          list? Submit a request.
        </h4>
        <div className="amenities_container">
          {amenities.map((amenity, index) => (
            <div className="amenity" key={amenity.id}>
              <p className="nue">{amenity.title}</p>
              {index !== amenities.length - 1 && (
                <div className="white_dot"></div>
              )}
            </div>
          ))}
        </div>
      </section>
      <ContactForm />
      <section id="testimonials">
        <h2 className="Anton">
          COMBAT24 WAS CENTRAL IN HELPING ME GAIN THE STAMINA FOR MY RECENT
          MARATHON.
        </h2>
        <h4 className="nue">- Sourabh</h4>
      </section>
      <Footer />
    </>
  );
};

export default Home;
