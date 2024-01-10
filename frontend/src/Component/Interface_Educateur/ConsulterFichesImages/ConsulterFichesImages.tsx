import axios from "axios";
import React, { useEffect, useState } from "react";
import "./ConsulterFichesImages.css";

function ConsulterFichesImages({ redirection }: any) {
    const setRedirectionTwo = () => {
        redirection(2);
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
          <h1 className="titleh1">Consulter Fiches/Images d'un élève</h1>
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
          <button className="retour_liste_fiches" onClick={setRedirectionTwo}>
            Retour
          </button>
        </div>
      );
    }

export default ConsulterFichesImages;
