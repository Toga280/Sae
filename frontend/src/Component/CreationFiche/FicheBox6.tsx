import React from "react";
import ChoixMiniBox from "./MiniBoxChoix/ChoixMiniBox";
import "../../style/ficheGlobal.css";
function FicheBox6({ numeroMiniBox }: any) {
  return (
    <div className="Box">
      <div>
        <div className="">
          <input type="checkbox" />
        </div>
        <div className="">
          <ChoixMiniBox
            TexteInfo={"Aménagement"}
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
        <div className="">
          <ChoixMiniBox
            TexteInfo={"Finitions"}
            Balise={4}
            ClassName={""}
            numeroMiniBox={numeroMiniBox[1]}
          />
        </div>
      </div>
      <div>
        <div className="">
          <input type="checkbox" />
        </div>
        <div className="">
          <ChoixMiniBox
            TexteInfo={"Installation sanitaire"}
            Balise={4}
            ClassName={""}
            numeroMiniBox={numeroMiniBox[2]}
          />
        </div>
      </div>
      <div>
        <div className="">
          <input type="checkbox" />
        </div>
        <div className="">
          <ChoixMiniBox
            TexteInfo={"Installation électrique"}
            Balise={4}
            ClassName={""}
            numeroMiniBox={numeroMiniBox[3]}
          />
        </div>
      </div>
    </div>
  );
}

export default FicheBox6;
