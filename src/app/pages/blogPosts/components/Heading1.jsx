import React from "react";

const Heading1 = ({ children, className }) => {
  return (
    <h1 className={`text-2xl cm800:text-[2rem] font-semibold pb-2 ${className}`}>{children}</h1>
  );
};

export default Heading1;
