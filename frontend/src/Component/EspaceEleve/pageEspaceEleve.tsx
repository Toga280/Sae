import React from "react";
import ".././EspaceEleve/pageEspaceEleve.css";

function PageEspaceEleve({ redirection }: any) {
  const setRedirectionfour = () => {
    redirection(4);
  };
  return (
    <div className="global_bouton_interface_élève">

        <p className="txt_espace_élève">Espace élève</p>

        <div className="content_espace_eleve">
            <input className="bouton_interface_eleve" type="button" id="maFiche" value="ma Fiche" />
            <input className="bouton_interface_eleve" type="button" id="photo" value="Voir mes photos" />
        </div>

    </div>
  );
}

export default PageEspaceEleve;