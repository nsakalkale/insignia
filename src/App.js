import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Err from "./components/Err";
import Main from "./components/Main";
import About from "./components/About";
import OurTeam from "./components/OurTeam";
import Services from "./components/Services";
import LangAI from "./components/LangAI";
function App() {
  return (
    <>
      <html>
        <body className="vh-100 bg-light">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="about" element={<About />} />
              <Route path="ourteam" element={<OurTeam />} />
              <Route path="services" element={<Services />} />
              <Route path="langai" element={<LangAI />} />
              <Route path="*" element={<Err />} />
            </Routes>
          </BrowserRouter>
        </body>
      </html>
    </>
  );
}

export default App;
