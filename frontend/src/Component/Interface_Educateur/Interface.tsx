import React from "react";
import "./Interface.css";
function Interface({ redirection }: any) {
  return (
    <div>
        <button
          className="bouton_deconnection_educateur"
          onClick={() => redirection(1)}
        >Se déconnecter
        </button>
      <h2 className="txt_espace_prof">Espace Professeur</h2>

      <div className="global_bouton_interface_educateur">
        <button
          className="bouton_interface_educateur"
          onClick={() => redirection(3)}
        >
          Création Fiche
        </button>
        <button
          className="bouton_interface_educateur"
          onClick={() => redirection(3)}
        >
          Consulter fiches/images
        </button>
        <button
          className="bouton_interface_educateur"
          onClick={() => redirection(3)}
        >
          Importer un pictogramme
        </button>
        <button
          className="bouton_interface_educateur"
          onClick={() => redirection(3)}
        >
          Brouillons fiches
        </button>
        <button
          className="bouton_interface_educateur"
          onClick={() => redirection(6)}
        >
          Fiches crées
        </button>
        <button
          className="bouton_interface_educateur"
          onClick={() => redirection(3)}
        >
          Modifier mots de passe
        </button>
        <button
          className="bouton_interface_educateur"
          onClick={() => redirection(5)}
        >
          Créer un profil
        </button>
        <button
          className="bouton_interface_educateur"
          onClick={() => redirection(3)}
        >
          Archiver un profil
        </button>
      </div>
    </div>
  );
}

export default Interface;
