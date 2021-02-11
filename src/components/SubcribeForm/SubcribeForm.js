import React from "react";
import Subcribe from "../CustomButton/CustomButton";
import "./subscribe.css";

const SubcribeForm = () => {
  return (
    <div className=" subcribe-container all-center">
      <div className="subcribe-BgImg">
        <h3
          className="hero-title "
          style={{ textAlign: "center", color: "#d5d5d5" }}
        >
          Launch your own <br />
          online learning platform{" "}
        </h3>
        <div className="form">
          <input type="text" placeholder="Enter your email..." />
          <Subcribe style={{ background: "#f4f4f4", color: "#333" }}>
            Get Started Today
          </Subcribe>
        </div>
      </div>
    </div>
  );
};

export default SubcribeForm;
