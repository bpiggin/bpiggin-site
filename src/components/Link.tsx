import React from "react";

const Link: React.FunctionComponent<{ url: string }> = ({ url, children }) => {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
};

export default Link;
