import React from "react";
import "./Contact.css";
import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";
import SEO from "../../components/SEO/SEO";

const Contact = () => {
  const contactStructuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Combat 24",
    "description": "Get in touch with Combat 24 for martial arts training, class inquiries, and membership information. Located in Bengaluru, Karnataka.",
    "url": "https://combat24.com/contact",
    "mainEntity": {
      "@type": "Organization",
      "name": "Combat 24",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "No.28, 3rd Floor, Anjanadri Arcade, 1st Main, CBI Road, Ganganagar",
        "addressLocality": "Bengaluru",
        "addressRegion": "Karnataka",
        "postalCode": "560032",
        "addressCountry": "IN"
      },
      "telephone": "+91-8073423859",
      "email": "combat24india@gmail.com",
      "openingHours": "Mo-Su 06:00-22:00"
    }
  };

  return (
    <div>
      <SEO
        title="Contact Us - Get in Touch | Combat 24 Martial Arts Training"
        description="Contact Combat 24 for martial arts training, class inquiries, and membership information. Call +91-8073423859 or visit us in Bengaluru, Karnataka."
        keywords="contact combat 24, martial arts contact, boxing classes contact, MMA training contact, Bengaluru martial arts, combat sports contact, gym membership contact"
        url="/contact"
        structuredData={contactStructuredData}
      />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Contact;
