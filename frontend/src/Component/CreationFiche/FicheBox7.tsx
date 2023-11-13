import React from "react";
import ChoixMiniBox from "./MiniBoxChoix/ChoixMiniBox";
import "../../style/ficheGlobal.css";
import "../../style/fiche7.css";
function FicheBox7({ choixMiniBox, setTypeMiniBox, numeroMiniBox }: any) {
  return (
    <div className="Box">
      <div className="grp_travaux_realises">
        <ChoixMiniBox
          choixMiniBox={choixMiniBox[0]}
          TexteInfo={"Travaux réalisés"}
          Balise={4}
          ClassName={"txt_travaux_realises"}
          setTypeMiniBox={setTypeMiniBox}
          numeroMiniBox={numeroMiniBox[0]}
        />
        <textarea rows={10} className="descdmd"></textarea>
      </div>
      <div className="grp_travaux_non_realises">
        <div>
          <ChoixMiniBox
            choixMiniBox={choixMiniBox[1]}
            TexteInfo={"Travaux non réalisés"}
            Balise={4}
            ClassName={"txt_travaux_non_realises"}
            setTypeMiniBox={setTypeMiniBox}
            numeroMiniBox={numeroMiniBox[1]}
          />
          <div>
            <textarea rows={10} className="descdmd"></textarea>
          </div>
        </div>
      </div>
      <div className="nvlle_inter">
        <input type="checkbox" />
        <ChoixMiniBox
          choixMiniBox={choixMiniBox[0]}
          TexteInfo={"Nécessite une nouvelle intervention"}
          Balise={4}
          ClassName={""}
          setTypeMiniBox={setTypeMiniBox}
          numeroMiniBox={numeroMiniBox[0]}
        />
      </div>
    </div>
  );
}

export default FicheBox7;
