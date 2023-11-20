import React, { useState } from "react";
import fonctionsMiniBoxInfoJson from "../MiniBoxInfoFunction";
import { CompactPicker, ColorResult } from 'react-color';

const policeOptions = [
  { value: "Times New Roman", label: "(défault) Times New Roman" },
  { value: "Arial", label: "Arial" },
  // Ajoutez d'autres polices ici
];

function ModificationTexte({ setModificationTextePropsFalse, numeroMiniBox }: any) {
  const [selectedColor, setSelectedColor] = useState<string>(
    fonctionsMiniBoxInfoJson.getCouleurTexte(numeroMiniBox)?.toString() ?? ""
  );
  const [selectedPolice, setSelectedPolice] = useState<string>(
    fonctionsMiniBoxInfoJson.getPoliceTexte(numeroMiniBox) ?? "Times New Roman"
  );
  const [selectedTaille, setSelectedTaille] = useState<string>(
    fonctionsMiniBoxInfoJson.getTaille(numeroMiniBox)?.toString() ?? ""
  );

  const handleColorChange = (color: ColorResult) => {
    fonctionsMiniBoxInfoJson.modifierCouleurTexte(numeroMiniBox, color.hex);
    setSelectedColor(color.hex);
  };

  const handlePoliceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const policeSelectionnee = e.target.value;
    fonctionsMiniBoxInfoJson.modifierPoliceTexte(numeroMiniBox, policeSelectionnee);
    setSelectedPolice(policeSelectionnee);
  };

  return (
    <div>
      <p>Modification de la police du texte : </p>
      <select onChange={handlePoliceChange} value={selectedPolice}>
        <option value="null">sélectionner une police</option>
        {policeOptions.map((police) => (
          <option key={police.value} value={police.value} style={{ fontFamily: police.value }}>
            {police.label}
          </option>
        ))}
      </select>
      <p>Modification de la couleur du texte : </p>
      <CompactPicker
        color={selectedColor}
        onChange={handleColorChange}
      />
      <p>Modification de la taille du texte : </p>
      <input
        type="number"
        value={selectedTaille}
        onChange={(e) => {
          fonctionsMiniBoxInfoJson.modifierTaille(numeroMiniBox, e.target.value);
          setSelectedTaille(e.target.value);
        }}
      />
      <button onClick={setModificationTextePropsFalse}>sauvegarder</button>
    </div>
  );
}

export default ModificationTexte;
