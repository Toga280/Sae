import React, { useState } from "react";
import FicheBox1 from "./FicheBox1";
import FicheBox2 from "./FicheBox2";
import FicheBox3 from "./FicheBox3";
import FicheBox4 from "./FicheBox4";
import FicheBox5 from "./FicheBox5";
import FicheBox6 from "./FicheBox6";
import FicheBox7 from "./FicheBox7";
import FicheBox8 from "./FicheBox8";
import SelectionChoixMiniBox from "./MiniBoxChoix/SelectionChoixMiniBox";
import fonctionsMiniBoxInfoJson from "./MiniBoxInfoFunction";
function FicheBoxSelected({ numberFichBox, onSelectBoxChange }: any) {
  const [selectionChoixMiniBox, setSelectionChoixMiniBox] = useState(false);
  const [numeroMiniBox, setnumeroMiniBox] = useState(Number);
  const setSelectionChoixMiniBoxFalse = () => {
    setSelectionChoixMiniBox(false);
  };

  const boutonRetour = () => {
    onSelectBoxChange(null);
    fonctionsMiniBoxInfoJson.allIsSelectedMiniBoxFalse();
  };

  const infoSelectionChoixMiniBox = (
    booleanChoixMiniBox: boolean,
    numeroMiniBox: any
  ) => {
    setSelectionChoixMiniBox(booleanChoixMiniBox);
    setnumeroMiniBox(numeroMiniBox);
  };

  return (
    <div>
      {numberFichBox === 1 ? (
        <FicheBox1
        nomfiche={fonctionsMiniBoxInfoJson.getNom()}
        classNameDiv={"Box"}
      />
      ) : null}
      {numberFichBox === 2 ? (
        <FicheBox2
          numeroMiniBox={[1, 2]}
          infoSelectionChoixMiniBox={infoSelectionChoixMiniBox}
          classNameDiv={"boxSelected"}
        />
      ) : null}
      {numberFichBox === 3 ? (
        <FicheBox3
          numeroMiniBox={[3, 4, 5, 6, 7]}
          infoSelectionChoixMiniBox={infoSelectionChoixMiniBox}
          classNameDiv={"boxSelected"}
        />
      ) : null}
      {numberFichBox === 4 ? (
        <FicheBox4
          numeroMiniBox={[8, 9]}
          infoSelectionChoixMiniBox={infoSelectionChoixMiniBox}
          classNameDiv={"boxSelected"}
        />
      ) : null}
      {numberFichBox === 5 ? (
        <FicheBox5
          numeroMiniBox={[10, 11, 12]}
          infoSelectionChoixMiniBox={infoSelectionChoixMiniBox}
          classNameDiv={"boxSelected"}
        />
      ) : null}
      {numberFichBox === 6 ? (
        <FicheBox6
          numeroMiniBox={[13, 14, 15, 16]}
          infoSelectionChoixMiniBox={infoSelectionChoixMiniBox}
          classNameDiv={"boxSelected"}
        />
      ) : null}
      {numberFichBox === 7 ? (
        <FicheBox7
          numeroMiniBox={[17, 18, 19]}
          infoSelectionChoixMiniBox={infoSelectionChoixMiniBox}
          classNameDiv={"boxSelected"}
        />
      ) : null}
      {numberFichBox === 8 ? (
        <FicheBox8
          numeroMiniBox={[20]}
          infoSelectionChoixMiniBox={infoSelectionChoixMiniBox}
          classNameDiv={"boxSelected"}
        />
      ) : null}

      <div>
        {selectionChoixMiniBox === true ? (
          <SelectionChoixMiniBox
            setSelectionChoixMiniBoxFalse={setSelectionChoixMiniBoxFalse}
            numeroMiniBox={numeroMiniBox}
          />
        ) : null}
        <button className="bouton_choix_elem_retour" onClick={boutonRetour}>
          Retour
        </button>
      </div>
    </div>
  );
}

export default FicheBoxSelected;
