import React, { useState, useEffect } from "react";
import Layout from "../shared/Layout";
import { FaUserGraduate } from 'react-icons/fa';

const UserProfile = () => {
    const userEmail = localStorage.getItem('userEmail');

    return (
        <Layout>
            <div className='h-screen p-5 bg-gradient-to-t from-gray-700 to-blue-100 select-none pt-20'>
                {/* <h1 className='text-4xl text-center font-extrabold mb-8 text-gray-900'>My Profile</h1> */}

                <section className="bg-white rounded-lg shadow-xl p-8 w-full max-w-3xl mx-auto">
                    <div className="flex flex-col items-center">
                        <div className="rounded-full shadow-md p-4 bg-gray-100 mb-6">
                            <FaUserGraduate fontSize={100} className="text-gray-700" />
                        </div>

                        <div className="text-center">
                            <h3 className="text-3xl font-semibold text-gray-900 mb-2">Mike Hunter</h3>
                            <p className="text-gray-600 mb-4">Lcu/22/1462</p>
                        </div>
                    </div>

                    <div className="mt-8 space-y-6">
                        <div className="flex items-center space-x-2">
                            <span className="text-lg font-semibold text-gray-900">📞 Phone Number:</span>
                            <span className="text-lg text-cyan-800">08055026431</span>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                            <span className="text-lg font-semibold text-gray-900">📧 E-mail:</span>
                            <span className="text-lg text-cyan-800">{userEmail || "mikehunt@gmail.com"}</span>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                            <span className="text-lg font-semibold text-gray-900">🎓 Courses Enrolled:</span>
                            <span className="text-lg text-cyan-800">4</span>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
}

export default UserProfile;
