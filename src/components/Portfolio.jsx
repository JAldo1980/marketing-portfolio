import React from "react";
import PortfolioData from "./PortfolioData";
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <>
      <h2 className="mt-8 text-4xl sm:text-5xl text-customBlue font-bold">
        Experiences
      </h2>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        {PortfolioData.map((project) => (
          <div
            key={project.id}
            className="flex flex-col items-center sm:flex-row gap-6 p-2 bg-gray-100 rounded"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto sm:w-32 sm:h-32 object-cover shadow-2xl"
            />
            <div className="flex flex-col justify-center gap-6">
              <h2 className="text-3xl text-customBlue">{project.title}</h2>
              <p>{project.text}</p>

              {/* Use Link component for navigation */}
              <Link
                to={`/portfolio/${project.slug}`}
                className="hover:underline"
              >
                <button className="mb-6 bg-customGreen mt-4 py-2 px-6 font-bold text-customGray cursor-pointer  shadow-md hover:bg-green-300 hover:duration-300 hover:ease-in-out">
                  {project.buttonText}
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Portfolio;
