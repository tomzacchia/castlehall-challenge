import React from "react";
import ReactDom from "react-dom";
import App from "./app.jsx";

import server from "./db";

ReactDom.render(<App />, document.getElementById("root"));
