import React from "react";
import ChoixMiniBox from "./MiniBoxChoix/ChoixMiniBox";
function FicheBox7({ choixMiniBox, setTypeMiniBox, numeroMiniBox }: any) {
  return (
    <div className="Box">
      <ChoixMiniBox
        choixMiniBox={choixMiniBox[0]}
        TexteInfo={"Travaux réalisés"}
        Balise={4}
        ClassName={""}
        setTypeMiniBox={setTypeMiniBox}
        numeroMiniBox={numeroMiniBox[0]}
      />
      <textarea rows={10}></textarea>
      <div>
        <ChoixMiniBox
          choixMiniBox={choixMiniBox[1]}
          TexteInfo={"Travaux non réalisés"}
          Balise={4}
          ClassName={""}
          setTypeMiniBox={setTypeMiniBox}
          numeroMiniBox={numeroMiniBox[1]}
        />
        <div>
          <textarea rows={5}></textarea>
        </div>
      </div>
    </div>
  );
}

export default FicheBox7;
