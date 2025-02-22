import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../style/App.css";
import NavbarInit from "../../components/navbar/NavbarInit";
import HomePage from "../HomePage";

const LandingPage: React.FC = () => {
  return (
    <>
      <NavbarInit />
      <HomePage />
      </>
  );
};

export default LandingPage;