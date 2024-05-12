import React from "react";

import UserNavbar from "./UserNavbar";
import Footer2 from "../Navbar_Files/Footer2";

import Contact from "../components/Contact";

function UserContact() {
  return (
    <>
      <UserNavbar />
      <div className="pb-20 p-5 select-none">
        <Contact />
      </div>
      <Footer2 />
    </>
  );
}

export default UserContact;
