import React, { useState , useEffect } from "react";
import './optioneleve.css';
import axios from 'axios';

function Optioneleve({ redirection, eleve }: any) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fondEcranUrl, setFondEcranUrl] = useState<string | null>(null);


  const setRedirectionfour = () => {
    redirection(4);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  useEffect(() => {
    // Appeler la requête pour récupérer l'image du fond d'écran
    axios.get('http://localhost:5000/GET/fondecran', {
      params: {
        name: eleve
      },
      responseType: 'arraybuffer',
    })
      .then(response => {
        const base64 = btoa(
          new Uint8Array(response.data).reduce(
            (data, byte) => data + String.fromCharCode(byte),
            ''
          )
        );
        const url = `data:${response.headers['content-type'].toLowerCase()};base64,${base64}`;
        setFondEcranUrl(url);
      })
      .catch(error => console.error(error));
  }, []);

  const handleFileUpload = async () => {
    try {
      console.log('Uploading...');

      if (selectedFile && eleve.trim() !== '') {
        const formData = new FormData();
        formData.append('file', selectedFile);

        console.log(formData)
        const response = await axios.post('http://localhost:5000/POST/uploadfondecran', formData, {
          params: {
            name: eleve,
          },
          validateStatus: function (status) {
            return status >= 200 || status == 409;
          }
        });

        if (response.status === 200) {
          console.log('File uploaded successfully');
        } else {
          console.error('Failed to upload file');
        }
      }
    } catch (error) {
      console.error('Error in handleUpload:', error);
    }
    redirection(4);
  };

  const handlesupprimer = async () => {
    try {
      console.log('Suppression...');
  
      if (eleve.trim() !== '') {
        const response = await axios.get(`http://localhost:5000/DELETE/fond?name=${eleve}`, {
          // Additional request configuration if needed
        });
  
        if (response.status === 200) {
          console.log('File deleted successfully');
        } else {
          console.error('Failed to delete file');
        }
      }
    } catch (error) {
      console.error('Error in handlesupprimer:', error);
    }
    redirection(4);
  };
  

  return (
    <div style={{ backgroundImage: `url(${fondEcranUrl})`, backgroundSize: 'cover', height: '100vh' }}>
    <div>
    <h2 className="titre_changer_fond">Changer le fond d'écran</h2>

      <div className="global_option_eleve">
        <label htmlFor="fileInput" className={`custom-file-upload`}>
              {selectedFile ? `Fichier sélectionné: ${selectedFile.name}` : 'Choisir une photo'}
              <input
                type="file"
                id="fileInput"
                accept="image/*"
                onChange={handleFileChange}
                style={{ display: 'none' }}
              />
          </label>
          <img
            src={require("./PhotoEleve/telecharger.png")}
            alt="Télécharger une photo"
            onClick={handleFileUpload}
            className={`button_photo ${selectedFile ? 'selected' : ''}`}
          />
          <img
            src={require("./supprimer.webp")}
            alt="Supprimer une photo"
            onClick={handlesupprimer}
            className={`button_photo`}
          />
        </div>
        <div>
          <button onClick={setRedirectionfour} className="button_retour">
            Retour
          </button>
        </div>
      </div>
    </div>
  );
}

export default Optioneleve;