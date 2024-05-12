import React from 'react';
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Card from './Card';
import { dummyData } from '../data';

const SlickSlider = ({ listOfItems }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500
    };

    return (
        <div className='mt-2 mb-8'>
            <Slider {...settings} className='p-2'>
                {dummyData.map((course, index) => (
                    <div className='p-2' key={index}>
                        <Card
                            name={course.courseName}
                            category={course.category}
                            price={course.price}
                            buttonText={course.buttonText}
                            courseID={course.courseID}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default SlickSlider;