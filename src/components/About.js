import React from "react";
import SideNav from "../essentials/SideNav";
import Navbar from "../essentials/Navbar";
import Footer from "../essentials/Footer";

export default function About() {
  return (
    <>
      <Navbar />
      <div className="container-fluid poppins">
        <div className="row">
          <div className="col-sm-12">
            &nbsp;
            <div className="bg-white p-4 rounded shadow-sm d-flex align-items-center">
              <h1>ABOUT</h1>
            </div>
            &nbsp;
            <div className="p-4 rounded shadow-sm bg-white">
              <p>
                <b>EduSphere</b> is a revolutionary educational platform that
                empowers children aged 5-12 to learn through interactive
                experiences powered by Virtual Reality (VR), Augmented Reality
                (AR), Artificial Intelligence (AI), and Machine Learning (ML).
                <br />
                <br />
                <b>Imagine:</b> Your child exploring the wonders of the solar
                system in VR, interacting with 3D models of planets, or
                embarking on a virtual journey through ancient civilizations in
                AR.
                <br />
                <br />
                <b>
                  EduSphere brings abstract concepts to life, sparking curiosity
                  and igniting a passion for learning. Here's how EduSphere
                  empowers your child:
                </b>
                <br />
                <br />
                <li>
                  <b>24/7 Personalized Learning:</b> EduSphere is your child's
                  always-available AI tutor, ready to answer questions, provide
                  explanations, and offer guidance – anytime, anywhere.
                </li>
                <br />
                <li>
                  <b>Interactive Learning:</b> VR and AR create immersive
                  experiences that make learning engaging and fun. Your child
                  can explore complex topics in a dynamic environment, fostering
                  deeper understanding and retention.
                </li>
                <br />
                <li>
                  <b>Visualized Solutions:</b> Don't just read about it, see it!
                  EduSphere uses AI to generate visual representations of
                  concepts, making them easier to grasp and remember.
                </li>
                <br />
                <li>
                  <b>Fluency Enhancement:</b> Struggling with a word?
                  EduSphere's AI identifies pronunciation issues and guides your
                  child towards clear and confident verbal communication.
                  Efficient Learning: Smart note generation from uploaded PDFs
                  allows your child to focus on understanding, not taking
                  extensive notes.
                </li>
                <br />
                <li>
                  <b>Personalized Feedback:</b> AI tailors the learning
                  experience to your child's individual needs and learning pace,
                  ensuring they are always challenged and progressing.
                </li>
                <br />
                <b>EduSphere:</b> Where cutting-edge technology meets engaging
                pedagogy, creating a personalized learning journey for every
                child. Join us and unlock the power of immersive, AI-powered
                education!
              </p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <Footer />
    </>
  );
}
