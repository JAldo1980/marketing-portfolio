import React from "react";
import Button from "./Button";

const About = () => {
  return (
    <>
      <div className="mt-12 gap-4 grid sm:grid-cols-2 sm:align-items-center ">
        <div>
          <img
            src="/public/profile-removebg-preview-removebg-preview.png"
            alt="james alderman profile picture"
            className=""
          />
        </div>
        <div className="border-t-2 border-b-2 border-customBlue border-opacity-50 sm:flex sm:flex-col sm:content-center sm:justify-center sm:gap-6">
          <h2 className="mt-6 text-4xl sm:text-5xl text-customBlue font-bold">
            About
          </h2>
          <p className="mt-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
            libero aliquid modi corrupti officia cum quisquam veniam quaerat
            voluptas voluptatum fuga, quia iure ducimus magni suscipit beatae
            ratione blanditiis non culpa, repellat iste quis. Earum deleniti
            obcaecati veritatis hic eligendi.
          </p>
          <Button
            className="mb-6 bg-customGreen mt-4 py-2 px-6 font-bold rounded-full text-customGray cursor-pointer hover:bg-green-300 hover:duration-300 hover:ease-in-out"
            type="button"
            label="View portfolio"
          />
        </div>
      </div>
    </>
  );
};

export default About;
