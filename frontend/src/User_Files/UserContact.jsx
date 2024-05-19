import React from "react";

import UserNavbar from "./UserNavbar";
import Footer2 from "../Navbar_Files/Footer2";

import Contact from "../components/Contact";
import Layout from "../shared/Layout";

function UserContact() {
  return (
    <Layout>
      <div className="pb-20 p-5 select-none">
        <Contact />
      </div>
    </Layout>
  );
}

export default UserContact;
