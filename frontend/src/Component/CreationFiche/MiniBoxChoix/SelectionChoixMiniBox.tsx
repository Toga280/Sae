import React from "react";
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
    <div onClick={setSelectionChoixMiniBoxFalse}>
      <p>Selection des choix</p>
      <div>
        {/*<img src={require("./logo.webp")} alt="son" />*/}
        <button onClick={setTypeMiniBoxTexte}>texte</button>
        <button onClick={setTypeMiniBoxPictogramme}>Pictogramme</button>
        <button onClick={setTypeMiniBoxSon}>Son</button>
      </div>
    </div>
  );
}

export default SelectionChoixMiniBox;
