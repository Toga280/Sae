import React, { useEffect, useState } from 'react'
import './SuiviEleve.css'
import axios from 'axios';
function SuiviEleve({ redirection }: any) {
    const redirectionTwo = () => {
        redirection(2);
    };
    const [eleves, setEleves] = useState<any[]>([]); // État pour stocker la liste des étudiants
    const [nomEleveActuelle, setNomEleveActuelle] = useState(String); // État pour stocker le nom de famille de l'étudiant actuel
    const [prenomEleveActuelle, setPrenomEleveActuelle] = useState(String); // État pour stocker le prénom de l'étudiant actuel
    const [loading, setLoading] = useState(false); // État pour suivre si les images sont en cours de chargement
    const [studentImages, setStudentImages] = useState<string[]>([]); // État pour stocker les images des étudiants récupérées
  
    // Fonction pour récupérer les images des étudiants
    const getStudentImages = async () => {
      try {
        setLoading(true);
        const responses = await Promise.all(
          eleves.map(async (eleve: any) => {
            const imageName = `${eleve.nom}${eleve.prenom}.webp`;
            console.log("Recherche de l'image :", imageName);
            try {
              const imagePath = `http://localhost:5000/GET/piceleve?name=${encodeURIComponent(
                imageName
              )}`;
              const response = await axios.get(imagePath, {
                responseType: "arraybuffer",
              });
  
              const imageData = `data:image/webp;base64,${btoa(
                new Uint8Array(response.data).reduce(
                  (data, byte) => data + String.fromCharCode(byte),
                  ""
                )
              )}`;
  
              return imageData;
            } catch (error) {
              console.error(
                `Erreur lors de la récupération de l'image pour ${eleve.prenom} ${eleve.nom} :`,
                error
              );
              return ""; // Vous pouvez fournir une image par défaut ou gérer l'erreur en conséquence
            }
          })
        );
  
        setStudentImages(responses.filter((image) => !!image)); // Filtrer les réponses vides
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des images des étudiants :",
          error
        );
        setStudentImages([]); // Définir un tableau vide en cas d'erreur
      } finally {
        setLoading(false);
      }
    };
  
    // Récupérer la liste des étudiants lors du montage du composant
    useEffect(() => {
      const getEleve = async () => {
        try {
          const response = await axios.get(`http://localhost:5000/GET/allEleve`);
          setEleves(response.data);
        } catch (error) {
          console.error("Erreur lors de la récupération des étudiants :", error);
        }
      };
  
      getEleve();
    }, []);
  
    // Récupérer les images des étudiants lorsque la liste des étudiants change
    useEffect(() => {
      const loadStudentImages = async () => {
        await getStudentImages(); // Attendre que les images soient récupérées
        // Maintenant que vous avez les images, vous pouvez en faire quelque chose si nécessaire
      };
  
      if (eleves.length > 0) {
        loadStudentImages();
      }
    }, [eleves]);
    return (
        <div>
            <div className="global_suivi_eleves">
            <h1 className='suivi_eleves'>Suivi des élèves</h1>

                <div className="general_logine">
                    {eleves.map((eleve: any, index: number) => (
                        <div className="login-containers" key={index}>
                            {loading ? (
                                <div className="loading-spinner">Chargement...</div>
                            ) : studentImages[index] ? (
                                <img
                                    className="user-photos"
                                    src={studentImages[index]}
                                    alt={`Portrait de ${eleve.prenom} ${eleve.nom}`}
                                />
                            ) : (
                                <div className="error-messages">Image non présente</div>
                            )}
                            <div className="user-names">{`${eleve.prenom} ${eleve.nom}`}</div>
                            <button className="login-buttons">Accès au suivis</button>
                        </div>
                    ))}
                </div>
            </div>
            <button className="bouton_retour_suivi_eleves" onClick={redirectionTwo}>
                    Retour
                </button>
        </div>
    );
}

export default SuiviEleve;
