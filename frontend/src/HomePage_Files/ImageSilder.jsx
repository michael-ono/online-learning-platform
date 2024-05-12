import { useState, useEffect } from 'react';

import SliderImage1 from "../components/images/SliderImage1.svg";
import SliderImage2 from "../components/images/SliderImage2.png";

const ImageSlider = () => {
    const images = [
        SliderImage1,
        SliderImage2,
        // Add image URLs here
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleImageChange = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    useEffect(() => {
        const interval = setInterval(handleImageChange, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} className="w-full h-auto"/>
        </div>
    );
};

export default ImageSlider;
