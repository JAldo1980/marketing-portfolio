import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <Link to="/">
          <img
            src="/public/james-alderman-logo__1_-removebg-preview.png"
            alt="james alderman logo"
            className="w-8 cursor-pointer"
          />
        </Link>
      </div>
      <div className="flex gap-8 cursor-pointer uppercase">
        <Link to="/" className="hover:text-gray-300 duration-300">
          Home
        </Link>

        <Link to="/Portfolio" className="hover:text-gray-300 duration-300">
          Portfolio
        </Link>
        <Link to="/Contact" className="hover:text-gray-300 duration-300">
          Contact
        </Link>
        {/* Add more links for other pages */}
      </div>
    </div>
  );
};

export default Footer;
