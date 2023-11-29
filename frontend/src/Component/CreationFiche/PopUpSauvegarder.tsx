import React from "react";
import axios from "axios";

function PopUpSauvegarder({
  setUpPopUpSauvegarder,
  nomFiche,
  sauvegarde,
}: any) {
  const deleteFiche = (nomFiche: string) => {
    axios
      .get(
        `http://localhost:5000/DELETE/ficheName?name=${encodeURIComponent(
          nomFiche
        )}`
      )
      .then((response) => {
        if (response.data) {
          console.log("fiche supprimé avec succer");
          sauvegarde();
          setUpPopUpSauvegarder(false);
        }
      })
      .catch((error) => {
        console.error("Erreur lors de la requête vers le serveur :", error);
      });
  };

  return (
    <div>
      <p>il existe deja une fiche avec ce nom, voulez vous l'écrasez ?</p>
      <button onClick={() => setUpPopUpSauvegarder(false)}>annuler</button>
      <button onClick={() => deleteFiche(nomFiche)}>écrasez</button>
    </div>
  );
}

export default PopUpSauvegarder;
