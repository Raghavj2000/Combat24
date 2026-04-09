import React from "react";
import "./Schedule.css";
import scheduleFile from "../../files/schedule.pdf";
import Footer from "../../components/Footer/Footer";
import SEO from "../../components/SEO/SEO";
import useInView from "../../utils/useInView";

const scheduleData = [
  {
    day: "Monday",
    activities: [
      { title: "Muay Thai",               time: "7:00 AM – 8:00 AM" },
      { title: "Boxing",                  time: "8:00 AM – 9:00 AM" },
      { title: "MMA (Ground)",            time: "5:00 PM – 6:00 PM" },
      { title: "Little Champs (Age 4–12)",time: "6:00 PM – 7:00 PM" },
      { title: "Muay Thai",               time: "7:00 PM – 8:00 PM" },
      { title: "Crossfit",                time: "8:00 PM – 9:00 PM" },
      { title: "Boxing",                  time: "9:00 PM – 10:00 PM" },
    ],
  },
  {
    day: "Tuesday",
    activities: [
      { title: "Kick Boxing",                          time: "7:00 AM – 8:00 AM" },
      { title: "Crossfit",                             time: "8:00 AM – 9:00 AM" },
      { title: "Self Training and Personal Training",  time: "9:00 AM – 5:00 PM" },
      { title: "Muay Thai",                            time: "5:00 PM – 6:00 PM" },
      { title: "Open Bag (Self Training)",             time: "6:00 PM – 7:00 PM" },
      { title: "Boxing",                               time: "7:00 PM – 8:00 PM" },
      { title: "MMA (Ground)",                         time: "8:00 PM – 9:00 PM" },
      { title: "Muay Thai",                            time: "9:00 PM – 10:00 PM" },
    ],
  },
  {
    day: "Wednesday",
    activities: [
      { title: "Muay Thai Pads",                      time: "7:00 AM – 8:00 AM" },
      { title: "Self Training and Personal Training", time: "9:00 AM – 5:00 PM" },
      { title: "Boxing",                              time: "5:00 PM – 6:00 PM" },
      { title: "Little Champs (Age 4–12)",            time: "6:00 PM – 7:00 PM" },
      { title: "Muay Thai Pads",                      time: "7:00 PM – 8:00 PM" },
      { title: "Crossfit",                            time: "8:00 PM – 9:00 PM" },
    ],
  },
  {
    day: "Thursday",
    activities: [
      { title: "Crossfit",                 time: "7:00 AM – 8:00 AM" },
      { title: "Boxing",                   time: "8:00 AM – 9:00 AM" },
      { title: "Kick Boxing",              time: "5:00 PM – 6:00 PM" },
      { title: "Open Bag (Self Training)", time: "6:00 PM – 7:00 PM" },
      { title: "MMA (Ground)",             time: "7:00 PM – 8:00 PM" },
      { title: "Muay Thai",                time: "8:00 PM – 9:00 PM" },
      { title: "Kick Boxing",              time: "9:00 PM – 10:00 PM" },
    ],
  },
  {
    day: "Friday",
    activities: [
      { title: "MMA (Ground)",          time: "7:00 AM – 8:00 AM" },
      { title: "Muay Thai",             time: "8:00 AM – 9:00 AM" },
      { title: "Crossfit",              time: "5:00 PM – 6:00 PM" },
      { title: "Little Champs (Age 4–12)", time: "6:00 PM – 7:00 PM" },
      { title: "Beginner Sparring",     time: "7:00 PM – 8:00 PM" },
      { title: "MMA (Ground)",          time: "9:00 PM – 10:00 PM" },
    ],
  },
  {
    day: "Saturday",
    activities: [
      { title: "Running and Sparring", time: "7:00 AM – 8:00 AM" },
      { title: "Weekend Batch",        time: "4:30 PM – 6:00 PM" },
    ],
  },
  {
    day: "Sunday",
    activities: [
      { title: "Weekend Batch", time: "4:30 PM – 6:00 PM" },
    ],
  },
];

/* Each day row gets its own IntersectionObserver */
const DayRow = ({ schedule, index, isLast }) => {
  const [ref, visible] = useInView(0.15);

  return (
    <div className="schedule_wrapper" ref={ref}>
      <div
        className={`schedule_container reveal from-left stagger-${(index % 3) + 1}${visible ? " visible" : ""}`}
      >
        <div className="day_container">
          <h3 className="Anton day_title">{schedule.day}</h3>
        </div>
        <div className="time_table_container">
          {schedule.activities.map((activity, ai) => (
            <div
              key={ai}
              className={`time_table_day reveal stagger-${Math.min(ai + 1, 8)}${visible ? " visible" : ""}`}
            >
              <h3 className="Anton time_table_title">{activity.title}</h3>
              <p className="nue">{activity.time}</p>
            </div>
          ))}
        </div>
      </div>
      {!isLast && <div className="schedule_line" />}
    </div>
  );
};

const Schedule = () => {
  const [headingRef, headingVisible] = useInView(0.4);

  const scheduleStructuredData = {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    name: "Combat 24 Weekly Schedule",
    url: "https://combat24.com/schedule",
    openingHours: ["Mo 07:00-22:00", "Tu 07:00-22:00", "We 07:00-22:00",
                   "Th 07:00-22:00", "Fr 07:00-22:00", "Sa 07:00-18:00", "Su 16:30-18:00"],
  };

  return (
    <>
      <SEO
        title="Weekly Class Schedule - Martial Arts & Fitness Classes | Combat 24"
        description="View our weekly martial arts and fitness class schedule. Boxing, Muay Thai, MMA, Kickboxing, Crossfit, and Little Champs classes in Bengaluru."
        keywords="martial arts schedule, boxing schedule, MMA schedule, muay thai timing, kickboxing schedule, crossfit classes, Bengaluru"
        url="/schedule"
        structuredData={scheduleStructuredData}
      />

      <section id="schedule">
        {/* Heading */}
        <div
          ref={headingRef}
          className={`schedule_heading reveal${headingVisible ? " visible" : ""}`}
        >
          <p className="schedule_label nue">Plan Your Week</p>
          <h1 className="Anton schedule_title">Weekly Schedule</h1>
        </div>

        {/* Day rows */}
        {scheduleData.map((schedule, index) => (
          <DayRow
            key={schedule.day}
            schedule={schedule}
            index={index}
            isLast={index === scheduleData.length - 1}
          />
        ))}

        <p className="nue schedule_pdf">
          Download the schedule PDF&nbsp;
          <a href={scheduleFile} download="schedule.pdf">here.</a>
        </p>
      </section>

      <Footer />
    </>
  );
};

export default Schedule;
