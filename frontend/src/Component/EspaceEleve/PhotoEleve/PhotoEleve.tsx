import React from "react";


function PhotoEleve({ redirection }: any) {
    const setRedirectionfour = () => {
        redirection(4);
    };  

  return (
    <div className="global_bouton_interface_élève">
        <p className="txt_espace_élève">Mes photo</p>

        <div className="content_espace_eleve">
           <p>OK</p>
        </div>

        <button onClick={setRedirectionfour}>Retour</button>
    </div>
  );
}

export default PhotoEleve;