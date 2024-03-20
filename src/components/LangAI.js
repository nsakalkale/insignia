import React from "react";
import Navbar from "../essentials/Navbar";
import Footer from "../essentials/Footer";
export default function LangAI() {
  return (
    <>
      <title>LangAI</title>
      <Navbar />
      <div className="mt-2 bg-white shadow-sm">
        <iframe
          style={{ overflow: "hidden", height: "100vh", width: "100vw" }}
          src="https://slls-9yjk.onrender.com/"
          className="vh-100 w-100"
          title="LangAI"
        />
      </div>
      <br />
      <Footer />
    </>
  );
}
