import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="relative">
      <img
        src="/public/main-banner.png"
        alt="main-banner-image"
        className="w-full"
      />
      <div className="absolute bottom-0 left-0 p-4 bg-customGray w-1/2">
        <h2 className="text-8xl text-customBlue">James Alderman</h2>
        <p className="mt-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non,
          quisquam temporibus cum laboriosam soluta optio quibusdam a saepe esse
          sequi.
        </p>
        <Button
          className="mt-4 bg-customGreen py-2 px-6 cursor-pointer font-bold text-customGray"
          label="About Me"
        />
      </div>
    </div>
  );
};

export default Hero;
