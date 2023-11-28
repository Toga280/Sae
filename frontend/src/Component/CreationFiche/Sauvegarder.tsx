import React, { useState } from "react";
import fonctionsMiniBoxInfoJson from "./MiniBoxInfoFunction";
import axios from "axios";

function Sauvegarder({ redirection, setSaveName }: any) {
  const [nomFiche, setNomFiche] = useState("");

  const handleInputChange = (event: any) => {
    setNomFiche(event.target.value);
  };

  const sauvegarde = () => {
    fonctionsMiniBoxInfoJson.modifierNom(nomFiche);
    postFiche();
    redirection(2);
    setSaveName(false);
    fonctionsMiniBoxInfoJson.modifierAllJsonToBase();
  };

  const postFiche = () => {
    const data = fonctionsMiniBoxInfoJson.getAllJson();
    axios
      .post("http://localhost:5000/POST/fiche", data)
      .then((response) => {
        console.log("Réponse du serveur :", response.data);
      })
      .catch((error) => {
        console.error("Erreur lors de la requête vers le serveur :", error);
      });
  };

  return (
    <div>
      <input
        className="input_sauvegarder_ficheBox"
        type="text"
        placeholder="Nom de la fiche"
        value={nomFiche}
        onChange={handleInputChange}
      />
      <button className="boutton_sauvegarder_ficheBox" onClick={sauvegarde}>
        Sauvegarder
      </button>
    </div>
  );
}

export default Sauvegarder;
