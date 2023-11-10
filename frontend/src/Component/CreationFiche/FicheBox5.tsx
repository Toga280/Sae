import React from "react";
import ChoixMiniBox from "./MiniBoxChoix/ChoixMiniBox";
import "../../style/ficheGlobal.css";
function FicheBox5({ choixMiniBox, setTypeMiniBox, numeroMiniBox }: any) {
  return (
    <div className="Box">
      <div>
        <div className="">
          <input type="" className = "TextInput" />
        </div>
        <div className="">
          <ChoixMiniBox
            choixMiniBox={choixMiniBox[0]}
            TexteInfo={"améliorative"}
            Balise={4}
            ClassName={""}
            setTypeMiniBox={setTypeMiniBox}
            numeroMiniBox={numeroMiniBox[0]}
          />
        </div>
      </div>
      <div>
        <div className="">
          <input type="checkbox" />
        </div>
        <div className="droite">
          <ChoixMiniBox
            choixMiniBox={choixMiniBox[1]}
            TexteInfo={"préventive"}
            Balise={4}
            ClassName={""}
            setTypeMiniBox={setTypeMiniBox}
            numeroMiniBox={numeroMiniBox[1]}
          />
        </div>
      </div>
      <div>
        <div className="">
          <input type="checkbox" className = "TextInput" />
        </div>
        <div className="">
          <ChoixMiniBox
            choixMiniBox={choixMiniBox[2]}
            TexteInfo={"corrective"}
            Balise={4}
            ClassName={""}
            setTypeMiniBox={setTypeMiniBox}
            numeroMiniBox={numeroMiniBox[2]}
          />
        </div>
      </div>
    </div>
  );
}

export default FicheBox5;
