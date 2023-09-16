import React, { Component } from "react";
import loding from "./Winter.gif";
const Spinner = () => {
  return (
    <div className="text-center">
      <img src={loding} alt="loding" className="my-3" />
    </div>
  );
};
export default Spinner;
