import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ModifierMdp.css";
const token = localStorage.getItem('token');

function ModifierMdpProf({ redirection }: any) {
  /* GET PROF=====================================================*/
  const [admin, setAdmin] = useState<any[]>([]);
  useEffect(() => {
    const getProf = () => {
      axios
        .get(`http://localhost:5000/GET/allProf`)
        .then((response) => {
          setAdmin(response.data);
        })
        .catch((error) => {
          console.error("erreur : ", error);
        });
    };

    getProf();
  }, []);
  /*------------------- MODIFIER MDP PROF -------------------*/
  const [mdpProf, ModifMdpProf] = useState("");
  const handleInputModifMdp = (event: any) => {
    ModifMdpProf(event.target.value);
  };
  const postProfChangeMdp = (ProfData: any) => {
    axios
      .post("http://localhost:5000/POST/profUpdatePassword",{
        params: {
          ProfData: ProfData,
          token: token,
        },
      })
      .then((response) => {
        console.log("Réponse du serveur :", response.data);
      })
      .catch((error) => {
        console.error("Erreur lors de la requête vers le serveur :", error);
      });
  };
  /*SAUVEGARDE=====================================================*/
  const [profilSelectionne, setProfilSelectionne] = useState<any>(null);
  const [inputActive, setInputActive] = useState(false);

  interface Admin {
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
        const ProfData: Admin = {
          nom: profilSelectionne.nom,
          prenom: profilSelectionne.prenom,
          mdp: mdpProf,
        };

        postProfChangeMdp(ProfData);
        setInputActive(false);
        setProfilSelectionne(null);
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
        <h1 className="titre_modif_mdp_eleve">
          Modifier le mot de passe d'un membre de l'équipe
        </h1>
        <div className="general_login">
          {admin.map((admin, index) => (
            <div
              className="login-container"
              key={index}
              onClick={() => selectionnerProfil(admin)}
            >
              <div className="user-name">{`${admin.prenom} ${admin.nom}`}</div>

              {profilSelectionne === admin && inputActive && (
                <>
                  <div className="container">
                  <p>Nouveau Mot de passe :</p>
                  <input
                    type="password"
                    className="input_login"
                    onChange={handleInputModifMdp}
                  />
                  <button className="bouton_valider" onClick={sauvegarde}>
                    Valider
                  </button>
                  </div>
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

export default ModifierMdpProf;
