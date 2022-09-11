import React from "react";
import ReactDOM from "react-dom";

import Routes from "./router";
import "../style/materialize.css";
import "../style/react-range.css";
import "../style/style.css";
console.log("hey there!!");
const App = () => {
  return <Routes />;
};

ReactDOM.render(<App />, document.getElementById("root"));
