import React from "react";

const Container = ({ children }) => {
  return (
    <div className="max-w-screen-lg mx-auto bg-customGray p-4">{children}</div>
  );
};

export default Container;
