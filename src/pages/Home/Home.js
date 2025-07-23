import React from "react";
import "./home.css";
import CoachPriya from "../../assets/amaal_main.webp";
import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import sourabhFighting from "../../assets/Sourabh_fighting.mp4";
import testimonialsVideo from "../../assets/Testimony2.mp4";
import { useNavigate } from "react-router-dom";
import websiteVideo from "../../assets/Website_Video.mp4";
import SEO from "../../components/SEO/SEO";

const Home = () => {
  const amenities = [
    {
      id: 1,
      title: "Modern Facilities",
    },
    {
      id: 2,
      title: "Premium Classes",
    },
    {
      id: 3,
      title: "Personal Trainers",
    },
    {
      id: 4,
      title: "Individual attention",
    },
    {
      id: 5,
      title: "Security Cameras",
    },
  ];
  const amenities2 = [
    {
      id: 1,
      title: "Personal Nutrition",
    },
    {
      id: 2,
      title: "UFC Live Screening",
    },
    {
      id: 3,
      title: "On-site First Aid",
    },
    {
      id: 4,
      title: "Lockers",
    },
    {
      id: 5,
      title: "Free Parking",
    },
  ];
  const testimonials = [
    {
      id: 1,
      quote: "Classes are well-structured, intense, and incredibly rewarding.",
      author: "Sagar",
    },
    {
      id: 2,
      quote:
        "Highly recommended to all the girls who want to learn self-defense and feel confident.",
      author: "Manya",
    },
    {
      id: 3,
      quote:
        "Experienced coaches and a top-notch facility. The Muay Thai, Boxing and MMA classes are out of this world.",
      author: "Jaswanth",
    },
  ];
  const router = useNavigate();
  
  const homeStructuredData = {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    "name": "Combat 24",
    "description": "Premium martial arts and fitness training facility offering MMA, Boxing, Muay Thai, Kickboxing, and fitness classes",
    "url": "https://combat24.com",
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
    "openingHours": "Mo-Su 06:00-22:00",
    "priceRange": "$$",
    "amenityFeature": [
      {
        "@type": "LocationFeatureSpecification",
        "name": "Martial Arts Training",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification", 
        "name": "Fitness Classes",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Personal Training",
        "value": true
      }
    ],
    "sameAs": [
      "https://www.facebook.com/combat.24",
      "https://www.instagram.com/combat.24"
    ]
  };

  return (
    <>
      <SEO
        title="Combat 24 - Premium Martial Arts & Fitness Training | MMA, Boxing, Muay Thai"
        description="Join Combat 24 for world-class martial arts training, fitness classes, and personal coaching. MMA, Boxing, Muay Thai, Kickboxing, and more. Transform your fitness journey today."
        keywords="martial arts, MMA, boxing, muay thai, kickboxing, fitness training, personal coaching, combat sports, self defense, strength training, cardio, martial arts classes, Bengaluru, Bangalore"
        url="/"
        structuredData={homeStructuredData}
      />
      <section id="landing">
        <div className="video_container_home">
          <video autoPlay muted loop playsInline className="landing_video">
            <source src={websiteVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="landing_container">
          <h1 className="Anton">
            Train for Combat. <br />
            Live with Confidence.
          </h1>
          <button className="nue" onClick={() => router("/contact")}>
            JOIN OUR GYM
          </button>
        </div>
      </section>
      <section id="quality">
        <div className="quality_container">
          <h2 className="Anton">
            OUR COMMUNITY IS BUILT ON THE VALUES OF SUPPORT, CREATING A SPACE
            WHERE HEALTH AND WELLNESS ARE AFFORDABLE TO ALL.
          </h2>
          <p className="nue">
            At Combat 24, we train warriors for life. Offering MMA, Muay Thai,
            Boxing, Kickboxing, Brazilian Jiu-jitsu, S&C & Crossfit, we focus on
            techniques and develop total-body strength. Our mission is to make
            every member feel self-sufficient, empowered, and ready. More than
            fitness, we instill confidence through combat, every step of the
            way.
          </p>
        </div>
        <div className="quality_image_container">
          <img src={CoachPriya} alt="" />
        </div>
      </section>
      <section id="quote">
        <h2 className="Anton">
          “Confidence is not something you&apos;re born with. It&apos;s
          something you develop. You build it through hard work and preparation”
        </h2>
        <h4 className="nue">- Conor Mcgregor</h4>
      </section>
      <section id="amenities">
        <h2 className="Anton">AMENITIES</h2>
        <h4 className="nue">
          At Combat 24, we&apos;re always expanding our amenities to meet the
          needs of our community. Something you&apos;d like to see added to our
          list? Submit a request.
        </h4>
        <div className="amenities_wrapper">
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
          <div className="amenities_container">
            {amenities2.map((amenity, index) => (
              <div className="amenity" key={amenity.id}>
                <p className="nue">{amenity.title}</p>
                {index !== amenities.length - 1 && (
                  <div className="white_dot"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="coaching_tutorial">
        <div className="coaching_container">
          <div className="video_container">
            <VideoPlayer src={sourabhFighting} />
          </div>
          <div className="coaching_content">
            <h2 className="Anton">TRAIN WITH PURPOSE</h2>
            <h4 className="nue coaching_text">
              Unleash your potential through discipline, grit, and world-class
              training. Whether you're here to get in shape, prepare for your
              next fight, or just have fun throwing punches — we've got you
              covered. Our gym welcomes all skill levels and goals with expert
              coaching, an inclusive vibe, and real results.
            </h4>
          </div>
        </div>
      </section>
      <section id="review_tutorial">
        <div className="review_container">
          <div className="video_container">
            <VideoPlayer src={testimonialsVideo} />
          </div>
          <div className="review_content">
            <h2 className="Anton">What Our Warriors Have to Say</h2>
            <h4 className="nue coaching_text">
              Our members come from all walks of life, each with their own
              reason to train. Whether it's for confidence, competition, or
              simply the love of movement — the results speak for themselves.
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
