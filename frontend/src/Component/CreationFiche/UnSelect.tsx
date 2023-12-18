import React , { useState } from "react";
import PageSelect from "./PageSelect";
import "../../style/ficheGlobal.css";
import "./select.css";
import fonctionsMiniBoxInfoJson from "./MiniBoxInfoFunction";
import UnMat from "./UnMat";

function UnSelect({setSelect} : any, {numMat} : any) {
  const [Mat, setMat] = useState("");
  
  const returnMat = () => {
    fonctionsMiniBoxInfoJson.setMateriel(Mat, {numMat});
    setSelect(false) ;
  }
  return (

    <div className="unSelect">
        <UnMat mat={"a"} setMat={setMat} />
        <UnMat mat={"b"} setMat={setMat} />
        <UnMat mat={"c"} setMat={setMat} />
    </div>
  );
}

export default UnSelect;