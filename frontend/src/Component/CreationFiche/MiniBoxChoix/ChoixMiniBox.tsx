import React from "react";
import Texte from "./Texte";
import Pictogramme from "./Pictogramme";
import Son from "./Son";
import fonctionsMiniBoxInfoJson from "../MiniBoxInfoFunction";
function ChoixMiniBox({
  TexteInfo,
  Balise,
  ClassName,
  numeroMiniBox,
  infoSelectionChoixMiniBox,
}: any) {
  const setSelectionChoixMiniBoxTrue = () => {
    infoSelectionChoixMiniBox(true, numeroMiniBox);
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
        {fonctionsMiniBoxInfoJson.getChoixMiniBox(numeroMiniBox) === "Son" ? (
          <Son />
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
}

export default ChoixMiniBox;
