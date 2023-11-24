import React from "react";
import "../../../style/style_choix.css";
import fonctionsMiniBoxInfoJson from "../MiniBoxInfoFunction";
function SetSelectionChoixMiniBox({
  setTypeMiniBoxTexte,
  setTypeMiniBoxPictogramme,
  setTypeMiniBoxSon,
  numeroMiniBox,
}: any) {
  const isAudioEnabled = fonctionsMiniBoxInfoJson.getAudio(numeroMiniBox);

  return (
    <div className ="choix">
      <div className="container_bouton_choix_elem ">
        <p>Sélection des choix</p>
        <button className="bouton_choix_elem"onClick={setTypeMiniBoxTexte}>texte</button>
        <button className="bouton_choix_elem"onClick={setTypeMiniBoxPictogramme}>Pictogramme</button>
        <button className="bouton_choix_elem"onClick={setTypeMiniBoxSon}>
          {isAudioEnabled ? "Désactiver le son" : "Activer le son"}
        </button>
      </div>
    </div>
  );
}
export default SetSelectionChoixMiniBox;
