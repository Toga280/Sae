import React from "react";
import "../../style/fiche2.css";
import "../../style/ficheGlobal.css";
import ChoixMiniBox from "./MiniBoxChoix/ChoixMiniBox";
function FicheBox2({ choixMiniBox, setTypeMiniBox, numeroMiniBox }: any) {
  return (
    <div className="Box">
      <div className="fd2">
        <ChoixMiniBox
          choixMiniBox={choixMiniBox[0]}
          TexteInfo={"Nom de l'intervenant"}
          Balise={1}
          ClassName={"nom_inter"}
          setTypeMiniBox={setTypeMiniBox}
          numeroMiniBox={numeroMiniBox[0]}
        />
        <div>
          <input type="text" />
        </div>
        <ChoixMiniBox
          choixMiniBox={choixMiniBox[1]}
          TexteInfo={"Prénom de l'intervenant"}
          Balise={1}
          ClassName={"prenom_inter"}
          setTypeMiniBox={setTypeMiniBox}
          numeroMiniBox={numeroMiniBox[1]}
        />
        <div>
          <input type="text" />
        </div>
      </div>
    </div>
  );
}

export default FicheBox2;
