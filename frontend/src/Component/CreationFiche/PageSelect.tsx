import React, {useState} from "react";
import UnSelect from "./UnSelect";
import "../../style/fiche1.css";
import "../../style/ficheGlobal.css";

function PageSelect({setSelect} : any){

  const setSelectFalse = () => setSelect(false);
  return (
    <div>
      <button onClick={() => setSelectFalse()}> Retour </button> 
            
            Séléctionnez le materiel à ajouter :
            
            <UnSelect setSelect={setSelect}/>
            <UnSelect setSelect={setSelect}/>
            <UnSelect setSelect={setSelect}/>
            <UnSelect setSelect={setSelect}/>
    </div>
  );
}

export default PageSelect;
