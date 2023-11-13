import React from "react";
import ChoixMiniBox from "./MiniBoxChoix/ChoixMiniBox";
import "../../style/ficheGlobal.css";
function FicheBox5({ numeroMiniBox }: any) {
  return (
    <div className="Box">
      <div>
        <div className="">
          <input type="" className="TextInput" />
        </div>
        <div className="">
          <ChoixMiniBox
            TexteInfo={"améliorative"}
            Balise={4}
            ClassName={""}
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
            TexteInfo={"préventive"}
            Balise={4}
            ClassName={""}
            numeroMiniBox={numeroMiniBox[1]}
          />
        </div>
      </div>
      <div>
        <div className="">
          <input type="checkbox" className="TextInput" />
        </div>
        <div className="">
          <ChoixMiniBox
            TexteInfo={"corrective"}
            Balise={4}
            ClassName={""}
            numeroMiniBox={numeroMiniBox[2]}
          />
        </div>
      </div>
    </div>
  );
}

export default FicheBox5;
