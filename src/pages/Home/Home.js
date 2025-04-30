import React from "react";
import "./home.css";
import CoachPriya from "../../assets/Coach Priya.jpg";
import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import ReactPlayer from "react-player";
import sourabhFighting from "../../assets/Sourabh_fighting.mp4";

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
  const testimonials = [
    {
      id: 1,
      quote:
        "COMBAT24 WAS CENTRAL IN HELPING ME GAIN THE STAMINA FOR MY RECENT MARATHON.",
      author: "Sourabh",
    },
    {
      id: 2,
      quote:
        "Thanks to Combat24, I feel stronger and more confident every day!",
      author: "Priya",
    },
    {
      id: 3,
      quote: "Excellent trainers and equipment! Highly recommend Combat24.",
      author: "Amit",
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
      <section id="coaching_tutorial">
        <div className="coaching_container">
          <div className="video_container">
            <ReactPlayer
              url={sourabhFighting} // replace with your video URL or local path
              width="100%"
              height="100%"
              controls
              playing={false}
              loop
              previewTabIndex={0}
              config={{
                file: {
                  attributes: {
                    controlsList: "nodownload",
                  },
                },
              }}
            />
          </div>
          <div className="coaching_content">
            <h2 className="Anton">TRAIN WITH PURPOSE</h2>
            <h4 className="nue coaching_text">
              At Combat 24, every session is more than just a workout — it's a
              step toward a stronger you. Whether you're joining us online or in
              the club, our expert-led programs are designed to push limits,
              build discipline, and ignite confidence. Explore all we offer and
              take the first step toward your transformation.
            </h4>
          </div>
        </div>
      </section>

      <ContactForm />
      <section id="testimonials">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            768: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 1,
            },
          }}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="testimonial_slide">
                <h2 className="Anton">{item.quote}</h2>
                <h4 className="nue">- {item.author}</h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <Footer />
    </>
  );
};

export default Home;
