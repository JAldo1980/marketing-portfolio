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
        <a href="https://www.canva.com/design/DAGDCdPfpws/_wVrsnP6ncX9l1XErETK2g/view?utm_content=DAGDCdPfpws&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview">
          <img
            src="/public/Graphic Design Examples Cover.png"
            className="w-full shadow-2xl cursor-pointer"
            alt="james alderman graphic designs"
          />
        </a>
        <a href="https://www.canva.com/design/DAGDIa7pgTc/-NUYsZAazLSeZJGYdYsuSQ/view?utm_content=DAGDIa7pgTc&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview#1">
          <img
            src="/public/Content Examples Cover.png"
            className="w-full shadow-2xl cursor-pointer"
            alt="james alderman content examples"
          />
        </a>
      </div>
    </div>
  );
};

export default CTA;
