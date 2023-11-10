import React from "react";
import ChoixMiniBox from "./MiniBoxChoix/ChoixMiniBox";
function FicheBox3({ choixMiniBox, setTypeMiniBox, numeroMiniBox }: any) {
  return (
    <div className="Box">
      <div>
        <ChoixMiniBox
          choixMiniBox={choixMiniBox[0]}
          TexteInfo={"Nom du demandeur"}
          Balise={1}
          ClassName={"titre"}
          setTypeMiniBox={setTypeMiniBox}
          numeroMiniBox={numeroMiniBox[0]}
        />
        <div>
          <input value="" />
        </div>
      </div>
      <div>
        <ChoixMiniBox
          choixMiniBox={choixMiniBox[1]}
          TexteInfo={"Date de la demande"}
          Balise={1}
          ClassName={""}
          setTypeMiniBox={setTypeMiniBox}
          numeroMiniBox={numeroMiniBox[1]}
        />
        <input value="" />
        <ChoixMiniBox
          choixMiniBox={choixMiniBox[2]}
          TexteInfo={"Localisation"}
          Balise={1}
          ClassName={""}
          setTypeMiniBox={setTypeMiniBox}
          numeroMiniBox={numeroMiniBox[2]}
        />
        <input value="" />
      </div>
      <div className="">
        <ChoixMiniBox
          choixMiniBox={choixMiniBox[3]}
          TexteInfo={"Description de la demande"}
          Balise={1}
          ClassName={""}
          setTypeMiniBox={setTypeMiniBox}
          numeroMiniBox={numeroMiniBox[3]}
        />
        <div>
          <textarea rows={10}></textarea>
        </div>
      </div>
      <div>
        <ChoixMiniBox
          choixMiniBox={choixMiniBox[4]}
          TexteInfo={"Degré d'urgence"}
          Balise={1}
          ClassName={""}
          setTypeMiniBox={setTypeMiniBox}
          numeroMiniBox={numeroMiniBox[4]}
        />
        <div>
          <input value="" />
        </div>
      </div>
    </div>
  );
}

export default FicheBox3;
