import React from "react";
function SetSelectionChoixMiniBox({
  setTypeMiniBoxTexte,
  setTypeMiniBoxPictogramme,
  setTypeMiniBoxSon,
  setChoixMiniBoxBooleanFalse,
}: any) {
  return (
    <div onClick={setChoixMiniBoxBooleanFalse}>
      <p>Selection des choix</p>
      <div>
        <button onClick={setTypeMiniBoxTexte}>texte</button>
        <button onClick={setTypeMiniBoxPictogramme}>Pictogramme</button>
        <button onClick={setTypeMiniBoxSon}>Son</button>
      </div>
    </div>
  );
}
export default SetSelectionChoixMiniBox;
