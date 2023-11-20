import React, { useState } from "react";
import ModificationTexte from "./ModificationTexte";
import SetSelectionChoixMiniBox from "./SetSelectionChoixMiniBox";
import fonctionsMiniBoxInfoJson from "../MiniBoxInfoFunction";
import Pictogramme from "./Pictogramme";

function SelectionChoixMiniBox({
  setSelectionChoixMiniBoxFalse,
  numeroMiniBox,
  setRefreshComponent,
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
    setRefreshComponent((prevState: Boolean) => !prevState);
  };
  const setTypeMiniBoxPictogramme = () => {
    fonctionsMiniBoxInfoJson.modifierChoixMiniBox(numeroMiniBox, "Pictogramme");
    setRefreshComponent((prevState: Boolean) => !prevState);
  };
  const setTypeMiniBoxSon = () => {
    fonctionsMiniBoxInfoJson.modificationAudio(numeroMiniBox, !fonctionsMiniBoxInfoJson.getAudio(numeroMiniBox));
    setRefreshComponent((prevState: Boolean) => !prevState);
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
            numeroMiniBox={numeroMiniBox}
          />
          ) : (
            <p></p>
          )
        }
      {/*  AJOUTER PLUS TARD STUART setModificationPicto  PropsFalse */}
        {modificationPictoProps === true ? (
          <Pictogramme />
          ): (
            <p></p>
          )
        }

      </div>
      <button onClick={setSelectionChoixMiniBoxFalse}>annuler</button>
    </div>
  );
}

export default SelectionChoixMiniBox;
