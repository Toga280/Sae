import axios from "axios";
import React, { useEffect, useState } from "react";
import "./ListeFiches.css";
function ListeFiches({ redirection }: any) {
  const [FichesNames, setFichesNames] = useState([]);

  const elements = FichesNames.map((item, index) => (
    <div className="global_liste_nom_fiches_crée">
      <div className="liste_nom_fiches_crée" key={index} onClick={() => redirection(3)}>
        {item}
      </div>
    </div>
  ));

  const allFicheNames = () => {
    axios
      .get("http://localhost:5000/GET/allFicheNames")
      .then((response) => {
        setFichesNames(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors de la requête vers le serveur :", error);
      });
  };

  useEffect(() => {
    allFicheNames();
  }, []);

  const setRedirectionTwo = () => {
    redirection(2);
  };

  return (
    <div>
      <h1 className="titre_h1_fiche_crée">Liste Fiches :</h1>
      {elements}
      <button className="bouton_retour_liste_fiche_crée_edu" onClick={setRedirectionTwo}> Retour</button>
    </div>
  );
}

export default ListeFiches;
