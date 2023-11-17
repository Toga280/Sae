import React from "react";
import "../../../style/style_choix.css"
function SetSelectionChoixMiniBox({
  setTypeMiniBoxTexte,
  setTypeMiniBoxPictogramme,
  setTypeMiniBoxSon,
  setChoixMiniBoxBooleanFalse,
}: any) {
  return (
    <div onClick={setChoixMiniBoxBooleanFalse}>
      <p>Selection des choix</p>
      <div className="choix ">
        <button className="bouton" onClick={setTypeMiniBoxTexte}>texte</button>
        <button className="bouton" onClick={setTypeMiniBoxPictogramme}>Pictogramme</button>
        <button className="bouton" onClick={setTypeMiniBoxSon}>Son</button>
      </div>
    </div>
  );
}
export default SetSelectionChoixMiniBox;
