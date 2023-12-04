import React, { useState } from "react";
import fonctionsMiniBoxInfoJson from "./MiniBoxInfoFunction";
import PopUpSauvegarder from "./PopUpSauvegarder";
import axios from "axios";
import "./Sauvegarder.css";

function Sauvegarder({ redirection, setSaveName }: any) {
  const [nomFiche, setNomFiche] = useState("");
  const [upPopUpSauvegarder, setUpPopUpSauvegarder] = useState(false);

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

  const testNameFiche = async (nomFiche: string) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/GET/nameFicheExiste?name=${encodeURIComponent(
          nomFiche
        )}`
      );

      if (response.data) {
        setUpPopUpSauvegarder(true);
      } else {
        sauvegarde();
      }
    } catch (error) {
      console.error("Erreur lors de la requête vers le serveur :", error);
      throw error;
    }
  };

  return (
<div className="global_sauvegarder_fiche">
  <input
    className="input_sauvegarder_ficheBox"
    type="text"
    placeholder="Nom de la fiche"
    value={nomFiche}
    required
    onChange={handleInputChange}
  />
  <input
    type="button"
    className="boutton_sauvegarder_ficheBox"
    value="Sauvegarder"
    onClick={() => {
      if (nomFiche.trim() !== "") {
        testNameFiche(nomFiche);
      } else {
        alert("Veuillez saisir un nom pour votre fiche avant de sauvegarder.");
      }
    }}
  />
  {upPopUpSauvegarder ? (
    <PopUpSauvegarder
      setUpPopUpSauvegarder={setUpPopUpSauvegarder}
      nomFiche={nomFiche}
      sauvegarde={sauvegarde}
    />
  ) : null}
</div>
  );
}

export default Sauvegarder;
