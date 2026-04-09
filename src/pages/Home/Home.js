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
import useInView from "../../utils/useInView";

const Home = () => {
  const amenities = [
    { id: 1,  title: "Modern Facilities" },
    { id: 2,  title: "Premium Classes" },
    { id: 3,  title: "Personal Trainers" },
    { id: 4,  title: "Individual Attention" },
    { id: 5,  title: "Security Cameras" },
    { id: 6,  title: "Personal Nutrition" },
    { id: 7,  title: "UFC Live Screening" },
    { id: 8,  title: "On-site First Aid" },
    { id: 9,  title: "Lockers" },
    { id: 10, title: "Free Parking" },
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

  // Scroll-reveal refs
  const [qualityRef,      qualityVisible]      = useInView(0.15);
  const [quoteRef,        quoteVisible]        = useInView(0.3);
  const [amenitiesRef,    amenitiesVisible]    = useInView(0.2);
  const [coachingRef,     coachingVisible]     = useInView(0.15);
  const [reviewRef,       reviewVisible]       = useInView(0.15);
  const [testimonialsRef, testimonialsVisible] = useInView(0.1);

  const homeStructuredData = {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    name: "Combat 24",
    description:
      "Premium martial arts and fitness training facility offering MMA, Boxing, Muay Thai, Kickboxing, and fitness classes",
    url: "https://combat24.com",
    logo: "https://combat24.com/c24Logo.webp",
    image: "https://combat24.com/c24Logo.webp",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "No.28, 3rd Floor, Anjanadri Arcade, 1st Main, CBI Road, Ganganagar",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      postalCode: "560032",
      addressCountry: "IN",
    },
    telephone: "+91-8073423859",
    email: "combat24india@gmail.com",
    openingHours: "Mo-Su 06:00-22:00",
    priceRange: "$$",
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Martial Arts Training", value: true },
      { "@type": "LocationFeatureSpecification", name: "Fitness Classes",       value: true },
      { "@type": "LocationFeatureSpecification", name: "Personal Training",     value: true },
    ],
    sameAs: [
      "https://www.facebook.com/combat.24",
      "https://www.instagram.com/combat.24",
    ],
  };

  return (
    <>
      <SEO
        title="Combat 24 - Premium Martial Arts & Fitness Training | MMA, Boxing, Muay Thai"
        description="Join Combat 24 for world-class martial arts training, fitness classes, and personal coaching. MMA, Boxing, Muay Thai, Kickboxing, and more."
        keywords="martial arts, MMA, boxing, muay thai, kickboxing, fitness training, personal coaching, combat sports, self defense, Bengaluru, Bangalore"
        url="/"
        structuredData={homeStructuredData}
      />

      {/* ── HERO ── */}
      <section id="landing" aria-label="Hero">
        <div className="video_container_home" aria-hidden="true">
          <video autoPlay muted loop playsInline aria-hidden="true">
            <source src={websiteVideo} type="video/mp4" />
          </video>
        </div>

        <div className="landing_container">
          <h1 className="Anton hero-title">
            Train for Combat.<br />
            Live with Confidence.
          </h1>
          <button
            className="btn-hero nue hero-cta"
            onClick={() => router("/contact")}
            aria-label="Join our gym — schedule a visit"
          >
            JOIN OUR GYM
          </button>
        </div>

        <div className="scroll_indicator" aria-hidden="true">
          <span />
        </div>
      </section>

      {/* ── QUALITY ── */}
      <section
        id="quality"
        ref={qualityRef}
        aria-label="About Combat 24"
      >
        <div className="quality_container">
          <div className={`quality_text_block reveal from-left${qualityVisible ? " visible" : ""}`}>
            <h2 className="Anton">
              Our Community Is Built On Support, Health, And Wellness For All.
            </h2>
            <p className="nue">
              At Combat 24, we train warriors for life. Offering MMA, Muay Thai,
              Boxing, Kickboxing, Brazilian Jiu-jitsu, S&C &amp; Crossfit, we focus
              on techniques and develop total-body strength. Our mission is to make
              every member feel self-sufficient, empowered, and ready.
            </p>
          </div>
          <div className={`quality_image_container reveal from-right${qualityVisible ? " visible" : ""} stagger-1`}>
            <img
              src={CoachPriya}
              alt="Combat 24 athlete in training stance"
              width="360"
              height="480"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ── QUOTE ── */}
      <section
        id="quote"
        ref={quoteRef}
        className={`reveal scale-in${quoteVisible ? " visible" : ""}`}
        aria-label="Inspirational quote"
      >
        <h2 className="Anton">
          &ldquo;Confidence is not something you&apos;re born with. It&apos;s
          something you develop. You build it through hard work and
          preparation&rdquo;
        </h2>
        <h4 className="nue">— Conor McGregor</h4>
      </section>

      {/* ── AMENITIES ── */}
      <section
        id="amenities"
        ref={amenitiesRef}
        aria-label="Gym amenities"
      >
        <div className={`amenities_header reveal${amenitiesVisible ? " visible" : ""}`}>
          <h2 className="Anton">Amenities</h2>
          <h4 className="nue">
            We&apos;re always expanding our amenities to meet the needs of our
            community.
          </h4>
        </div>

        {/* Marquee ticker — much more premium than a static list */}
        <div className={`amenities_ticker_wrap${amenitiesVisible ? " ticker-active" : ""}`} aria-hidden="true">
          <div className="amenities_ticker">
            {[...amenities, ...amenities].map((a, i) => (
              <span key={i} className="ticker_item nue">
                {a.title}
                <span className="ticker_sep">·</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── COACHING VIDEO ── */}
      <section
        className="video_section"
        ref={coachingRef}
        aria-label="Training at Combat 24"
      >
        <div className="video_section_inner">
          <div className={`video_container reveal from-left${coachingVisible ? " visible" : ""}`}>
            <VideoPlayer src={sourabhFighting} />
          </div>
          <div className={`video_section_content reveal from-right${coachingVisible ? " visible" : ""} stagger-1`}>
            <p className="section_label">01 / Training</p>
            <h2 className="Anton">Train With Purpose</h2>
            <h4 className="nue">
              Unleash your potential through discipline, grit, and world-class
              training. Whether you&apos;re here to get in shape, prepare for
              your next fight, or just have fun throwing punches — we&apos;ve
              got you covered.
            </h4>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS VIDEO ── */}
      <section
        className="video_section"
        ref={reviewRef}
        aria-label="Member stories"
      >
        <div className="video_section_inner reverse">
          <div className={`video_container reveal from-right${reviewVisible ? " visible" : ""}`}>
            <VideoPlayer src={testimonialsVideo} />
          </div>
          <div className={`video_section_content reveal from-left${reviewVisible ? " visible" : ""} stagger-1`}>
            <p className="section_label">02 / Community</p>
            <h2 className="Anton">What Our Warriors Have to Say</h2>
            <h4 className="nue">
              Our members come from all walks of life, each with their own
              reason to train. Whether it&apos;s for confidence, competition,
              or simply the love of movement — the results speak for themselves.
            </h4>
          </div>
        </div>
      </section>

      {/* ── CONTACT FORM ── */}
      <ContactForm />

      {/* ── TESTIMONIALS SLIDER ── */}
      <section
        id="testimonials"
        ref={testimonialsRef}
        className={`reveal${testimonialsVisible ? " visible" : ""}`}
        aria-label="Member testimonials"
      >
        <div className="testimonials_header">
          <p className="section_label">What They Say</p>
          <h2 className="Anton">Member Reviews</h2>
        </div>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          a11y={{ prevSlideMessage: "Previous testimonial", nextSlideMessage: "Next testimonial" }}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="testimonial_slide">
                <h2 className="Anton">&ldquo;{item.quote}&rdquo;</h2>
                <h4 className="nue">— {item.author}</h4>
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
