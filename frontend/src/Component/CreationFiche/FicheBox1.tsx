import React from "react";
import ChoixMiniBox from "./MiniBoxChoix/ChoixMiniBox";
import "../../style/fiche1.css";
import "../../style/ficheGlobal.css";
function FicheBox1({ numeroMiniBox }: any) {
  return (
    <div className="Box">
      <ChoixMiniBox
        TexteInfo={"Fiche d'intervention N°10"}
        Balise={2}
        ClassName={""}
        numeroMiniBox={numeroMiniBox[0]}
      />
    </div>
  );
}

export default FicheBox1;
