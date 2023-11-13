import React from "react";
import ChoixMiniBox from "./MiniBoxChoix/ChoixMiniBox";
import "../../style/ficheGlobal.css";
import "../../style/fiche4.css";

function FicheBox4({ choixMiniBox, setTypeMiniBox, numeroMiniBox }: any) {
  return (
    <div className="Box">
      <div className="grp_intervention">
        <ChoixMiniBox
          choixMiniBox={choixMiniBox[0]}
          TexteInfo={"Date d'intervention"}
          Balise={1}
          ClassName={""}
          setTypeMiniBox={setTypeMiniBox}
          numeroMiniBox={numeroMiniBox[0]}
        />
        <input type="" className = "TextInput" />
        <ChoixMiniBox
          choixMiniBox={choixMiniBox[1]}
          TexteInfo={"Durée de l'opération"}
          Balise={1}
          ClassName={"duree_operation"}
          setTypeMiniBox={setTypeMiniBox}
          numeroMiniBox={numeroMiniBox[1]}
        />
        <div className="selecteur_duree">
          <select>
            <option>-- Choisir une durée --</option>
            <option>00h15</option>
            <option>00h30</option>
            <option>00h45</option>
            <option>01h00</option>
            <option>01h15</option>
            <option>01h30</option>
            <option>01h45</option>
            <option>02h00</option>
            <option>02h15</option>
            <option>02h30</option>
            <option>02h45</option>
            <option>03h00</option>
            <option>03h15</option>
            <option>03h30</option>
            <option>03h45</option>
            <option>04h00</option>
          </select>
        </div>
        {/* <div>
          { <div className="">
            <div className="">
              <ChoixMiniBox
                choixMiniBox={choixMiniBox[2]}
                TexteInfo={"Action"}
                Balise={3}
                ClassName={""}
                setTypeMiniBox={setTypeMiniBox}
                numeroMiniBox={numeroMiniBox[2]}
              />
              <div>
                <div className="">
                  <input type="" className = "TextInput" />
                </div>
                <div className="">
                  <label> </label>
                </div>
              </div>
            </div>
          </div> }
        </div> */}
      </div>
    </div>
  );
}

export default FicheBox4;
