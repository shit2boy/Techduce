import React, { Fragment } from "react";
import NavBar from "./components/NavBar/NavigationBar";
import Hero from "./components/Hero/hero";
// import { Route, Switch } from "react-router-dom";
import "./App.css";
import Sponsors from "./components/Sponsors/Sponsors";
import GetStarted from "./components/GetStarted/GetStarted";
import Courses from "./components/Courses/Courses";
import Insights from "./components/Courses/Insigths";
import TeacherCard from "./components/Teachers/TeacherCard";
import TrainingCourses from "./components/SpecializedTrainings/TrainingCourses";
import Testimonial from "./components/Testimonial/Testimonial";
import SubcribeForm from "./components/SubcribeForm/SubcribeForm";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <Fragment>
      <NavBar />
      <Hero />
      <Sponsors />
      <GetStarted />
      <Courses />
      <TeacherCard />
      <Insights />
      <TrainingCourses />
      <Testimonial />
      <SubcribeForm />
      <Footer />
    </Fragment>
  );
};

export default App;
