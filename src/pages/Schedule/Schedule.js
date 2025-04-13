import React from "react";
import "./Schedule.css";
import scheduleFile from "../../files/schedule.pdf";
import Footer from "../../components/Footer/Footer";

const Schedule = () => {
  const scheduleData = [
    {
      day: "Monday",
      activities: [
        { title: "MMA (Ground)", time: "7:00 AM - 8:00 AM" },
        { title: "Muay Thai", time: "8:00 AM - 9:00 AM" },
        { title: "Boxing", time: "9:00 AM - 10:00 AM" },
        { title: "Crossfit / Weight Training", time: "5:00 PM - 6:00 PM" },
        { title: "Little Champs (Age 4-12)", time: "6:00 PM - 7:00 PM" },
        { title: "MMA (Ground)", time: "7:00 PM - 8:00 PM" },
        { title: "Muay Thai", time: "8:00 PM - 9:00 PM" },
      ],
    },
    {
      day: "Tuesday",
      activities: [
        { title: "Muay Thai", time: "7:00 AM - 8:00 AM" },
        { title: "Boxing", time: "8:00 AM - 9:00 AM" },
        { title: "Crossfit / Weight Training", time: "9:00 AM - 10:00 AM" },
        { title: "Muay Thai", time: "5:00 PM - 6:00 PM" },
        { title: "Open Bag (Self Training)", time: "6:00 PM - 7:00 PM" },
        { title: "Boxing", time: "7:00 PM - 8:00 PM" },
        { title: "MMA (Striking)", time: "8:00 PM - 9:00 PM" },
      ],
    },
    {
      day: "Wednesday",
      activities: [
        { title: "Kick Boxing", time: "7:00 AM - 8:00 AM" },
        { title: "MMA (Striking)", time: "8:00 AM - 9:00 AM" },
        { title: "Muay Thai", time: "9:00 AM - 10:00 AM" },
        {
          title: "Self Training and Personal Training",
          time: "10:00 AM - 5:00 PM",
        },
        { title: "MMA (Striking)", time: "5:00 PM - 6:00 PM" },
        { title: "Little Champs (Age 4-12)", time: "6:00 PM - 7:00 PM" },
        { title: "Muay Thai", time: "7:00 PM - 8:00 PM" },
        { title: "Boxing", time: "8:00 PM - 9:00 PM" },
      ],
    },
    {
      day: "Thursday",
      activities: [
        { title: "Crossfit", time: "7:00 AM - 8:00 AM" },
        { title: "Muay Thai", time: "8:00 AM - 9:00 AM" },
        { title: "Crossfit / Weight Training", time: "9:00 AM - 10:00 AM" },
        { title: "MMA (Ground)", time: "5:00 PM - 6:00 PM" },
        { title: "Open Bag (Self Training)", time: "6:00 PM - 7:00 PM" },
        { title: "Boxing", time: "7:00 PM - 8:00 PM" },
        { title: "Kick Boxing", time: "8:00 PM - 9:00 PM" },
      ],
    },
    {
      day: "Friday",
      activities: [
        { title: "Boxing", time: "7:00 AM - 8:00 AM" },
        { title: "Kick Boxing", time: "8:00 AM - 9:00 AM" },
        { title: "MMA (Ground)", time: "9:00 AM - 10:00 AM" },
        { title: "Boxing", time: "5:00 PM - 6:00 PM" },
        { title: "Little Champs (Age 4-12)", time: "6:00 PM - 7:00 PM" },
        { title: "Crossfit / Weight Training", time: "7:00 PM - 8:00 PM" },
        { title: "MMA (Ground)", time: "8:00 PM - 9:00 PM" },
      ],
    },
    {
      day: "Saturday",
      activities: [
        { title: "Sparring", time: "8:00 AM - 10:00 AM" },
        { title: "Weekend Batch", time: "4:30 PM - 6:00 PM" },
      ],
    },
    {
      day: "Sunday",
      activities: [{ title: "Weekend Batch", time: "4:30 PM - 6:00 PM" }],
    },
  ];

  return (
    <>
      <section id="schedule">
        <h2 className="Anton schedule_title">Find us in the Gym at.</h2>
        {scheduleData.map((schedule, index) => (
          <div className="schedule_wrapper">
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
