import React from "react";
import ChoixMiniBox from "./MiniBoxChoix/ChoixMiniBox";
import "../../style/ficheGlobal.css";
import "../../style/fiche5.css";
function FicheBox5({ numeroMiniBox, infoSelectionChoixMiniBox,classNameDiv }: any) {
  return (
    <div className={classNameDiv}>
      <div className="grp_type_maintenance">
        <div className="">
          <input type="checkbox" />
        </div>
        <div className="">
          <ChoixMiniBox
            TexteInfo={"améliorative"}
            Balise={4}
            ClassName={"txt_type_maintenance"}
            numeroMiniBox={numeroMiniBox[0]}
            infoSelectionChoixMiniBox={infoSelectionChoixMiniBox}
          />
        </div>
      </div>
      <div className="grp_type_maintenance">
        <div className="">
          <input type="checkbox" />
        </div>
        <div className="droite">
          <ChoixMiniBox
            TexteInfo={"préventive"}
            Balise={4}
            ClassName={"txt_type_maintenance"}
            numeroMiniBox={numeroMiniBox[1]}
            infoSelectionChoixMiniBox={infoSelectionChoixMiniBox}
          />
        </div>
      </div>
      <div className="grp_type_maintenance">
        <div className="">
          <input type="checkbox" />
        </div>
        <div className="">
          <ChoixMiniBox
            TexteInfo={"corrective"}
            Balise={4}
            ClassName={"txt_type_maintenance"}
            numeroMiniBox={numeroMiniBox[2]}
            infoSelectionChoixMiniBox={infoSelectionChoixMiniBox}
          />
        </div>
      </div>
    </div>
  );
}

export default FicheBox5;
