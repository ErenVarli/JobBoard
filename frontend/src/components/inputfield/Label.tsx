import React from "react";

interface labelProps {
  htmlFor?: string;
  children?: string;
}

const Label: React.FC<labelProps> = ({ htmlFor, children }) => {
  return <label htmlFor={htmlFor}>{children}</label>;
};

export default Label;
