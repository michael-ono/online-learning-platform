import { useState, useRef } from 'react';
import userBlank from '../assets/blank-user.jpeg';

const AvatarUpload = () => {
  const [image, setImage] = useState(null);
  const inputFileRef = useRef(null);

  const cleanup = () => {
    URL.revokeObjectURL(image);
    inputFileRef.current.value = null;
  };

  const handleOnChange = (event) => {
    const newImage = event.target?.files?.[0];

    if (newImage) {
      setImage(URL.createObjectURL(newImage));
    }
  };

  const handleClick = (event) => {
    event.preventDefault();
    setImage(null);
  };

  return (
    <div style={{ position: 'relative' }}>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
        }}
        onClick={() => inputFileRef.current.click()}
      />
      <img
        src={image || userBlank}
        alt="Avatar"
        className='mx-auto justify-center rounded-full w-[30px] h-[30px] md:w-[85px] md:h-[85px]'
      />
      <input
        type="file"
        accept="image/*"
        ref={inputFileRef}
        onChange={handleOnChange}
        style={{
          position: 'absolute',
          opacity: 0,
          pointerEvents: 'none',
          width: '1px',
          height: '1px',
          overflow: 'hidden',
        }}
      />
      {/* {image && <button onClick={handleClick}>Remove Avatar</button>} */}
    </div>
  );
};

export default AvatarUpload;