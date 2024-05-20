import React from "react";
import toast, { Toaster } from 'react-hot-toast';
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FiUser } from "react-icons/fi";

const Contact = () => {

  return (
    <>
      <Toaster />
      <div className="md:flex justify-between pb-8 h-full bg-[#e7e2e2] overflow-hidden text-indigo-100">
        <div className="md:w-3/5 md:mb-0 px-3">
          {/* <div className="">
            <h2 className="text-[2rem] md:text-[2.2rem] lg:text-[2.5rem] text-black font-bold">
              Help & Support
            </h2>
            <p className="mb-5 text-black text-[0.9rem] md:text-[1rem]">
              Submit your question and our team we will respond to the email
              provided as soon as possible
            </p>
          </div> */}
          <div className="mx-auto pt-10">
            <div className="max-w-md mx-auto  bg-[#e7e2e2] rounded-md shadow-sm">
              <div className="text-center pt-2">
                <h1 className="my-3 text-[2.2rem] font-semibold text-gray-800">
                  Contact Us
                </h1>
                <p className="text-gray-700">
                  Fill in this form to send me a message.
                </p>
              </div>
              <div className="m-7">
                <form name="contact" onSubmit={(e) => e.preventDefault}>

                  {/* name */}
                  <div className="flex mb-6 text-white">                                        
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <FiUser />
                    </div>
                    <input
                      type="text"
                      className="w-full -ml-10 pl-10 pr-3 py-3 rounded-full border-2 border-gray-400 outline-none focus:border-indigo-500"
                      placeholder="Name"
                    />
                  </div>

                  {/* email */}
                  <div className="flex mb-6 text-white">                                        
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <FiUser />
                    </div>
                    <input
                      type="email"
                      className="w-full -ml-10 pl-10 pr-3 py-3 rounded-full border-2 border-gray-400 outline-none focus:border-indigo-500"
                      placeholder="Email"
                    />
                  </div>

                  {/* message */}
                  <div className="mb-6">
                    <textarea
                      type="text"
                      rows="6"
                      name="message"
                      id="message"
                      placeholder="Your message"
                      className="w-full px-3 py-2 text-black placeholder-gray-400 border border-gray-900 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                    >
                    </textarea>
                  </div>

                  <div className="px-8 pt-8">
                    <button
                      type="button"
                      className="w-full py-2 text-white bg-[#4a9455f7] rounded-full hover:bg-[#193152] focus:outline-none"
                      onClick={() => toast.success('Message sent successfully', { duration: 2000 })}
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* Right */}
        <div className="md:w-2/5 gradient-image bg-600 max-h-full">
          <div className="hidden md:flex text-[#ffffff] justify-center gap-x-8 pt-[40%]">
            <a href="https://www.facebook.com">
              <FaLinkedin name="FaFacebook" size={25} />
            </a>
            <a href="https://www.twitter.com">
              <FaTwitter name="FaTwitter" size={25} />
            </a>
            <a href="https://www.instagram.com">
              <FaInstagram name="FaInstagram" size={25} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

