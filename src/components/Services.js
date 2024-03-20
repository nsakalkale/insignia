import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../essentials/Navbar";
import Footer from "../essentials/Footer";
import vid1 from "../videos/vid1.mov";
import mentor from "../images/mentor.png";
import langai from "../images/langai.png";
import gif_langai from "../images/langai.gif";

export default function Services() {
  return (
    <>
      <Navbar />
      <div className="container-fluid poppins">
        <div className="mt-1 big-title p-4">
          <span>Let's Go !!</span>
        </div>
        <div className="row">
          <div className="col-sm-12 bg-white shadow-sm rounded">
            <div className="p-4">
              <div className="row align-items-center">
                <div className="col-sm-6">
                  <video
                    className="w-100"
                    controls="true"
                    controlsList="nodownload"
                    id="myVideo"
                  >
                    <source src={vid1} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <br />
                  <br />
                  <p>
                    Meet <b>Mr. Steve</b>, a captivating historian with an
                    infectious passion for the past. With a tweed jacket and a
                    well-worn leather satchel slung over his shoulder, Mr. Steve
                    embodies the essence of a seasoned educator dedicated to
                    unraveling the mysteries of history. As he strides into the
                    classroom, his eyes alight with enthusiasm, students can't
                    help but be drawn to his magnetic presence. With a warm
                    smile and a twinkle in his eye, he welcomes his eager
                    pupils, ready to embark on another journey through the
                    annals of time.
                  </p>
                </div>
                <div className="col-sm-6">
                  <h2>
                    <img src={mentor} width={50} alt="Mentor" />
                    &nbsp; "Synapse Scholar: Your Virtual Mentor"
                  </h2>
                  <p>
                    "Synapse Scholar: Your Virtual Mentor" revolutionizes
                    learning through an innovative Unreal Engine application.
                    Seamlessly integrating advanced AI technology, it offers
                    users a transformative educational experience. The AI
                    teacher within the app serves as a personalized mentor,
                    guiding learners through their educational journey. With its
                    cutting-edge features, Synapse Scholar adapts to each user's
                    unique learning style and pace, ensuring maximum
                    comprehension and retention. Whether users are studying
                    complex subjects or seeking practical advice, the AI teacher
                    delivers tailored explanations and support in real-time. The
                    application's immersive environment enhances engagement,
                    allowing users to interact with educational content in a
                    dynamic and interactive way. From virtual lectures to
                    interactive simulations, Synapse Scholar provides a diverse
                    range of learning experiences to cater to various
                    preferences and needs. Moreover, Synapse Scholar fosters
                    collaboration among learners by facilitating virtual
                    classrooms and group discussions. Through shared experiences
                    and peer interaction, users can deepen their understanding
                    of topics and benefit from collective knowledge. In summary,
                    Synapse Scholar empowers learners to reach their full
                    potential by providing personalized guidance, immersive
                    experiences, and collaborative learning opportunities—all
                    powered by Unreal Engine technology and an advanced AI
                    teacher. It's not just an educational tool; it's a
                    transformative mentorship platform for lifelong learners.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="row align-items-center">
            <div className="col-sm-6">
              <h2>
                <img src={langai} width={50} alt="Mentor" />
                &nbsp; "LangAI: Personal Language Mentor"
              </h2>
              <p>
                Languishing in language limbo? LangAI, your personal AI mentor,
                is here to rescue you! Forget grammar mazes and pronunciation
                pitfalls. LangAI not only corrects your writing and speech, but
                also acts as a patient guide, explaining the "why" behind the
                corrections. It adapts to your level, whether you're a beginner
                tripping over "hello" or an intermediate learner seeking to
                finesse your fluency. Imagine practicing with a supportive AI
                partner who gently corrects your "bonjour" butchering and
                suggests more eloquent expressions. LangAI fosters a safe space
                for experimentation and learning, replacing fear with
                confidence. Through engaging activities and personalized
                feedback, you'll transform from a language struggler to a
                confident communicator. LangAI isn't just a correction tool;
                it's a springboard to fluency. Let LangAI become your
                indispensable guide, unlocking your linguistic potential, one
                step (or phrase) at a time.
              </p>
              <div className="text-center">
                <NavLink to="/langai">
                  <button className="button-in-blue">LangAI</button>
                </NavLink>
              </div>
            </div>

            <div className="col-sm-6">
              <img src={gif_langai} className="w-100" />
            </div>
          </div>
        </div>
      </div>
      <br />
      <Footer />
    </>
  );
}
