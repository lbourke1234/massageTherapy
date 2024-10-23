import React from "react";

const Paragraph = ({ children, className }) => {
  return <p className={`cm800:text-[1.2em] ${className}`}>{children}</p>;
};

export default Paragraph;
