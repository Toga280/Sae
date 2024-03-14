import React, { useEffect, useState } from "react";
import axios from "axios";
import CreationProfilProf from "./CreationProfilProf";
import CreationProfilEleves from "./CreationProfilEleves";
import "./CreationProfil.css";
const token = localStorage.getItem('token');

function CreationProfil({ redirection, setSaveName, identifiant }: any) {
  const setRedirectionTwo = () => {
    redirection(2);
  };

  const [nomEleve, setNomEleve] = useState(String);
  const [prenomEleve, setPrenomEleve] = useState(String);
  const [imageEleve, setImageEleve] = useState<File | null>(null);
  const [mdpEleve, setMdpEleve] = useState(String);
  const [fondEcranUrl, setFondEcranUrl] = useState<string | null>(null)

  const handleInputChangeNom = (event: any) => {
    setNomEleve(event.target.value);
  };
  const handleInputChangePrenom = (event: any) => {
    setPrenomEleve(event.target.value);
  };
  const handleInputChangeMdp = (event: any) => {
    setMdpEleve(event.target.value);
  };
  const handleInputChangeImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setImageEleve(event.target.files[0]);
    }
  };
  

  const sauvegarde = () => {
    const eleveData = {
      nom: nomEleve,
      prenom: prenomEleve,
      image: nomEleve+prenomEleve,
      mdp: mdpEleve,
    };
    postEleve(eleveData);
    postphotoeleve(imageEleve,nomEleve,prenomEleve);
    redirection(2);
  };

  /*METHODE POST =====================================================*/
  
  const postEleve = (eleveData: any) => {
    axios
      .post("http://localhost:5000/POST/eleves",{
        params: {
          eleveData: eleveData,
          token: token,
        },
      })
      .then((response) => {
        console.log("Réponse du serveur :", response.data);
      })
      .catch((error) => {
        console.error("Erreur lors de la requête vers le serveur :", error);
      });
  };

  const postphotoeleve = async (imageEleve: any , nomEleve: any , prenomEleve: any) => {
    const formData = new FormData();
        formData.append('file', imageEleve);
    axios
    .post("http://localhost:5000/POST/uploadpictoEleve", formData, {
      params: {
        name: nomEleve+prenomEleve,
        token: token,
      },
    })
    .then((response) => {
      console.log("Réponse du serveur :", response.data);
    })
    .catch((error) => {
      console.error("Erreur lors de la requête vers le serveur :", error);
    });
  };
  
  useEffect(() => {
    // Appeler la requête pour récupérer l'image du fond d'écran
    axios
      .get('http://localhost:5000/GET/fondecran', {
        params: {
          name: identifiant,
        },
        responseType: 'arraybuffer',
      })
      .then((response) => {
        const base64 = btoa(
          new Uint8Array(response.data).reduce(
            (data, byte) => data + String.fromCharCode(byte),
            '',
          ),
        )
        const url = `data:${response.headers[
          'content-type'
        ].toLowerCase()};base64,${base64}`
        setFondEcranUrl(url)
      })
      .catch((error) => console.error(error))
  }, [])

  return (
    <>
    {fondEcranUrl && (
      <style>
        {`
          body {
            background-image: url(${fondEcranUrl});
            background-size: cover;
            background-repeat: no-repeat;
          }
        `}
      </style>
    )}
    <div>
      <CreationProfilEleves
        setRedirectionTwo={setRedirectionTwo}
        handleInputChangeNom={handleInputChangeNom}
        handleInputChangePrenom={handleInputChangePrenom}
        handleInputChangeMdp={handleInputChangeMdp}
        handleInputChangeImage={handleInputChangeImage}
        sauvegarde={sauvegarde}
      />
      <CreationProfilProf setRedirectionTwo={setRedirectionTwo} />
      <button
        className="bouton_retour_creation_profil_edu"
        onClick={setRedirectionTwo}
      >
        Retour
      </button>
    </div>
    </>
  );
}

export default CreationProfil;
