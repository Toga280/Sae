import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import FicheBox1 from "./Component/FicheBox1";
import FicheBox2 from "./Component/FicheBox2";
import FicheBox3 from "./Component/FicheBox4";
import FicheBox4 from "./Component/FicheBox5";
import FicheBox5 from "./Component/FicheBox6";
import FicheBox6 from "./Component/FicheBox7";
import FicheBox7 from "./Component/FicheBox8";


ReactDOM.render(
  <React.StrictMode>
    <FicheBox1 />
    <FicheBox2 />
    <FicheBox3 />
    <FicheBox4 />
    <FicheBox5 />
    <FicheBox6 />
    <FicheBox7 />
  </React.StrictMode>,
  document.getElementById("root")
);
