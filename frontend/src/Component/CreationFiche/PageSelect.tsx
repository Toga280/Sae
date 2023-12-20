import React, {useState} from "react";
import "../../style/fiche1.css";
import "../../style/ficheGlobal.css";
import fonctionsMiniBoxInfoJson from "./MiniBoxInfoFunction";
import UnMat from "./UnMat";

function PageSelect({setSelect, numMat} : any){
  
  const setSelectFalse = () => setSelect(false);
  return (
    <div>
      <button onClick={() => setSelectFalse()}> Retour </button> 
          Séléctionnez un materiel à ajouter :
            <UnMat mat={"a"}  numMat={numMat} setSelect={setSelect}/>
            <UnMat mat={"a1"} numMat={numMat} setSelect={setSelect}/>
            <UnMat mat={"a2"} numMat={numMat} setSelect={setSelect}/>
    </div>
  );
}
export default PageSelect;