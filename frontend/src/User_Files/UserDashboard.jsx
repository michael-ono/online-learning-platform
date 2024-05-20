import React from "react";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';

import { useState } from "react";
import { useEffect } from "react";

import Layout from "../shared/Layout";

import FullWidthCard from "../components/FullWidthCard";

function UserDashboard() {

    const userEmail = localStorage.getItem('userEmail');

    //To Store User Details
    const [userDetails, setUserDetails] = useState([])

    //To store Registered Course Details
    const [regCourseList, setRegCourses] = useState([])

    //Take the User Details from backend
    useEffect(() => {
    }, [])

    const loadUserDetails = async () => {
        try {
            const url = `http://localhost:9081/user/email/${userEmail}`;
            const user = await axios.get(url);

            setUserDetails(user.data);
            localStorage.setItem('userID', user.data.userId);
            loadRegCourses(user.data.userId);
        }
        catch (error) {
            console.error("Error fetching User Details:", error);
        }
    };

    const loadRegCourses = async (userId) => {
        try {

            const listOfRegCourses = await axios.get(`http://localhost:8080/user/regCourses/${userId}`);

            const mappedCourses = listOfRegCourses.data.map((course) => {

                return {
                    courseName: course.courseName,
                    category: course.courseCategory,
                    description: course.courseDescription,
                    price: course.price,
                    tutorName: course.tutor.tutorName
                };

            });

            //console.log(mappedCourses)
            setRegCourses(mappedCourses);
        }

        catch (error) {
            console.error("Error fetching Registered Courses:", error);
        }
    };

    return (
        <>
            <Toaster />
            <Layout>
                <div className='pb-20 p-5 select-none'>
                    <h1 className='text-5xl font-semibold text-center'>Welcome {userDetails.firstName}👋</h1>
                    <h1 className='text-2xl text-center mt-4'>Your Courses 📚</h1>
                    <div>
                        <div className='p-2'>
                            <FullWidthCard
                                courseName="Cyber Security"
                                courseCategory="Cyber Security"
                                courseDescription="technology"
                                // price="$12"
                                tutorName="Hunter"
                            />
                        </div>
                        <div className='p-2'>
                            <FullWidthCard
                                courseName="The Art of Music"
                                courseCategory="Music"
                                courseDescription="music"
                                // price="$12"
                                tutorName="Hunter"
                            />
                        </div>
                        <div className='p-2'>
                            <FullWidthCard
                                courseName="Code God⚡"
                                courseCategory="Programming"
                                courseDescription="supreme"
                                // price="$12"
                                tutorName="Hunter"
                            />
                        </div>
                        <div className='p-2'>
                            <FullWidthCard
                                courseName="Literature"
                                courseCategory="Literature"
                                courseDescription="reading"
                                // price="$12"
                                tutorName="Hunter"
                            />
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default UserDashboard