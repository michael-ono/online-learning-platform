import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { ImSpinner10 } from "react-icons/im";
import toast, { Toaster } from "react-hot-toast";


function LoginTutor({ isLogged }) {
    const [loading, setLoading] = useState(false);

    //Send data --> Tutor is logged
    const sendLoginStatus = () => {
        isLogged(true);
    };
    
    const navigate = useNavigate();

    const homePath = "/"

    const navigateHome = (path) => {
        navigate(path);
    }

    const [tutorEmail, setTutorEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);
    
          if (tutorEmail.trim() === '' &&  password.trim() === '') {
            toast.error("Please enter all fields.");
            setLoading(false); 
          } else {
                setTimeout(() => {
                setLoading(false); 
                toast.success("Login Successful");
            }, 1500);
    
            setTimeout(() => {
                navigate('/tutor/dashboard');
            }, 2500);
          }
        } catch (error) {
          console.error("Error during login:", error);
        }


    };

    return (
        <>
          <Toaster />
            <div className="min-h-screen bg-gradient-to-bl from-gray-500 via-black to-gray-500 py-6 flex flex-col justify-center sm:py-12">
                <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                    <div className="relative p-4 bg-white shadow-lg sm:rounded-3xl sm:p-10">
                        <div className="max-w-md mx-auto">
                            <div>
                                <h1 className="text-2xl font-semibold">
                                    Log In - Tutor
                                </h1>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className="divide-y divide-gray-200">
                                    <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                        <div className="relative">
                                            <input
                                                autoComplete="off"
                                                id="userId"
                                                name="userId"
                                                type="text"
                                                className="mb-4 peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                                                placeholder="Tutor ID"
                                                value={tutorEmail}
                                                onChange={(e) => setTutorEmail(e.target.value)}
                                                required
                                            />
                                            <label
                                                htmlFor="userId"
                                                className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                                            >
                                                Tutor Email
                                            </label>
                                        </div>
                                        <div className="relative">
                                            <input
                                                autoComplete="off"
                                                id="password"
                                                name="password"
                                                type="password"
                                                className=" peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                                                placeholder="Password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                required
                                            />
                                            <label
                                                htmlFor="password"
                                                className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                                            >
                                                Password
                                            </label>
                                        </div>
                                        {/* Submit Button */}
                                        <div className="relative">
                                            <button
                                                className="mt-3 bg-blue-500 text-white rounded-md px-5 py-1 w-full hover:bg-blue-700"
                                                type='submit'
                                                disabled={loading}
                                            >
                                                {loading ? <ImSpinner10 className="animate-spin flex justify-center align-middle mx-auto" /> : "Submit"}
                                            </button>
                                        </div>
                                        {/* Back To Home Button */}
                                        <div className="relative">
                                            <button
                                                className="bg-green-400 text-white rounded-md px-5 py-1 w-full hover:bg-green-600"
                                                onClick={() => navigateHome(homePath)}
                                            >
                                                Back to Home
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div className="text-center text-black p-4 text-sm text-transparent rounded-lg bg-transparent font-bold w-full">
                                Login here. Happy Learn
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoginTutor;
