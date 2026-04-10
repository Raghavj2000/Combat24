import React from "react";
import { useParams, Link } from "react-router-dom";
import "./ClassProfile.css";
import { CLASSES_DATA } from "../../data/classesData";
import Footer from "../../components/Footer/Footer";
import SEO from "../../components/SEO/SEO";
import useInView from "../../utils/useInView";
import { FiArrowLeft, FiClock, FiZap, FiCalendar } from "react-icons/fi";

const INTENSITY_COLORS = {
  "Low – Medium": "#22C55E",
  "Medium – High": "#F59E0B",
  "High": "#FF4422",
  "Very High": "#CC0000",
};

const ClassProfile = () => {
  const { slug } = useParams();
  const cls = CLASSES_DATA.find((c) => c.slug === slug);

  const [aboutRef,  aboutVisible]  = useInView(0.15);
  const [learnRef,  learnVisible]  = useInView(0.1);
  const [metaRef,   metaVisible]   = useInView(0.1);

  if (!cls) {
    return (
      <div className="clp_notfound">
        <h2 className="Anton">Class not found</h2>
        <Link to="/classes" className="nue clp_notfound_link">← Back to Classes</Link>
      </div>
    );
  }

  const intensityColor = INTENSITY_COLORS[cls.intensity] || "var(--c-primary)";

  return (
    <>
      <SEO
        title={`${cls.name} Classes — ${cls.tagline} | Combat 24`}
        description={cls.description}
        keywords={`${cls.name}, martial arts, combat 24, ${cls.slug}, Bengaluru`}
        url={`/classes/${cls.slug}`}
      />

      {/* ── HERO ── */}
      <section className="clp_hero">
        <div className="clp_hero_img">
          <img src={cls.image} alt={`${cls.name} at Combat 24`} />
        </div>
        <div className="clp_hero_overlay" aria-hidden="true" />
        <Link to="/classes" className="clp_back nue">
          <FiArrowLeft size={16} />
          <span>All Classes</span>
        </Link>
        <div className="clp_hero_content">
          <p className="clp_hero_tagline nue">{cls.tagline}</p>
          <h1 className="Anton clp_hero_name">{cls.name}</h1>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="clp_section" ref={aboutRef}>
        <div className={`clp_about reveal from-left${aboutVisible ? " visible" : ""}`}>
          <div className="clp_about_text">
            <p className="clp_label nue">About</p>
            <h2 className="Anton clp_section_title">{cls.name}</h2>
            {cls.about.split("\n\n").map((para, i) => (
              <p key={i} className="nue clp_body">{para}</p>
            ))}
          </div>
          <div className={`clp_about_img_wrap reveal from-right${aboutVisible ? " visible" : ""}`}>
            <img
              src={cls.image2}
              alt={`${cls.name} training at Combat 24`}
              loading="lazy"
            />
          </div>
        </div>
        <div className="clp_section_divider" />
      </section>

      {/* ── WHAT YOU'LL LEARN ── */}
      <section className="clp_section" ref={learnRef}>
        <p className={`clp_label nue reveal${learnVisible ? " visible" : ""}`}>Curriculum</p>
        <h2 className={`Anton clp_section_title reveal stagger-1${learnVisible ? " visible" : ""}`}>
          What You'll Learn
        </h2>
        <ol className="clp_learn_list">
          {cls.whatYoullLearn.map((item, i) => (
            <li
              key={i}
              className={`clp_learn_item reveal stagger-${Math.min(i + 2, 6)}${learnVisible ? " visible" : ""}`}
            >
              <span className="clp_learn_num Anton">{String(i + 1).padStart(2, "0")}</span>
              <span className="nue clp_learn_text">{item}</span>
            </li>
          ))}
        </ol>
        <div className="clp_section_divider" />
      </section>

      {/* ── CLASS META ── */}
      <section className="clp_section" ref={metaRef}>
        <p className={`clp_label nue reveal${metaVisible ? " visible" : ""}`}>Class Info</p>
        <h2 className={`Anton clp_section_title reveal stagger-1${metaVisible ? " visible" : ""}`}>
          Details
        </h2>

        <div className="clp_meta_grid">
          {/* Duration */}
          <div className={`clp_meta_card reveal stagger-2${metaVisible ? " visible" : ""}`}>
            <FiClock size={22} className="clp_meta_icon" />
            <span className="clp_meta_label nue">Duration</span>
            <span className="Anton clp_meta_value">{cls.duration}</span>
          </div>

          {/* Intensity */}
          <div className={`clp_meta_card reveal stagger-3${metaVisible ? " visible" : ""}`}>
            <FiZap size={22} className="clp_meta_icon" style={{ color: intensityColor }} />
            <span className="clp_meta_label nue">Intensity</span>
            <span className="Anton clp_meta_value" style={{ color: intensityColor }}>
              {cls.intensity}
            </span>
          </div>

          {/* Who is it for */}
          <div className={`clp_meta_card clp_meta_card--wide reveal stagger-4${metaVisible ? " visible" : ""}`}>
            <FiCalendar size={22} className="clp_meta_icon" />
            <span className="clp_meta_label nue">Who Is It For</span>
            <span className="nue clp_meta_value clp_meta_value--body">{cls.whoIsItFor}</span>
          </div>
        </div>

        {/* Schedule */}
        <div className={`clp_schedule_wrap reveal stagger-5${metaVisible ? " visible" : ""}`}>
          <p className="clp_schedule_heading Anton">Schedule</p>
          <div className="clp_schedule_tags">
            {cls.schedule.map((slot, i) => (
              <span key={i} className="clp_schedule_tag nue">{slot}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={`clp_cta reveal${metaVisible ? " visible" : ""}`}>
        <p className="nue clp_cta_sub">Ready to train?</p>
        <h2 className="Anton clp_cta_title">Start Your {cls.name} Journey</h2>
        <Link to="/contact" className="Anton clp_cta_btn">Get In Touch</Link>
      </section>

      <Footer />
    </>
  );
};

export default ClassProfile;
