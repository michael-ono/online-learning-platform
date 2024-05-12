import React, { useState, useEffect } from "react";
import axios from "axios";

import TutorNavbar from './TutorNavbar'
import Footer2 from "../Navbar_Files/Footer2";

import FullWidthCard from "../components/FullWidthCard";

function Tutor() {

    const tutorEmail = localStorage.getItem('tutorEmail');

    //To Store User Details
    const [tutorDetails, setTutorDetails] = useState([])

    //To store Published Courses 
    const [PublishedCourseList, setPublishedCourses] = useState([])

    useEffect(() => {
        loadDetails();
    }, [])

    const loadDetails = async () => {
        try {
            const url = `http://localhost:9081/tutor/email/${tutorEmail}`;
            const tutor = await axios.get(url);

            //console.log(tutor.data);
            setTutorDetails(tutor.data);
            localStorage.setItem('TutorID', tutor.data.tutorId);
            loadPublishedCourses(tutor.data.tutorId)
        }
        catch (error) {
            console.error("Error fetching User Details:", error);
        }
    };

    const loadPublishedCourses = async (tutorId) => {
        try {

            const listOfRegCourses = await axios.get(`http://localhost:9081/tutor/courses/${tutorId}`);

            const mappedCourses = listOfRegCourses.data.map((e) => {

                return {
                    courseName: e.courseName,
                    category: e.courseCategory,
                    description: e.courseDescription,
                    price: e.price,
                    courseID: e.courseId,
                };

            });

            //console.log(mappedCourses)
            setPublishedCourses(mappedCourses);
        }

        catch (error) {

            console.error("Error fetching Registered Courses:", error);

        }
    };

    return (
        <>
            <TutorNavbar />
            <div className='pb-20 p-5 select-none'>

                <h1 className='text-5xl text-center'>Welcome, {tutorDetails.tutorName}🏫</h1>
                <h1 className='text-2xl mt-4'>Publiished Courses 📚</h1>

                <div>
                    {PublishedCourseList.map((course, index) => (
                        <div className='p-2' key={index}>
                            <FullWidthCard
                                courseName={course.courseName}
                                courseCategory={course.category}
                                courseDescription={course.description}
                                price={course.price}
                                tutorName="You"
                            />
                        </div>
                    ))}
                </div>

            </div>
            <Footer2 />
        </>
    )
}

export default Tutor