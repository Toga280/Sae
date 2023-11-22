import React from "react";
import "../../style/fiche3.css";
import "../../style/ficheGlobal.css";
import ChoixMiniBox from "./MiniBoxChoix/ChoixMiniBox";
function FicheBox3({ numeroMiniBox }: any) {
  return (
    <div className="Box">
      <div className="flex">
        <div className="grp_demandeur">
          <ChoixMiniBox
            TexteInfo={"Nom du demandeur"}
            Balise={1}
            ClassName={"name_demandeur"}
            numeroMiniBox={numeroMiniBox[0]}
          />
          <div>
            <input type="text" className="TextInput" />
          </div>
        </div>
        <div className="grp_localisation">
          <ChoixMiniBox
            TexteInfo={"Date de la demande"}
            Balise={1}
            ClassName={"date_localisation"}
            numeroMiniBox={numeroMiniBox[1]}
          />
          <input type="text" className="TextInput" />
          <ChoixMiniBox
            TexteInfo={"Localisation"}
            Balise={1}
            ClassName={"locali_localisation"}
            numeroMiniBox={numeroMiniBox[2]}
          />
          <input type="text" className="TextInput" />
        </div>
        <ChoixMiniBox
          TexteInfo={"Description de la demande"}
          Balise={1}
          ClassName={"description_demande"}
          numeroMiniBox={numeroMiniBox[3]}
        />
        <div>
          <textarea rows={10} className="TextInput"></textarea>
        </div>
        <div className="degree_urgence">
          <ChoixMiniBox
            TexteInfo={"Degré d'urgence"}
            Balise={1}
            ClassName={"txt_urgence"}
            numeroMiniBox={numeroMiniBox[4]}
          />
          <div>
            <input type="text" className="TextInput" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FicheBox3;
