import React from "react";
import { render } from "react-dom";

function Hi() {
  return <p>Hello world!</p>;
}

render(<Hi />, document.getElementById("app"));
