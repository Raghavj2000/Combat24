import React from "react";
import "./Merchandise.css";
import bottle from "../../assets/Bottle.webp";
import Footer from "../../components/Footer/Footer";
import SEO from "../../components/SEO/SEO";

const Merchandise = () => {
  const merchStructuredData = {
    "@context": "https://schema.org",
    "@type": "Store",
    "name": "Combat 24 Merchandise Store",
    "description": "Official Combat 24 merchandise including training gear, apparel, and accessories for martial arts enthusiasts",
    "url": "https://combat24.com/merch",
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
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Combat 24 Merchandise",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Combat 24 Training Gear",
            "description": "High-quality martial arts training equipment and accessories"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Product",
            "name": "Combat 24 Apparel",
            "description": "Official Combat 24 branded clothing and workout wear"
          }
        }
      ]
    }
  };

  const merch = [
    {
      id: 1,
      image: bottle,
      name: "Product Name",
      price: "Product Price",
    },
    {
      id: 2,
      image: bottle,
      name: "Product Name",
      price: "Product Price",
    },
    {
      id: 3,
      image: bottle,
      name: "Product Name",
      price: "Product Price",
    },
    {
      id: 4,
      image: bottle,
      name: "Product Name",
      price: "Product Price",
    },
    {
      id: 5,
      image: bottle,
      name: "Product Name",
      price: "Product Price",
    },
    {
      id: 6,
      image: bottle,
      name: "Product Name",
      price: "Product Price",
    },
  ];
  return (
    <>
      <SEO
        title="Combat 24 Merchandise - Training Gear & Apparel | Official Store"
        description="Shop official Combat 24 merchandise including training gear, apparel, and accessories. High-quality martial arts equipment and branded clothing for combat sports enthusiasts."
        keywords="combat 24 merchandise, martial arts gear, training equipment, combat sports apparel, boxing gear, MMA equipment, martial arts clothing, gym merchandise"
        url="/merch"
        structuredData={merchStructuredData}
      />
      <section id="merchandise">
        <h2 className="Anton merch_title">Explore Our Various Merchandise</h2>
      </section>
      <section id="store">
        <h2 className="Anton store_title">Store</h2>
        <div className="schedule_line" style={{ width: "90%" }}></div>
        <div className="store_container">
          {merch.map((item, index) => {
            return (
              <div className="store_card" key={index}>
                <div className="store_img">
                  <img src={item.image} alt="" />
                </div>
                <h3 className="Anton">{item.name}</h3>
                <h4 className="Anton">{item.price}</h4>
              </div>
            );
          })}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Merchandise;
