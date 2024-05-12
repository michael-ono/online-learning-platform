import React from "react";

import TutorNavbar from "./TutorNavbar";
import Footer2 from "../Navbar_Files/Footer2";

import Contact from "../components/Contact";

function TutorContact() {
  return (
    <>
      <TutorNavbar />
      <div className="pb-20 p-5 select-none">
        <Contact />
      </div>
      <Footer2 />
    </>
  );
}

export default TutorContact;
