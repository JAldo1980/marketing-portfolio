import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Hero from "./Hero";
import CTA from "./CTA";
import DevCTA from "./DevCTA";

const Layout = () => {
  const location = useLocation();
  const excludedRoutes = ["/portfolio", "/about", "/contact"];

  return (
    <>
      {!excludedRoutes.includes(location.pathname) && (
        <>
          <Hero />
          <CTA />
          <DevCTA />
        </>
      )}

      <Outlet />
    </>
  );
};

export default Layout;
