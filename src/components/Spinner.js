import React, { Component } from "react";
import loding from "./Winter.gif";
export default class Spinner extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={loding} alt="loding" className="my-3" />
      </div>
    );
  }
}
