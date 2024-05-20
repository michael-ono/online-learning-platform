import React from "react";

import HomepageNavbar from "./HomepageNavbar";
import Footer from "../Navbar_Files/Footer";

import Contact from "../components/Contact";

function HomeContact() {
  return (
    <>
      <HomepageNavbar />
      <div className="select-none max-h-full">
        <Contact />
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default HomeContact;
