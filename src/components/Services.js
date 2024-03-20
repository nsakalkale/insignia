import React from "react";
import Navbar from "../essentials/Navbar";
import Footer from "../essentials/Footer";
import vid1 from "../videos/vid1.mp4";
import mentor from "../images/mentor.png";

export default function Services() {
  return (
    <>
      <Navbar />
      <div className="container-fluid poppins">
        <div className="row">
          <div className="col-sm-12">
            <div className="bg-white p-4 rounded shadow-sm text-center mt-2">
              <h1>Welcome to the World of Fun Learning !!</h1>
            </div>
            <div className="p-4">
              <div className="row align-items-center">
                <div className="col-sm-6">
                  <video className="w-100" controls>
                    <source src={vid1} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <br />
                  <br />
                  <p>
                    Meet Mr. Steve, a captivating historian with an infectious
                    passion for the past. With a tweed jacket and a well-worn
                    leather satchel slung over his shoulder, Mr. Steve embodies
                    the essence of a seasoned educator dedicated to unraveling
                    the mysteries of history. As he strides into the classroom,
                    his eyes alight with enthusiasm, students can't help but be
                    drawn to his magnetic presence. With a warm smile and a
                    twinkle in his eye, he welcomes his eager pupils, ready to
                    embark on another journey through the annals of time.
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
      </div>
      <br />
      <Footer />
    </>
  );
}
