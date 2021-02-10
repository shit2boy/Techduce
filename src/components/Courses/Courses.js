import React from "react";
import ExploreBTn from "../CustomButton/CustomButton";
import coding from "../../Assesst/coding.jpg";
import brownman from "../../Assesst/brownman.jpg";
import officedesk from "../../Assesst/officedesk.jpg";
import ladymay from "../../Assesst/ladymay.jpg";
import { CourseCard as Course } from "../CArd/Card";
import "./courses.css";

const Courses = () => {
  return (
    <section className="course-container">
      <div className="all-center" style={{ padding: "30px" }}>
        <div>
          <div className="course-title">
            <div>
              <h3 className="hero-title">
                Most Popular <br /> Courses
              </h3>
            </div>
            <div>
              <p>
                Top instructors from around the teach millions of
                <br className="break-point" /> students on Quillow. Get
                unlimited access to 5000+ of <br className="break-point" />
                Quillow's top courses for your teams.
              </p>
            </div>
            <div>
              <ExploreBTn>Explore Courses </ExploreBTn>
            </div>
          </div>
          <div className="grid-3">
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
        </div>
      </div>
    </section>
  );
};

export default Courses;
