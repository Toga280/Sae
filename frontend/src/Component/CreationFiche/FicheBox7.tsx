import React from "react";
import ChoixMiniBox from "./MiniBoxChoix/ChoixMiniBox";
import "../../style/ficheGlobal.css";
import "../../style/fiche7.css";
function FicheBox7({
  numeroMiniBox,
  infoSelectionChoixMiniBox,
  classNameDiv,
}: any) {
  return (
    <div className={classNameDiv}>
      <div className="grp_travaux_realises">
        <ChoixMiniBox
          TexteInfo={"Travaux réalisés"}
          Balise={4}
          ClassName={"txt_travaux_realises"}
          numeroMiniBox={numeroMiniBox[0]}
          infoSelectionChoixMiniBox={infoSelectionChoixMiniBox}
        />
        <textarea rows={10} className="descdmd"></textarea>
      </div>
      <div className="grp_travaux_non_realises">
        <div>
          <ChoixMiniBox
            TexteInfo={"Travaux non réalisés"}
            Balise={4}
            ClassName={"txt_travaux_non_realises"}
            numeroMiniBox={numeroMiniBox[1]}
            infoSelectionChoixMiniBox={infoSelectionChoixMiniBox}
          />
          <div>
            <textarea rows={10} className="descdmd"></textarea>
          </div>
        </div>
      </div>
      <div className="nvlle_inter">
        <div className="">
          <input type="checkbox" />
        </div>
        <ChoixMiniBox
          TexteInfo={"Nécessite une nouvelle intervention"}
          Balise={4}
          ClassName={""}
          numeroMiniBox={numeroMiniBox[2]}
          infoSelectionChoixMiniBox={infoSelectionChoixMiniBox}
        />
      </div>
    </div>
  );
}

export default FicheBox7;
