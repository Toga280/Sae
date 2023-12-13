import React from "react";
import Texte from "./Texte";
import Son from "./Son";
import fonctionsMiniBoxInfoJson from "../MiniBoxInfoFunction";
import PictoChoisi from "./PictoChoisi";

function ChoixMiniBox({
  TexteInfo,
  Balise,
  ClassName,
  numeroMiniBox,
  infoSelectionChoixMiniBox,
}: any) {
  const setSelectionChoixMiniBoxTrue = () => {
    fonctionsMiniBoxInfoJson.allIsSelectedMiniBoxFalse();
    infoSelectionChoixMiniBox(true, numeroMiniBox);
    fonctionsMiniBoxInfoJson.modifierIsSelectedMiniBox(numeroMiniBox, true);
    fonctionsMiniBoxInfoJson.modifierChoixMiniBox(numeroMiniBox, "Texte");
  };

  return (
    <div>
      <div onClick={setSelectionChoixMiniBoxTrue}>
        {fonctionsMiniBoxInfoJson.getChoixMiniBox(numeroMiniBox) === "Texte" ? (
          <Texte
            Texte={TexteInfo}
            Balise={Balise}
            ClassName={ClassName}
            numeroMiniBox={numeroMiniBox}
          />
        ) : (
          <p></p>
        )}
        {fonctionsMiniBoxInfoJson.getChoixMiniBox(numeroMiniBox) ===
          "Pictogramme" ? (
            <PictoChoisi numeroMiniBox={numeroMiniBox} />
          ) : (
            <p></p>
          )}
      </div>
      {fonctionsMiniBoxInfoJson.getAudio(numeroMiniBox) === true ? (
        <Son Texte={TexteInfo} Balise={Balise} ClassName={ClassName} />
      ) : null}
    </div>
  );
}

export default ChoixMiniBox;
