import React from "react";
import "../../style/fiche3.css";
import "../../style/ficheGlobal.css";
import ChoixMiniBox from "./MiniBoxChoix/ChoixMiniBox";
function FicheBox3({ choixMiniBox, setTypeMiniBox, numeroMiniBox }: any) {
  return (
    <div className="Box">
      <div className="grp3">
        <div className="grp_demande">
          <ChoixMiniBox
            choixMiniBox={choixMiniBox[0]}
            TexteInfo={"Nom du demandeur"}
            Balise={1}
            ClassName={"name_demandeur"}
            setTypeMiniBox={setTypeMiniBox}
            numeroMiniBox={numeroMiniBox[0]}
          />
          <input value="" className = "TextInput" />
        </div>
        <div className="grp_demande">
          <ChoixMiniBox
            choixMiniBox={choixMiniBox[1]}
            TexteInfo={"Date de la demande"}
            Balise={1}
            ClassName={"date_localisation"}
            setTypeMiniBox={setTypeMiniBox}
            numeroMiniBox={numeroMiniBox[1]}
          />
          <input value="" className = "TextInput" />
          <ChoixMiniBox
            choixMiniBox={choixMiniBox[2]}
            TexteInfo={"Localisation"}
            Balise={1}
            ClassName={"locali_localisation"}
            setTypeMiniBox={setTypeMiniBox}
            numeroMiniBox={numeroMiniBox[2]}
          />
          <input value="" className = "TextInput" />
        </div>
        <div className="grp_demande">
          <ChoixMiniBox
            choixMiniBox={choixMiniBox[3]}
            TexteInfo={"Description de la demande"}
            Balise={1}
            ClassName={"description_demande"}
            setTypeMiniBox={setTypeMiniBox}
            numeroMiniBox={numeroMiniBox[3]}
          />
        </div>
        <div>
          <textarea rows={10} className="descdmd"></textarea>
        </div>
        <div className="grp_demande">
          <ChoixMiniBox
            choixMiniBox={choixMiniBox[4]}
            TexteInfo={"Degré d'urgence"}
            Balise={1}
            ClassName={"txt_urgence"}
            setTypeMiniBox={setTypeMiniBox}
            numeroMiniBox={numeroMiniBox[4]}
          />
          <input value="" className = "TextInput" />
        </div>
      </div>
    </div>
  );
}

export default FicheBox3;
