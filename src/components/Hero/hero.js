import React from "react";
// import NavBar from "../NavBar/NavigationBar";
// import FormInput from "../Form-input/form-input.component";
import LoginButton from "../CustomButton/CustomButton";
import "./hero.css";

const Hero = () => {
  return (
    <>
      {/* <NavBar /> */}
      <section className="grid-2 hero ">
        <div className="hero-content">
          <h3 className="hero-title">
            Launch your own
            <br className="break-point" /> online learning <br />
            platform
          </h3>
          <div className="hero-subtitles">
            <p>
              <i class="checkedIcon far fa-check-circle "></i> Skilled and
              experienced coaches
            </p>
            <p>
              <i class="checkedIcon far fa-check-circle "></i> Supportive 1:1
              coaching
            </p>
          </div>
          <div className="hero-input">
            <input type="text" placeholder="Enter your email ..." />
            <div
              className="hero-btn"
              // style={{ alignSelf: "center", marginLeft: "10px" }}
            >
              <LoginButton>Start Learning</LoginButton>
            </div>
          </div>
          <div className="text-tag">
            <span>
              <i class="iccon fas fa-leaf"></i>
            </span>
            <p className="pa-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <br className="break-point" />
              Nam tempus curabitur arcu justo.
            </p>
          </div>
        </div>
        <div className="hero bg-img"></div>
      </section>
    </>
  );
};

export default Hero;
