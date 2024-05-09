import React, { useState, useEffect } from "react";


const Hero = () => {
  const [imageSource, setImageSource] = useState(
    "tablet-main-banner.png"
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setImageSource("tablet-main-banner.png");
      } else {
        setImageSource("desktop-main-banner.png");
      }
    };

    handleResize(); // Call it initially
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div className="grid">
      <img src={imageSource} alt="main-banner-image" className="w-full" />
    </div>
  );
};

export default Hero;
