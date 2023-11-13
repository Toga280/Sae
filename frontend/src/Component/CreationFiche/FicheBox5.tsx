import React from "react";
import ChoixMiniBox from "./MiniBoxChoix/ChoixMiniBox";
import "../../style/ficheGlobal.css";
import "../../style/fiche5.css";
function FicheBox5({ choixMiniBox, setTypeMiniBox, numeroMiniBox }: any) {
  return (
    <div className="Box">
        <div className="grp_type_maintenance">
          <div className="">
            <input type="checkbox" />
          </div>
          <div className="">
            <ChoixMiniBox
              choixMiniBox={choixMiniBox[0]}
              TexteInfo={"améliorative"}
              Balise={4}
              ClassName={"txt_type_maintenance"}
              setTypeMiniBox={setTypeMiniBox}
              numeroMiniBox={numeroMiniBox[0]}
            />
          </div>
        </div>
        <div className="grp_type_maintenance">
          <div className="">
            <input type="checkbox" />
          </div>
          <div className="droite">
            <ChoixMiniBox
              choixMiniBox={choixMiniBox[1]}
              TexteInfo={"préventive"}
              Balise={4}
              ClassName={"txt_type_maintenance"}
              setTypeMiniBox={setTypeMiniBox}
              numeroMiniBox={numeroMiniBox[1]}
            />
          </div>
        </div>
        <div className="grp_type_maintenance">
          <div className="">
            <input type="checkbox"/>
          </div>
          <div className="">
            <ChoixMiniBox
              choixMiniBox={choixMiniBox[2]}
              TexteInfo={"corrective"}
              Balise={4}
              ClassName={"txt_type_maintenance"}
              setTypeMiniBox={setTypeMiniBox}
              numeroMiniBox={numeroMiniBox[2]}
            />
          </div>
        </div>
      </div>
  );
}

export default FicheBox5;
