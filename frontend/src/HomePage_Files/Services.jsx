import React from 'react'
import HomepageNavbar from "./HomepageNavbar";
import servicesBg from "../assets/shiny-overlay2.svg";
import Footer from '../Navbar_Files/Footer';

export default function Services() {
    return (
        <>
            <HomepageNavbar />
            <div className='h-full' style={{ backgroundImage: `url(${servicesBg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                <h1 className='pt-3 text-[2.48rem] text-center text-white font-bold'>Our services</h1>
                <div className="flex flex-wrap justify-center px-6 py-[2rem] space-x-16 h-full" >
                    {/* <!-- card 1 --> */}
                    <div class="p-4 max-w-sm">
                        <div class="flex rounded-2xl h-full dark:bg-gray-800 bg-cyan-700 hover:bg-cyan-800 cursor-pointer p-8 flex-col">
                            <div class="flex items-center mb-3">
                                <div
                                    class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                    </svg>
                                </div>
                                <h2 class="text-white dark:text-white text-lg font-medium">Course Hosting 📚</h2>
                            </div>
                            <div class="flex flex-col justify-between flex-grow">
                                <p class="leading-relaxed text-base text-white dark:text-gray-300">
                                We host the course content and provide a learning management system (LMS) to deliver the courses to learners.
                                </p>
                                <a href="#" class="mt-3 text-black dark:text-white hover:text-blue-200 inline-flex items-center">Learn More
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* <!-- card 2 --> */}
                    <div class="p-4 max-w-sm">
                        <div class="flex rounded-2xl h-full dark:bg-gray-800 bg-cyan-700 hover:bg-cyan-800 cursor-pointer p-8 flex-col">
                            <div class="flex items-center mb-3">
                                <div
                                    class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                    </svg>
                                </div>
                                <h2 class="text-white dark:text-white text-lg font-medium">Certification 🏅</h2>
                            </div>
                            <div class="flex flex-col justify-between flex-grow">
                                <p class="leading-relaxed text-base text-white dark:text-gray-300">
                                    We offer valid certificate for everyone who successfully complete their courses, requirements are different for each course. 
                                </p>    
                                <a href="#" class="mt-3 text-black dark:text-white  hover:text-blue-200 inline-flex items-center">Learn More
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* <!-- card 3 --> */}
                    <div class="p-4 max-w-sm">
                        <div class="flex rounded-2xl h-full dark:bg-gray-800 bg-cyan-700 hover:bg-cyan-800 cursor-pointer p-8 flex-col">
                            <div class="flex items-center mb-3">
                                <div
                                    class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                    </svg>
                                </div>
                                <h2 class="text-white dark:text-white text-lg font-medium">Analytics and Reporting 📈</h2>
                            </div>
                            <div class="flex flex-col justify-between flex-grow">
                                <p class="leading-relaxed text-base text-white dark:text-gray-300">
                                    We provide detailed analytics and reporting capabilities to both course creators and learners.
                                </p>
                                <a href="#" class="mt-3 text-black dark:text-white hover:text-blue-200 inline-flex items-center">Learn More
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* <!-- card 4 --> */}
                    <div class="p-4 max-w-sm">
                        <div class="flex rounded-2xl h-full dark:bg-gray-800 bg-cyan-700 hover:bg-cyan-800 cursor-pointer p-8 flex-col">
                            <div class="flex items-center mb-3">
                                <div
                                    class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                    </svg>
                                </div>
                                <h2 class="text-white dark:text-white text-lg font-medium">Job recruitment 💻</h2>
                            </div>
                            <div class="flex flex-col justify-between flex-grow">
                                <p class="leading-relaxed text-base text-white dark:text-gray-300">
                                    Upon completion, we offer job interviews and screening to potential candidates wo performed exeptionally.
                                </p>
                                <a href="#" class="mt-3 text-black dark:text-white hover:text-blue-200 inline-flex items-center">Learn More
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* <!-- card 5 --> */}
                    <div class="p-4 max-w-sm">
                        <div class="flex rounded-2xl h-full dark:bg-gray-800 bg-cyan-700 hover:bg-cyan-800 cursor-pointer p-8 flex-col">
                            <div class="flex items-center mb-3">
                                <div
                                    class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                    </svg>
                                </div>
                                <h2 class="text-white dark:text-white text-lg font-medium">Financial aids 🤝</h2>
                            </div>
                            <div class="flex flex-col justify-between flex-grow">
                                <p class="leading-relaxed text-base text-white dark:text-gray-300">
                                    This is to help individuals who demonstrate financial need access their extensive catalog of online courses.
                                </p>
                                <a href="#" class="mt-3 text-black dark:text-white hover:text-blue-200 inline-flex items-center">Learn More
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </>
    )
}



{/* <>
<HomepageNavbar />
<div className="flex flex-wrap p-5 pb-0 py-10" style={{ backgroundImage: `url(${servicesBg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
    <div className='p-5 px-10 pb-28 select-none text-white'>
        <h1 className='text-[2.3rem] font-bold text-center pb-8'>Our Services</h1>
        <h2 className='text-[1.6rem] py-3 font-medium'>Course Hosting and Delivery 📚</h2>
        <p className='text-[1.05rem]'>.</p>
        <h2 className='text-[1.6rem] py-3 font-medium'>Certification 🏅</h2>
        <p className='text-[1.05rem]'>We offer valid certificate for everyone who successfully complete their courses(requirements are different for each course). This feature helps learners showcase their achievements and enhance their professional profiles.</p>
        <h2 className='text-[1.6rem] py-3 font-medium'>Analytics and Reporting 📈</h2>
        <p className='text-[1.05rem]'>We provide detailed analytics and reporting capabilities to both course creators and learners. Creators can monitor enrollment, engagement, and revenue, while learners can track their progress and performance.</p>
        <h2 className='text-[1.6rem] py-3 font-medium'>Financial Aids 🤝</h2>
        <p className='text-[1.05rem]'>We offer a Financial Aid Program to help individuals who demonstrate financial need access their extensive catalog of online courses. This program is designed to make high-quality education available to learners worldwide, irrespective of their financial circumstance.</p>
    </div >
</div>
</> */}
