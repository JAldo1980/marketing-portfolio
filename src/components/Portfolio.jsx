import React from "react";
import PortfolioData from "./PortfolioData";

const Portfolio = () => {
  return (
    <>
      <h2 className="mt-12 text-5xl">Portfolio Projects</h2>
      <div className="mt-12 flex flex-col gap-6">
        {PortfolioData.map((project) => (
          <div key={project.id} className="flex gap-6">
            <img src={project.image} alt={project.title} className="w-64" />
            <div className="flex flex-col justify-center gap-6">
              <h2 className="text-3xl">{project.title}</h2>
              <p>{project.text}</p>

              <a href={project.buttonLink} className="hover:underline">
                {project.buttonText}
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Portfolio;
