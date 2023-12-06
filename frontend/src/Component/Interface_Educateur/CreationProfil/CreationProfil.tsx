import React, { useState } from "react";
import axios from "axios";
import CreationProfilProf from "./CreationProfilProf";
import CreationProfilEleves from "./CreationProfilEleves";
import "./CreationProfil.css";

function CreationProfil({ redirection, setSaveName }: any) {
  const setRedirectionTwo = () => {
    redirection(2);
  };

  const [nomEleve, setNomEleve] = useState("");
  const [prenomEleve, setPrenomEleve] = useState("");
  const [imageEleve, setImageEleve] = useState("");
  const [mdpEleve, setMdpEleve] = useState("");

  const handleInputChangeNom = (event: any) => {
    setNomEleve(event.target.value);
  };
  const handleInputChangePrenom = (event: any) => {
    setPrenomEleve(event.target.value);
  };
  const handleInputChangeMdp = (event: any) => {
    setMdpEleve(event.target.value);
  };
  const handleInputChangeImage = (event: any) => {
    setImageEleve(event.target.value);
  };

  const sauvegarde = () => {
    const eleveData = {
      nom: nomEleve,
      prenom: prenomEleve,
      image: imageEleve,
      mdp: mdpEleve,
    };
    postEleve(eleveData);
    redirection(2);
  };

  const postEleve = (eleveData: any) => {
    axios
      .post("http://localhost:5000/POST/eleves", eleveData)
      .then((response) => {
        console.log("Réponse du serveur :", response.data);
      })
      .catch((error) => {
        console.error("Erreur lors de la requête vers le serveur :", error);
      });
  };

  return (
    <div>
      <CreationProfilEleves
        setRedirectionTwo={setRedirectionTwo}
        handleInputChangeNom={handleInputChangeNom}
        handleInputChangePrenom={handleInputChangePrenom}
        handleInputChangeMdp={handleInputChangeMdp}
        handleInputChangeImage={handleInputChangeImage}
        sauvegarde={sauvegarde}
      />
      <CreationProfilProf />
    </div>
  );
}

export default CreationProfil;
