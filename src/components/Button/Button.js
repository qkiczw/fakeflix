import React from "react";

export const Button = ({ children }) => {
  return (
    <>
      <button className="button">{children}</button>
    </>
  );
};

export default Button;
