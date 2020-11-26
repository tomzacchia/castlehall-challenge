import { createServer } from "miragejs";
import React from "react";
import ReactDom from "react-dom";
import App from "./app.jsx";

import server from "./db";

// starting server
createServer(server);

ReactDom.render(<App />, document.getElementById("root"));
