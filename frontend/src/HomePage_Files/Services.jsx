import React from 'react'
import HomepageNavbar from "./HomepageNavbar";
import servicesBg from "../assets/about-us-bg.png";

export default function Services() {
    return (
        <>
            <HomepageNavbar />
            <div className="flex flex-wrap p-5 pb-0 py-10" style={{ backgroundImage: `url(${servicesBg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                <div className='p-5 px-10 pb-28 select-none'>
                    <h1 className='text-[2.3rem] font-bold text-center pb-8'>Our Services</h1>
                    <h2 className='text-[1.6rem] py-3 font-medium'>Course Hosting and Delivery 📚</h2>
                    <p className='text-[1.05rem]'>We host the course content and provide a learning management system (LMS) to deliver the courses to learners. They handle the technical aspects of hosting videos, documents, quizzes, and other learning materials.</p>
                    <h2 className='text-[1.6rem] py-3 font-medium'>Certification 🏅</h2>
                    <p className='text-[1.05rem]'>We offer valid certificate for everyone who successfully complete their courses(requirements are different for each course). This feature helps learners showcase their achievements and enhance their professional profiles.</p>
                    <h2 className='text-[1.6rem] py-3 font-medium'>Analytics and Reporting 📈</h2>
                    <p className='text-[1.05rem]'>We provide detailed analytics and reporting capabilities to both course creators and learners. Creators can monitor enrollment, engagement, and revenue, while learners can track their progress and performance.</p>
                    <h2 className='text-[1.6rem] py-3 font-medium'>Financial Aids 🤝</h2>
                    <p className='text-[1.05rem]'>We offer a Financial Aid Program to help individuals who demonstrate financial need access their extensive catalog of online courses. This program is designed to make high-quality education available to learners worldwide, irrespective of their financial circumstance.</p>
                </div >
            </div>
        </>
    )
}
