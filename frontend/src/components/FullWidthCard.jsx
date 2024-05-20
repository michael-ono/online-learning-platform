import React from 'react'

//Import Images
import generalImage from './images/courseImages/default.jpg'
import ProgrammingImage from './images/courseImages/programming.jpg'
import aiImage from './images/courseImages/ai.jpg'
import LawImage from './images/courseImages/law.jpg'
import MachineLearning from './images/courseImages/machineLearning.jpg'
import WebImage from './images/courseImages/web.jpg'
import HistoryImage from './images/courseImages/history.jpg'
import ScienceImage from "./images/courseImages/science.jpg";
import LiteratureImage from "./images/courseImages/literature.jpg";
import cyberSecurity from "./images/courseImages/cyberSecurity.png";
import music from "./images/courseImages/music.jpg";
const FullWidthCard = ({ courseName, courseCategory, courseDescription, price, tutorName }) => {

    let imageSource;
    
    switch (courseCategory) {

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
        
        default:
            imageSource = generalImage;
            break;
    };

    return (

        <a href='#' className="my-5 sm:max-w-full sm:flex">
            <div
                className="h-72 sm:h-auto sm:w-72 flex-none bg-cover rounded-t-2xl sm:rounded-t-none sm:rounded-l-2xl text-center overflow-hidden"
                style={{ backgroundImage: `url(${imageSource})` }} >
            </div>

            <div className="w-full bg-gradient-to-r from-gray-200 to-gray-500 rounded-b-2xl sm:rounded-b-none sm:rounded-r-2xl p-4 flex flex-col justify-between leading-normal">
                <div className="mb-2">
                    <div className="text-gray-900 font-bold text-3xl">
                        {courseName}
                    </div>
                    <p className="text-gray-700 text-[1.1rem] font-semibold mt-4 leading-relaxed">
                        {courseDescription}
                    </p>
                </div>

                {/* <div className="flex items-center"> */}
                    <div className="text-sm ">
                        <p className="text-[1rem] my-1 text-gray-900 ">
                            Course Category: {courseCategory}
                        </p>
                        <p className="text-sm text-gray-600 flex items-center my-1">
                            👨‍🏫 Published By: {tutorName}
                        </p>
                        {/* <p className="pl-5 text-xl my-3">
                            Price: <span> </span>
                            <span className='text-green-600'>
                                {price}
                            </span>
                        </p> */}
                    </div>
                {/* </div> */}

            </div>
        </a>


    );
}

export default FullWidthCard;