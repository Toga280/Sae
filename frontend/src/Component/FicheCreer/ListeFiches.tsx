import axios from "axios";
import React, { useEffect, useState } from "react";
import fonctionsMiniBoxInfoJson from "../CreationFiche/MiniBoxInfoFunction";
function ListeFiches({ redirection }: any) {
  const [FichesNames, setFichesNames] = useState([]);

  const elements = FichesNames.map((item, index) => (
    <div key={index} onClick={() => SetUpModificationFiche(item)}>
      {item}
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

  const FicheNames = (nameValue: string) => {
    axios
      .get(
        `http://localhost:5000/GET/nameFiche?name=${encodeURIComponent(
          nameValue
        )}`
      )
      .then((response) => {
        fonctionsMiniBoxInfoJson.setNewJson(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors de la requête vers le serveur :", error);
      });
  };

  const SetUpModificationFiche = (item: string) => {
    FicheNames(item);
    redirection(3);
  };

  useEffect(() => {
    allFicheNames();
  }, []);

  return (
    <div>
      <h1>Liste Fiches :</h1>
      {elements}
    </div>
  );
}

export default ListeFiches;
