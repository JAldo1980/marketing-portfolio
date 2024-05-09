import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <Link to="/">
          <img
            src="james-alderman-logo__1_-removebg-preview.png"
            alt="james alderman logo"
            className="w-16 cursor-pointer"
          />
        </Link>
      </div>
      <div className="flex gap-2 cursor-pointer uppercase">
        <Link
          to="/"
          className="mb-6 bg-customGreen mt-2 py-2 px-6 font-bold text-customGray cursor-pointer  shadow-md hover:bg-green-300 hover:duration-300 hover:ease-in-out"
        >
          Home
        </Link>

        <Link
          to="/Portfolio"
          className="mb-6 bg-customGreen mt-2 py-2 px-6 font-bold text-customGray cursor-pointer  shadow-md hover:bg-green-300 hover:duration-300 hover:ease-in-out"
        >
          Experience
        </Link>
        <Link
          to="/Contact"
          className="mb-6 bg-customGreen mt-2 py-2 px-6 font-bold text-customGray cursor-pointer  shadow-md hover:bg-green-300 hover:duration-300 hover:ease-in-out"
        >
          Contact
        </Link>
        {/* Add more links for other pages */}
      </div>
    </div>
  );
};

export default Nav;
