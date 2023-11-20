import React, { useState } from "react";
import fonctionsMiniBoxInfoJson from "../MiniBoxInfoFunction";
import { CompactPicker, ColorResult } from 'react-color'

function ModificationTexte({ setModificationTextePropsFalse, numeroMiniBox }: any) {
  const [selectedColor, setSelectedColor] = useState<string>(
    fonctionsMiniBoxInfoJson.getCouleurTexte(numeroMiniBox)?.toString() ?? ""
  );

  const handleColorChange = (color: ColorResult) => {
    fonctionsMiniBoxInfoJson.modifierCouleurTexte(numeroMiniBox, color.hex);
    setSelectedColor(color.hex);
  };

  return (
    <div>
      <p>Modification de la police du texte : </p>
      <select onChange={(e) => fonctionsMiniBoxInfoJson.modifierPoliceTexte(numeroMiniBox, e.target.value)}>
        <option value="null">selectionner une police</option>
        <option value="Times New Roman">(défault) Times New Roman</option>
        <option value="Arial">Arial</option>
        {/*rajouter des police ici*/}
      </select>
      <p>Modification de la couleur du texte : </p>
      <CompactPicker
        color={selectedColor}
        onChange={handleColorChange}
      />
      <p>Modification de la taille du texte : </p>
      <input
        type="number"
        onChange={(e) => fonctionsMiniBoxInfoJson.modifierTaille(numeroMiniBox, e.target.value)}/>
      <button onClick={setModificationTextePropsFalse}>sauvegarder</button>
    </div>
  );
}

export default ModificationTexte;
