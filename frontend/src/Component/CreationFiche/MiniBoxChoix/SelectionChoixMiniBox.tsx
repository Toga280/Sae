import "../../../style/style_choix.css";
import React, { useState } from "react";
import ModificationTexte from "./ModificationTexte";
import SetSelectionChoixMiniBox from "./SetSelectionChoixMiniBox";
import fonctionsMiniBoxInfoJson from "../MiniBoxInfoFunction";
import ModificationPicto from "./ModificationPicto";
function SelectionChoixMiniBox({
  setSelectionChoixMiniBoxFalse,
  numeroMiniBox,
}: any) {
  const [modificationTexteProps, setModificationTexteProps] = useState(Boolean);
  const [modificationPictoProps, setModificationPictoProps] = useState(Boolean);
  const [choixTypeElement, setChoixTypeElement] = useState(Number);
  const [choixMiniBoxBoolean, setChoixMiniBoxBoolean] = useState(true);

  const closeSelectMiniBox = () => {
    if (choixTypeElement === 1) {
      fonctionsMiniBoxInfoJson.modifierChoixMiniBox(numeroMiniBox, "Texte");
    } else if (choixTypeElement === 2) {
      fonctionsMiniBoxInfoJson.modifierChoixMiniBox(
        numeroMiniBox,
        "Pictogramme"
      );
    }
    setSelectionChoixMiniBoxFalse();
    fonctionsMiniBoxInfoJson.modifierIsSelectedMiniBox(numeroMiniBox, false);
  };

  const setModificationTextePropsTrue = () => {
    setModificationTexteProps(true);
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
    setChoixTypeElement(1);
    setModificationTextePropsTrue();
    setChoixMiniBoxBooleanFalse();
  };
  const setTypeMiniBoxPictogramme = () => {
    setChoixTypeElement(2);
    setModificationPictoPropsTrue();
    setChoixMiniBoxBooleanFalse();
  };
  const setTypeMiniBoxSon = () => {
    fonctionsMiniBoxInfoJson.modificationAudio(
      numeroMiniBox,
      !fonctionsMiniBoxInfoJson.getAudio(numeroMiniBox)
    );
    setChoixMiniBoxBooleanFalse();
  };
  return (
    <div>
      <div>
        {choixMiniBoxBoolean === true ? (
          <SetSelectionChoixMiniBox
            setTypeMiniBoxTexte={setTypeMiniBoxTexte}
            setTypeMiniBoxPictogramme={setTypeMiniBoxPictogramme}
            setTypeMiniBoxSon={setTypeMiniBoxSon}
            numeroMiniBox={numeroMiniBox}
          />
        ) : (
          <p></p>
        )}
        {modificationTexteProps === true ? (
          <ModificationTexte numeroMiniBox={numeroMiniBox} />
        ) : (
          <p></p>
        )}
        {modificationPictoProps === true ? (
          <ModificationPicto
            setModificationPictoPropsFalse={setModificationPictoPropsFalse}
          />
        ) : null}
      </div>
      <button
        className="apply_choix_change_button"
        onClick={closeSelectMiniBox}
      >
        Appliquer
      </button>
    </div>
  );
}

export default SelectionChoixMiniBox;
