import React, {useState} from "react";
import ChoixMiniBox from "./MiniBoxChoix/ChoixMiniBox";
import "../../style/fiche8.css";
import "../../style/ficheGlobal.css";
import PageSelect from "./PageSelect";
import SelectsAffichage from "./SelectsAffichage";
function FicheBox8({ numeroMiniBox, infoSelectionChoixMiniBox,classNameDiv }: any) {
  const [select, setSelect] = useState(false);
  const [numMat, setNumMat] = useState(String);

  return (  
    <div className={classNameDiv}>
      <ChoixMiniBox
        TexteInfo={"Matériaux Utilisés"}
        Balise={4}
        ClassName={""}
        numeroMiniBox={numeroMiniBox[1]}
        infoSelectionChoixMiniBox={infoSelectionChoixMiniBox}
      />

      {select ? <PageSelect setSelect={setSelect} numMat={numMat} />: <SelectsAffichage setSelect={setSelect} setNumMat={setNumMat}/>}

    </div>
  );
}

export default FicheBox8;
