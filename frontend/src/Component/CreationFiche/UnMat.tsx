import React , { useState } from "react";
import "../../style/ficheGlobal.css";
import "./unMat.css";
import fonctionsMiniBoxInfoJson from "./MiniBoxInfoFunction";

function UnMat({ mat, numMat, setSelect }: any, image: string) {
  const setSelectFalse = () => {setSelect(false);}
  const returnMat = () => {
  }
  return (
    <div className="UnMat" onClick={returnMat}>
      <div className="matname">
        {mat}
      </div>  
      <img src={image} alt={mat} className="imageMat" />
    </div>
  );
}

export default UnMat;