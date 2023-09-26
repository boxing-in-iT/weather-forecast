import React from "react";

const Loader = ({ title }) => {
  return (
    <>
      <h1>{title || "Loading..."}</h1>
    </>
  );
};

export default Loader;
