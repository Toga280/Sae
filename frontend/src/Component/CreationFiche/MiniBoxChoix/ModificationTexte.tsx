import React, { useState } from "react";
import fonctionsMiniBoxInfoJson from "../MiniBoxInfoFunction";
import { CompactPicker, ColorResult } from "react-color";
import "./ModificationTexte.css";
const policeOptions = [
  { value: "Times New Roman", label: "(défault) Times New Roman" },
  { value: "Arial", label: "Arial" },
  { value: "Verdana", label: "Verdana" },
  { value: "Helvetica", label: "Helvetica" },
  { value: "Courier New", label: "Courier New" },
  // Ajoutez d'autres polices ici
];

function ModificationTexte({ numeroMiniBox }: any) {
  const [selectedColor, setSelectedColor] = useState<string>(
    fonctionsMiniBoxInfoJson.getCouleurTexte(numeroMiniBox)?.toString() ?? ""
  );
  const [selectedPolice, setSelectedPolice] = useState<string>(
    fonctionsMiniBoxInfoJson.getPoliceTexte(numeroMiniBox) ?? "Times New Roman"
  );
  const [selectedTaille, setSelectedTaille] = useState<number>(
    fonctionsMiniBoxInfoJson.getTaille(numeroMiniBox) ?? 0
  );

  const handleColorChange = (color: ColorResult) => {
    fonctionsMiniBoxInfoJson.modifierCouleurTexte(numeroMiniBox, color.hex);
    setSelectedColor(color.hex);
  };

  const handlePoliceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const policeSelectionnee = e.target.value;
    fonctionsMiniBoxInfoJson.modifierPoliceTexte(
      numeroMiniBox,
      policeSelectionnee
    );
    setSelectedPolice(policeSelectionnee);
  };

  return (
    <div className="modif_texte_ficheBox">
      <p>Police du texte : </p>
      <select
        className="choix_selection_police_ficheBox"
        onChange={handlePoliceChange}
        value={selectedPolice}
      >
        <option value="null">Sélectionner une police</option>
        {policeOptions.map((police) => (
          <option
            key={police.value}
            value={police.value}
            style={{ fontFamily: police.value }}
          >
            {police.label}
          </option>
        ))}
      </select>
      <p>Couleur du texte : </p>
      <div className="choix_couleur_modif_fiche">
        <CompactPicker color={selectedColor} onChange={handleColorChange} />
      </div>
      <p>Taille du texte : </p>
      <input
        className="choix_taille_modif_fiche"
        type="number"
        value={selectedTaille}
        onChange={(e) => {
          const tailleValue = parseInt(e.target.value, 10);
          fonctionsMiniBoxInfoJson.modifierTaille(numeroMiniBox, tailleValue);
          setSelectedTaille(tailleValue);
        }}
      />
      <br />
    </div>
  );
}

export default ModificationTexte;
