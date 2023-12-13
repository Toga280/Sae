import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ModifierMdp.css";
import "./ModifierMdp";

function ModifierMdpEleve({ redirection }: any) {

  const [mdpEleve, ModifMdpEleve] = useState("");
  const handleInputModifMdp = (event: any) => {
    ModifMdpEleve(event.target.value);
  };

  const [profilSelectionne, setProfilSelectionne] = useState<any>(null);
  const [inputActive, setInputActive] = useState(false);

  /*METHODE GET =====================================================*/
  const [eleves, setEleves] = useState<any[]>([]);
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

  /*------------------- MODIFIER MDP ELEVE -------------------*/
  const postEleveChangeMdp = (eleveData: any) => {
    console.log("eleveData", eleveData);
    axios
      .post("http://localhost:5000/POST/eleveUpdatePassword", eleveData)
      .then((response) => {
        console.log("Réponse du serveur :", response.data);
      })
      .catch((error) => {
        console.error("Erreur lors de la requête vers le serveur :", error);
      });
  };

  interface EleveData {
    nom: string;
    prenom: string;
    mdp: string;
  }

  const sauvegarde = () => {
    if (profilSelectionne) {
      const confirmation = window.confirm(
        `Êtes-vous sûr de vouloir modifier le mot de passe de ${profilSelectionne.prenom} ${profilSelectionne.nom} ?`
      );

      if (confirmation) {
        const eleveData: EleveData = {
          nom: profilSelectionne.nom,
          prenom: profilSelectionne.prenom,
          mdp: mdpEleve,
        };

        postEleveChangeMdp(eleveData);
        setInputActive(false);
        setProfilSelectionne(null);
        // redirection(2);
      }
    }
  };

  const selectionnerProfil = (eleve: any) => {
    setInputActive(true);
    setProfilSelectionne(eleve);
  };

  return (
    <div>
      <div className="global_modif_mdp_eleve">
        <h1 className="titre_modif_mdp_eleve">Modifier le mot de passe d'un élève</h1>
        <div className="general_login">
          {eleves.map((eleve, index) => (
            <div className="login-container" key={index}>
              <img
                className="user-photo"
                src="https://imgs.search.brave.com/wZqgVgvAm4-m466eGodB8hhPfHnBTqDPTQ318uWeBk0/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cGhvdG9zLWdyYXR1/aXRlL3BldGl0LWdh/cmNvbi1zb3VyaWFu/dC1wb3J0cmFpdC12/aXNhZ2UtZ3Jvcy1w/bGFuXzUzODc2LTE1/MzI3Ni5qcGc_c2l6/ZT02MjYmZXh0PWpw/Zw"
                alt="Photo de l'utilisateur"
                onClick={() => selectionnerProfil(eleve)}
              />
              <div className="user-name">{`${eleve.prenom} ${eleve.nom}`}</div>

              {profilSelectionne === eleve && inputActive && (
                <>
                  <p>Nouveau Mot de passe :</p>
                  <input
                    type="password"
                    className="input_login"
                    onChange={handleInputModifMdp}
                  />
                  <button className="bouton_valider" onClick={sauvegarde}>
                    Valider
                  </button>
                </>
              )}
            </div>
          ))}

          {redirection}

        </div>
      </div>
    </div>
  );
}

export default ModifierMdpEleve;
