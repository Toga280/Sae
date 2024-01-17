import React from "react";
import "../../style/ficheGlobal.css";
import "./select.css";
import fonctionsMiniBoxInfoJson from "./MiniBoxInfoFunction";
function SelectsAffichage({ setSelect, setNumMat }: any) {
  const setSelectTrue = (valeur: String) => {
    setSelect(true);
    setNumMat(valeur);
  };

  const value = (nMateriel: string): string => {
    return fonctionsMiniBoxInfoJson.getMateriel(nMateriel);
  };
  
  return (
    <div className="lesSelect">
      <div className="mat" onClick={() => setSelectTrue("Mat1")}> {value("Mat1")} </div>
      <div className="mat" onClick={() => setSelectTrue("Mat2")}> {value("Mat2")} </div>
      <div className="mat" onClick={() => setSelectTrue("Mat3")}> {value("Mat3")} </div>
      <div className="mat" onClick={() => setSelectTrue("Mat4")}> {value("Mat4")} </div>
      <div className="mat" onClick={() => setSelectTrue("Mat5")}> {value("Mat5")} </div>
      <div className="mat" onClick={() => setSelectTrue("Mat6")}> {value("Mat6")} </div>
      <div className="mat" onClick={() => setSelectTrue("Mat7")}> {value("Mat7")} </div>
      <div className="mat" onClick={() => setSelectTrue("Mat8")}> {value("Mat8")} </div>
      <div className="mat" onClick={() => setSelectTrue("Mat9")}> {value("Mat9")} </div>
      <div className="mat" onClick={() => setSelectTrue("Mat10")}> {value("Mat10")} </div>
    </div>
  );
}

export default SelectsAffichage;
