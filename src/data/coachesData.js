import coachPavan    from "../assets/pavan_coach.webp";
import coachKaustubh from "../assets/kaustubh_coach.webp";
import coachSourabh  from "../assets/Coach Sourabh.webp";
import coachPriya    from "../assets/Coach Priya.webp";

// Secondary dummy action shots
import img2Pavan    from "../assets/group2.webp";
import img2Kaustubh from "../assets/group3.webp";
import img2Sourabh  from "../assets/group4.webp";
import img2Priya    from "../assets/girl1.webp";

export const COACHES_DATA = [
  {
    id: 1,
    slug: "pavan-kumar",
    name: "Pavan Kumar",
    designation: "Head Coach",
    role: "Head Coach & Founder",
    specialty: "MMA · Boxing · S&C",
    image: coachPavan,
    image2: img2Pavan,
    description:
      "Boasting 12+ years of combat experience, he led Team India to the Muay Thai World Championships in 2023 and 2024.",
    bio: "12+ years of combat experience. Built Combat 24 to make elite training accessible to everyone.",
    about: `Pavan Kumar is the founder and Head Coach of Combat 24, bringing over 12 years of professional combat sports experience to every session. A certified Muay Thai instructor and strength & conditioning specialist, Pavan has trained hundreds of fighters — from complete beginners to national-level competitors.

He led Team India to the Muay Thai World Championships in both 2023 and 2024, a testament to the world-class calibre of training at Combat 24. His coaching philosophy centres on building mental toughness alongside physical ability, believing that true transformation happens both inside and outside the ring.`,
    achievements: [
      "Led Team India to the Muay Thai World Championships (2023 & 2024)",
      "Certified Muay Thai Instructor — Level 3",
      "Strength & Conditioning Specialist — NSCA Certified",
      "12+ years of professional combat sports experience",
      "Trained 200+ competitive fighters",
    ],
    teaches: ["Muay Thai", "Boxing", "MMA", "Strength & Conditioning"],
  },
  {
    id: 2,
    slug: "kausthubh-ramesh",
    name: "Kausthubh Ramesh",
    designation: "Coach",
    role: "Coach",
    specialty: "Muay Thai · Nutrition · S&C",
    image: coachKaustubh,
    image2: img2Kaustubh,
    description:
      "Currently holds Gold in the South Zone Muay Thai Championship. Certified nutritionist and S&C Coach.",
    bio: "Gold medalist at the South Zone Muay Thai Championship. Certified nutritionist bringing technical precision to every class.",
    about: `Kausthubh Ramesh is a decorated combat sports athlete and certified coach at Combat 24. Holding the gold medal at the South Zone Muay Thai Championship, he brings elite competitive experience to every training session.

Beyond his striking expertise, Kausthubh is a certified nutritionist and strength & conditioning coach — making him one of the most well-rounded coaches on the team. His classes are known for their precise technical focus and high-energy atmosphere, pushing athletes to discover strength they didn't know they had.`,
    achievements: [
      "Gold medalist — South Zone Muay Thai Championship",
      "Certified Nutritionist (Sports Nutrition)",
      "Certified Strength & Conditioning Coach",
      "Competed in 30+ professional bouts",
      "5+ years of coaching experience",
    ],
    teaches: ["Muay Thai", "Kickboxing", "Strength & Conditioning", "Nutrition"],
  },
  {
    id: 3,
    slug: "sourabh-patil",
    name: "Sourabh Patil",
    designation: "Coach",
    role: "Co-Founder",
    specialty: "Muay Thai",
    image: coachSourabh,
    image2: img2Sourabh,
    description:
      "National Muay Thai Champion 2024. Certified in Functional Training with over 5 years of experience.",
    bio: "National Muay Thai Champion 2024. Trained under Pavan Kumar and rose through the ranks to represent India.",
    about: `Sourabh Patil is the Co-Founder of Combat 24 and a National Muay Thai Champion. He began his journey as a student under Pavan Kumar, quickly rising through the ranks to become one of the country's top Muay Thai competitors.

His 2024 National Championship title stands as proof of the elite training environment he helped build at Combat 24. Sourabh's teaching style is rooted in the foundations of Thai boxing — precise technique, strategic ring craft, and relentless conditioning. His sessions challenge even the most experienced practitioners.`,
    achievements: [
      "National Muay Thai Champion 2024",
      "Co-Founder of Combat 24",
      "Represented Karnataka in multiple national competitions",
      "Certified Muay Thai Instructor",
      "5+ years of competitive experience",
    ],
    teaches: ["Muay Thai", "Boxing", "Kickboxing"],
  },
  {
    id: 4,
    slug: "priya-yatanoor",
    name: "Priya Yatanoor",
    designation: "Coach",
    role: "Coach",
    specialty: "Kickboxing · Fitness",
    image: coachPriya,
    image2: img2Priya,
    description:
      "With over 12 years of experience in Strength and Conditioning, she is a former Gold medalist in the National Muay Thai Series.",
    bio: "Combines striking and conditioning in high-energy sessions. A favourite among members new to combat sports.",
    about: `Priya Yatanoor is a powerhouse in the world of strength, conditioning, and striking. With over 12 years of experience, she is a former gold medalist in the National Muay Thai Series and a certified personal trainer.

Priya specialises in building athleticism from the ground up — her classes combine explosive striking with functional strength work, making them a favourite for members of all levels. She is particularly passionate about making combat sports accessible and empowering for women, and has helped dozens of female members discover confidence, strength, and discipline through training.`,
    achievements: [
      "Former Gold medalist — National Muay Thai Series",
      "Certified Personal Trainer (CPT)",
      "12+ years of experience in combat sports and fitness",
      "Specialist in women's self-defence and empowerment",
      "Conducted 50+ women's self-defence workshops",
    ],
    teaches: ["Muay Thai", "Kickboxing", "Self Defence", "Strength & Conditioning"],
  },
];
