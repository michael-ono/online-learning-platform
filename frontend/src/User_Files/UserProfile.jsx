import React, { useState, useEffect } from "react";
import axios from "axios";

import UserNavbar from "./UserNavbar";

import { FaUserGraduate } from 'react-icons/fa';

function UserProfile() {

    const userEmail = localStorage.getItem('userEmail');

    const [userDetails, setUserDetails] = useState([])

    //Take the User Details from backend
    useEffect(() => {
        loadDetails();
    }, [])

    const loadDetails = async () => {
        try {
            const url = `http://localhost:9081/user/email/${userEmail}`;
            const user = await axios.get(url);
            //console.log(user);
            setUserDetails(user.data);
        }
        catch (error) {
            console.error("Error fetching User Details:", error);
        }
    };

    return (
        <>
            <UserNavbar />
            <div className='pb-20 p-5 select-none bg-gradient-to-t from-gray-500 to-stone-300'>
                {/* content goes inside this div */}
                <h1 className='text-2xl text-center font-bold'>My Profile</h1>

                {/* <h1>Your User ID is: {userDetails.userId}</h1>
                <h1>First Name: {userDetails.firstName}</h1>
                <h1>Last Name: {userDetails.lastName}</h1>
                <h1>Phone Number: {userDetails.phoneNumber}</h1>
                <h1>Email: {userDetails.userEmail}</h1>
                <h1>Date Of Birth: {userDetails.dateOfBirth}</h1>
                <h1>Date Registered to LearnLodge: {userDetails.dateRegistered}</h1> */}

                <section className="bg-blueGray-50">
                    <div className="mt-8 w-full lg:w-6/12 mx-auto">
                        <div className=" flex flex-col min-w-0 break-words bg-white w-full shadow-xl rounded-lg ">
                            <div className="px-5 pb-5">

                                <div className="flex flex-wrap justify-center">

                                    <div className="w-full flex justify-center pt-5">
                                        <div className="relative p-4 rounded-full" >
                                            <FaUserGraduate fontSize={100} />
                                        </div>
                                    </div>

                                    <div className="w-full px-4 text-center ">
                                        <div className="flex justify-center lg:pt-2 pt-4">
                                            <h3 className="text-4xl font-semibold leading-normal text-blueGray-700 tracking-wide">
                                                Mike Hunter
                                            </h3>
                                        </div>
                                    </div>

                                </div>

                                <div className="mt-2 pl-5">

                                    <h3 className="text-xl pb-4 ">

                                        <span className="font-bold">
                                            🆔 User ID : 
                                        </span>

                                        <span className="text-cyan-800">
                                            <span> Lcu/22/1462 </span>
                                        </span>

                                    </h3>

                                    <h3 className="text-xl pb-4">

                                        <span className="font-bold">
                                            📞 Phone Number :
                                        </span>

                                        <span className="text-cyan-800">
                                            <span> 08055026431 </span>
                                        </span>

                                    </h3>

                                    <h3 className="text-xl pb-4">

                                        <span className="font-bold">
                                            📧 E-mail :
                                        </span>

                                        <span className="text-cyan-800">
                                            <span> mikehunt@gmail.com </span>
                                        </span>

                                    </h3>

                                    <h3 className="text-xl pb-4">

                                        <span className="font-bold">
                                            🎂 Couses enrolled :
                                        </span>

                                        <span className="text-cyan-800">
                                            <span> 4 </span>
                                        </span>

                                    </h3>

                                </div>

                            </div>

                        </div>
                    </div>
                </section>

            </div>
        </>
    )
}

export default UserProfile