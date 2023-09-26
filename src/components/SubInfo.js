import React from "react";

const SubInfo = ({ data }) => {
  return (
    <>
      <div>{data?.location?.localtime}</div>
    </>
  );
};

export default SubInfo;
