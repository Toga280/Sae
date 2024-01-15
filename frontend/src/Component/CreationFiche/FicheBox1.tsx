import React from "react";
import ChoixMiniBox from "./MiniBoxChoix/ChoixMiniBox";
import "../../style/fiche1.css";
import "../../style/ficheGlobal.css";
function FicheBox1({
  classNameDiv,
}: any) {
  const randomInterventionNumber = Math.floor(Math.random() * 1000) + 1;
  return (
    <div className={classNameDiv}>
      <div className="fb1">
        <h1 className="titreFiche">Fiche d'intervention n°{randomInterventionNumber}</h1>
      </div>
    </div>
  );
}

export default FicheBox1;
