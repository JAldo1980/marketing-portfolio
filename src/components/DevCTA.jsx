import React from "react";

const DevCTA = () => {
  return (
    <>
      <div className="my-12">
        <h3 className="mb-4 text-4xl text-customBlue">
          Need a frontend developer?
        </h3>
        <p>
          Click the banner below to open up a new window to my frontend
          development portfolio. Explore how I can help you build your own
          website.
        </p>
        <a
          href="https://james-alderman-developer-portfolio.netlify.app/"
          target="_blank"
        >
          <img
            src="/public/DevCTA-img.png"
            alt="James Alderman digital marketing portfolio"
            className="mt-4 shadow-md cursor-pointer"
          />
        </a>
      </div>
    </>
  );
};

export default DevCTA;
