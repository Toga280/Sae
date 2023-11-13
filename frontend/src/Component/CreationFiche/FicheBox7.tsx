import React from "react";
import ChoixMiniBox from "./MiniBoxChoix/ChoixMiniBox";
import "../../style/ficheGlobal.css";
function FicheBox7({ numeroMiniBox }: any) {
  return (
    <div className="Box">
      <ChoixMiniBox
        TexteInfo={"Travaux réalisés"}
        Balise={4}
        ClassName={""}
        numeroMiniBox={numeroMiniBox[0]}
      />
      <textarea rows={10} className="TextInput"></textarea>
      <div>
        <ChoixMiniBox
          TexteInfo={"Travaux non réalisés"}
          Balise={4}
          ClassName={""}
          numeroMiniBox={numeroMiniBox[1]}
        />
        <div>
          <textarea rows={5} className="TextInput"></textarea>
        </div>
      </div>
    </div>
  );
}

export default FicheBox7;
