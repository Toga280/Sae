import React from "react";
import ChoixMiniBox from "./MiniBoxChoix/ChoixMiniBox";
import DupliquerSelect from "./DupliquerSelect";
function FicheBox8({ choixMiniBox, setTypeMiniBox, numeroMiniBox }: any) {
  return (
    <div className="Box">
      <input type="checkbox" />
      <ChoixMiniBox
        choixMiniBox={choixMiniBox[0]}
        TexteInfo={"Nécessite une nouvelle intervention"}
        Balise={4}
        ClassName={""}
        setTypeMiniBox={setTypeMiniBox}
        numeroMiniBox={numeroMiniBox[0]}
      />
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
