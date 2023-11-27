import React from "react";
import "./Interface.css";
function Interface({ redirection }: any) {
  const setRedirectionthree = () => {
    redirection(3);
  };

  return (
    <div>
      <h2 className="txt_espace_prof">Espace Professeur</h2>
      <div className="global_bouton_interface_educateur">
          <button
          className="bouton_interface_educateur" onClick={setRedirectionthree}>
          Création Fiche
          </button>
          <button
          className="bouton_interface_educateur" onClick={setRedirectionthree}>
          Consulter fiches/images
          </button>
          <button
          className="bouton_interface_educateur" onClick={setRedirectionthree}>
          Importer un pictogramme
          </button>
          <button
          className="bouton_interface_educateur" onClick={setRedirectionthree}>
          Brouillons fiches
          </button>
          <button
          className="bouton_interface_educateur" onClick={setRedirectionthree}>
          Fiches crées
          </button>
          <button
          className="bouton_interface_educateur" onClick={setRedirectionthree}>
          Modifier mots de passe
          </button>
          <button
          className="bouton_interface_educateur" onClick={setRedirectionthree}>
          Créer un profil
          </button>
          <button
          className="bouton_interface_educateur" onClick={setRedirectionthree}>
          Archiver un profil
          </button>

        </div>
    </div>
  );
}

export default Interface;
