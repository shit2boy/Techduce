import React from "react";
import Button from "../CustomButton/CustomButton";
import amazon from "../../Assesst/amazon.png";
import netflix from "../../Assesst/netflix.png";
import google from "../../Assesst/google.png";
import zoom from "../../Assesst/zoom.png";
import slack from "../../Assesst/slack.png";
import spotify from "../../Assesst/spotify.png";
import "./sponsor.css";
const Sponsors = () => {
  return (
    <section className="container" style={{ marginTop: "3rem" }}>
      <div className="all-center">
        <div className="sponsors-content">
          <h2>Trusted By</h2>
          <div className="sponsor-text">
            <p>
              Thousands of students already add <br className="break-point" />
              more focus to their work with quillows
            </p>
            <Button style={{ backgroundColor: "#F3F6FB", color: "#333" }}>
              See more
            </Button>
          </div>
          <div className="sponsor-icons">
            <div className="sponsorsicon">
              <img src={google} alt="icon" width="120px" />
              <img src={slack} alt="icon" width="120px" />
              <img
                src={spotify}
                alt="icon"
                width="120px"
                className="faintsvg"
              />
            </div>
            <div className="sponsorsicon">
              <img src={amazon} alt="icon" width="120px" />
              <img src={zoom} alt="icon" width="120px" className="faintsvg" />
              <img src={netflix} alt="icon" width="120px" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
