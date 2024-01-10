import React, { useState } from "react";
import axios from "axios";
import "./PhotoEleve.css";

function PhotoEleve({ redirection, eleve }: any) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const setRedirectionfour = () => {
    redirection(4);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleFileUpload = async () => {
    try {
      const name = eleve;
      const formData = new FormData();
      formData.append("file", selectedFile as Blob);

      const response = await axios.post(`/POST/uploadImageEleve?name=${name}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log(response.data);
    } catch (error) {
      console.error("Erreur lors de l'envoi du fichier:", error);
    }
  };

  return (
    <div className="global_bouton_interface_élève">
      <p className="txt_espace_élève">Mes photos</p>

      <div className="content_espace__take_photo_eleve">
        <input
          type="file"
          id="fileInput"
          accept="image/*"
          onChange={handleFileChange}
        />
        <button onClick={handleFileUpload} className="button_photo">
          Télécharger une photo
        </button>
      </div>

      <div className="content_all_photo_eleve">{/* Afficher les photos ici */}</div>
      <button onClick={setRedirectionfour} className="button_retour">
        Retour
      </button>
    </div>
  );
}

export default PhotoEleve;
