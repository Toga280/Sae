import React , { useState } from "react";
import PageSelect from "./PageSelect";
import "../../style/ficheGlobal.css";
import "./select.css";

function SelectsAffichage({setSelect} : any) {
  
  const setSelectTrue = () => setSelect(true) ;
  return (

    <div className="unSelect">
        <div onClick={() => setSelectTrue()}> MAT1 </div>
        <div onClick={() => setSelectTrue()}> MAT2 </div>
        <div onClick={() => setSelectTrue()}> MAT3 </div>
        <div onClick={() => setSelectTrue()}> MAT4 </div>
        <div onClick={() => setSelectTrue()}> MAT5 </div>
        
    </div>
  );
}

export default SelectsAffichage;
