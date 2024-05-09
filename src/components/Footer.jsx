import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <div>
          <Link to="/">
            <img
              src="james-alderman-logo__1_-removebg-preview.png"
              alt="james alderman logo"
              className="w-8 cursor-pointer"
            />
          </Link>
        </div>
        <div className="flex gap-2 cursor-pointer uppercase">
          <Link
            to="/"
            className="mb-6 bg-customGreen mt-4 py-2 px-6 font-bold text-customGray cursor-pointer  shadow-md hover:bg-green-300 hover:duration-300 hover:ease-in-out"
          >
            Home
          </Link>

          <Link
            to="/Portfolio"
            className="mb-6 bg-customGreen mt-4 py-2 px-6 font-bold text-customGray cursor-pointer  shadow-md hover:bg-green-300 hover:duration-300 hover:ease-in-out"
          >
            Portfolio
          </Link>
          <Link
            to="/Contact"
            className="mb-6 bg-customGreen mt-4 py-2 px-6 font-bold text-customGray cursor-pointer  shadow-md hover:bg-green-300 hover:duration-300 hover:ease-in-out"
          >
            Contact
          </Link>
          {/* Add more links for other pages */}
        </div>
      </div>
      <div className="mt-6 flex justify-center opacity-50">
        Designed &amp; built by James Alderman | Digital Marketing Portfolio |
        2024
      </div>
    </>
  );
};

export default Footer;
