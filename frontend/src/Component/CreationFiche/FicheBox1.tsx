import React from "react";
import ChoixMiniBox from "./MiniBoxChoix/ChoixMiniBox";
import "../../style/fiche1.css";
import "../../style/ficheGlobal.css";
function FicheBox1({ classNameDiv, versionProf, nomfiche }: any) {
  return (
    <div className={classNameDiv}>
      <div className="fb1">
        <h1 className="titreFiche">
          {nomfiche}
        </h1>
      </div>
    </div>
  );
}

export default FicheBox1;
