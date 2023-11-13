import React from "react";
import ChoixMiniBox from "./MiniBoxChoix/ChoixMiniBox";
import DupliquerSelect from "./DupliquerSelect";
import "../../style/fiche8.css";
import "../../style/ficheGlobal.css";
function FicheBox8({ choixMiniBox, setTypeMiniBox, numeroMiniBox }: any) {
  return (
    <div className="Box">
      <ChoixMiniBox
        choixMiniBox={choixMiniBox[1]}
        TexteInfo={"Matériaux Utilisés"}
        Balise={4}
        ClassName={""}
        setTypeMiniBox={setTypeMiniBox}
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
