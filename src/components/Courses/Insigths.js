import React from "react";
import ExploreBTn from "../CustomButton/CustomButton";
import codinggrp from "../../Assesst/codinggrp.jpg";
import workplace from "../../Assesst/workplace.jpg";
import whiteboard from "../../Assesst/whiteboard.jpg";
// import ladymay from "../../Assesst/ladymay.jpg";
import { CourseCard as Course } from "../CArd/Card";
import "./courses.css";

const Courses = () => {
  return (
    <section
      className="course-container"
      style={{ backgroundColor: "#e7f5fa" }}
    >
      <div className="all-center" style={{ padding: "30px" }}>
        <div>
          <div className="course-title">
            <div>
              <h3 className="hero-title">
                Resources & <br /> Insight
              </h3>
            </div>
            <div>
              <p>
                Hundreds of articles by Quillow's best teacher are
                <br className="break-point" /> waiting for you. You can find
                answers to your questions.
              </p>
            </div>
            <div>
              <ExploreBTn>Visit Blog </ExploreBTn>
            </div>
          </div>
          <div className="grid-3">
            <Course
              image={codinggrp}
              title="Engerding a culture of professional development"
              info=" Eget mi ornare commodo luctus porttitor lectus. "
              date="December 02, 2020"
            />

            <Course
              image={whiteboard}
              title="Increasing engagement with instagram"
              info=" Eget mi ornare commodo luctus porttitor lectus. "
              date="December 02, 2020"
            />
            <Course
              image={workplace}
              title="Why the workplace will never be the same"
              info=" Eget mi ornare commodo luctus porttitor lectus. "
              date="December 02, 2020"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
