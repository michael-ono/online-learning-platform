import React from "react";
import { useState } from "react";

import axios from 'axios';

function Contact() {

  const [mailSubject, setSubject] = useState('Inquiry from Website Contact Form');
  const [name, setName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [adminEmail, setAdminEmail] = useState('learnlodge@gmail.com');
  const [formMmessage, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();   
  
    const formData = {
      subject: mailSubject,
      email: adminEmail,
      message: 
      `You have received a new inquiry from the Contact Us section of your website. \nHere are the details: \n\nName: ${name} \nEmail: ${senderEmail} \nMessage: ${formMmessage} \n \nPlease take appropriate action to respond to this inquiry as soon as possible. \nThank You!`
    };


    try {
      await axios.post('http://localhost:8080/contact/submit', formData);     
      alert('Email sent successfully');

    }

    catch (error) {

      alert('Error sending email');

    }
    
  };

  return (
    <div className="mx-auto max-w-screen-md">
      <h2 className="mb-4 text-[2.4rem] tracking-tight font-extrabold text-center">
        Contact Us
      </h2>
      <p className="mb-3 lg:mb-7 font-light text-center sm:text-xl">
        {" "}
        Got a question? Need assistance? We're here to help!{" "}
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block mb-1.5 text-sm font-medium">Name:</label>
          <input
            type="text"
            className="shadow-sm border border-gray-300 text-black text-sm rounded-lg focus:border-primary-500 block w-full p-2.5"
            placeholder="Enter Your Name"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block mb-1.5 text-sm font-medium">Email:</label>
          <input
            type="email"
            className="shadow-sm border border-gray-300 text-black text-sm rounded-lg focus:border-primary-500 block w-full p-2.5"
            placeholder="Enter Your Email"
            onChange={(e) => setSenderEmail(e.target.value)}
            required
          />
        </div>

        <div className="sm:col-span-2">
          <label className="block mb-1.5 text-sm font-medium">Message: </label>
          <textarea
            id="message"
            rows="6"
            name="message"
            className="block p-2.5 w-full text-sm text-gray-900 rounded-lg shadow-sm border border-gray-300 focus:border-primary-500"
            placeholder="Enter Your Message"
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-2 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
