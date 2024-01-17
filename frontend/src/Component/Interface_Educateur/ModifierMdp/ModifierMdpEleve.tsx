import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ModifierMdp.css";
import "./ModifierMdp";

function ModifierMdpEleve({ redirection }: any) {
  const [mdpEleve, ModifMdpEleve] = useState("");
  const [loading, setLoading] = useState(false);
  const [studentImages, setStudentImages] = useState<string[]>([]);
  const [eleves, setEleves] = useState<any[]>([]);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const handleInputModifMdp = (event: any) => {
    ModifMdpEleve(event.target.value);
  };
  

  const [profilSelectionne, setProfilSelectionne] = useState<any>(null);
  const [inputActive, setInputActive] = useState(false);
  

  /*METHODE GET =====================================================*/
  
  useEffect(() => {
    const getEleve = () => {
      axios
        .get(`http://localhost:5000/GET/allEleve`)
        .then((response) => {
          setEleves(response.data);
        })
        .catch((error) => {
          console.error("erreur : ", error);
        });
    };
  
    getEleve();
  }, []);
  
  useEffect(() => {
    getStudentImages();
  }, [eleves]);
  

  /*------------------- MODIFIER MDP ELEVE -------------------*/
  const postEleveChangeMdp = (eleveData: any) => {
    axios
      .post("http://localhost:5000/POST/eleveUpdatePassword", eleveData)
      .then((response) => {
        console.log("Réponse du serveur :", response.data);
      })
      .catch((error) => {
        console.error("Erreur lors de la requête vers le serveur :", error);
      });
  };

  interface EleveData {
    nom: string;
    prenom: string;
    mdp: string;
  }

  const sauvegarde = () => {
    if (profilSelectionne) {
      const confirmation = window.confirm(
        `Êtes-vous sûr de vouloir modifier le mot de passe de ${profilSelectionne.prenom} ${profilSelectionne.nom} ?`
      );

      if (confirmation) {
        const eleveData: EleveData = {
          nom: profilSelectionne.nom,
          prenom: profilSelectionne.prenom,
          mdp: mdpEleve,
        };

        postEleveChangeMdp(eleveData);
        postphotoeleve(selectedFile,profilSelectionne.nom,profilSelectionne.prenom);
        setInputActive(false);
        setProfilSelectionne(null);
        // redirection(2);
      }
    }
  };

  const selectionnerProfil = (eleve: any) => {
    setInputActive(true);
    setProfilSelectionne(eleve);
  };

  const getStudentImages = async () => {
    try {
      setLoading(true);
      const responses = await Promise.all(
        eleves.map(async (eleve: any) => {
          const imageName = `${eleve.nom}${eleve.prenom}.webp`;
          console.log('Recherche de l\'image :', imageName);
          try {
            const imagePath = `http://localhost:5000/GET/piceleve?name=${encodeURIComponent(imageName)}`;
            const response = await axios.get(imagePath, {
              responseType: 'arraybuffer',
            });
  
            const imageData = `data:image/webp;base64,${btoa(
              new Uint8Array(response.data).reduce((data, byte) => data + String.fromCharCode(byte), '')
            )}`;
  
            return imageData;
          } catch (error) {
            console.error(`Erreur lors de la récupération de l'image pour ${eleve.prenom} ${eleve.nom} :`, error);
            return '';
          }
        })
      );
  
      setStudentImages(responses.filter(image => !!image));
    } catch (error) {
      console.error('Erreur lors de la récupération des images des étudiants :', error);
      setStudentImages([]);
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const postphotoeleve = async (imageEleve: any , nomEleve: any , prenomEleve: any) => {
    const formData = new FormData();
        formData.append('file', imageEleve);
    axios
    .post("http://localhost:5000/POST/uploadpictoEleve", formData, {
      params: {
        name: nomEleve+prenomEleve,
      },
    })
    .then((response) => {
      console.log("Réponse du serveur :", response.data);
    })
    .catch((error) => {
      console.error("Erreur lors de la requête vers le serveur :", error);
    });
  };
  

  return (
    <div>
      <div className="global_modif_mdp_eleve">
        <h1 className="titre_modif_mdp_eleve">
          Modifier le mot de passe d'un élève
        </h1>
        <div className="general_login">
        {eleves.map((eleve, index) => (
  <div className="login-container" key={index}>
    {loading ? (
      <div className="loading-spinner">Chargement...</div>
    ) : (
      studentImages[index] ? (
        <>
          <img
            className="user-photo"
            src={studentImages[index]}
            alt={`Portrait de ${eleve.prenom} ${eleve.nom}`}
            onClick={() => selectionnerProfil(eleve)}
          />
          <div className="user-name">{`${eleve.prenom} ${eleve.nom}`}</div>
          {profilSelectionne === eleve && inputActive && (
            <>
              <div className="container">
                <p>Nouveau Mot de passe :</p>
                <input
                  type="password"
                  className="input_login"
                  onChange={handleInputModifMdp}
                />
                <p>Nouvelle photo de profil :</p>
                <input
                  type="file"
                  id="fileInput"
                  accept="image/*"
                  onChange={handleFileChange}
                />
                <button className="bouton_valider" onClick={sauvegarde}>
                  Valider
                </button>
              </div>
            </>
          )}
        </>
      ) : (
        <div className="error-message">Image non présente</div>
      )
    )}
  </div>
))}


          {redirection}
        </div>
      </div>
    </div>
  );
}

export default ModifierMdpEleve;
