// shortcut: "rafce" (React Arrow Function Component Export) with ES7+ React/Redux extension installed

import React, { ReactNode } from "react";

interface AlertProps {
  // text: string;
  // children: string;
  children: ReactNode;
}

// const Alert = (props: AlertProps) {...} or desctructured as:
const Alert = ({ children }: AlertProps) => {
  return <div className="alert alert-primary">{children}</div>;
};

export default Alert;
