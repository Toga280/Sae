import React from "react";
import ChoixMiniBox from "./MiniBoxChoix/ChoixMiniBox";
import "../../style/ficheGlobal.css";
import  "../../style/fiche6.css";
function FicheBox6({ choixMiniBox, setTypeMiniBox, numeroMiniBox }: any) {
  return (
    //nature_intervention
    <div className="Box">
      <div className="grp_nature_intervention">
        <div className="">
          <input type="checkbox" />
        </div>
        <div className="">
          <ChoixMiniBox
            choixMiniBox={choixMiniBox[0]}
            TexteInfo={"Aménagement"}
            Balise={4}
            ClassName={"txt_nature_intervention"}
            setTypeMiniBox={setTypeMiniBox}
            numeroMiniBox={numeroMiniBox[0]}
          />
        </div>
      </div>
      <div className="grp_nature_intervention">
        <div className="">
          <input type="checkbox" />
        </div>
        <div className="">
          <ChoixMiniBox
            choixMiniBox={choixMiniBox[1]}
            TexteInfo={"Finitions"}
            Balise={4}
            ClassName={"txt_nature_intervention"}
            setTypeMiniBox={setTypeMiniBox}
            numeroMiniBox={numeroMiniBox[1]}
          />
        </div>
      </div>
      <div className="grp_nature_intervention">
        <div className="">
          <input type="checkbox" />
        </div>
        <div className="">
          <ChoixMiniBox
            choixMiniBox={choixMiniBox[2]}
            TexteInfo={"Installation sanitaire"}
            Balise={4}
            ClassName={"txt_nature_intervention"}
            setTypeMiniBox={setTypeMiniBox}
            numeroMiniBox={numeroMiniBox[2]}
          />
        </div>
      </div>
      <div className="grp_nature_intervention">
        <div className="">
          <input type="checkbox" />
        </div>
        <div className="">
          <ChoixMiniBox
            choixMiniBox={choixMiniBox[3]}
            TexteInfo={"Installation électrique"}
            Balise={4}
            ClassName={"txt_nature_intervention"}
            setTypeMiniBox={setTypeMiniBox}
            numeroMiniBox={numeroMiniBox[3]}
          />
        </div>
      </div>
    </div>
  );
}

export default FicheBox6;
