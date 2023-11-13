import React from "react";
import "../../../style/style_choix.css";
function SelectionChoixMiniBox({
  setSelectionChoixMiniBoxFalse,
  setTypeMiniBox,
  numeroMiniBox,
}: any) {
  const setTypeMiniBoxTexte = () => {
    setTypeMiniBox(1, numeroMiniBox);
  };
  const setTypeMiniBoxPictogramme = () => {
    setTypeMiniBox(2, numeroMiniBox);
  };
  const setTypeMiniBoxSon = () => {
    setTypeMiniBox(3, numeroMiniBox);
  };
  return (
    <div onClick={setSelectionChoixMiniBoxFalse} className="test">
      <p>Selection des choix</p>
      <div className="choix_specifique">
        {/*<img src={require("./logo.webp")} alt="son" />*/}
        <div className="choix_specifique_texte">
          <button onClick={setTypeMiniBoxTexte}>texte</button>
        </div>
        <button onClick={setTypeMiniBoxPictogramme}>Pictogramme</button>
        <button onClick={setTypeMiniBoxSon}>Son</button>
      </div>
    </div>
  );
}

export default SelectionChoixMiniBox;
