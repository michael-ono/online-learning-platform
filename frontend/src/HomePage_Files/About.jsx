import React from 'react'
import HomepageNavbar from "./HomepageNavbar";
import aboutBg from "../assets/about-us-bg.png";

export default function About() {
    return (
        <>
            <HomepageNavbar />
            <div className="flex flex-wrap p-5 pb-0 text-[#]" style={{ backgroundImage: `url(${aboutBg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
                <div className='px-10 pt-6 pb-20 select-none text-sm'>
                    {/* content goes inside this div */}
                    <h1 className='text-[2.3rem] text-center pb-3'><b >About Us</b></h1>
                    <p className='text-center text-[1.4rem] my-6'>
                        Welcome to LearnLodge, a dynamic virtual space where learning has no boundaries 🚀
                    </p>
                    <div className='text-[1.1rem]'>
                        <p className=' mt-4'>
                            We are passionate about empowering individuals from all walks of life to pursue their dreams, expand their horizons,
                            and acquire valuable skills. We strive to create an inclusive learning environment that connects
                            learners with the best universities and industry experts from around the globe.
                        </p>
                        <p className='mt-4'> Our mission is to democratize education by providing accessible,
                            high-quality courses that cater to a diverse range of interests and aspirations. With a vast and ever-expanding
                            catalog of courses spanning various disciplines, we aim to meet the needs of lifelong learners, professionals
                            seeking career advancement, and those simply driven by a thirst for knowledge.
                        </p>
                        <p className='mt-4'> We pride
                            ourselves on partnering with prestigious educational institutions and esteemed instructors who are at the forefront
                            of their respective fields. This ensures that our learners receive unparalleled expertise and insights, enabling them
                            to gain practical skills and stay relevant in an ever-evolving world.
                        </p>
                        <p className='mt-4'>
                            Flexibility is at the core of our platform.
                            Whether you're a busy professional, a student, or someone with a hectic schedule, our courses are designed to
                            accommodate your lifestyle.
                        </p>
                        <p className='mt-4'>
                            With the convenience of online learning, you can access course materials at any time,
                            from anywhere, and learn at your own pace. We believe in the power of community and fostering connections.
                        </p>
                        <p className='mt-4'> Our platform offers opportunities to engage with fellow learners, instructors,
                            and industry professionals through discussion forums, virtual meetups, and networking events.
                        </p>
                        <p className='mt-4'>Collaboration and interaction enrich the learning experience, allowing for the exchange
                            of ideas and the cultivation of valuable connections that extend beyond the virtual classroom.
                        </p>
                        <p className='mt-4'>Join us on this educational journey, where knowledge has no boundaries
                            and the possibilities for personal and professional growth are limitless.
                        </p>
                    </div>
                    <p className='text-center text-2xl m-8'> Together, let's embrace the transformative power of
                        learning and shape a brighter future 🌱
                    </p>
                </div>
            </div>
        </>
    )
}