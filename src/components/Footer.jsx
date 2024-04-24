import React from "react";

const Footer = () => {
  return (
    <>
      <div className="flex justify-between">
        <div>
          <img
            src="/public/james-alderman-logo__1_-removebg-preview.png"
            alt="james alderman logo"
            className="w-8 cursor-pointer"
          />
        </div>
        <div className="flex gap-4 cursor-pointer uppercase">
          <div className="hover:text-gray-300 duration-300">Home</div>
          <div className="hover:text-gray-300 duration-300">Portfolio</div>
          <div className="hover:text-gray-300 duration-300">Contact Me</div>
        </div>
      </div>
    </>
  );
};

export default Footer;
