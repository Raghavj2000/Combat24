import React from "react";
import { useParams, Link } from "react-router-dom";
import "./CoachProfile.css";
import { COACHES_DATA } from "../../data/coachesData";
import Footer from "../../components/Footer/Footer";
import SEO from "../../components/SEO/SEO";
import useInView from "../../utils/useInView";
import { FiArrowLeft } from "react-icons/fi";

const CoachProfile = () => {
  const { slug } = useParams();
  const coach = COACHES_DATA.find((c) => c.slug === slug);

  const [aboutRef,  aboutVisible]  = useInView(0.15);
  const [achRef,    achVisible]    = useInView(0.1);
  const [teachRef,  teachVisible]  = useInView(0.1);

  if (!coach) {
    return (
      <div className="cp_notfound">
        <h2 className="Anton">Coach not found</h2>
        <Link to="/coaches" className="nue cp_notfound_link">← Back to Coaches</Link>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={`${coach.name} — ${coach.role} | Combat 24`}
        description={coach.description}
        keywords={`${coach.name}, ${coach.role}, combat 24, martial arts coach, Bengaluru`}
        url={`/coaches/${coach.slug}`}
      />

      {/* ── HERO ── */}
      <section className="cp_hero">
        <div className="cp_hero_img">
          <img src={coach.image} alt={`${coach.name} — ${coach.role}`} />
        </div>
        <div className="cp_hero_overlay" aria-hidden="true" />
        <Link to="/coaches" className="cp_back nue">
          <FiArrowLeft size={16} />
          <span>All Coaches</span>
        </Link>
        <div className="cp_hero_content">
          <p className="cp_hero_role nue">{coach.role}</p>
          <h1 className="Anton cp_hero_name">{coach.name}</h1>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="cp_section" ref={aboutRef}>
        <div className={`cp_about reveal from-left${aboutVisible ? " visible" : ""}`}>
          <div className="cp_about_text">
            <p className="cp_label nue">About</p>
            <h2 className="Anton cp_section_title">{coach.name}</h2>
            {coach.about.split("\n\n").map((para, i) => (
              <p key={i} className="nue cp_body">{para}</p>
            ))}
          </div>
          <div className={`cp_about_img_wrap reveal from-right${aboutVisible ? " visible" : ""}`}>
            <img
              src={coach.image2}
              alt={`${coach.name} training at Combat 24`}
              loading="lazy"
            />
          </div>
        </div>
        <div className="cp_section_divider" />
      </section>

      {/* ── ACHIEVEMENTS ── */}
      <section className="cp_section" ref={achRef}>
        <p className={`cp_label nue reveal${achVisible ? " visible" : ""}`}>Highlights</p>
        <h2 className={`Anton cp_section_title reveal stagger-1${achVisible ? " visible" : ""}`}>
          Achievements
        </h2>
        <ol className="cp_ach_list">
          {coach.achievements.map((item, i) => (
            <li
              key={i}
              className={`cp_ach_item reveal stagger-${Math.min(i + 2, 6)}${achVisible ? " visible" : ""}`}
            >
              <span className="cp_ach_num Anton">{String(i + 1).padStart(2, "0")}</span>
              <span className="nue cp_ach_text">{item}</span>
            </li>
          ))}
        </ol>
        <div className="cp_section_divider" />
      </section>

      {/* ── WHAT I TEACH ── */}
      <section className="cp_section" ref={teachRef}>
        <p className={`cp_label nue reveal${teachVisible ? " visible" : ""}`}>Specialisations</p>
        <h2 className={`Anton cp_section_title reveal stagger-1${teachVisible ? " visible" : ""}`}>
          What I Teach
        </h2>
        <div className="cp_tags_wrap">
          {coach.teaches.map((t, i) => (
            <span
              key={i}
              className={`cp_tag nue reveal stagger-${Math.min(i + 2, 5)}${teachVisible ? " visible" : ""}`}
            >
              {t}
            </span>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default CoachProfile;
