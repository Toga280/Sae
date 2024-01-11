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
    <div className="unSelect">
      <div onClick={() => setSelectTrue("Mat1")}> {value("Mat1")} </div>
      <div onClick={() => setSelectTrue("Mat2")}> {value("Mat2")} </div>
      <div onClick={() => setSelectTrue("Mat3")}> {value("Mat3")} </div>
      <div onClick={() => setSelectTrue("Mat4")}> {value("Mat4")} </div>
      <div onClick={() => setSelectTrue("Mat5")}> {value("Mat5")} </div>
    </div>
  );
}

export default SelectsAffichage;
