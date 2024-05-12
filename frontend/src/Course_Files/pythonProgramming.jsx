import React, { Component } from 'react'
import Footer from "../Navbar_Files/Footer";

function PythonProgramming() {
   return (
      <>
      <div className='pb-20 py-5 select-none'>
         <div className='bg-blue-100 p-8 rounded-lg shadow-md h-1/2 flex w-full'>
           <div class=" h-full w-1/2"> 
             <h1 className='text-4xl font-semibold'> Python 3 Programming Specialization</h1>
                <div class='p-5'>
                <p class='py-5 !pb-10'>Become a Fluent Python Programmer. Learn the fundamentals and become an independent programmer.
                </p>

                <button
                class="middle none center rounded-lg bg-blue-500 py-3.5 px-10 font-sans text-sm font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                data-ripple-light="true"
                >
                Enroll
               </button>
               <div class='font-extralight pl-1 pt-1'>10 already enrolled</div>

                </div>
           </div>
           <div class="bg-blue-200 p-8 rounded-md h-full w-1/2 flex-grow shadow-lg">
             <div class='text-xl font-medium'>
               Intermediate level
             </div>
             <div class='text-xl font-medium pt-3'>Specialization - 5 course series</div>
             <div class='text-s pl-3 font-extralight pt-0'>Get in-depth knowledge of a subject</div>
             <div class='text-xl font-medium pt-3'>3 months at 10 hours a week</div>
             <div class='text-xl font-medium pt-3'>Beginner level</div>
             <div class='text-s pl-3 font-extralight pt-0'>No previous experience necessary</div>
             <div class='text-xl font-medium pt-3'>Prepare for a degree</div>
           </div>

         </div>
         
         <div class='h-1/2 pl-10 py-8'>


         <h3  class='text-2xl bold py-3'>Skills you'll gain</h3>
         <ul class='pl-8 font-extralight list-disc'>
            <li>Json</li>
            <li>Computer Programming</li>
            <li>Python Programming</li>
            <li>Sorting</li>
         </ul>

         

         </div>
      </div>
      <Footer />   
      </>

   )
}

export default PythonProgramming
