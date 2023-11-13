import React from "react";
import "../../style/fiche2.css";
import "../../style/ficheGlobal.css";
import ChoixMiniBox from "./MiniBoxChoix/ChoixMiniBox";
function FicheBox2({ numeroMiniBox }: any) {
  return (
    <div className="Box">
      <div className="fd2">
        <ChoixMiniBox
          TexteInfo={"Nom de l'intervenant"}
          Balise={1}
          ClassName={"nom_inter"}
          numeroMiniBox={numeroMiniBox[0]}
        />
        <div>
          <input type="text" className="TextInput" />
        </div>
        <input type="text" className="TextInput" />
        <ChoixMiniBox
          TexteInfo={"Prénom de l'intervenant"}
          Balise={1}
          ClassName={"prenom_inter"}
          numeroMiniBox={numeroMiniBox[1]}
        />
        <div>
          <input type="text" className="TextInput" />
        </div>
        <input type="text" className="TextInput" />
      </div>
    </div>
  );
}

export default FicheBox2;
