import React from "react";
import "./Card.css";

export const ImageCard = (props) => {
  return (
    <div class="card-container">
      <img
        className="teacher-pic"
        src={props.image}
        alt="teacher-image"
        style={{ width: "100%" }}
      />
      <div className="content">
        <h3> {props.name}</h3>
        <p> {props.location}</p>
        <small>{props.view ? props.view : "1.3m plays"}</small>
      </div>
    </div>
  );
};
export const CourseCard = (props) => {
  return (
    <div class="card-container p-2 grow">
      <div>
        {props.icon && (
          <img src={props.icon} alt="icon" style={{ width: "150px" }} />
        )}
        {props.image && (
          <img
            className="course-image"
            src={props.image}
            alt="teacher-image"
            style={{ width: "100%" }}
          />
        )}
      </div>
      {props.price && (
        <div className="price-label">
          <p>{props.name}</p>
          <p>{props.price}</p>
        </div>
      )}
      <div class="course-content">
        <h3> {props.title}</h3>
        <p> {props.info}</p>
        <div className="course-footer">
          <div className="course-footer-title">
            {props.footImage ? (
              <img
                className="round-image"
                src={props.footImage}
                alt="course-icon"
                style={{ width: "100px", height: "90px" }}
              />
            ) : null}

            <div className="footer-info p-2">
              {props.tutor ? <h5>{props.tutor}</h5> : null}
              {props.courseNumber ? <p>{props.courseNumber} lessons</p> : null}
              {props.date ? <small>{props.date}</small> : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
