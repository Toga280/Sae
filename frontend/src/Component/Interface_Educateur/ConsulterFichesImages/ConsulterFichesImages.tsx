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
      <div>
        <div className="custom_global_affecter_fiche">
          <h1 className="custom_titleh1">Consulter Fiches/Images d'un élève</h1>
          <h2 className="custom_title">Liste des élèves</h2>
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
              <div className="custom_eleve_selec">
                <h3>Élève sélectionné :</h3>
                <p>
                  {eleveSelectionne.nom} {eleveSelectionne.prenom}
                </p>
                <div className="custom_button_choose">
                  <button className="custom_affecter_fiche_eleve">Voir les photos</button>
                  <button className="custom_affecter_fiche_eleve">Voir la fiche</button>
                </div>
              </div>
            )}
          </div>
          <button className="custom_retour_liste_fiches" onClick={setRedirectionTwo}>
            Retour
          </button>
        </div>
        <button className="retour_liste_fiches" onClick={setRedirectionTwo}>
            Retour
          </button>
      </div>
      );
    }

export default ConsulterFichesImages;
