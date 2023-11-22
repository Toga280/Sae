import React from "react";
import "../../../style/style_choix.css";
import fonctionsMiniBoxInfoJson from "../MiniBoxInfoFunction";
function SetSelectionChoixMiniBox({
  setTypeMiniBoxTexte,
  setTypeMiniBoxPictogramme,
  setTypeMiniBoxSon,
  setChoixMiniBoxBooleanFalse,
  numeroMiniBox,
}: any) {
  const isAudioEnabled = fonctionsMiniBoxInfoJson.getAudio(numeroMiniBox);

  return (
    <div onClick={setChoixMiniBoxBooleanFalse}>
      <p>Sélection des choix</p>
      <div>
        <button onClick={setTypeMiniBoxTexte}>texte</button>
        <button onClick={setTypeMiniBoxPictogramme}>Pictogramme</button>
        <button onClick={setTypeMiniBoxSon}>
          {isAudioEnabled ? "Désactiver le son" : "Activer le son"}
        </button>
      </div>
    </div>
  );
}
export default SetSelectionChoixMiniBox;
