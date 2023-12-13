import React, { useState } from "react";
import "./CreationProfil.css";
import axios from "axios";
function CreationProfilProf({ redirection }: any) {
  const [nom, setNom] = useState(String);
  const [prenom, setPrenom] = useState(String);
  const [mdp, setMdp] = useState(String);
  const [id, setId] = useState(String);

  const setRedirectionTwo = () => {
    redirection(2);
  };

  const configCreateProfil = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const createProfil = () => {
    const data = JSON.stringify({ nom, prenom, mdp, id });
    axios
      .post("http://localhost:5000/POST/admin", data, configCreateProfil)
      .then((response) => {
        console.log("Réponse du serveur :", response.data);
      })
      .catch((error) => {
        console.error("Erreur lors de la requête vers le serveur :", error);
      });
  };

  const handleInputChangeNom = (event: any) => {
    setNom(event.target.value);
  };

  const handleInputChangePrenom = (event: any) => {
    setPrenom(event.target.value);
  };

  const handleInputChangeMdp = (event: any) => {
    setMdp(event.target.value);
  };

  const handleInputChangeId = (event: any) => {
    setId(event.target.value);
  };

  return (
    <div className="global_creation_profil_prof">
      <p className="txt_creation_espace_élève">Création de profil Professeur</p>

      <form
        action="#"
        method="post"
        encType="multipart/form-data"
        className="form_creation_profil_eleve"
      >
        <div className="form_nom_creation_profil">
          <p> Nom </p>
          <input
            type="text"
            className="TextInput"
            onChange={handleInputChangeNom}
          />
        </div>

        <div className="form_prenom_creation_profil">
          <p> Prenom </p>
          <input
            type="text"
            className="TextInput"
            onChange={handleInputChangePrenom}
          />
        </div>

        <div className="form_prenom_creation_profil">
          <p> id </p>
          <input
            type="text"
            className="TextInput"
            onChange={handleInputChangeId}
          />
        </div>

        <div className="form_prenom_creation_profil">
          <p> mdp </p>
          <input
            type="text"
            className="TextInput"
            onChange={handleInputChangeMdp}
          />
        </div>
        <button
        className="bouton_sauvegarder_creation_profil_edu"
        onClick={createProfil}
      >
        Sauvegarder
      </button>
      </form>
    </div>
  );
}

export default CreationProfilProf;
