import React from "react";
import SignUpForm from "../components/form/SignUpForm";
import NavbarInit from "../components/navbar/NavbarInit";

const SignUpPage: React.FC = () => {
  return (
    <>
      <NavbarInit />
      <SignUpForm />
    </>
  );
};
export default SignUpPage;
