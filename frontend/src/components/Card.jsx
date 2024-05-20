import React from "react";
import {useState} from "react";
import { useNavigate } from "react-router-dom";

//Import Images
import generalImage from "./images/courseImages/default.jpg";
import ProgrammingImage from "./images/courseImages/programming.jpg";
import aiImage from "./images/courseImages/ai.jpg";
import LawImage from "./images/courseImages/law.jpg";
import MachineLearning from "./images/courseImages/machineLearning.jpg";
import WebImage from "./images/courseImages/web.jpg";
import HistoryImage from "./images/courseImages/history.jpg";
import ScienceImage from "./images/courseImages/science.jpg";
import LiteratureImage from "./images/courseImages/literature.jpg";
import cyberSecurity from "./images/courseImages/cyberSecurity.png";
import music from "./images/courseImages/music.jpg";
import socialMedia from "./images/courseImages/social.jpg";


// import axios from "axios";

const Card = ({name, category, price, buttonText, courseID}) => {
  
  const navigate = useNavigate();

  //Take the User Id from the Local Storage
  const userIDLocalStorage = localStorage.getItem("userID");

  let imageSource;
  
  switch (category) {

    case "Programming":
      imageSource = ProgrammingImage;
      break;

    case "Artificial Intelligence":
      imageSource = aiImage;
      break;

    case "History":
      imageSource = HistoryImage;
      break;

    case "Machine Learning":
      imageSource = MachineLearning;
      break;

    case "Law":
      imageSource = LawImage;
      break;

    case "Web Development":
      imageSource = WebImage;
      break;
    
    case "Science":
      imageSource = ScienceImage;
      break;
    
    case "Literature":
      imageSource = LiteratureImage;
      break;

    case "Cyber Security":
      imageSource = cyberSecurity;
      break;

    case "Music":
      imageSource = music;
      break;

    case "Social":
      imageSource = socialMedia;
      break;

    default:
      imageSource = generalImage;
      break;
  }

  // Format the current Date : YYYY-MM-DD
  const getCurrentDateFormatted = () => {

    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const day = String(currentDate.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;

  };

  //Set the values for Course Enrollment
  const [courseEnroll, setCourseEnroll] = useState({
    user: {
      userId: userIDLocalStorage,
    },

    course: {
      courseId: courseID,
    },

    enrollmentDate: getCurrentDateFormatted(),

  });

  const enrollCourse = () => {

    navigate('/userCourse')



    //If User is logged in and try to enroll
    // if (userIDLocalStorage != null) {

    //   axios.post('http://localhost:9081/enroll/addenroll', courseEnroll)
    //   .then((response) => {
    //     window.alert("Registered successfully. Happy Learning!")
    //     //window.location.reload();
    //   })
        
    //   .catch((error) => {
    //       console.error('Error submitting form:', error);
    //   });
    // }

    // //User is not logged in. Click the button from the course page
    // else {
    //   alert("Registered");
    //   console.log("Course Enrolled");
    // }

  };

  return (
    <div className="w-full max-w-sm bg-white border-gray-200 rounded-lg shadow text-black border-2 border-transparent hover:border-blue-500">
      <img src={imageSource} className="rounded-t-lg h-60 w-full" />

      <div className="px-5 pb-5 pt-2">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900">
          {name}
        </h5>

        <div className="flex items-center mt-2.5 mb-5">
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-1 rounded">
            {category}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-green-600">{price}</span>
          <button
            onClick={enrollCourse}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
