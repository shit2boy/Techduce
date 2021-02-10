import React from "react";
import ladymay from "../../Assesst/ladymay.jpg";
import brownman from "../../Assesst/brownman.jpg";
// import ladymay from '../../Assesst/ladymay.jpg'
import "./testimonial.css";

const Testimonial = () => {
  return (
    <div className="testimonial ">
      <div className="holder">
        <h3 className="training-title">testimonial</h3>
        <h5 className="testimonial-content">
          After I started learning design with Quillows, I realized that i had
          improved to very advanced levels. While I am studying at my
          university, I design as an additional income and I am sure that I will
          do this professionally{" "}
        </h5>
        <p>
          Batuhan kara, <small>student@sabanciUniversity</small>
        </p>
        <div className="feedback-images">
          <div className="img-circle img-active">
            <img src={ladymay} alt="testimonials" style={{ width: "100%" }} />
          </div>
          <div className="img-circle">
            <img src={brownman} alt="testimonials" style={{ width: "100%" }} />
          </div>
          <div className="img-circle">
            <img src={ladymay} alt="testimonials" width="100%" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
