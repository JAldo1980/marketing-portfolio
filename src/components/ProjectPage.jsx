import React from "react";
import { useParams } from "react-router-dom";
import PortfolioData from "./PortfolioData";

const IndividualProject = () => {
  // Access the project slug from URL parameters
  const { slug } = useParams();

  // Find the project with the matching slug
  const project = PortfolioData.find((project) => project.slug === slug);

  // If project is not found, display a message
  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <>
      <h2 className="mt-12 text-5xl text-customBlue">{project.title}</h2>
      <div className="mt-6 flex flex-col">
        <div>
          <h3 className="mt-6 text-3xl text-customBlue">Objective</h3>
          <p className="mt-3">{project.objective}</p>

          <h3 className="mt-6 text-3xl text-customBlue">Approach</h3>
          <ul className="mt-3">
            {project.approach.map((step, index) => (
              <li key={index} className="my-4">
                {step}
              </li>
            ))}
          </ul>

          <h3 className="mt-6 text-3xl text-customBlue">Results</h3>
          <ul className="mt-3">
            {project.results.map((result, index) => (
              <li key={index} className="my-4">
                {result}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-6">
            <img
              src={project.imageOne}
              alt={project.title}
              className="mt-6 w-full sm:w-64 shadow-2xl"
            />
            <img
              src={project.imageTwo}
              alt={project.title}
              className="mt-6 w-full sm:w-64 shadow-2xl"
            />
          </div>
        </div>

        {/* Additional images or content */}
        {/* You can display additional images or content related to the project here */}
      </div>
    </>
  );
};

export default IndividualProject;
