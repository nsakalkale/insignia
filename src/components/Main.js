import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../essentials/Navbar";
import SideNav from "../essentials/SideNav";
import Footer from "../essentials/Footer";
import one from "../images/1.png";
export default function Main() {
  return (
    <>
      <Navbar />

      <div className="container-fluid poppins">
        <div className="row">
          <div className="col-sm-12">
            <div className="bg-white rounded shadow-sm p-4">
              <div className="row align-items-center">
                <div className="col-sm-6">
                  <img src={one} className="w-100" />
                </div>
                <div className="col-sm-6 p-2">
                  <h1>AI/ML in Learning</h1>

                  <p>
                    The education landscape is undergoing a significant
                    transformation fueled by Artificial Intelligence (AI) and
                    Machine Learning (ML). These technologies are enabling a
                    shift towards personalized learning experiences that cater
                    to individual student needs and learning styles. AI
                    algorithms analyze student data to recommend relevant
                    materials, adjust difficulty levels, and offer intelligent
                    tutoring, creating adaptive learning paths. This fosters
                    deeper engagement through gamification and bite-sized,
                    interactive learning modules. AI can also curate content,
                    suggest resources, and automate some aspects of assessment,
                    freeing up educators' time for more interactive learning
                    experiences and personalized feedback. However, challenges
                    remain. Data privacy, algorithmic bias, and the evolving
                    role of teachers in an AI-powered educational environment
                    necessitate careful consideration. Despite these hurdles, AI
                    and ML offer a promising future for education, empowering
                    teachers and creating a more personalized and effective
                    learning experience for every student.
                  </p>
                  <NavLink to="/about">
                    <button className="button-in-blue">More Info</button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="text-center">
            <h1>Wanna Explore ??</h1>
            <br />
            <NavLink to="/services">
              <button className="button-in-blue">Have a Tour</button>
            </NavLink>
          </div>
        </div>
      </div>
      <br />
      <Footer />
    </>
  );
}
