import React from "react";

const DevCTA = () => {
  return (
    <>
      <div className="my-12">
        <h3 className="mb-4 text-4xl text-customBlue">
          Need a frontend developer?
        </h3>
        <a
          href="https://james-alderman-developer-portfolio.netlify.app/"
          target="_blank"
        >
          <img
            src="/public/DevCTA-img.png"
            alt="James Alderman digital marketing portfolio"
            className="shadow-md cursor-pointer"
          />
        </a>
      </div>
    </>
  );
};

export default DevCTA;
