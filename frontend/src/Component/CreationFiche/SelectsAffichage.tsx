import React , { useState } from "react";
import PageSelect from "./PageSelect";
import "../../style/ficheGlobal.css";
import "./select.css";

function SelectsAffichage({setSelect} : any) {
  
  const setSelectTrue = () => setSelect(true) ;
  return (

    <div className="unSelect">
        <button onClick={() => setSelectTrue()}>Sélectionner Matériel</button>
    </div>
  );
}

export default SelectsAffichage;
