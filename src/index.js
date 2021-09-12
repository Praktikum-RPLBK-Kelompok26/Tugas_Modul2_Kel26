import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import CardList from "./components/CardList";

import Gambar from "./assets/images/reactjs.png";

ReactDOM.render (
  <React.StrictMode>
    <App />
    <CardList 
      judul="Praktikum RPLBK 2021"
      kelompok="26"
      shift="2"
      isNameBold
      image={Gambar}
    />

  </React.StrictMode>,
  document.getElementById("root")
);