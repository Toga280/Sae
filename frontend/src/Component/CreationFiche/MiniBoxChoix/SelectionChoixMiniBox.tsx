import "../../../style/style_choix.css";
import React, { useState } from "react";
import ModificationTexte from "./ModificationTexte";
import SetSelectionChoixMiniBox from "./SetSelectionChoixMiniBox";
import fonctionsMiniBoxInfoJson from "../MiniBoxInfoFunction";
import Pictogramme from "./Pictogramme";

function SelectionChoixMiniBox({
  setSelectionChoixMiniBoxFalse,
  numeroMiniBox,
}: any) {
  const [modificationTexteProps, setModificationTexteProps] = useState(Boolean);
  const [choixMiniBoxBoolean, setChoixMiniBoxBoolean] = useState(true);

  const [modificationPictoProps, setModificationPictoProps] = useState(Boolean);

  const setModificationTextePropsTrue = () => {
    setModificationTexteProps(true);
  };
  const setModificationTextePropsFalse = () => {
    setModificationTexteProps(false);
  };

  const setModificationPictoPropsTrue = () => {
    setModificationPictoProps(true);
  };
  const setModificationPictoPropsFalse = () => {
    setModificationPictoProps(false);
  };

  const setChoixMiniBoxBooleanFalse = () => {
    setChoixMiniBoxBoolean(false);
  };

  const setTypeMiniBoxTexte = () => {
    fonctionsMiniBoxInfoJson.modifierChoixMiniBox(numeroMiniBox, "Texte");
    setModificationTextePropsTrue();
  };
  const setTypeMiniBoxPictogramme = () => {
    fonctionsMiniBoxInfoJson.modifierChoixMiniBox(numeroMiniBox, "Pictogramme");
    setModificationPictoPropsTrue();
  };
  const setTypeMiniBoxSon = () => {
    fonctionsMiniBoxInfoJson.modifierChoixMiniBox(numeroMiniBox, "Son");
  };
  return (
    <div>
      <div>
        {choixMiniBoxBoolean === true ? (
          <SetSelectionChoixMiniBox
            setTypeMiniBoxTexte={setTypeMiniBoxTexte}
            setTypeMiniBoxPictogramme={setTypeMiniBoxPictogramme}
            setTypeMiniBoxSon={setTypeMiniBoxSon}
            setChoixMiniBoxBooleanFalse={setChoixMiniBoxBooleanFalse}
          />
        ) : (
          <p></p>
        )}
        {modificationTexteProps === true ? (
          <ModificationTexte
            setModificationTextePropsFalse={setModificationTextePropsFalse}
          />
        ) : (
          <p></p>
        )}
        {/*  AJOUTER PLUS TARD STUART setModificationPicto  PropsFalse */}
        {modificationPictoProps === true ? (
          <Pictogramme
            setModificationPictoPropsFalse={setModificationPictoPropsFalse}
          />
        ) : (
          <p></p>
        )}
      </div>
      <button onClick={setSelectionChoixMiniBoxFalse}>appliqué</button>
    </div>
  );
}

export default SelectionChoixMiniBox;
