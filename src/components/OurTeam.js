import React from "react";
import Navbar from "../essentials/Navbar";
import SideNav from "../essentials/SideNav";
import one from "../images/1.png";
import Footer from "../essentials/Footer";

export default function OurTeam() {
  return (
    <>
      <Navbar />
      <div className="container poppins">
        <div className="row">
          <div className="col-sm-12">
            &nbsp;
            <div className="bg-white p-4 rounded shadow-sm">
              <h1
                style={{
                  textDecoration: "underline",
                  textDecorationStyle: "double",
                }}
              >
                OUR TEAM
              </h1>
            </div>
            <div className="p-4 rounded shadow-sm bg-white mt-2">
              <div className="row">
                <div className="col-sm-3">
                  <div className="card bg-white shadow-sm poppins p-2 my-2">
                    <img src={one} />
                    <hr />
                    <div className="card-title text-center fw-bolder text-decoration-underline">
                      Saket Dronamraju
                    </div>
                    <div className="text-muted text-center">Team Leader</div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="card bg-white shadow-sm p-2 my-2">
                    <img src={one} />
                    <hr />
                    <div className="card-title text-center fw-bolder text-decoration-underline">
                      Arya Patil
                    </div>
                    <div className="text-muted text-center">AI/ML</div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="card bg-white shadow-sm p-2 my-2">
                    <img src={one} />
                    <hr />
                    <div className="card-title text-center fw-bolder text-decoration-underline">
                      Nimish Sakalkale
                    </div>
                    <div className="text-muted text-center">Web Dev</div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="card bg-white shadow-sm p-2 my-2">
                    <img src={one} />
                    <hr />
                    <div className="card-title text-center fw-bolder text-decoration-underline">
                      Ishan Urgaonkar
                    </div>
                    <div className="text-muted text-center">Unreal Engine</div>
                  </div>
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
