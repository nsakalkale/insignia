import React from "react";
import Navbar from "../essentials/Navbar";
import Footer from "../essentials/Footer";
export default function Services() {
  return (
    <>
      <Navbar />
      <div className="container-fluid poppins">
        <div className="row">
          <div className="col-sm-12">
            &nbsp;
            <div className="bg-white p-4 rounded shadow-sm text-center">
              <h1>Welcome to the World of Fun Learning !!</h1>
            </div>
            &nbsp;
            <div className="p-4">
              <video width="320" height="240" controls>
                <source src="movie.mp4" type="video/mp4 " />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
      <br />
      <Footer />
    </>
  );
}