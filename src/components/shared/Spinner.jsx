import React from "react";
import spinner from "../assets/spinner.gif";
function Spinner() {
  return (
    <>
      <img
        src={spinner}
        alt="Loading Data..."
        style={{ width: "100px", display: "block", margin: "auto" }}
      ></img>
    </>
  );
}

export default Spinner;
