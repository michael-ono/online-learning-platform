import React from 'react'
import HomepageNavbar from "./HomepageNavbar";
import aboutBg from "../assets/about-us-bg2.svg";

export default function About() {
    return (
        <>
            <HomepageNavbar />
            <div className="flex flex-wrap p-5 pt-1 pb-0 h-full" style={{ backgroundImage: `url(${aboutBg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
                <div className='px-10 pt-6 pb-16 select-none text-md text-white'>
                    {/* content goes inside this div */}
                    <h1 className='text-[2.5rem] text-center pb-[0.75]'><b >About Us</b></h1>
                    <p className='text-center text-[1.3rem] my-6'>
                        Welcome to LearnLodge, a dynamic virtual space where learning has no boundaries 🚀
                    </p>
                        <div className='text-[1.1rem] space-y-10 text-center'>
                        <p className=' mt-4'>
                            We are passionate about empowering individualse pursue their dreams, expand their horizons,
                            and acquire valuable skills. We strive to create an inclusive learning environment that connects
                            learners with the best universities and industry experts from around the globe.
                        </p>
                        <p className='mt-4'>
                            We pride ourselves on partnering with prestigious educational institutions and esteemed instructors who are at the forefront
                            of their respective fields. This ensures that our learners receive unparalleled expertise and insights, enabling them
                            to gain practical skills and stay relevant in an ever-evolving world.
                        </p>
                        <p className='mt-4'>
                            With the convenience of online learning, you can access course materials at any time,
                            from anywhere, and learn at your own pace. We believe in the power of community and fostering connections.
                        </p>
                        <p className='mt-4'>Join us on this educational journey, where knowledge has no boundaries
                            and the possibilities for personal and professional growth are limitless.
                        </p>
                    </div>
                    <p className='text-center text-2xl m-8 pt-8'> Together, let's embrace the transformative power of
                        learning and shape a brighter future 🌱
                    </p>
                </div>
            </div>
        </>
    )
}