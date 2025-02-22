import React from "react";
import { Link, useNavigate } from "react-router-dom";

interface bouttonProps {
  label?: string;
  onClick?: () => void;
  to?: string;
  variant?: "link" | "button";
  className?: string;
  children?: React.ReactNode;
  id?: string,
}

const Button: React.FC<bouttonProps> = ({
  onClick,
  label,
  to,
  variant = "button",
  className,
  children,
  id,
}) => {

  var classAtribute = "btn btn-primary " + className;
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    }

    if (to) {
      navigate(to);
    }
  };

  if (variant === "link" && to) {
    return (
      <Link to={to} className={classAtribute}>
        {label || children}
      </Link>
    );
  }

  return (
    <button id={id} onClick={handleClick} className={classAtribute} type="submit">
        {label || children}
    </button>
  );
};

export default Button;
