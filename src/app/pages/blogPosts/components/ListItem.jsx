import React from "react";

const ListItem = ({ children, className }) => {
  return <li className={`cm800:text-[1.2em] ${className}`}>{children}</li>;
};

export default ListItem;
