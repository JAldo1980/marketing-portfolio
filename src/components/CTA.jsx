import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <div className="grid">
      <div>
        <h3 className="mt-12 text-4xl text-customBlue">
          Download examples of my work
        </h3>
        <p className="mt-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum sed
          cum nulla porro. Accusamus officiis laudantium numquam corporis
          ratione temporibus.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-2 gap-6 justify-center items-center ">
        <img
          src="/public/Graphic Design Examples Cover.png"
          className="w-full shadow-2xl cursor-pointer"
          alt=""
        />
        <img
          src="/public/Content Examples Cover.png"
          className="w-full shadow-2xl cursor-pointer"
          alt=""
        />
      </div>
    </div>
  );
};

export default CTA;
