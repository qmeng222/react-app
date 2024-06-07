import React from "react";

interface ButtonProps {
  // data:
  children: string;
  // color?: string;
  color?: "primary" | "secondary" | "danger";

  // func:
  onClick: () => void;
}

// Pass props (data and functions) to the component:
const Button = ({ children, color = "primary", onClick }: ButtonProps) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
