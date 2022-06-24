import React from "react";
import "./loader.sass";

const Loader = ({ width, height }) => {
  return (
    <div style={{ widows: width, height: height }} className="loader"></div>
  );
};

export default Loader;
