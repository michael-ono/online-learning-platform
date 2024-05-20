import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { ImSpinner10 } from "react-icons/im";

function LoginForm({ isLogged }) {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const homePath = "/";
  const logTutorPath = "/logintutor";

  const navigateDest = (path) => {
    navigate(path);
  };

  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        setLoading(true);

      if (userEmail.trim() === '' &&  password.trim() === '') {
        toast.error("Please enter all fields.");
        setLoading(false); 
      } else {
            setTimeout(() => {
            setLoading(false); 
            toast.success("Login Successful");
        }, 1500);

        setTimeout(() => {
            navigate('/user/allcourses');
        }, 2500);
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <>
      <Toaster />
      <div className="min-h-screen bg-gradient-to-br from-gray-500 via-black to-gray-500 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative p-4 bg-white shadow-lg sm:rounded-3xl sm:p-10">
            <div className="max-w-md mx-auto">
              <div>
                <h1 className="text-2xl font-semibold">Log In - Student</h1>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="divide-y divide-gray-200">
                  <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                    <div className="relative">
                      <input
                        autoComplete="off"
                        id="userEmail"
                        name="userEmail"
                        type="email"
                        className="mb-4 peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                        placeholder="User ID"
                        required
                        onChange={(e) => setUserEmail(e.target.value)}
                        value={userEmail}
                      />
                      <label
                        htmlFor="userEmail"
                        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                      >
                        User Email
                      </label>
                    </div>
                    <div className="relative">
                      <input
                        autoComplete="off"
                        id="password"
                        name="password"
                        type="password"
                        className=" peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                        placeholder="User Password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <label
                        htmlFor="password"
                        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                      >
                        User Password
                      </label>
                    </div>
                    {/* Submit Button */}
                    <div className="relative">
                      <button
                        className="mt-3 bg-blue-500 text-white rounded-md px-5 py-1 w-full hover:bg-blue-800"
                        type="submit"
                        disabled={loading}
                      >
                        {loading ? <ImSpinner10 className="animate-spin flex justify-center align-middle mx-auto" /> : "Submit"}
                      </button>
                    </div>
                    {/* Back Button */}
                    <div className="relative">
                      <button
                        className="bg-green-400 text-white rounded-md px-5 py-1 w-full hover:bg-green-600"
                        onClick={() => navigateDest(homePath)}
                      >
                        Back
                      </button>
                    </div>
                    {/* Login as a Tutor button */}
                    <div className="relative">
                      <button
                        className="bg-[#e1ca4b] text-white rounded-md px-5 py-1 w-full hover:bg-yellow-600"
                        onClick={() => navigateDest(logTutorPath)}
                      >
                        Login as a Tutor
                      </button>
                    </div>
                  </div>
                </div>
              </form>
              <div className="text-center text-black p-4 text-sm rounded-lg bg-transparent font-bold w-full">
                  Don't have an account? <Link className="text-blue-500 hover:text-blue-800" to="/register">Register here</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
