import React from "react";
import ChoixMiniBox from "./MiniBoxChoix/ChoixMiniBox";
import DupliquerSelect from "./DupliquerSelect";
import "../../style/fiche8.css";
import "../../style/ficheGlobal.css";
function FicheBox8({ numeroMiniBox, infoSelectionChoixMiniBox }: any) {
  return (
    <div className="Box">
      <ChoixMiniBox
        TexteInfo={"Matériaux Utilisés"}
        Balise={4}
        ClassName={""}
        numeroMiniBox={numeroMiniBox[1]}
        infoSelectionChoixMiniBox={infoSelectionChoixMiniBox}
      />
      <div className="SelectMateriaux">
        <DupliquerSelect />
        <DupliquerSelect />
        <DupliquerSelect />
        <DupliquerSelect />
        <DupliquerSelect />
        <DupliquerSelect />
        <DupliquerSelect />
        <DupliquerSelect />
        <DupliquerSelect />
        <DupliquerSelect />
      </div>
    </div>
  );
}

export default FicheBox8;
