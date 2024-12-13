import React, { useState } from "react";
import "./contactform.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    date: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePhoneKeyDown = (event) => {
    // Allow: Backspace, Delete, Tab, Escape, Enter, Arrow keys, "+", and shortcuts
    if (
      [
        "Backspace",
        "Delete",
        "Tab",
        "Escape",
        "Enter",
        "ArrowLeft",
        "ArrowRight",
        "+",
        " ",
      ].includes(event.key) ||
      event.ctrlKey ||
      event.metaKey // Allow copy, paste, select all, etc.
    ) {
      return;
    }
    // Prevent non-numeric input
    if (!/^[0-9]$/.test(event.key)) {
      event.preventDefault();
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form submission
    console.log("Form Data:", formData);
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
      date: "",
    });
  };

  return (
    <>
      <section id="contact">
        <div className="schedule_text_container">
          <h2 className="Anton">SCHEDULE A VISIT</h2>
          <h4 className="nue">
            Take a free 30-minute tour of either of our location to help you
            decide if Combat 24 is the right gym for you. You&apos;ll have the
            opportunity to try equipment, observe classes, and get direct
            answers to all of your questions.
          </h4>
        </div>
        <form className="form_container" onSubmit={handleSubmit}>
          <div className="input_container">
            <label htmlFor="name" className="nue">
              Full Name
            </label>
            <input
              className="nue"
              type="text"
              id="name"
              name="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="input_container">
            <label htmlFor="email" className="nue">
              Email
            </label>
            <input
              className="nue"
              type="email"
              id="email"
              name="email"
              placeholder="someone@example.com"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="input_container">
            <label htmlFor="phone" className="nue">
              Phone Number
            </label>
            <input
              className="nue"
              type="text"
              id="phone"
              name="phone"
              placeholder="(123) 456-7890"
              value={formData.phone}
              onChange={handleInputChange}
              onKeyDown={handlePhoneKeyDown}
            />
          </div>
          <div className="input_container">
            <label htmlFor="message" className="nue">
              Message
            </label>
            <textarea
              className="nue"
              id="message"
              name="message"
              placeholder="Your message here..."
              rows="4"
              value={formData.message}
              onChange={handleInputChange}
            />
          </div>
          <div className="input_container">
            <label htmlFor="date" className="nue">
              Select a Date
            </label>
            <input
              className="nue"
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
            />
          </div>
          <input type="submit" value="Submit" />
        </form>
      </section>
    </>
  );
};

export default ContactForm;
