import React from "react";
import Slider from "react-slick";

// import "slick-carousel/slick/slick.css";
import coding from "../../Assesst/coding.jpg";
import brownman from "../../Assesst/brownman.jpg";
import officedesk from "../../Assesst/officedesk.jpg";
import ladymay from "../../Assesst/ladymay.jpg";
import { CourseCard as Course } from "../CArd/Card";

// import { first, second, third, fourth, fifth } from "../../assets/assets.js";
// import "./slider.styles.scss";

const SlickSlider = () => {
  const settings = {
    infinite: true,
    speed: 180000,
    autoplay: true,
    autoplaySpeed: 100,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    cssEase: "linear",
    swipeToSlide: true,
    centerMode: true,
  };

  return (
    <Slider {...settings} className="slider">
      <div className="slider__item">
        <Course
          image={coding}
          title="Native Mac App in Swift Tutorial"
          info=" Take your dev skill to the next level with this ground-up
                tutorials on 
                native Mac apps. Enjoy your skills!"
          courseNumber="3"
          footImage={brownman}
          tutor="By Oguz Yagiz Kara "
          name="Software"
          price="$70.00USD"
        />
      </div>
      <div className="slider__item">
        <Course
          image={officedesk}
          title="Fundamentals of Interior Design"
          info=" A beginner's guide to designing or renovating breathtaking interior spaces that pop"
          courseNumber="3"
          footImage={ladymay}
          tutor="By Elizabeth Turner "
          name="Art & Design"
          price="FREE"
        />
      </div>
      <div className="slider__item">
        <Course
          image={coding}
          title="Native Mac App in Swift Tutorial"
          info=" Take your dev skill to the next level with this ground-up
                tutorials on 
                native Mac apps. Enjoy your skills!"
          courseNumber="3"
          footImage={brownman}
          tutor="By Oguz Yagiz Kara "
          name="Software"
          price="$70.00USD"
        />
      </div>
    </Slider>
  );
};
export default SlickSlider;
