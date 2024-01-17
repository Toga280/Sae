import axios from "axios";
import "./AffecterListe.css";
import React, { useEffect, useState } from "react";

function AffecterListe({
  setAffichageAffecterListeFalse,
  nomFicheSelectionner,
}: any) {
  const [eleves, setEleves] = useState<any[]>([]);
  const [eleveSelectionne, setEleveSelectionne] = useState<any | null>(null);

  useEffect(() => {
    const getEleve = () => {
      axios
        .get(`http://localhost:5000/GET/allEleve`)
        .then((response) => {
          setEleves(response.data);
        })
        .catch((error) => {
          console.error("erreur : ", error);
        });
    };

    getEleve();
  }, []);

  const handleSelectionEleve = (eleve: any) => {
    setEleveSelectionne(eleve);
  };

  const affecterFiche = (nom: string, prenom: string) => {
    const ficheName = nomFicheSelectionner;
    console.log("affectation de l'éleve --> ", nom, prenom, ficheName);
    axios
      .post(`http://localhost:5000/POST/affectereleve`, {
        nom,
        prenom,
        ficheName,
      })
      .then((response) => {
        setEleves(response.data);
      })
      .catch((error) => {
        console.error("erreur : ", error);
      });
    setAffichageAffecterListeFalse();
  };

  return (
    <div className="global_affecter_fiche">
      <h1 className="titleh1">Affecter une fiche</h1>
      <h2 className="title">Liste des élèves</h2>
      <h3>Fiche sélectionné : {nomFicheSelectionner}</h3>
      <ul>
        {eleves.map((eleve) => (
          <li
            key={eleve.id}
            onClick={() => handleSelectionEleve(eleve)}
            style={{
              cursor: "pointer",
              fontWeight: eleve === eleveSelectionne ? "bold" : "normal",
            }}
          >
            {eleve.nom} {eleve.prenom}
          </li>
        ))}
      </ul>
      <div>
        {eleveSelectionne && (
          <div>
            <div className="custom_eleve_selec">
              <h3>Élève sélectionné :</h3>
              <p>
                {eleveSelectionne.nom} {eleveSelectionne.prenom}
              </p>
              <button
                className="affecter_fiche_eleve"
                onClick={() =>
                  affecterFiche(eleveSelectionne.nom, eleveSelectionne.prenom)
                }
              >
                Affecter
              </button>
            </div>
          </div>
        )}
      </div>
      {/* <button
        className="retour_liste_fiches"
        onClick={setAffichageAffecterListeFalse}
      >
        Retour
      </button> */}
    </div>
  );
}

export default AffecterListe;
