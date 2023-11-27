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
  const [choixMiniBoxBoolean, setChoixMiniBoxBoolean] = useState(true);

  const [modificationPictoProps, setModificationPictoProps] = useState(Boolean);
  
  const [BoolImage, SetBoolImage] = useState(true);

  const ouioui = () => {
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

  const setTypeMiniBoxTexte = () => {
    fonctionsMiniBoxInfoJson.modifierChoixMiniBox(numeroMiniBox, "Texte");
    setModificationTextePropsTrue();
    setChoixMiniBoxBooleanFalse();
  };
  const setTypeMiniBoxPictogramme = () => {
    fonctionsMiniBoxInfoJson.modifierChoixMiniBox(numeroMiniBox, "Pictogramme");
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
  // ARNAQUE
  const setBoolImage = (boolean : boolean) => {
    SetBoolImage(boolean);
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
          <ModificationTexte
            setModificationTextePropsFalse={setModificationTextePropsFalse}
            numeroMiniBox={numeroMiniBox}
          />
        ) : (
          <p></p>
        )}

      {modificationPictoProps === true ? (
          <ModificationPicto 
            setModificationPictoPropsFalse={setModificationPictoPropsFalse}
            setBoolImage={setBoolImage}
            BoolImage={BoolImage}

          />
        )  
        : (
          <p></p>
        )}
      </div>
      <button className="button_apply_after_modif"onClick={ouioui}>Appliquer</button>
    </div>
  );
}

export default SelectionChoixMiniBox;
