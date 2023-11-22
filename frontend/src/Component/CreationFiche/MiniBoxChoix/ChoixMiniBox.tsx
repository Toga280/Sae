import React, { useState } from "react";
import Texte from "./Texte";
import Pictogramme from "./Pictogramme";
import Son from "./Son";
import SelectionChoixMiniBox from "./SelectionChoixMiniBox";
import fonctionsMiniBoxInfoJson from "../MiniBoxInfoFunction";
function ChoixMiniBox({ TexteInfo, Balise, ClassName, numeroMiniBox }: any) {
  const [selectionChoixMiniBox, setSelectionChoixMiniBox] = useState(false);

  const [, setRefreshComponent] = useState(false);

  const setSelectionChoixMiniBoxTrue = () => {
    setSelectionChoixMiniBox(true);
  };
  const setSelectionChoixMiniBoxFalse = () => {
    setSelectionChoixMiniBox(false);
  };

  return (
    <div>
      <div onClick={setSelectionChoixMiniBoxTrue}>
        {fonctionsMiniBoxInfoJson.getChoixMiniBox(numeroMiniBox) === "Texte" ? (
          <Texte Texte={TexteInfo} Balise={Balise} ClassName={ClassName} />
        ) : (
          <p></p>
        )}
        {fonctionsMiniBoxInfoJson.getChoixMiniBox(numeroMiniBox) ===
        "Pictogramme" ? (
          <Pictogramme />
        ) : (
          <p></p>
        )}
      </div>
      {fonctionsMiniBoxInfoJson.getAudio(numeroMiniBox) === true ? (
          <Son Texte={TexteInfo} Balise={Balise} ClassName={ClassName} />
        ) : (
          <p></p>
        )}
      <div>
        {selectionChoixMiniBox === true ? (
          <SelectionChoixMiniBox
            setSelectionChoixMiniBoxFalse={setSelectionChoixMiniBoxFalse}
            numeroMiniBox={numeroMiniBox}
            setRefreshComponent={setRefreshComponent}
          />
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
}

export default ChoixMiniBox;
