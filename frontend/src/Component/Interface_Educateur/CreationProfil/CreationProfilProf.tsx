import React, { useState } from "react";
import "./CreationProfil.css";
import axios from "axios";
function CreationProfilProf({ setRedirectionTwo }: any) {
  const [nom, setNom] = useState(String);
  const [prenom, setPrenom] = useState(String);
  const [mdp, setMdp] = useState(String);
  const [id, setId] = useState(String);
  const [role, setRole] = useState(String);


  const configCreateProfil = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const createProfil = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const data = JSON.stringify({ nom, prenom, mdp, id ,role});
    axios
      .post("http://localhost:5000/POST/admin", data, configCreateProfil)
      .then((response) => {
        console.log("Réponse du serveur :", response.data);
        setRedirectionTwo();
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

  const handleInputChangeRole = (event: any) => {
    setRole(event.target.value);
  }

  return (
    <div className="global_creation_profil_prof">
      <p className="txt_creation_espace_élève">Création d'un profil professeur</p>

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
          <p> Prénom </p>
          <input
            type="text"
            className="TextInput"
            onChange={handleInputChangePrenom}
          />
        </div>

        <div className="form_prenom_creation_profil">
          <p> Identifiant de connexion </p>
          <input
            type="text"
            placeholder="Edupont"
            className="TextInput"
            onChange={handleInputChangeId}
          />
        </div>

        <div className="form_prenom_creation_profil">
          <p> Mot de passe </p>
          <input
            type="text"
            placeholder="azerty1234"
            className="TextInput"
            onChange={handleInputChangeMdp}
          />
        </div>
        <div className="select_creation_profil_prof">
          <label htmlFor="choix" className="select_role">Sélectionnez un rôle :</label>
          <select id="" name="choix" onChange={handleInputChangeRole}>
              <option value=""selected disabled>Sélectionnez un rôle</option>
              <option value="Professeur">Éducateur technique simple</option>
              <option value="ProfesseurAdmin">Éducateur technique administrateur</option>
              <option value="Admin">Super administrateur</option>
              <option value="Cip">Conseillère insertion professionnelle</option>
          </select>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

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
