import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../style/App.css";
import NavbarUser from "../../components/navbar/NavbarUser";
import HomePage from "../HomePage";

const UserInterface: React.FC = () => {
  return (
    <>
      <NavbarUser />
      <HomePage />
    </>
  );
};

export default UserInterface;