import React from "react";
import ExploreBTn from "../CustomButton/CustomButton";
import coding from "../../Assesst/coding.jpg";
import brownman from "../../Assesst/brownman.jpg";
import ladymay from "../../Assesst/ladymay.jpg";
import { ImageCard as Teachers } from "../CArd/Card";
import "./teacher.css";

const TeacherCard = () => {
  return (
    <section className="teacher-container">
      <div className="all-center">
        <div>
          <div className="course-title">
            <div>
              <h3 className="hero-title">
                Most Popular <br /> Teachers
              </h3>
            </div>
            <div>
              <p>
                Top instructors from around the teach millions of
                <br className="break-point" /> students on Quillow. Get
                unlimited access to 5000+ of <br className="break-point" />{" "}
                Quillow's top courses for your teams.
              </p>
            </div>
            <div>
              <ExploreBTn>Explore Teachers </ExploreBTn>
            </div>
          </div>
          <div className="grid-3">
            <Teachers
              image={brownman}
              name="By Oguz Yagiz Kara"
              location="Ankara, Turkey"
            />
            <Teachers
              image={ladymay}
              name="Elizabeth turner"
              location="exmouth, united kingdom"
            />
            <Teachers
              image={coding}
              name="chris collins"
              location="easthampton, Ma"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeacherCard;
