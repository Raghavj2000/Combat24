import React from "react";
import "./Schedule.css";
import scheduleFile from "../../files/schedule.pdf";
import Footer from "../../components/Footer/Footer";
import SEO from "../../components/SEO/SEO";

const Schedule = () => {
  const scheduleData = [
    {
      day: "Monday",
      activities: [
        { title: "Muay Thai", time: "7:00 AM - 8:00 AM" },
        { title: "Boxing", time: "8:00 AM - 9:00 AM" },
        { title: "MMA (Ground)", time: "5:00 PM - 6:00 PM" },
        { title: "Little Champs (Age 4-12)", time: "6:00 PM - 7:00 PM" },
        { title: "Muay Thai", time: "7:00 PM - 8:00 PM" },
        { title: "Crossfit", time: "8:00 PM - 9:00 PM" },
        { title: "Boxing", time: "9:00 PM - 10:00 PM" },
      ],
    },
    {
      day: "Tuesday",
      activities: [
        { title: "Kick Boxing", time: "7:00 AM - 8:00 AM" },
        { title: "Crossfit", time: "8:00 AM - 9:00 AM" },
        { title: "Self Training and Personal Training", time: "9:00 AM - 5:00 PM" },
        { title: "Muay Thai", time: "5:00 PM - 6:00 PM" },
        { title: "Open Bag (Self Training)", time: "6:00 PM - 7:00 PM" },
        { title: "Boxing", time: "7:00 PM - 8:00 PM" },
        { title: "MMA (Ground)", time: "8:00 PM - 9:00 PM" },
        { title: "Muay Thai", time: "9:00 PM - 10:00 PM" },
      ],
    },
    {
      day: "Wednesday",
      activities: [
        { title: "Muay Thai Pads", time: "7:00 AM - 8:00 AM" },
        { title: "Self Training and Personal Training", time: "9:00 AM - 5:00 PM" },
        { title: "Boxing", time: "5:00 PM - 6:00 PM" },
        { title: "Little Champs (Age 4-12)", time: "6:00 PM - 7:00 PM" },
        { title: "Muay Thai Pads", time: "7:00 PM - 8:00 PM" },
        { title: "Crossfit", time: "8:00 PM - 9:00 PM" },
      ],
    },
    {
      day: "Thursday",
      activities: [
        { title: "Crossfit", time: "7:00 AM - 8:00 AM" },
        { title: "Boxing", time: "8:00 AM - 9:00 AM" },
        { title: "Kick Boxing", time: "5:00 PM - 6:00 PM" },
        { title: "Open Bag (Self Training)", time: "6:00 PM - 7:00 PM" },
        { title: "MMA (Ground)", time: "7:00 PM - 8:00 PM" },
        { title: "Muay Thai", time: "8:00 PM - 9:00 PM" },
        { title: "Kick Boxing", time: "9:00 PM - 10:00 PM" },
      ],
    },
    {
      day: "Friday",
      activities: [
        { title: "MMA (Ground)", time: "7:00 AM - 8:00 AM" },
        { title: "Muay Thai", time: "8:00 AM - 9:00 AM" },
        { title: "Crossfit", time: "5:00 PM - 6:00 PM" },
        { title: "Little Champs (Age 4-12)", time: "6:00 PM - 7:00 PM" },
        { title: "Beginner Sparring", time: "7:00 PM - 8:00 PM" },
        { title: "MMA (Ground)", time: "9:00 PM - 10:00 PM" },
      ],
    },
    {
      day: "Saturday",
      activities: [
        { title: "Running and Sparring", time: "7:00 AM - 8:00 AM" },
        { title: "Weekend Batch", time: "4:30 PM - 6:00 PM" },
      ],
    },
    {
      day: "Sunday",
      activities: [
        { title: "Weekend Batch", time: "4:30 PM - 6:00 PM" },
      ],
    },
  ];
  
  const scheduleStructuredData = {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    "name": "Combat 24 Weekly Schedule",
    "description": "Weekly martial arts and fitness class schedule including Boxing, Muay Thai, MMA, Kickboxing, Crossfit, and Little Champs classes",
    "url": "https://combat24.com/schedule",
    "openingHours": [
      "Mo 07:00-22:00",
      "Tu 07:00-22:00", 
      "We 07:00-22:00",
      "Th 07:00-22:00",
      "Fr 07:00-22:00",
      "Sa 07:00-18:00",
      "Su 16:30-18:00"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Weekly Class Schedule",
      "itemListElement": scheduleData.map((day, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": `${day.day} Classes`,
          "description": day.activities.map(activity => `${activity.title} (${activity.time})`).join(", ")
        }
      }))
    }
  };

  return (
    <>
      <SEO
        title="Weekly Class Schedule - Martial Arts & Fitness Classes | Combat 24"
        description="View our weekly martial arts and fitness class schedule. Boxing, Muay Thai, MMA, Kickboxing, Crossfit, and Little Champs classes available throughout the week in Bengaluru."
        keywords="martial arts schedule, boxing classes schedule, MMA training schedule, muay thai classes timing, kickboxing schedule, crossfit classes, little champs martial arts, Bengaluru martial arts schedule"
        url="/schedule"
        structuredData={scheduleStructuredData}
      />
      <section id="schedule">
        <h2 className="Anton schedule_title">WEEKLY SCHEDULE</h2>
        {scheduleData.map((schedule, index) => (
          <div className="schedule_wrapper" key={index}>
            <div className="schedule_container" key={index}>
              <div className="day_container Anton">
                <h3 className="Anton day_title">{schedule.day}</h3>
              </div>
              <div className="time_table_container">
                {schedule.activities.map((activity, activityIndex) => (
                  <div className="time_table_day " key={activityIndex}>
                    <h3 className="Anton time_table_title">{activity.title}</h3>
                    <p className="nue">{activity.time}</p>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="schedule_line"
              style={{
                display: index === scheduleData.length - 1 ? "none" : "block",
              }}
            ></div>
          </div>
        ))}
        <p className="nue schedule_pdf">
          Find the Schedule pdf&nbsp;
          <span style={{ textDecoration: "underline" }}>
            <a href={scheduleFile} download="schedule.pdf">
              here.
            </a>
          </span>
        </p>
      </section>
      <Footer />
    </>
  );
};

export default Schedule;
