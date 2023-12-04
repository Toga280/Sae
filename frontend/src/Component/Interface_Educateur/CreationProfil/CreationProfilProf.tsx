import React from "react";
import "./CreationProfil.css";
function CreationProfilProf({ redirection }: any) {
  const setRedirectionTwo = () => {
    redirection(2);
  };

  return (
    <div>
      <p className="txt_espace_élève">Création de profil</p>

      <form
        action="#"
        method="post"
        encType="multipart/form-data"
        className="form_creation_profil_eleve"
      >
        <div className="form_nom_creation_profil">
          <p> Nom </p>
          <input type="text" className="TextInput" />
        </div>
        <div className="form_prenom_creation_profil">
          <p> Prenom </p>
          <input type="text" className="TextInput" />
        </div>
        <div></div>
      </form>
      <button
        className="bouton_retour_creation_profil_edu"
        onClick={setRedirectionTwo}
      >
        Retour
      </button>
      <button className="bouton_sauvegarder_creation_profil_edu">
        "" Sauvegarder
      </button>
    </div>
  );
}

export default CreationProfilProf;
