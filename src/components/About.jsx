import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="mt-12 gap-4 grid sm:grid-cols-2 sm:align-items-center ">
        <div className="border-t-2 border-b-2 border-customBlue border-opacity-50 sm:flex sm:flex-col sm:content-center sm:justify-center sm:gap-6">
          <h2 className="mt-6 text-4xl sm:text-5xl text-customBlue font-bold">
            About
          </h2>
          <div className="flex flex-col gap-6">
            <div className="mt-2">
              Welcome! As a seasoned, qualified digital marketer, including SEO
              content management and award-winning start-up experience, I bring
              strategic mindset and creative prowess to my work. With 10+ years
              of experience in crafting and executing comprehensive marketing
              strategies, I have successfully overseen end-to-end campaigns,
              elevated brand presence, and managed the dynamic landscape of
              social media.
            </div>

            <div>
              In addition, I have designed, managed, taught, and mentored
              digital marketing apprenticeship courses to apprentices
              nationally.
            </div>

            <div>
              Beyond marketing, my skill set extends to frontend web
              development, where I am proficient in HTML, CSS, JavaScript,
              ReactJS and Content Management Systems.
            </div>

            <div>
              This dual proficiency empowers me to not only conceptualise
              compelling campaigns but also contribute hands-on to the design
              and development of impactful websites, content, branding and
              beyond.
            </div>

            <div>I can't wait to work with you!</div>
          </div>

          <Link to="/Portfolio">
            <Button
              className="mb-6 bg-customGreen mt-4 py-2 px-6 font-bold text-customGray cursor-pointer  shadow-md hover:bg-green-300 hover:duration-300 hover:ease-in-out"
              type="button"
              label="View experiences..."
            />
          </Link>
        </div>
        <div className="sm:content-center sm:order-first">
          <img
            src="/public/james-profile-one.png"
            alt="james alderman profile picture"
            className="w-full sm:align-items-center shadow-2xl"
          />
        </div>
      </div>
    </>
  );
};

export default About;
