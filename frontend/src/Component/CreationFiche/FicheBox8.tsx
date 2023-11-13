import React from "react";
import ChoixMiniBox from "./MiniBoxChoix/ChoixMiniBox";
import DupliquerSelect from "./DupliquerSelect";
import "../../style/fiche8.css";
import "../../style/ficheGlobal.css";
function FicheBox8({ numeroMiniBox }: any) {
  return (
    <div className="Box">
      <input type="checkbox" />
      <ChoixMiniBox
        TexteInfo={"Nécessite une nouvelle intervention"}
        Balise={4}
        ClassName={""}
        numeroMiniBox={numeroMiniBox[0]}
      />
      <ChoixMiniBox
        TexteInfo={"Matériaux Utilisés"}
        Balise={4}
        ClassName={""}
        numeroMiniBox={numeroMiniBox[1]}
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
