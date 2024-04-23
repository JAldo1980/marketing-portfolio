import React from "react";

const Nav = () => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <img
          src="/public/james-alderman-logo__1_-removebg-preview.png"
          alt="james alderman logo"
          className="w-16 cursor-pointer"
        />
      </div>
      <div className="flex gap-8 cursor-pointer uppercase">
        <div className="hover:text-gray-300 duration-300">Home</div>
        <div className="hover:text-gray-300 duration-300">Portfolio</div>
        <div className="hover:text-gray-300 duration-300">Contact Me</div>
      </div>
    </div>
  );
};

export default Nav;
