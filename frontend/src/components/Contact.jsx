import Layout from "../shared/Layout";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {

  return (
    <>
      <Toaster />
      <div className="md:flex justify-between h-full overflow-hidden px-1 bg-brightGray text-indigo-100">
        <div className="md:w-3/5 h-[60vh] md:mb-0 px-3 py-4">
          <div className="">
            <h2 className="text-[2rem] md:text-[2.2rem] lg:text-[2.5rem] text-black font-bold">
              Help & Support
            </h2>
            <p className="mb-5 text-black text-[0.9rem] md:text-[1rem]">
              Submit your question and our team we will respond to the email
              provided as soon as possible
            </p>
          </div>

          <div className="mx-auto">
            <div className="max-w-md mx-auto  bg-[#e7e2e2] rounded-md shadow-sm">
              <div className="text-center pt-2">
                <h1 className="my-3 text-3xl font-semibold text-gray-800">
                  Contact Me
                </h1>
                <p className="text-gray-700">
                  Fill in this form to send me a message.
                </p>
              </div>
              <div className="m-7">
                <form name="contact" onSubmit={(e) => e.preventDefault}>
                  <div className="mb-6">
                    <label htmlFor="name" className="block mb-2 font-semibold text-sm text-black">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="w-full px-3 py-2 text-black placeholder-gray-400 border bg-white border-gray-900 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm font-semibold text-black">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="w-full px-3 py-2 font-semibold text-black placeholder-gray-400 border bg-white border-gray-900 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block mb-2 font-semibold text-sm text-black"
                    >
                      Your Message
                    </label>
                    <textarea
                      type="text"
                      rows="5"
                      name="message"
                      id="message"
                      className="w-full px-3 py-2 text-black placeholder-gray-400 border border-gray-900 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                    ></textarea>
                  </div>
                  <div className="px-8">
                    <button
                      type="button"
                      className="w-full py-1 text-white bg-primaryColor rounded-md focus:bg-orange focus:outline-none"
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
        <div className="md:w-2/5 h-full gradient-image">
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

