import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import Footer from "../Navbar_Files/Footer";

function CourseFile() {

   const navigate = useNavigate();

   const handleEnrollClick = () => {
      toast.success("Successfully Enrolled");
      setTimeout(() =>{ 
         navigate('/user/allcourses');
     }, 1500 );
   };

   return (
      <>
      <Toaster />
      <div className='pb-20 select-none'>
         <div className='bg-blue-100 p-8 rounded-lg shadow-md h-1/2 flex w-full'>
           <div class=" h-full w-1/2"> 
             <h1 className='text-4xl font-semibold'> Course Title </h1>
                <div class='p-5'>
                <p class='py-5 !pb-10'>This is your path to a career in undefined. <br></br>
                In this program, you`ll learn in-demand skills that will have you job-ready in less than 6 months.<br></br>
                No degree or experience required.<br></br>
                </p>

                <button
                class="middle none center rounded-lg bg-blue-500 py-3.5 px-10 font-sans text-sm font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 hover:bg-blue-800 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                data-ripple-light="true"
                onClick={handleEnrollClick}
                >
                Enroll
               </button>
               <div class='font-extralight pl-1 pt-1'>12 already enrolled</div>

                </div>
           </div>
           <div class="bg-blue-200 p-8 rounded-md h-full w-1/2 flex-grow shadow-lg">
             <div class='text-xl font-medium'>
               Intermediate level
             </div>
             <div class='text-xl font-medium pt-3'>Recommended experience</div>
             <div class='text-s pl-3 font-extralight pt-0'>A working knowledge of Python and Data Analysis and Visualization techniques.<br/> A minimum of high school math.</div>
             <div class='text-xl font-medium pt-3'>12 hours (approximately)</div>
             <div class='text-xl font-medium pt-3'>Flexible schedule</div>
             <div class='text-s pl-3 font-extralight pt-0'>Learn at your own pace</div>
             <div class='text-xl font-medium pt-3'>Progress towards a degree</div>
           </div>

         </div>
         
         <div class='h-1/2 pl-10 py-8'>
         <h3  class='text-2xl bold py-3'>What you'll learn</h3>
         <ul class='pl-8 font-extralight list-disc'>
            <li>Learn firsthand the procedures and methods that a junior or associate data analyst employs on a daily basis.</li>
            <li>Learn how to prepare and organize data for analysis and programming to finish analysis and computations.</li>
            <li>Learn the fundamental tools and techniques of analysis.</li>
            <li>Learn how to display data insights in dashboards, presentations, and popular visualization platforms.</li>
         </ul>

         <h3  class='text-2xl bold py-3'>Skills you'll gain</h3>
         <ul class='pl-8 font-extralight list-disc'>
            <li>Data Visualization</li>
            <li>Spreadsheet</li>
            <li>Data Collection</li>
         </ul>

         </div>
      </div>
      </>

   )
}

export default CourseFile;
