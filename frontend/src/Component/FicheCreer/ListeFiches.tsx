import axios from "axios";
import React, { useEffect, useState } from "react";
function ListeFiches({ redirection }: any) {
  const [FichesNames, setFichesNames] = useState([]);

  const elements = FichesNames.map((item, index) => (
    <div key={index} onClick={() => redirection(3)}>
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
