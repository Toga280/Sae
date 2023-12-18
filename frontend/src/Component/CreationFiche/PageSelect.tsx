import React, {useState} from "react";
import UnSelect from "./UnSelect";
import "../../style/fiche1.css";
import "../../style/ficheGlobal.css";
import fonctionsMiniBoxInfoJson from "./MiniBoxInfoFunction";

function PageSelect({setSelect} : any){

  const [Mat, setMat] = useState("");
  const setSelectFalse = () => setSelect(false);
  return (
    <div>
      <button onClick={() => setSelectFalse()}> Retour </button> 
          Séléctionnez un materiel à ajouter :
          <UnSelect setSelect={setSelect} Materiaux={setMat} numMat={"Mat1"} />
          <UnSelect setSelect={setSelect} Materiaux={setMat} numMat={"Mat2"}/>
          <UnSelect setSelect={setSelect} Materiaux={setMat} numMat={"Mat3"}/>
          <UnSelect setSelect={setSelect} Materiaux={setMat} numMat={"Mat4"}/>
          <UnSelect setSelect={setSelect} Materiaux={setMat} numMat={"Mat5"}/>
    </div>
  );
}
export default PageSelect;