import React, { useState } from "react";
import fonctionsMiniBoxInfoJson from "../MiniBoxInfoFunction";
import { CompactPicker, ColorResult } from "react-color";

const policeOptions = [
  { value: "Times New Roman", label: "(défault) Times New Roman" },
  { value: "Arial", label: "Arial" },
  // Ajoutez d'autres polices ici
];

function ModificationTexte({
  setModificationTextePropsFalse,
  numeroMiniBox,
}: any) {
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
    fonctionsMiniBoxInfoJson.modifierPoliceTexte(
      numeroMiniBox,
      policeSelectionnee
    );
    setSelectedPolice(policeSelectionnee);
  };

  return (
    <div className="modif_texte_ficheBox">
      <p>Modification de la police du texte : </p>
      <select className="choix_selection_police_ficheBox" onChange={handlePoliceChange} value={selectedPolice}>
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
      <p>Modification de la couleur du texte : </p>
      <div className="choix_couleur_modif_fiche">
        <CompactPicker color={selectedColor} onChange={handleColorChange} />
      </div>
      <p>Modification de la taille du texte : </p>
      <div className="choix_taille_police_modif_fiche"> 
        <input
          type="number"
          value={selectedTaille}
          onChange={(e) => {
            fonctionsMiniBoxInfoJson.modifierTaille(
              numeroMiniBox,
              e.target.value
            );
            setSelectedTaille(e.target.value);
          }}
          style={{ width: "50px" }}
        />
      </div>
      <br />
      <button className="bouton_save_modif_texte" onClick={setModificationTextePropsFalse}>Sauvegarder</button>
    </div>
  );
}

export default ModificationTexte;
