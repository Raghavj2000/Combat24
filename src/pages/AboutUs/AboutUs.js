import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./AboutUs.css";
import Footer from "../../components/Footer/Footer";
import SEO from "../../components/SEO/SEO";
import { COACHES_DATA } from "../../data/coachesData";

import group   from "../../assets/group.webp";
import group3  from "../../assets/group3.webp";
import group4  from "../../assets/c24together.webp";

/* ─────────────────────────────────────────
   Hooks
───────────────────────────────────────── */

/** Returns a ref + boolean — true once the element scrolls into view */
const useInView = (threshold = 0.18) => {
  const ref     = useRef(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setSeen(true); },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, seen];
};

/** Counts from 0 → target over `duration` ms once `trigger` is true */
const useCountUp = (target, duration = 1800, trigger = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    let frame = 0;
    const totalFrames = Math.round((duration / 1000) * 60);
    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      // Ease-out curve
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.min(Math.round(eased * target), target));
      if (frame >= totalFrames) clearInterval(timer);
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [trigger, target, duration]);

  return count;
};

/* ─────────────────────────────────────────
   Data
───────────────────────────────────────── */

const STATS = [
  { value: 12,  suffix: "+", label: "Years Experience" },
  { value: 200, suffix: "+", label: "Active Members" },
  { value: 6,   suffix: "",  label: "Disciplines" },
  { value: 4,   suffix: "",  label: "Expert Coaches" },
];

const VALUES = [
  {
    id: 1,
    number: "01",
    title: "Respect",
    body:
      "Every person who walks through our doors is treated as an equal — beginner or champion, day one or year five. Mutual respect is the foundation of every session.",
  },
  {
    id: 2,
    number: "02",
    title: "Discipline",
    body:
      "Real transformation happens when you show up consistently. We build habits that extend far beyond the gym — into how you carry yourself every single day.",
  },
  {
    id: 3,
    number: "03",
    title: "Community",
    body:
      "You don't train alone here. Every punch, every rep, every win is shared. We grow stronger together — on the mat and off it.",
  },
  {
    id: 4,
    number: "04",
    title: "Accessibility",
    body:
      "Quality combat training should not be a privilege. We keep our doors and our prices open so anyone with the will to grow can walk in.",
  },
];


/* ─────────────────────────────────────────
   Sub-components
───────────────────────────────────────── */

const StatItem = ({ value, suffix, label, trigger }) => {
  const count = useCountUp(value, 1800, trigger);
  return (
    <div className="stat_item">
      <span className="stat_number Anton">
        {count}{suffix}
      </span>
      <span className="stat_label nue">{label}</span>
    </div>
  );
};

const ValueCard = ({ item, isOpen, onToggle }) => (
  <div
    className={`value_card${isOpen ? " value_card--open" : ""}`}
    onClick={onToggle}
    role="button"
    tabIndex={0}
    onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") onToggle(); }}
    aria-expanded={isOpen}
  >
    <div className="value_card_header">
      <span className="value_number nue">{item.number}</span>
      <h3 className="value_title Anton">{item.title}</h3>
      <span className="value_chevron" aria-hidden="true">
        {isOpen ? "−" : "+"}
      </span>
    </div>
    <div className="value_body_wrapper">
      <p className="value_body nue">{item.body}</p>
    </div>
  </div>
);

const CoachCard = ({ coach }) => (
  <Link to={`/coaches/${coach.slug}`} className="coach_card" aria-label={`View ${coach.name}'s profile`}>
    <div className="coach_img_wrap">
      <img
        src={coach.image}
        alt={`${coach.name} — ${coach.role} at Combat 24`}
        loading="lazy"
      />
      <div className="coach_overlay">
        <p className="coach_bio nue">{coach.bio}</p>
      </div>
    </div>
    <div className="coach_info">
      <h3 className="coach_name Anton">{coach.name}</h3>
      <p className="coach_role nue">{coach.role}</p>
      <span className="coach_specialty nue">{coach.specialty}</span>
    </div>
  </Link>
);

/* ─────────────────────────────────────────
   Page
───────────────────────────────────────── */

const AboutUs = () => {
  const [openValue, setOpenValue] = useState(null);

  const [statsRef,   statsInView]   = useInView(0.3);
  const [storyRef,   storyInView]   = useInView(0.15);
  const [missionRef, missionInView] = useInView(0.15);
  const [valuesRef,  valuesInView]  = useInView(0.1);
  const [coachRef,   coachInView]   = useInView(0.1);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Combat 24",
    description:
      "Combat 24 is a premium martial arts and fitness training facility founded by Head Coach Pavan Kumar and National Muay Thai champion Sourabh Patil.",
    url: "https://combat24.com/about",
    logo: "https://combat24.com/c24Logo.webp",
    address: {
      "@type": "PostalAddress",
      streetAddress: "No.28, 3rd Floor, Anjanadri Arcade, 1st Main, CBI Road, Ganganagar",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      postalCode: "560032",
      addressCountry: "IN",
    },
    telephone: "+91-8073423859",
    email: "combat24india@gmail.com",
    founder: [
      { "@type": "Person", name: "Pavan Kumar",   jobTitle: "Head Coach" },
      { "@type": "Person", name: "Sourabh Patil", jobTitle: "Coach" },
    ],
    sameAs: [
      "https://www.facebook.com/combat.24",
      "https://www.instagram.com/combat.24",
    ],
  };

  return (
    <>
      <SEO
        title="About Combat 24 - Our Story, Mission & Values | Martial Arts Training"
        description="Discover the story behind Combat 24. Founded by Head Coach Pavan Kumar and National Muay Thai champion Sourabh Patil."
        keywords="about combat 24, pavan kumar coach, sourabh patil muay thai, combat sports Bengaluru"
        url="/about"
        structuredData={structuredData}
      />

      {/* ── HERO ── */}
      <section id="about_hero" aria-label="About Combat 24">
        <div className="about_hero_overlay" aria-hidden="true" />
        <div className="about_hero_content">
          <p className="about_hero_label nue">Our Story</p>
          <h1 className="Anton about_hero_title">
            Built by Warriors.<br />For Warriors.
          </h1>
          <p className="about_hero_sub nue">
            From a shared vision to Bengaluru&apos;s premier combat sports gym —
            this is how Combat 24 was born.
          </p>
        </div>
        <div className="scroll_indicator" aria-hidden="true">
          <span />
        </div>
      </section>

      {/* ── STATS ── */}
      <section id="about_stats" ref={statsRef} aria-label="Combat 24 by the numbers">
        <div className="stats_grid">
          {STATS.map((s) => (
            <StatItem key={s.label} {...s} trigger={statsInView} />
          ))}
        </div>
      </section>

      {/* ── STORY ── */}
      <section
        id="about_story"
        ref={storyRef}
        className={`reveal_section${storyInView ? " is-visible" : ""}`}
        aria-label="How Combat 24 started"
      >
        <div className="about_story_image">
          <img
            src={group}
            alt="Combat 24 founders and team"
            width="600"
            height="450"
            loading="lazy"
          />
        </div>
        <div className="about_story_text">
          <p className="section_label nue">Get To Know Us</p>
          <h2 className="Anton">Where It All Began</h2>
          <p className="nue">
            Founder and Head Coach Pavan Kumar spent years working in various
            gyms, helping people transform — whether they were training to get
            fit or chasing championship dreams. Sourabh, a dedicated student of
            Pavan Kumar, rose through the ranks to become a national Muay Thai
            champion.
          </p>
          <p className="nue">
            As their bond grew, so did a bigger purpose: to make quality combat
            sports training affordable and accessible to everyone. With the
            support of their close friend Arvind Acharya, that vision became a
            reality — Combat 24.
          </p>
        </div>
      </section>

      {/* ── MISSION ── */}
      <section
        id="about_mission"
        ref={missionRef}
        className={`reveal_section${missionInView ? " is-visible" : ""}`}
        aria-label="Our mission"
      >
        <div className="mission_image">
          <img
            src={group3}
            alt="Combat 24 members training together"
            width="600"
            height="480"
            loading="lazy"
          />
        </div>
        <div className="mission_text">
          <p className="section_label nue">Our Mission</p>
          <h2 className="Anton">Empowering Every Individual Through Combat</h2>
          <p className="nue">
            At Combat 24, our mission is to empower individuals of all
            backgrounds to unlock their full potential through combat sports. We
            believe training is more than just physical — it&apos;s a journey of
            mental strength, confidence, and discipline.
          </p>
          <p className="nue">
            We are committed to providing a welcoming, safe, and affordable
            space where everyone can grow, push limits, and transform their
            lives inside and outside the gym.
          </p>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section
        id="about_values"
        ref={valuesRef}
        className={`reveal_section${valuesInView ? " is-visible" : ""}`}
        aria-label="Core values"
      >
        <div className="values_header">
          <p className="section_label nue">What We Stand For</p>
          <h2 className="Anton">Core Values</h2>
        </div>
        <div className="values_layout">
          <div className="values_list">
            {VALUES.map((v) => (
              <ValueCard
                key={v.id}
                item={v}
                isOpen={openValue === v.id}
                onToggle={() => setOpenValue(openValue === v.id ? null : v.id)}
              />
            ))}
          </div>
          <div className="values_image">
            <img
              src={group4}
              alt="Combat 24 community training together"
              width="500"
              height="600"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ── COACHES ── */}
      <section
        id="about_coaches"
        ref={coachRef}
        className={`reveal_section${coachInView ? " is-visible" : ""}`}
        aria-label="Our coaching team"
      >
        <div className="coaches_header">
          <p className="section_label nue">The Team</p>
          <h2 className="Anton">Meet Your Coaches</h2>
        </div>
        <div className="coaches_grid">
          {COACHES_DATA.map((c, i) => (
            <div
              key={c.id}
              className="coach_card_wrapper"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <CoachCard coach={c} />
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AboutUs;
