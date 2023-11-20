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
function FicheBoxSelected({ numberFichBox, onSelectBoxChange }: any) {
  const [selectionChoixMiniBox, setSelectionChoixMiniBox] = useState(false);
  const [numeroMiniBox, setnumeroMiniBox] = useState(Number);
  const setSelectionChoixMiniBoxFalse = () => {
    setSelectionChoixMiniBox(false);
  };

  const boutonRetour = () => {
    onSelectBoxChange(null);
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
          numeroMiniBox={[0]}
          infoSelectionChoixMiniBox={infoSelectionChoixMiniBox}
        />
      ) : null}
      {numberFichBox === 2 ? (
        <FicheBox2
          numeroMiniBox={[1, 2]}
          infoSelectionChoixMiniBox={infoSelectionChoixMiniBox}
        />
      ) : null}
      {numberFichBox === 3 ? (
        <FicheBox3
          numeroMiniBox={[3, 4, 5, 6, 7]}
          infoSelectionChoixMiniBox={infoSelectionChoixMiniBox}
        />
      ) : null}
      {numberFichBox === 4 ? (
        <FicheBox4
          numeroMiniBox={[8, 9, 10, 11]}
          infoSelectionChoixMiniBox={infoSelectionChoixMiniBox}
        />
      ) : null}
      {numberFichBox === 5 ? (
        <FicheBox5
          numeroMiniBox={[12, 13, 14]}
          infoSelectionChoixMiniBox={infoSelectionChoixMiniBox}
        />
      ) : null}
      {numberFichBox === 6 ? (
        <FicheBox6
          numeroMiniBox={[15, 16, 17, 18]}
          infoSelectionChoixMiniBox={infoSelectionChoixMiniBox}
        />
      ) : null}
      {numberFichBox === 7 ? (
        <FicheBox7
          numeroMiniBox={[19, 20]}
          infoSelectionChoixMiniBox={infoSelectionChoixMiniBox}
        />
      ) : null}
      {numberFichBox === 8 ? (
        <FicheBox8
          numeroMiniBox={[21, 22]}
          infoSelectionChoixMiniBox={infoSelectionChoixMiniBox}
        />
      ) : null}
      <button onClick={boutonRetour}>Retour</button>
      <div>
        {selectionChoixMiniBox === true ? (
          <SelectionChoixMiniBox
            setSelectionChoixMiniBoxFalse={setSelectionChoixMiniBoxFalse}
            numeroMiniBox={numeroMiniBox}
          />
        ) : null}
      </div>
    </div>
  );
}

export default FicheBoxSelected;
