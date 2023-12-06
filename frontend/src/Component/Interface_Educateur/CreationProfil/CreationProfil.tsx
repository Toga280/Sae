import React, { useState } from "react";
import axios from "axios";
import CreationProfilEleves from "./CreationProfilEleves";
import "./CreationProfil.css";
import { response } from "express";

function CreationProfil({ redirection, setSaveName }: any) {
  const setRedirectionTwo = () => {
    redirection(2);
  };

  const [nomEleve, setNomEleve] = useState(String);
  const [prenomEleve, setPrenomEleve] = useState(String);
  const [imageEleve, setImageEleve] = useState(String);
  const [mdpEleve, setMdpEleve] = useState(Number);

  const handleInputChangeNom = (event:any) => {
    setNomEleve(event.target.value);
  };
  const handleInputChangePrenom = (event:any) => {
    setPrenomEleve(event.target.value);
  };
  const handleInputChangeMdp = (event:any) => {
    setMdpEleve(event.target.value);
  };
  const handleInputChangeImage = (event:any) => {
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


/*METHODE POST =====================================================*/
  const postEleve = (eleveData: any) => {
    console.log(eleveData)
    axios
      .post("http://localhost:5000/POST/eleves", eleveData)
      .then((response) => {
        console.log("Réponse du serveur :", response.data);
      })
      .catch((error) => {
        console.error("Erreur lors de la requête vers le serveur :", error);
      });
  };
/*METHODE GET =====================================================*/
const getEleve = () => {
    axios
    .get(`http://localhost:5000/GET/allEleve`)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.error("erreur : ", error);
    })
};



  return (
    <CreationProfilEleves
      setRedirectionTwo={setRedirectionTwo}
      handleInputChangeNom={handleInputChangeNom}
      handleInputChangePrenom={handleInputChangePrenom}
      handleInputChangeMdp={handleInputChangeMdp}
      handleInputChangeImage={handleInputChangeImage}
      sauvegarde={sauvegarde}
    />
  );
}

export default CreationProfil;
