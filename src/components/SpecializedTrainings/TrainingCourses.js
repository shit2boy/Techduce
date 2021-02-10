import React from "react";
import { CourseCard } from "../CArd/Card";
import articleIcon from "../../Assesst/articleIcon.jpg";
import freecourseIcon from "../../Assesst/freecourseIcon.jpg";
import webinarIcon from "../../Assesst/webinarIcon.jpg";
import "./training.css";

const TrainingCourses = () => {
  return (
    <section className="training-container all-center">
      <div className="training-Bgcolor">
        <h3 className="training-title">Specialized training courses</h3>
        <p>
          Become a valuable expert with quillox. Explore <br />
          your skills and make expert!
        </p>
      </div>
      <div className="grid-3 training-card-container">
        <CourseCard
          icon={articleIcon}
          title="Useful articles"
          info="What should be the structures of an effective websites and designs"
        />
        <CourseCard
          icon={freecourseIcon}
          title="Free courses"
          info="Development of advanced sites from scratch"
        />
        <CourseCard
          icon={webinarIcon}
          title="Free webinars"
          info="Websites quickly and without programming knowledge"
        />
      </div>
    </section>
  );
};

export default TrainingCourses;
