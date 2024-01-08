import React from "react";
import "./PhotoEleve.css";

function PhotoEleve({ redirection }: any) {
  const setRedirectionfour = () => {
    redirection(4);
  };  


  return (
    <div className="global_bouton_interface_élève">
      <p className="txt_espace_élève">Mes photos</p>

      <div className="content_espace__take_photo_eleve">
        <button className="button_photo">Prendre une photo</button>
        <input  className="button_photo"type="file" id="fileInput" accept="image/*" />
      </div>
      <div className="content_all_photo_eleve">

      </div>
      <button onClick={setRedirectionfour} className="button_retour">Retour</button>
    </div>
  );
}

export default PhotoEleve;