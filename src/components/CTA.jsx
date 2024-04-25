import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <div className=" gap-4 sm:grid sm:grid-cols-2">
      <div>
        <h3 className="mt-12 text-4xl text-customBlue">
          Interested in working together?
        </h3>
        <p className="mt-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum sed
          cum nulla porro. Accusamus officiis laudantium numquam corporis
          ratione temporibus.
        </p>
      </div>
      <div className="flex justify-center items-center sm:justify-center sm:content-center">
        <Link to="/Contact">
          <Button
            type="button"
            label="Contact"
            className="mb-6 bg-customGreen mt-4 py-2 px-6 font-bold text-customGray cursor-pointer shadow-md  hover:bg-green-300 hover:duration-300 hover:ease-in-out"
          />
        </Link>
      </div>
    </div>
  );
};

export default CTA;
