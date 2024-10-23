import React from "react";
import Paragraph from "./Paragraph";
import Italics from "./Italics";

const Reference = ({ children, link }) => {
  return (
    <a href={link} target="_blank">
      <Paragraph>
        <Italics>{children}</Italics>
      </Paragraph>
    </a>
  );
};

export default Reference;
