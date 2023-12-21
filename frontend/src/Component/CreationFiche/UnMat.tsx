import React , { useState } from "react";
import "../../style/ficheGlobal.css";
import "./unMat.css";
import fonctionsMiniBoxInfoJson from "./MiniBoxInfoFunction";

function UnMat({ mat, numMat, setSelect }: any, image: any) {
  const setSelectFalse = () => {setSelect(false);}
  const returnMat = () => {
    fonctionsMiniBoxInfoJson.setMateriel(mat, numMat);
    console.log(fonctionsMiniBoxInfoJson.getAllJson());
    setSelectFalse() ;
  }
  const logo = require(image);
  return (
    <div className="UnMat" onClick={returnMat}>
      <div className="matname">
        {mat}
      </div>  
      <img src={logo} alt={mat} className="imageMat" />
    </div>
  );
}

export default UnMat;