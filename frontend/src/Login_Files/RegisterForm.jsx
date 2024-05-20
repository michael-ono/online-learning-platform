import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import { FiMail, FiUser } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';
import { MdLock, MdPassword } from 'react-icons/md';
import { TiArrowBack } from 'react-icons/ti';
import { FiLogIn } from 'react-icons/fi';
import { ImSpinner10 } from "react-icons/im";
import axios from "axios";

import User from '../components/images/logo.png'

function RegisterForm() {
    const [loading, setLoading] = useState(false); 

    const navigate = useNavigate();

    const homePath = "/"

    const navigateHome = (path) => {
        navigate(path);
    }

    // Format the current Date : YYYY-MM-DD
    const getCurrentDateFormatted = () => {
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        const day = String(currentDate.getDate()).padStart(2, '0');

        return `${year}-${month}-${day}`;
    };

    //Set the values
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const [canRegStatus, setCanRegStatus] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        
        try {
            const response = await axios.post('http://localhost:8081/api/v1/auth/register', formData);

            if (response.status === 200 || response.status === 201) {
                toast.success("User created successfully");
                setLoading(false);
                console.log(response.data);
                setTimeout(() => navigate('/login'), 1500);
            }
        }

        catch (error) {
            toast.error("Account creation failed");
            console.error("Error creating user:", error);
            setLoading(false);
        }
    };

    return (
        <>
            <Toaster />
            <div className="min-w-screen min-h-screen bg-gray-900 flex items-center justify-center px-5 py-5">
                <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden" style={{ maxWidth: "1000px" }}>
                    <div className="md:flex w-full">
                        <div className="hidden md:block w-1/2 bg-[#1c516bbb] py-12 px-4 ">
                            <img src={User} className="mt-10" />
                        </div>
                        <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
                            <div className="text-center mb-10">
                                <h1 className="font-bold text-3xl text-gray-900">REGISTER</h1>
                                <p>Sign up and create an account</p>
                            </div>
                            <form onSubmit={handleSubmit}>
                                {/* First Name and Last Name */}
                                <div className="flex -mx-3">
                                    <div className="w-1/2 px-3 mb-3">
                                        <label htmlFor="" className="text-xs font-semibold px-1">
                                            First Name
                                            <span className='text-red-500 '> *</span>
                                        </label>
                                        <div className="flex">
                                            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                                <FiUser />
                                            </div>
                                            <input
                                                type="text"
                                                className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                                placeholder="Alex"
                                                name="firstName"
                                                value={formData.firstName}
                                                onChange={handleChange}
                                                required 
                                            />
                                        </div>
                                    </div>
                                    <div className="w-1/2 px-3 mb-3">
                                        <label htmlFor="" className="text-xs font-semibold px-1">
                                            Last Name
                                            <span className='text-red-500 '> *</span>
                                        </label>
                                        <div className="flex">
                                            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                                <FiUser />
                                            </div>
                                            <input
                                                type="text"
                                                className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                                name="lastName"
                                                value={formData.lastName}
                                                onChange={handleChange}
                                                placeholder="Bright"
                                                required 
                                            />
                                        </div>
                                    </div>
                                </div>
                                {/* Email */}
                                <div className="flex -mx-3">
                                    <div className="w-full px-3 mb-2">
                                        <label htmlFor="" className="text-xs font-semibold px-1">
                                            Email
                                            <span className='text-red-500 '> *</span>
                                        </label>
                                        <div className="flex">
                                            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                                <HiOutlineMail />
                                            </div>
                                            <input
                                                type="email"
                                                className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="alexbright@example.com"
                                                required 
                                            />
                                        </div>
                                    </div>
                                </div>
                                {/* Password */}
                                <div className="flex -mx-3">
                                    <div className="w-full px-3 mb-8">
                                        <label htmlFor="" className="text-xs font-semibold px-1">
                                            Password
                                            <span className='text-red-500 '> *</span>
                                        </label>
                                        <div className="flex">
                                            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                                <MdLock />
                                            </div>
                                            <input
                                                type="password"
                                                className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                                name="password"
                                                value={formData.password}
                                                onChange={handleChange}
                                                placeholder="************"
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
                                            disabled={loading}
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
        </>
    );
}

export default RegisterForm;
