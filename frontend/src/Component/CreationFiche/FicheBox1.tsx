import React from "react";
import ChoixMiniBox from "./MiniBoxChoix/ChoixMiniBox";
import "../../style/fiche1.css";
import "../../style/ficheGlobal.css";
function FicheBox1({ choixMiniBox, setTypeMiniBox, numeroMiniBox }: any) {
  return (
    <div className="Box">
      <ChoixMiniBox
        choixMiniBox={choixMiniBox[0]}
        TexteInfo={"Fiche d'intervention N°10"}
        Balise={2}
        ClassName={""}
        setTypeMiniBox={setTypeMiniBox}
        numeroMiniBox={numeroMiniBox[0]}
      />
    </div>
  );
}

export default FicheBox1;
