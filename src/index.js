import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import App from "./App";

console.log(
  "Hey there :) thanks for checking out my little react app. You can find more stuff here https://dabjulmaros.github.io/ and the sources are here https://github.com/dabjulmaros/"
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
