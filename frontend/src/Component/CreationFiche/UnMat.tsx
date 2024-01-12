import React, { useState } from "react";
import "../../style/ficheGlobal.css";
import "./unMat.css";
import fonctionsMiniBoxInfoJson from "./MiniBoxInfoFunction";
const a = require("./cat.webp");
const b = require("./imagesFiche/chalumeau.jpg")
let img = "";

function UnMat({ mat, numMat, setSelect, image }: any) {
  
  switch (image) {
    case 0:
    img = a;
    console.log("image : " + img);
    break;
    case 1:
      img = b;
      console.log("image : " + img);
      break;
    default:
      img = b;
      console.log(img);
  }

<<<<<<< HEAD
  const setSelectFalse = () => {setSelect(false);}
  const returnMat = () => {
    fonctionsMiniBoxInfoJson.setMateriel(mat, numMat);
    console.log(fonctionsMiniBoxInfoJson.getAllJson());
    setSelectFalse() ;
  } 
  

  return (
    <div className="UnMat" onClick={returnMat}>
      <div className="matname">
        {mat}
      </div>  
      <img src={img} alt={mat} className="imageMat" />
=======
function UnMat({ mat, numMat, setSelect }: any, image: string) {
  const setSelectFalse = () => {
    setSelect(false);
  };
  const returnMat = () => {
    fonctionsMiniBoxInfoJson.setMateriel(mat, numMat);
    setSelectFalse();
  };
  return (
    <div className="UnMat" onClick={returnMat}>
      <div className="matname">{mat}</div>
      <img src={image} alt={mat} className="imageMat" />
>>>>>>> 7b80663c8f841305be43ed52d664a3037cfc8ca4
    </div>
  );
}

export default UnMat;
