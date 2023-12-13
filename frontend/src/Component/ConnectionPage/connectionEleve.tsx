import React, { useEffect, useState } from "react";
import axios from "axios";
import ConnectionEleveShema from "./ConnectionEleveShema";

function ConnectionEleve({ redirection }: any) {
  const [c, setC] = useState(Boolean);
  const [eleves, setEleves] = useState<any[]>([]);
  const [nomEleveActuelle, setNomEleveActuelle] = useState(String);
  const [prenomEleveActuelle, setPrenomEleveActuelle] = useState(String);
  const [loading, setLoading] = useState(false);
  const [studentImages, setStudentImages] = useState<string[]>([]);

  const connection = (nom: string, prenom: string) => {
    setNomEleveActuelle(nom);
    setPrenomEleveActuelle(prenom);
    setC(true);
  };

  const getStudentImages = async () => {
    try {
      setLoading(true);
      const responses = await Promise.all(
        eleves.map(async (eleve: any) => {
          const imageName = `${eleve.nom}${eleve.prenom}.webp`;
          console.log('Searching for image:', imageName);
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
            console.error(`Error fetching image for ${eleve.prenom} ${eleve.nom}:`, error);
            return ''; // You can provide a default image or handle the error accordingly
          }
        })
      );

      setStudentImages(responses.filter(image => !!image)); // Filter out empty responses
    } catch (error) {
      console.error('Error fetching student images:', error);
      setStudentImages([]); // Set an empty array in case of an error
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const getEleve = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/GET/allEleve`);
        setEleves(response.data);
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    };

    getEleve();
  }, []);

  useEffect(() => {
    const loadStudentImages = async () => {
      await getStudentImages(); // Wait for images to be fetched
      // Now you have the images, you can do something with them if needed
    };

    if (eleves.length > 0) {
      loadStudentImages();
    }
  }, [eleves]);

  return (
    <div className="general_login">
      {!c ? (
        eleves.map((eleve: any, index: number) => (
          <div className="login-container" key={index}>
            {/* Replace static image with dynamic image */}
            {loading ? (
              <div className="loading-spinner">Loading...</div>
            ) : (
              studentImages[index] ? (
                <img
                  className="user-photo"
                  src={studentImages[index]}
                  alt={`Portrait de ${eleve.prenom} ${eleve.nom}`}
                />
              ) : (
                <div className="error-message">Image not available</div>
              )
            )}
            <div className="user-name">{`${eleve.prenom} ${eleve.nom}`}</div>
            <button className="login-button" onClick={() => connection(eleve.nom, eleve.prenom)}>
              Se connecter
            </button>
          </div>
        ))
      ) : (
        <ConnectionEleveShema
          setC={setC}
          prenomEleveActuelle={prenomEleveActuelle}
          nomEleveActuelle={nomEleveActuelle}
          redirection={redirection}
        />
      )}
    </div>
  );
}

export default ConnectionEleve;
