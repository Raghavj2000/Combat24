import boxing       from "../assets/boxing.webp";
import kickboxing   from "../assets/kickboxing.webp";
import muaithai     from "../assets/muay thai.webp";
import mmaGrappling from "../assets/mma grappling.webp";
import mmaStriking  from "../assets/mma striking.webp";
import sc           from "../assets/S&C.webp";
import crossFit     from "../assets/cross fit.webp";
import sd           from "../assets/sd.webp";

// Secondary images (reused from existing assets)
import img2Boxing      from "../assets/group2.webp";
import img2Muay        from "../assets/group3.webp";
import img2MmaG        from "../assets/group4.webp";
import img2MmaS        from "../assets/c24together.webp";
import img2Kick        from "../assets/girl1.webp";
import img2SC          from "../assets/cardioGuy.webp";
import img2CrossFit    from "../assets/girl2.webp";
import img2SD          from "../assets/group.webp";

export const CLASSES_DATA = [
  {
    id: 1,
    slug: "boxing",
    name: "Boxing",
    image: boxing,
    image2: img2Boxing,
    tagline: "The Sweet Science",
    description:
      "Learn the fundamentals of footwork, head movement, and punching techniques through high-intensity drills and sparring.",
    about: `Boxing at Combat 24 is built around one principle: technique before power. Whether you've never thrown a punch or you're preparing for your first bout, our boxing classes strip the sport back to its fundamentals and rebuild your skills from the ground up.

Our sessions cover stance, footwork, head movement, combination work on pads and bags, defensive drills, and controlled sparring for those ready to go live. Every class ends with conditioning work designed to push your limits.`,
    whatYoullLearn: [
      "Proper stance, guard, and footwork fundamentals",
      "Straight punches — jab, cross, uppercut, hook",
      "Slipping, rolling, and parrying incoming shots",
      "Combination work on pads and heavy bags",
      "Ring craft and fight IQ",
      "Cardiovascular conditioning through boxing circuits",
    ],
    whoIsItFor:
      "Beginners to advanced athletes. Great for fitness, self-defence, or competitive boxing.",
    duration: "60 minutes",
    intensity: "Medium – High",
    schedule: ["Monday 7:00 AM", "Monday 8:00 AM", "Wednesday 5:00 PM", "Thursday 8:00 AM", "Tuesday 7:00 PM"],
  },
  {
    id: 2,
    slug: "muay-thai",
    name: "Muay Thai",
    image: muaithai,
    image2: img2Muay,
    tagline: "The Art of Eight Limbs",
    description:
      "Master the art of 8 limbs — fists, elbows, knees, and shins — in a powerful striking-focused martial art from Thailand.",
    about: `Muay Thai is Thailand's national sport and one of the most effective striking arts in the world. At Combat 24, we teach authentic Muay Thai — rooted in Thai tradition but adapted for modern fighters.

You will learn to strike with all eight weapons: fists, elbows, knees, and legs. Classes progress from technique and pad work through to clinch work, partner drills, and sparring. Our coaches hold Level 3 Muay Thai certifications and have competed at national and international level.`,
    whatYoullLearn: [
      "The eight limbs: punches, kicks, elbows, and knees",
      "Traditional Muay Thai stance and footwork",
      "Clinch work — controlling and attacking in close range",
      "Pad holding and partner drills",
      "Thai kick mechanics and power generation",
      "Defensive sweeps, checks, and counters",
    ],
    whoIsItFor:
      "All levels. A cornerstone class at Combat 24 — suitable for fitness seekers and serious competitors alike.",
    duration: "60 minutes",
    intensity: "High",
    schedule: ["Monday 7:00 PM", "Tuesday 5:00 PM", "Wednesday 7:00 PM", "Friday 8:00 AM", "Thursday 8:00 PM"],
  },
  {
    id: 3,
    slug: "mma-grappling",
    name: "MMA (Grappling)",
    image: mmaGrappling,
    image2: img2MmaG,
    tagline: "Control the Ground",
    description:
      "Focuses on takedowns, submissions, and ground control using techniques from wrestling and Brazilian Jiu-Jitsu.",
    about: `The ground game is where fights are often won or lost. Our MMA Grappling class draws from wrestling, BJJ, and submission grappling to give you complete control once a fight hits the mat.

You will work on takedowns, trips, and throws, before transitioning to positional control, escapes, and submission hunting. All levels are welcome — beginners start with the basics of positions and movement, while experienced grapplers refine their game and explore advanced transitions.`,
    whatYoullLearn: [
      "Single-leg and double-leg takedowns",
      "Clinch to ground transitions",
      "Mount, guard, side control, and back control",
      "Submission holds: arm bars, chokes, leg locks",
      "Escapes and reversals from bad positions",
      "Live rolling for practical application",
    ],
    whoIsItFor:
      "All levels. Essential for any MMA fighter and highly recommended as a standalone class for self-defence.",
    duration: "60 minutes",
    intensity: "Medium – High",
    schedule: ["Monday 5:00 PM", "Tuesday 8:00 PM", "Thursday 7:00 PM", "Friday 7:00 AM", "Friday 9:00 PM"],
  },
  {
    id: 4,
    slug: "mma-striking",
    name: "MMA (Striking)",
    image: mmaStriking,
    image2: img2MmaS,
    tagline: "Striking for the Cage",
    description:
      "Blends elements of boxing, Muay Thai, and kickboxing to improve striking accuracy, defense, and movement.",
    about: `MMA Striking is the fusion of all stand-up combat arts — refined for the modern mixed martial artist. This class bridges the gap between traditional striking disciplines and real MMA application.

You will learn how to use boxing, Muay Thai, and kickboxing tools together, adapting your striking for the unique demands of MMA: avoiding takedowns, landing shots in the clinch, and transitioning fluidly between ranges. Ideal for those who want to compete in MMA or simply build a well-rounded striking game.`,
    whatYoullLearn: [
      "Integrating punches, kicks, knees, and elbows",
      "Striking in and out of the clinch range",
      "Takedown defence while landing strikes",
      "MMA-specific combinations and cage work",
      "Distance management and timing",
      "Defensive movement adapted for MMA",
    ],
    whoIsItFor:
      "Intermediate to advanced. Best suited for those with some striking background looking to build MMA-specific skills.",
    duration: "60 minutes",
    intensity: "High",
    schedule: ["Wednesday 5:00 PM", "Friday 5:00 PM"],
  },
  {
    id: 5,
    slug: "kickboxing",
    name: "Kick Boxing",
    image: kickboxing,
    image2: img2Kick,
    tagline: "Punches. Kicks. Power.",
    description:
      "Combine punches and kicks for a dynamic cardio workout that builds endurance, speed, and coordination.",
    about: `Kickboxing at Combat 24 is the perfect blend of fitness and fighting technique. Classes are high-energy and fast-paced, combining punching combinations with powerful kicks in a way that builds real athleticism and practical striking ability.

Whether your goal is to get fit, lose weight, build confidence, or eventually compete, our kickboxing classes scale to your level. Sessions are pad-heavy, keeping your heart rate up while sharpening your technique.`,
    whatYoullLearn: [
      "Fundamental punching: jab, cross, hook, uppercut",
      "Roundhouse, front, and side kicks",
      "Punch-kick combination sequences",
      "Footwork and ring movement",
      "Defensive blocks and counters",
      "Endurance training through high-intensity rounds",
    ],
    whoIsItFor:
      "All levels. Especially popular as a high-energy fitness class that also teaches real striking skills.",
    duration: "60 minutes",
    intensity: "High",
    schedule: ["Tuesday 7:00 AM", "Thursday 5:00 PM", "Thursday 9:00 PM"],
  },
  {
    id: 6,
    slug: "strength-and-conditioning",
    name: "S & C",
    image: sc,
    image2: img2SC,
    tagline: "Build the Athlete",
    description:
      "Strength and Conditioning sessions designed to boost athletic performance, muscle strength, and endurance.",
    about: `Strength & Conditioning at Combat 24 is built specifically for combat athletes. These sessions are not generic gym workouts — every exercise is programmed to improve the qualities that matter in fighting: explosive power, grip strength, core stability, and endurance under fatigue.

Coached by certified S&C specialists, sessions use a mix of barbell work, kettlebells, battle ropes, bodyweight movements, and energy system training to build a body that performs as well as it looks. Perfect as a standalone class or as a supplement to your martial arts training.`,
    whatYoullLearn: [
      "Compound lifts: squat, deadlift, press progressions",
      "Explosive power: plyometrics and Olympic lift variations",
      "Grip and core strength for grappling",
      "Energy system development for combat endurance",
      "Mobility and injury prevention programming",
      "Nutrition basics and recovery principles",
    ],
    whoIsItFor:
      "All levels. Designed for combat athletes but open to anyone who wants functional, performance-focused training.",
    duration: "60 minutes",
    intensity: "High",
    schedule: ["Monday 8:00 PM", "Tuesday 8:00 AM", "Wednesday 8:00 PM", "Thursday 7:00 AM", "Friday 5:00 PM"],
  },
  {
    id: 7,
    slug: "crossfit",
    name: "Cross-Fit",
    image: crossFit,
    image2: img2CrossFit,
    tagline: "Forged Through Fire",
    description:
      "High-intensity functional training focused on improving strength, flexibility, and overall fitness.",
    about: `CrossFit at Combat 24 brings the intensity of functional fitness training to a combat sports environment. Every session is a different workout — constantly varied movements performed at high intensity to produce broad, general, and inclusive fitness.

Sessions combine gymnastics, weightlifting, and metabolic conditioning into fast-paced workouts that challenge your body in ways it's never been challenged before. No two classes are the same, and the community atmosphere keeps everyone pushing each other to hit new personal bests.`,
    whatYoullLearn: [
      "Olympic weightlifting fundamentals",
      "Gymnastics movements: pull-ups, muscle-ups, handstands",
      "High-intensity metabolic conditioning",
      "Scaling and modification techniques",
      "Proper movement mechanics to prevent injury",
      "Mental toughness through challenging WODs",
    ],
    whoIsItFor:
      "All fitness levels. Every workout is scalable to individual ability.",
    duration: "60 minutes",
    intensity: "Very High",
    schedule: ["Monday 8:00 PM", "Tuesday 8:00 AM", "Wednesday 8:00 PM", "Thursday 7:00 AM", "Saturday 7:00 AM"],
  },
  {
    id: 8,
    slug: "self-defence",
    name: "Self Defence",
    image: sd,
    image2: img2SD,
    tagline: "Awareness. Confidence. Protection.",
    description:
      "Practical techniques to stay safe in real-world situations, building confidence, awareness, and quick response skills.",
    about: `Self Defence at Combat 24 is not about sport — it's about practical survival. Our curriculum is drawn from Muay Thai, wrestling, and situational awareness training to give you the tools to protect yourself and your loved ones in real-world scenarios.

Classes cover threat recognition, de-escalation, wrist releases, choke defences, takedown awareness, and striking in close quarters. We believe self-defence is a life skill that everyone should have — our classes are non-intimidating, grounded in reality, and taught with clear progression.`,
    whatYoullLearn: [
      "Situational awareness and threat de-escalation",
      "Wrist grabs, hair pulls, and choke defences",
      "Striking in close-range self-defence situations",
      "Takedown awareness and anti-grappling basics",
      "How to create distance and escape",
      "Ground survival and getting back to your feet",
    ],
    whoIsItFor:
      "Everyone. Particularly recommended for beginners, women, and anyone with no prior martial arts experience.",
    duration: "60 minutes",
    intensity: "Low – Medium",
    schedule: ["Friday 6:00 PM – 7:00 PM (Little Champs combined)"],
  },
];
