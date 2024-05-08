import React from "react";
import PortfolioData from "./PortfolioData";
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <>
      <h2 className="mt-8 text-4xl sm:text-5xl text-customBlue font-bold">
        Experiences
      </h2>
      <div>
        <h4 className="mt-8 text-2xl text-customBlue">Roles Held</h4>
        <div className="mt-4 flex flex-row flex-wrap justify-evenly gap-6">
          <p className="text-bold custom-tab rounded px-4 py-2 text-white">
            Co-founder &amp; Director
          </p>
          <p className="text-bold custom-tab rounded px-4 py-2 text-white">
            Head of Digital
          </p>
          <p className="text-bold custom-tab rounded px-4 py-2 text-white">
            Content SEO &amp; Social Media Manager
          </p>
          <p className="text-bold custom-tab rounded px-4 py-2 text-white">
            Digital Marketer Trainer
          </p>
          <p className="text-bold custom-tab rounded px-4 py-2 text-white">
            Digital Marketing Executive
          </p>
          <p className="text-bold custom-tab rounded px-4 py-2 text-white">
            Community Manager
          </p>
          <p className="text-bold custom-tab rounded px-4 py-2 text-white">
            Frontend Web Developer
          </p>
        </div>
      </div>
      <div>
        <h4 className="mt-8 text-2xl text-customBlue">Companies Worked For</h4>
        <div className="mt-4 flex flex-row flex-wrap justify-evenly gap-6">
          <img
            src="/public/knowledge-web-1.png"
            alt="knowledge-web"
            className="w-24"
          />
          <img
            src="/public/which-bingo-1.png"
            alt="whichbingo"
            className="w-24"
          />
          <img src="/public/lock-8-1.png" alt="lock8" className="w-24" />
          <img src="/public/babington-1.png" alt="babington" className="w-24" />
          <img
            src="/public/Lead_Kinetics-1.png"
            alt="Lead Kinetics"
            className="w-24"
          />
        </div>
      </div>
      <h4 className="mt-12 text-2xl text-customBlue">Samples of Work...</h4>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
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
              <h4 className="text-2xl text-customBlue">{project.title}</h4>
              <p className="text-xs font-bold">{project.techUsed}</p>
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
