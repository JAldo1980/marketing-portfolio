import React from "react";
import PortfolioData from "./PortfolioData";
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <>
      <h2 className="mt-12 text-5xl text-customBlue">Experiences</h2>
      <div className="mt-12 grid grid-cols-1 gap-6">
        {PortfolioData.map((project) => (
          <div key={project.id} className="flex flex-col sm:flex-row gap-6">
            <img
              src={project.image}
              alt={project.title}
              className="w-full sm:w-64 shadow-2xl "
            />
            <div className="flex flex-col justify-center gap-6">
              <h2 className="text-3xl text-customBlue">{project.title}</h2>
              <p>{project.text}</p>

              {/* Use Link component for navigation */}
              <Link
                to={`/portfolio/${project.slug}`}
                className="hover:underline"
              >
                {project.buttonText}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Portfolio;
