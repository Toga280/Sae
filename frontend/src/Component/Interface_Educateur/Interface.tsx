import React from "react";
import "./Interface.css";

function Interface({ redirection, role }: any) {
  
  const handleBoutonClic = () => {
    const confirmation = window.confirm("Êtes-vous sûr de vouloir vous déconnecter ?");
    if (confirmation) {
      redirection(1)
    }
  };
  console.log("role interface", role);

  return (
    <div>
      {role === "Admin" && (
        <div>
          <button className="bouton_deconnection_educateur" onClick={handleBoutonClic}>Se déconnecter</button>
          <h2 className="txt_espace_prof">Espace Administrateur</h2>
          <div className="global_bouton_interface_educateur">
            <button className="bouton_interface_educateur" onClick={() => redirection(3)}>Création Fiche</button>
            <button className="bouton_interface_educateur" onClick={() => redirection(14)} >Consulter fiches/images</button>
            <button className="bouton_interface_educateur" onClick={() => redirection(10)} > Importer un pictogramme</button>
            {/* <button className="bouton_interface_educateur" onClick={() => redirection(3)}>Brouillons fiches </button> */}
            <button className="bouton_interface_educateur" onClick={() => redirection(6)}>Fiches créées</button>
            <button className="bouton_interface_educateur" onClick={() => redirection(9)}>Modifier mots de passe</button>
            <button className="bouton_interface_educateur" onClick={() => redirection(5)}>Créer un profil</button>
            <button className="bouton_interface_educateur" onClick={() => redirection(8)}>Archiver un profil</button>
            <button className="bouton_interface_educateur" onClick={() => redirection(12)}>Profil Archivé(s)</button>
            <button className="bouton_interface_educateur" onClick={() => redirection(15)}>Modifier les rôles</button>
          </div>
        </div>
      )}
      
      {role === "Professeur" && (
        <div>
          <button className="bouton_deconnection_educateur" onClick={handleBoutonClic}>Se déconnecter</button>
          <h2 className="txt_espace_prof">Espace Éducateur intervenant</h2>
          <div className="global_bouton_interface_educateur">
            <button className="bouton_interface_educateur" onClick={() => redirection(3)} >Consulter fiches/images</button>
          </div>
        </div>
      )}

      {role === "ProfesseurAdmin" && (
        <div>
          <button className="bouton_deconnection_educateur" onClick={handleBoutonClic}>Se déconnecter</button>
          <h2 className="txt_espace_prof">Espace Éducateur</h2>
          <div className="global_bouton_interface_educateur">
            <button className="bouton_interface_educateur" onClick={() => redirection(3)}>Création Fiche</button>
            <button className="bouton_interface_educateur" onClick={() => redirection(14)} >Consulter fiches/images</button>
            <button className="bouton_interface_educateur" onClick={() => redirection(10)} > Importer un pictogramme</button>
            {/* <button className="bouton_interface_educateur" onClick={() => redirection(3)}>Brouillons fiches </button> */}
            <button className="bouton_interface_educateur" onClick={() => redirection(6)}>Fiches crées</button>
            <button className="bouton_interface_educateur" onClick={() => redirection(9)}>Modifier mots de passe</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Interface;
