import React from "react";
import AboutComponentMini from "../../SubComponents/About";
const AboutUs = () => {
  return (
    <section id="aboutPage" className="page">
      <div className="container">
        <img src="/about.jpg" alt="about" />
        <div className="content">
          <h3>Your peace of mind, our priority!</h3>
          <p>
          At Luxury Rental, we specialize in offering exceptional rental properties that cater to diverse needs and preferences. Our portfolio includes everything from cozy mountain retreats to stylish urban apartments, all meticulously maintained and equipped with modern amenities. We pride ourselves on delivering personalized service and ensuring a seamless rental experience.
          </p>
          </div>
      </div>
      <AboutComponentMini />
    </section>
  );
};

export default AboutUs;
