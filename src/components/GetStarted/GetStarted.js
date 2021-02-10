import React from "react";
import GetStartedBtn from "../CustomButton/CustomButton";
import ladymay from "../../Assesst/ladymay.jpg";
import playui from "../../Assesst/playui.png";
import brownman from "../../Assesst/brownman.jpg";
import workman from "../../Assesst/workman.jpg";
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
                      <h3>Elizabeth Turner</h3>
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
              <div style={{ marginTop: "15px" }}>
                <GetStartedBtn>Get Started</GetStartedBtn>
              </div>
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
              <div style={{ marginTop: "15px" }}>
                <GetStartedBtn>Get Started</GetStartedBtn>
              </div>
            </div>
          </div>
          <div className="right-grid ">
            <div className="image1">
              <div className="expert-card" data-aos="fade-left">
                <div>
                  <img
                    // className="img-circle"
                    src={workman}
                    alt="lady-may"
                    width="100%"
                  />
                </div>
                {/* <div class="course-content p-2">
                  <h4>Elizabeth Turner</h4>
                  <strong>Expert Teacher</strong>
                </div> */}
              </div>
            </div>
            <div className="image2">
              <div className="expert-card" data-aos="fade-left">
                <div className="course-footer">
                  <div className=" course-footer-title">
                    <div>
                      <img
                        className="img-circle"
                        src={playui}
                        alt="lady-may"
                        width="100%"
                      />
                    </div>

                    <div className="footer-info p-2">
                      <h3>UI Design Course</h3>
                      <strong>753 students in this classes</strong>
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
