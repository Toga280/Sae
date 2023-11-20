import React from "react";
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
        {/*<img src={require("./logo.webp")} alt="son" />*/}
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
