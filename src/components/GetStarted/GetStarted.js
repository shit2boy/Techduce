import React from "react";
import GetStartedBtn from "../CustomButton/CustomButton";
import ladymay from "../../Assesst/ladymay.jpg";
import brownman from "../../Assesst/brownman.jpg";
import "./GetStarted.css";
import AOS from "aos";
import "aos/dist/aos.css";

const GetStarted = () => {
  AOS.init({
    duration: 2000,
    // disable: "mobile",
  });

  return (
    <>
      <section className="containear">
        <div className="grid-2">
          <div className="left-grid">
            <div className="image1">
              <div className="expert-card" data-aos="fade-left">
                <div>
                  <img
                    className="img-circle"
                    src={ladymay}
                    alt="lady-may"
                    width="100%"
                  />
                </div>
                <div class="course-content p-2">
                  <h4>Elizabeth Turner</h4>
                  <strong>Expert Teacher</strong>
                </div>
              </div>
            </div>
            <div className="image2">
              <div className="expert-card" data-aos="fade-down-right">
                <div className="course-footer">
                  <div className=" course-footer-title">
                    <div>
                      <img
                        className="img-circle"
                        src={brownman}
                        alt="lady-may"
                        width="100%"
                      />
                    </div>

                    <div className="footer-info p-4">
                      <h5>Elizabeth Turner</h5>
                      <strong>Expert Teacher</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="all-center">
            <div>
              <h2 className="hero-title">
                Learn from approved
                <br /> experts at your own
                <br /> pace.
              </h2>
              <p>9/10 users reported better learning outcomes.</p>
              <GetStartedBtn style={{ backgroundColor: "" }}>
                Get Started
              </GetStartedBtn>
            </div>
          </div>
        </div>
      </section>

      <section className="containear">
        <div className="grid-2">
          <div className="all-center">
            <div>
              <h2 className="hero-title">
                Boost your knowledge
                <br /> and have fun doing it.
              </h2>
              <p>80% of users see their course to completion.</p>
              <GetStartedBtn style={{ backgroundColor: "" }}>
                Get Started
              </GetStartedBtn>
            </div>
          </div>
          <div className="left-grid ">
            <div className="image1">
              <div className="expert-card" data-aos="fade-left">
                <div>
                  <img
                    className="img-circle"
                    src={ladymay}
                    alt="lady-may"
                    width="100%"
                  />
                </div>
                <div class="course-content p-2">
                  <h4>Elizabeth Turner</h4>
                  <strong>Expert Teacher</strong>
                </div>
              </div>
            </div>
            <div className="image2">
              <div className="expert-card" data-aos="fade-left">
                <div className="course-footer">
                  <div className=" course-footer-title">
                    <div>
                      <img
                        className="img-circle"
                        src={brownman}
                        alt="lady-may"
                        width="100%"
                      />
                    </div>

                    <div className="footer-info p-2">
                      <h5>Elizabeth Turner</h5>
                      <strong>Expert Teacher</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GetStarted;
