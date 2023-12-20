import React from "react";
import "./CreationProfil.css";
import "./CreationProfilEleves";

interface CreationProfilElevesProps {
  setRedirectionTwo: () => void;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  sauvegarde: () => void;
}

function CreationProfilEleves({
  setRedirectionTwo,
  handleInputChangeNom,
  handleInputChangePrenom,
  handleInputChangeMdp,
  handleInputChangeImage,
  sauvegarde
  
}: any) {
  return (
    <div className="global_creation_profil_eleve">
      <p className="txt_creation_espace_élève">Création de profil Eleves</p>

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
            name="nomEleve"
            onChange={handleInputChangeNom}
          />
        </div>

        <div className="form_prenom_creation_profil">
          <p> Prenom </p>
          <input
            type="text"
            className="TextInput"
            name="prenomEleve"
            onChange={handleInputChangePrenom}
          />
        </div>
        <div className="form_prenom_creation_profil">
          <p> Mdp </p>
          <input
            type="text"
            className="TextInput"
            name="prenomEleve"
            onChange={handleInputChangeMdp}
          />
        </div>
        <div className="form_prenom_creation_profil">
          <p> IMAGE TEST </p>
          <input
            type="text"
            className="TextInput"
            name="prenomEleve"
            onChange={handleInputChangeImage}
          />
        </div>
        
        <button
        className="bouton_sauvegarder_creation_profil_edu"
        onClick={sauvegarde}
      >
        Sauvegarder
      </button>
      </form>

    </div>
  );
}

export default CreationProfilEleves;





/* <div className="form_image_creation_profil">
          <p> Image </p>
          <input
            type="file"
            id="fileInput"
            name="imageEleve"
            accept="image/*"
            multiple
            onChange={handleInputChangeImage}
          />
          <div id="fileList"></div>
        </div> */