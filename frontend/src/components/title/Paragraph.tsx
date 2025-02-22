import React from "react";

interface paragraphProps {
  className?: string;
  children?: string;
}

const Paragraph: React.FC<paragraphProps> = ({ className, children }) => {
  return (
    <p className={className}>{children}</p>
    );
};

export default Paragraph;
