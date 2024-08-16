import React from 'react';
import profileImg from '../../assets/profile.jpeg';


const ImageContainer = () => {
  return (
    <img
        src={profileImg}
        alt="Profile"
        className='w-full h-full object-cover rounded-lg rounded-tr-[25%] rounded-bl-[25%]'
    />
  );
};

export default ImageContainer;
