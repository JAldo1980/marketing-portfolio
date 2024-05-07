import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div>
        <h2 className="mt-8 text-4xl sm:text-5xl text-customBlue font-bold">
          Skills
        </h2>
        <div className="mt-4 flex flex-row flex-wrap justify-evenly gap-6">
          <div className="text-bold bg-customBlue rounded px-4 py-2 text-white">
            SEO
          </div>
          <div className="text-bold bg-customBlue rounded px-4 py-2 text-white">
            Data Analytics
          </div>
          <div className="text-bold bg-customBlue rounded px-4 py-2 text-white">
            Strategic Planning
          </div>
          <div className="text-bold bg-customBlue rounded px-4 py-2 text-white">
            Content Creation
          </div>
          <div className="text-bold bg-customBlue rounded px-4 py-2 text-white">
            Strategic Planning
          </div>
          <div className="text-bold bg-customBlue rounded px-4 py-2 text-white">
            Social Media Marketing
          </div>
          <div className="text-bold bg-customBlue rounded px-4 py-2 text-white">
            Social Media Optimisation
          </div>
          <div className="text-bold bg-customBlue rounded px-4 py-2 text-white">
            Email Marketing
          </div>
          <div className="text-bold bg-customBlue rounded px-4 py-2 text-white">
            Copy Writing
          </div>
          <div className="text-bold bg-customBlue rounded px-4 py-2 text-white">
            Graphic Design
          </div>
          <div className="text-bold bg-customBlue rounded px-4 py-2 text-white">
            Web Design
          </div>
          <div className="text-bold bg-customBlue rounded px-4 py-2 text-white">
            WordPress
          </div>
          <div className="text-bold bg-customBlue rounded px-4 py-2 text-white">
            CRM
          </div>
          <div className="text-bold bg-customBlue rounded px-4 py-2 text-white">
            Video Editing
          </div>
          <div className="text-bold bg-customBlue rounded px-4 py-2 text-white">
            Podcast Editing
          </div>
          <div className="text-bold bg-customBlue rounded px-4 py-2 text-white">
            Marketing Automation
          </div>
          <div className="text-bold bg-customBlue rounded px-4 py-2 text-white">
            Brand Development
          </div>
          <div className="text-bold bg-customBlue rounded px-4 py-2 text-white">
            A.I Utilisation
          </div>
          <div className="text-bold bg-customBlue rounded px-4 py-2 text-white">
            Market Research
          </div>
          <div className="text-bold bg-customBlue rounded px-4 py-2 text-white">
            UX
          </div>
        </div>

        <h2 className="mt-8 text-4xl sm:text-5xl text-customBlue font-bold">
          Tools
        </h2>

        <div className="mt-4 flex flex-row flex-wrap justify-evenly">
          <img
            src="/public/analytics-logo.png"
            alt="google analytics logo"
            className="w-16"
            title="Google Analytics"
          />
          <img
            src="/public/photoshop-logo.png"
            alt="photoshop-logo"
            className="w-16"
            title="PhotoShop"
          />
          <img
            src="/public/canva-logo.png"
            alt="canva-logo"
            className="w-16"
            title="Canva"
          />
          <img
            src="/public/sem-rush-logo.png"
            alt="sem-rush logo"
            className="w-16"
            title="SEM Rush"
          />
          <img
            src="/public/premiere-pro-logo.png"
            alt="premiere-pro logo"
            className="w-16"
            title="Premiere Pro"
          />
          <img
            src="/public/camtasia-logo.png"
            alt="camtasia-logo"
            className="w-16"
            title="Camtasia"
          />
          <img
            src="/public/audacity-logo.png"
            alt="audacity-logo"
            className="w-16"
            title="Audacity"
          />
          <img
            src="/public/mailchimp-logo.png"
            alt="mailchimp logo"
            className="w-16"
            title="Mailchimp"
          />
          <img
            src="/public/buffer-logo.png"
            alt="buffer-logo"
            className="w-16"
            title="Buffer"
          />
          <img
            src="/public/hootsuite-logo.png"
            alt="hootsuite logo"
            className="w-16"
            title="Hootsuite"
          />
          <img
            src="/public/wordpress-logo.png"
            alt="wordpress logo"
            className="w-16"
            title="WordPress"
          />
        </div>
      </div>
      <div className="mt-12 gap-4 grid sm:grid-cols-2 sm:align-items-center ">
        <div className="border-t-2 border-b-2 border-customBlue border-opacity-50 sm:flex sm:flex-col sm:content-center sm:justify-center sm:gap-6">
          <h2 className="mt-6 text-4xl sm:text-5xl text-customBlue font-bold">
            About
          </h2>
          <div className="flex flex-col gap-6">
            <div className="mt-2">
              Welcome! As a seasoned, qualified digital marketer, including SEO
              content management and award-winning start-up experience, I bring
              a strategic mindset and creative prowess to my work. With 10+
              years of experience in crafting and executing comprehensive
              marketing strategies, I have successfully overseen end-to-end
              campaigns, elevated brand presence, and managed the dynamic
              landscape of social media.
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

            <div className="font-bold">I can't wait to work with you!</div>
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
