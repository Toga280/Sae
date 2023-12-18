import React , { useState } from "react";
import PageSelect from "./PageSelect";
import "../../style/ficheGlobal.css";
import "./select.css";

function UnSelect({setSelect} : any) {
  const [materiaux, setMateriaux] = useState("");
  const returnMat = () => {
    setMateriaux("Materiaux2Fou");
    setSelect(false) ;
  }
  return (

    <div className="unSelect" onClick={() => returnMat()}>
        Materiaux2Fou
    </div>
  );
}

export default UnSelect;