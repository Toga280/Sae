import React from "react";
import "./pageEspaceEleve.css";

function PageEspaceEleve({ redirection }: any) {
  const setRedirectionfour = () => {
    redirection(4);
  };
  const setRedirectionThriteen = () => {
    redirection(13);
  };
  return (
    <div className="global_bouton_interface_élève">
        <button
          className="bouton_deconnection_eleve"
          onClick={() => redirection(1)}
        >Se déconnecter
        </button>
        <p className="txt_espace_élève">Espace élève</p>

        <div className="content_espace_eleve">
            <button className="bouton_interface_eleve" type="button" id="maFiche" value="ma Fiche">Ma Fiche</button>
            <button className="bouton_interface_eleve" type="button" id="photo" value="Voir mes photos" onClick={setRedirectionThriteen} >Mes photos</button>
        </div>

    </div>
  );
}

export default PageEspaceEleve;