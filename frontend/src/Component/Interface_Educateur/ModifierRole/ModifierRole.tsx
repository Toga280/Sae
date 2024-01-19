import axios from "axios";
import React, { useEffect, useState } from "react";
import "./ModifierRole.css";

interface Admin {
  nom: string;
  prenom: string;
  mdp: string;
  role: string;
}

function ModifierRole({ redirection, identifiant }: any) {
  const [admin, setAdmin] = useState<Admin[]>([]);
  const [profilSelectionne, setProfilSelectionne] = useState<Admin | null>(null);
  const [inputActive, setInputActive] = useState(false);
  const [mdpProf, setMdpProf] = useState("");
  const [fondEcranUrl, setFondEcranUrl] = useState<string | null>(null)
  

  const redirectionTwo = () => {
    redirection(2);
};

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

  const handleInputChangeRole = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setProfilSelectionne((prev) => {
      if (prev) {
        return { ...prev, role: event.target.value };
      }
      return null;
    });
  };

  const postProfChangeRole = (ProfData: Admin) => {
    console.log("ProfData", ProfData);
    axios
      .post("http://localhost:5000/POST/ProfUpdateRole", ProfData)
      .then((response) => {
        console.log("Réponse du serveur :", response.data);
      })
      .catch((error) => {
        console.error("Erreur lors de la requête vers le serveur :", error);
      });
  };

  const sauvegarde = () => {
    if (profilSelectionne) {
      const confirmation = window.confirm(
        `Êtes-vous sûr de vouloir modifier le rôle ${profilSelectionne.prenom} ${profilSelectionne.nom} ?`
      );

      if (confirmation) {
        const ProfData: Admin = {
          nom: profilSelectionne.nom,
          prenom: profilSelectionne.prenom,
          mdp: mdpProf,
          role: profilSelectionne.role,
        };

        postProfChangeRole(ProfData);
        setInputActive(false);
        setProfilSelectionne(null);
      }
    }
  };  

  const selectionnerProfil = (eleve: Admin) => {
    setInputActive(true);
    setProfilSelectionne(eleve);
  };

  useEffect(() => {
    // Appeler la requête pour récupérer l'image du fond d'écran
    axios
      .get('http://localhost:5000/GET/fondecran', {
        params: {
          name: identifiant,
        },
        responseType: 'arraybuffer',
      })
      .then((response) => {
        const base64 = btoa(
          new Uint8Array(response.data).reduce(
            (data, byte) => data + String.fromCharCode(byte),
            '',
          ),
        )
        const url = `data:${response.headers[
          'content-type'
        ].toLowerCase()};base64,${base64}`
        setFondEcranUrl(url)
      })
      .catch((error) => console.error(error))
  }, [])

  return (
    <>
    {fondEcranUrl && (
      <style>
        {`
          body {
            background-image: url(${fondEcranUrl});
            background-size: cover;
            background-repeat: no-repeat;
          }
        `}
      </style>
    )}
      <div>
        <div className="global_creation_profil_prof">
          <p className="txt_creation_espace_élève">Modifier le rôle d'un membre de l'équipe</p>
          <div className="general_login">
            {admin.map((admin, index) => (
              <div
                className="login-container"
                key={index}
                onClick={() => selectionnerProfil(admin)}
              >
                <div className="user-name">{`${admin.prenom} ${admin.nom}`}</div>
              </div>
            ))}
      
            {profilSelectionne && inputActive && (
              <div className="container">
                <label htmlFor="choix" className="select_role">
                  Modifier le rôle de : {profilSelectionne.prenom} {profilSelectionne.nom}
                </label>
                <select
                  id="choix"
                  name="choix"
                  value={profilSelectionne.role}
                  onChange={handleInputChangeRole}
                  onFocus={(e) => e.preventDefault()}
                >
                  <option value="" selected disabled>Sélectionnez un rôle</option>
                  <option value="Professeur">Éducateur intervenant</option>
                  <option value="ProfesseurAdmin">Éducateur technique</option>
                  <option value="Admin">Super administrateur</option>
                  <option value="Cip">Conseillère d'insertion professionnelle</option>
                </select>
                <button className="bouton_valider" onClick={sauvegarde}>
                  Valider
                </button>
              </div>
            )}
      
            {redirection}
          </div>
        </div>
          <button className="bouton_retour_modifier_role" onClick={redirectionTwo}>
              Retour
          </button>
      </div>
    </>
      );
}

export default ModifierRole;
