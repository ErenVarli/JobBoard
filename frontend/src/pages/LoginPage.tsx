import React from "react";
import LoginForm from "../components/form/LoginForm";
import NavbarInit from "../components/navbar/NavbarInit";

const LoginPage: React.FC = () => {
  return (
    <>
      <NavbarInit />
      <LoginForm />
    </>
  );
};
export default LoginPage;
