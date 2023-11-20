import React from "react";
import ChoixMiniBox from "./MiniBoxChoix/ChoixMiniBox";
import "../../style/ficheGlobal.css";
import "../../style/fiche6.css";
function FicheBox6({ numeroMiniBox, infoSelectionChoixMiniBox }: any) {
  return (
    //nature_intervention
    <div className="Box">
      <div className="grp_nature_intervention">
        <div className="">
          <input type="checkbox" />
        </div>
        <div className="">
          <ChoixMiniBox
            TexteInfo={"Aménagement"}
            Balise={4}
            ClassName={"txt_nature_intervention"}
            numeroMiniBox={numeroMiniBox[0]}
            infoSelectionChoixMiniBox={infoSelectionChoixMiniBox}
          />
        </div>
      </div>
      <div className="grp_nature_intervention">
        <div className="">
          <input type="checkbox" />
        </div>
        <div className="">
          <ChoixMiniBox
            TexteInfo={"Finitions"}
            Balise={4}
            ClassName={"txt_nature_intervention"}
            numeroMiniBox={numeroMiniBox[1]}
            infoSelectionChoixMiniBox={infoSelectionChoixMiniBox}
          />
        </div>
      </div>
      <div className="grp_nature_intervention">
        <div className="">
          <input type="checkbox" />
        </div>
        <div className="">
          <ChoixMiniBox
            TexteInfo={"Installation sanitaire"}
            Balise={4}
            ClassName={"txt_nature_intervention"}
            numeroMiniBox={numeroMiniBox[2]}
            infoSelectionChoixMiniBox={infoSelectionChoixMiniBox}
          />
        </div>
      </div>
      <div className="grp_nature_intervention">
        <div className="">
          <input type="checkbox" />
        </div>
        <div className="">
          <ChoixMiniBox
            TexteInfo={"Installation électrique"}
            Balise={4}
            ClassName={"txt_nature_intervention"}
            numeroMiniBox={numeroMiniBox[3]}
            infoSelectionChoixMiniBox={infoSelectionChoixMiniBox}
          />
        </div>
      </div>
    </div>
  );
}

export default FicheBox6;
