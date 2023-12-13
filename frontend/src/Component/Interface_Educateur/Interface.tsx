import React from "react";
import "./Interface.css";
function Interface({ redirection }: any) {
  
  const handleBoutonClic = () => {
    const confirmation = window.confirm("Êtes-vous sûr de vouloir vous déconnecter ?");
    if (confirmation) {
      console.log("Action effectuée !");
      redirection(1)
    } else {
      console.log("Action annulée.");
    }
  };

  return (
    <div>
      <button
        className="bouton_deconnection_educateur"
        onClick={handleBoutonClic}
      >
        Se déconnecter
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
          //onClick={() => redirection(3)}
        >
          Consulter fiches/images
        </button>
        <button
          className="bouton_interface_educateur"
          onClick={() => redirection(10)}
        >
          Importer un pictogramme
        </button>
        <button
          className="bouton_interface_educateur"
          //onClick={() => redirection(3)}
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
          onClick={() => redirection(9)}
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
          onClick={() => redirection(8)}
        >
          Archiver un profil
        </button>
        <button
          className="bouton_interface_educateur"
          onClick={() => redirection(12)}
        >
          Profil Archiver
        </button>
      </div>
    </div>
  );
}

export default Interface;
