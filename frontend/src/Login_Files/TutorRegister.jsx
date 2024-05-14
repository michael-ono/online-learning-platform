import React, { useState } from 'react';

import { useNavigate } from "react-router-dom";

import axios from 'axios';

import { GiTeacher } from 'react-icons/gi';
import { MdLock, MdPassword } from 'react-icons/md';
import { HiOutlineMail } from 'react-icons/hi';
import { BsTelephoneInbound } from 'react-icons/bs';
import { TiArrowBack } from 'react-icons/ti';
import { FiLogIn } from 'react-icons/fi';
import { ImSpinner10 } from "react-icons/im";

import Tutor from '../components/images/registerImages/tutor.jpeg'

export default function TutorRegister() {
    const [loading, setLoading] = useState(false); 

    const navigate = useNavigate();

    //Navigate To Home Page
    const homePath = "/"

    const navigateHome = (path) => {
        navigate(path);
    }

    //Set the values
    const [formData, setFormData] = useState({
        tutorName: '',
        tutorEmail: '',
        phoneNumber: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        try {
            setTimeout(() =>{ 
                setLoading(false);  
                toast.success("Signup Successful");
            }, 1500 );

            setTimeout(() =>{ 
                navigate('/logintutor');
            }, 2500 );
        }

        catch (error) {
            console.error("Error creating user:", error);
            setLoading(false);
        }

        // axios.post('http://localhost:9081/tutor/addtutor', formData)
        //     .then((response) => {
        //         window.alert("Registered successfully. Publish your Courses!");
        //         navigateHome(homePath);
        //     })
        //     .catch((error) => {
        //         console.error('Error submitting form:', error);
        //     });
    };

    return (
        <div className="min-w-screen min-h-screen bg-gray-900 flex items-center justify-center px-5 py-5">
            <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden" style={{ maxWidth: "1000px" }}>
                <div className="md:flex w-full">
                    <div className="hidden md:block w-1/2 bg-[#26637f] py-12 px-2">
                        <img src={Tutor}  style={{ backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}/>
                    </div>
                    <div className="w-full md:w-1/2 py-10 px-5 md:px-10">

                        <div className="text-center mb-10">
                            <h1 className="font-bold text-3xl text-gray-900">REGISTER</h1>
                            <p>Enter your information to register</p>
                        </div>

                        <form onSubmit={handleSubmit}>
                            {/* Tutor Name */}
                            <div className="flex -mx-3">
                                <div className="w-full px-3 mb-2">
                                    <label
                                        className="text-xs font-semibold px-1">
                                        Tutor / Institute Name
                                        <span className='text-red-500'> *</span>
                                    </label>
                                    <div className="flex">
                                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                            <GiTeacher />
                                        </div>
                                        <input
                                            type="text"
                                            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                            placeholder="Tutor / Institute Name"
                                            name="tutorName"
                                            value={formData.tutorName}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Tutor Email */}
                            <div className="flex -mx-3">
                                <div className="w-full px-3 mb-2">
                                    <label
                                        className="text-xs font-semibold px-1">
                                        Email Address
                                        <span className='text-red-500 '> *</span>
                                    </label>
                                    <div className="flex">
                                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                            <HiOutlineMail />
                                        </div>
                                        <input
                                            type="email"
                                            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                            placeholder="institute@example.com"
                                            name="tutorEmail"
                                            value={formData.tutorEmail}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Password */}
                            <div className="flex -mx-3">
                                <div className="w-full px-3 mb-2">
                                    <label
                                        className="text-xs font-semibold px-1">
                                        Password
                                        <span className='text-red-500 '> *</span>
                                    </label>
                                    <div className="flex">
                                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                            <MdLock />
                                        </div>
                                        <input type="password"
                                            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                            placeholder="************"
                                            name="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>

                            
                            {/*Confirm  Password */}
                            <div className="flex -mx-3">
                                <div className="w-full px-3 mb-8">
                                    <label
                                        className="text-xs font-semibold px-1">
                                        Confirm Password
                                        <span className='text-red-500 '> *</span>
                                    </label>
                                    <div className="flex">
                                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                            <MdLock />
                                        </div>
                                        <input type="password"
                                            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                            placeholder="************"
                                            name="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>



                            <div className="flex -mx-3 mb-5">
                                <div className="w-full">
                                    <button
                                        className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"
                                        type="submit"
                                    >
                                        {loading ? <ImSpinner10 className="animate-spin flex justify-center align-middle mx-auto" /> : <><FiLogIn className='inline mr-2 mb-1' fontSize={25} /> Register</> }
                                    </button>
                                </div>
                            </div>

                            <div className="flex -mx-3">
                                <div className="w-full">
                                    <button
                                        className="block w-full max-w-xs mx-auto bg-green-400 hover:bg-green-600 focus:bg-green-700 text-white rounded-lg px-3 py-3 font-semibold"
                                        onClick={() => navigateHome(homePath)}>
                                        <TiArrowBack className='inline mr-1 mb-1' fontSize={25} />
                                        Back
                                    </button>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
