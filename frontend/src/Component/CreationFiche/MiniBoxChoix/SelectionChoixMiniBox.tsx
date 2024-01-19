import "../../../style/style_choix.css";
import React, { useState } from "react";
import ModificationTexte from "./ModificationTexte";
import SetSelectionChoixMiniBox from "./SetSelectionChoixMiniBox";
import fonctionsMiniBoxInfoJson from "../MiniBoxInfoFunction";
import ModificationPicto from "./ModificationPicto";
import { set } from "mongoose";
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
    } else if (choixTypeElement === 3) {
      fonctionsMiniBoxInfoJson.modifierChoixMiniBox(
        numeroMiniBox,
        "TexteEtPictogramme"
      );
    }
    setSelectionChoixMiniBoxFalse();
    fonctionsMiniBoxInfoJson.modifierIsSelectedMiniBox(numeroMiniBox, false);
  };

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
  const setSelectionChoixMiniBoxTrue = () => {
    setChoixMiniBoxBoolean(true);
  };

  const setTypeMiniBoxTexte = () => {
    setChoixTypeElement(1);
    setModificationTextePropsTrue();
    setModificationPictoPropsFalse();
    setChoixMiniBoxBooleanFalse();
  };
  const setTypeMiniBoxPictogramme = () => {
    setChoixTypeElement(2);
    setModificationPictoPropsTrue();
    setModificationTextePropsFalse();
    setChoixMiniBoxBooleanFalse();
  };
  const setTypeMiniBoxhybride = () => {
    setChoixTypeElement(3);
    setModificationTextePropsTrue();
    setModificationPictoPropsTrue();
    setChoixMiniBoxBooleanFalse();
  }

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
            setTypeMiniBoxhybride={setTypeMiniBoxhybride}
            setTypeMiniBoxSon={setTypeMiniBoxSon}
            numeroMiniBox={numeroMiniBox}
          />
        ) : (
          <p></p>
        )}
        {modificationTexteProps === true && modificationPictoProps === false ? (
          <ModificationTexte numeroMiniBox={numeroMiniBox} />
        ) : (
          <p></p>
        )}
        {modificationPictoProps === true && modificationTexteProps === false ? (
          <ModificationPicto numeroMiniBox={numeroMiniBox}
          />
        ) : null}
        {modificationTexteProps === true && modificationPictoProps === true  ?(
          <div className="choixhybride">
            <ModificationTexte numeroMiniBox={numeroMiniBox} />
            <ModificationPicto numeroMiniBox={numeroMiniBox} />
          </div>
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