import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import CardList from "./components/CardList";
import Tabel from "./components/Tabel";

import Gambar from "./assets/images/reactjs.png";

const  quotes = "YOK BISA YOK! GANBATTE!!!";
const people = [
  {
    nama: 'Putri R',
    nim: '21120118120026',
    department: 'S-1 Teknik Komputer',
    role: 'Praktikan 1',
    email: 'putriir50@gmail.com',
    image: '/pr.jpg',
  },
  {
    nama: 'Ayunda Mita',
    nim: '21120118120027',
    department: 'S-1 Teknik Komputer',
    role: 'Praktikan 2',
    email: 'ayundamita@gmail.com',
    image: '/mita.jpg'
  }
];

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
    <Tabel
      people= {people}
      author= "Kel26" 
      quotes= {quotes}
    />
  </React.StrictMode>,
  document.getElementById("root")
);