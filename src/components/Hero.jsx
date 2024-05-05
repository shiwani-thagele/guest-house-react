import React from 'react';
import backgroundImage from '../assets/pic-6.jpg'; // Import your background image
import "./index.css";

const Hero = () => {
  return (
    <div
      className=" relative z-0 bg-cover bg-center bg-no-repeat max-w-screen-xl mx-auto "
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat:"no-repeat",
      
        position:"relative"
      }}
    >
      <div
        className="absolute inset-0  bg-fixed bg-opacity-50 filter backdrop-blur-sm" // Apply blur effect to the background image only
      ></div>
      <div className="mx-auto max-w-5xl px-6 py-10 text-center md:px-12 md:py-16 relative z-10">
        <h1 className="text-3xl leading-[52px] font-semibold md:text-4xl lg:text-5xl text-black">
          Your Home Away from Home
          <span className="bg-[#2C7865] text-black p-0.5 rounded-lg">Kingsukh</span> Guest House <br />
          <div className="sm:mt-2">
            <span className="underline decoration-[#2C7865] underline-offset-4 text-black">
              A Haven of Peace and Relaxation
            </span>
          </div>
        </h1>
        <p className="mt-4 text-lg font-medium leading-2 text-black md:text-xl">
          At Kingsukh Guest House, we're dedicated to providing our guests with a comfortable and memorable stay. Our cozy and stylish rooms are designed to make you feel at home, with modern amenities and thoughtful touches to help you relax and unwind.
        </p>
        <div className="mt-8 flex justify-center gap-2">
          <a href="/pages">
            <button className="text-md rounded-lg bg-gradient-to-br from-[#2C7865] to-[#87A922] px-4 py-[10px] font-semibold text-white hover:text-black hover:bg-gradient-to-tl hover:from-[#C1F2B0] hover:to-[#65B741]">
              <div className="flex items-center justify-center">
                Know More
              </div>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;

// bg-[#f7ce8f]