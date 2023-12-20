import React , { useState } from "react";
import PageSelect from "./PageSelect";
import "../../style/ficheGlobal.css";
import "./select.css";

function SelectsAffichage({setSelect, setNumMat} : any) {
  
  const setSelectTrue = (valeur: String) => {
    setSelect(true) ;
    setNumMat(valeur)
  }
  return (

    <div className="unSelect">
        <div onClick={() => setSelectTrue("Mat1")}> MAT1 </div>
        <div onClick={() => setSelectTrue("Mat2")}> MAT2 </div>
        <div onClick={() => setSelectTrue("Mat3")}> MAT3 </div>
        <div onClick={() => setSelectTrue("Mat4")}> MAT4 </div>
        <div onClick={() => setSelectTrue("Mat5")}> MAT5 </div>
        
    </div>
  );
}

export default SelectsAffichage;
