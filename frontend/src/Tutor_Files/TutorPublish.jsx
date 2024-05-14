import React, { useState, useEffect } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";

import TutorNavbar from './TutorNavbar'
import Footer2 from "../Navbar_Files/Footer2";

function TutorPublish() {

    const navigate = useNavigate();

    //Tahe the Tutor Details
    const tutorEmail = localStorage.getItem('tutorEmail');

    const [tutorIDNumber, setTutorIDNumber] = useState()

    useEffect(() => {
        loadDetails();
    }, [])

    const loadDetails = async () => {
        // try {
        //     const url = `http://localhost:9081/tutor/email/${tutorEmail}`;
        //     const tutor = await axios.get(url);
        //     setTutorIDNumber(tutor.data.tutorId);
        // }
        // catch (error) {
        //     console.error("Error fetching User Details:", error);
        // }
    };

    //Handle course Creation form
    const [formData, setFormData] = useState({
        courseName: '',
        courseCategory: '',
        courseDescription: '',
        price: '',
        tutor: {
            tutorId: ''
        }
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

    };

    const handleSubmit = (e) => {

        // Set the Tutor ID
        formData.tutor.tutorId = tutorIDNumber

        //Set the price with "$"" sign
        formData.price = "$ " + formData.price

        e.preventDefault();

        axios.post('http://localhost:9081/course/addcourse', formData)
            .then((response) => {
                //console.log(formData);
                window.alert("Course Created Successfully!")
                navigate("/tutor/dashboard")
            })
            .catch((error) => {
                console.error('Error submitting form:', error);
            });
    };

    return (
        <>
            <TutorNavbar />

            <div className="min-h-screen bg-gray-100 p-5 pb-20 select-none">

                <h1 className='text-2xl'>Publish a new course</h1>

                <div className="mx-auto max-w-md my-5 p-6 bg-white border-0 shadow-lg sm:rounded-3xl">
                    <h1 className="text-2xl font-bold mb-8">Course Registration Form</h1>

                    <form onSubmit={handleSubmit}>

                        {/* Course Name */}
                        <div className="mb-4">
                            <label
                                htmlFor="courseName"
                                className="block text-gray-600 font-medium mb-2">
                                Course Name
                            </label>
                            <input
                                type="text"
                                id="courseName"
                                name='courseName'
                                className="px-4 py-2 w-full border rounded-lg focus:ring focus:ring-blue-300 outline-none"
                                value={formData.courseName}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* Course Category */}
                        <div className="mb-4">
                            <label htmlFor="courseCategory" className="block text-gray-600 font-medium mb-2">
                                Course Category
                            </label>
                            <input
                                type="text"
                                id="courseCategory"
                                name='courseCategory'
                                className="px-4 py-2 w-full border rounded-lg focus:ring focus:ring-blue-300 outline-none"
                                value={formData.courseCategory}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* Course price */}
                        <div className="mb-4">
                            <label htmlFor="price" className="block text-gray-600 font-medium mb-2">
                                Price (₦)
                            </label>
                            <input
                                type="number"
                                id="price"
                                name='price'
                                className="px-4 py-2 w-full border rounded-lg focus:ring focus:ring-blue-300 outline-none"
                                value={formData.price}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* Course Description */}
                        <div className="mb-4">
                            <label htmlFor="price" className="block text-gray-600 font-medium mb-2">
                                Course Description
                            </label>
                            <textarea
                                type="number"
                                id="courseDescription"
                                name='courseDescription'
                                className="px-4 py-2 w-full border rounded-lg focus:ring focus:ring-blue-300 outline-none"
                                value={formData.courseDescription}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full px-6 py-3 mt-4 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-blue-500 hover:bg-blue-600 hover:shadow-lg focus:outline-none"
                        >
                            Create Course
                        </button>
                    </form>
                </div>
            </div>



            <Footer2 />
        </>
    )
}

export default TutorPublish