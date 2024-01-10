import React , { useState } from "react";
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
    </div>
  );
}

export default UnMat;