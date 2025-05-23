import React from "react";
import "./Merchandise.css";
import bottle from "../../assets/Bottle.webp";
import Footer from "../../components/Footer/Footer";

const Merchandise = () => {
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
