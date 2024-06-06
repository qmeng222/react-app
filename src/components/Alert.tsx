// shortcut: "rafce" (React Arrow Function Component Export) with ES7+ React/Redux extension installed

import React from "react";

interface AlertProps {
  text: string;
}

// const Alert = (props: AlertProps) {...} or desctructured as:
const Alert = ({ text }: AlertProps) => {
  return <div className="alert alert-primary">{text}</div>;
};

export default Alert;
