import React, { useState } from "react";
import Texte from "./Texte";
import Pictogramme from "./Pictogramme";
import Son from "./Son";
import SelectionChoixMiniBox from "./SelectionChoixMiniBox";
function ChoixMiniBox({
  choixMiniBox,
  TexteInfo,
  Balise,
  ClassName,
  setTypeMiniBox,
  numeroMiniBox,
}: any) {
  const [selectionChoixMiniBox, setSelectionChoixMiniBox] = useState(false);
  const setSelectionChoixMiniBoxTrue = () => {
    setSelectionChoixMiniBox(true);
  };
  const setSelectionChoixMiniBoxFalse = () => {
    setSelectionChoixMiniBox(false);
  };
  return (
    <div>
      <div onClick={setSelectionChoixMiniBoxTrue}>
        {choixMiniBox === 1 ? (
          <Texte Texte={TexteInfo} Balise={Balise} ClassName={ClassName} />
        ) : (
          <p></p>
        )}
        {choixMiniBox === 2 ? <Pictogramme /> : <p></p>}
        {choixMiniBox === 3 ? <Son /> : <p></p>}
      </div>
      <div>
        {selectionChoixMiniBox === true ? (
          <SelectionChoixMiniBox
            setSelectionChoixMiniBoxFalse={setSelectionChoixMiniBoxFalse}
            setTypeMiniBox={setTypeMiniBox}
            numeroMiniBox={numeroMiniBox}
          />
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
}

export default ChoixMiniBox;
