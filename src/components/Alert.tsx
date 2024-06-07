// shortcut: "rafce" (React Arrow Function Component Export) with ES7+ React/Redux extension installed

import React, { ReactNode } from "react";

interface AlertProps {
  // text: string;
  // children: string;
  children: ReactNode;

  // function(s):
  onClose?: () => void; // make the onClose prop optional
}

// const Alert = (props: AlertProps) {...} or desctructured as:
const Alert = ({ children, onClose }: AlertProps) => {
  return (
    <div className="alert alert-primary alert-dismissible">
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
};

export default Alert;
