import React from "react";
import Button from "./Button";

const CTA = () => {
  return (
    <div className="mt-12 gap-4 ">
      <div className="mt-12 text-4xl italic text-customBlue">
        Interested in working together?
      </div>
      <Button
        type="button"
        label="Contact"
        className="mb-6 bg-customGreen mt-4 py-2 px-6 font-bold rounded-full text-customGray cursor-pointer hover:bg-green-300 hover:duration-300 hover:ease-in-out"
      />
    </div>
  );
};

export default CTA;
