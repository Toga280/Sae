import axios from "axios";
import React, { useEffect, useState } from "react";
import "./AffecterListe.css";
function AffecterListe({ redirection }: any) {
  const setRedirectionSix = () => {
    redirection(6);
  };

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

  return (
    <div className="global_affecter_fiche">
      <h1 className="titleh1">Affecter une fiche</h1>
      <h2 className="title">Liste des élèves</h2>
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
            <h3>Élève sélectionné :</h3>
            <p>
              {eleveSelectionne.nom} {eleveSelectionne.prenom}
            </p>
            <button className="affecter_fiche_eleve">Affecter</button>
          </div>
        )}
      </div>
      <button className="retour_liste_fiches" onClick={setRedirectionSix}>
        Retour
      </button>
    </div>
  );
}

export default AffecterListe;
