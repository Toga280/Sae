import React, { useState } from "react";
import "./CreationProfil.css";
import "./CreationProfilEleves";

interface CreationProfilElevesProps {
  setRedirectionTwo: () => void;
  handleInputChangeNom: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleInputChangePrenom: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleInputChangeMdp: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleInputChangeImage: (event: React.ChangeEvent<HTMLInputElement>) => void;
  sauvegarde: () => void;
}

function CreationProfilEleves({
  setRedirectionTwo,
  handleInputChangeNom,
  handleInputChangePrenom,
  handleInputChangeMdp,
  handleInputChangeImage,
  sauvegarde
}: CreationProfilElevesProps) {
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);

  const handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    setSelectedFiles(files);
    handleInputChangeImage(event);
  };

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
          <p> Prénom </p>
          <input
            type="text"
            className="TextInput"
            name="prenomEleve"
            onChange={handleInputChangePrenom}
          />
        </div>
        <div className="form_prenom_creation_profil">
          <p> Mot de passe </p>
          <input
            type="text"
            className="TextInput"
            name="prenomEleve"
            onChange={handleInputChangeMdp}
          />
        </div>

        <div className="form_image_creation_profil">
          <p> Photo de profil </p>
          <input
            type="file"
            className="uploadpp"
            id="fileInput"
            name="imageEleve"
            accept="image/*"
            multiple
            onChange={handleFileInputChange}
          />
          <label htmlFor="fileInput" className={`custom-file-upload ${selectedFiles && selectedFiles.length > 0 ? 'selected' : ''}`}>
            {selectedFiles && selectedFiles.length > 0 ? `Fichiers sélectionnés: ${selectedFiles.length}` : 'Choisir un fichier'}
          </label>
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
