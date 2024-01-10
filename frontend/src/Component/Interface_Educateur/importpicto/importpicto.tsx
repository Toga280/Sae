import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './importpicto.css';

const ImportPicto = ({ redirection }: any): JSX.Element => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [pictoName, setPictoName] = useState<string>('');
  const [fileExists, setFileExists] = useState<boolean>(false);
  const [images, setImages] = useState<ArrayBuffer[]>([]);
  const [imageError, setImageError] = useState<string>('');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPictoName(event.target.value);
    setFileExists(false);
  };

  const handleUpload = async () => {
    try {
      console.log('Uploading...');

      if (selectedFile && pictoName.trim() !== '') {
        const formData = new FormData();
        formData.append('file', selectedFile);

        console.log(formData)
        const response = await axios.post('http://localhost:5000/POST/uploadpicto', formData, {
          params: {
            name: pictoName,
          },
          validateStatus: function (status) {
            return status >= 200 || status == 409;
          }
        });

        if (response.status === 409) {
          setFileExists(true);
        }

        if (response.status === 200) {
          console.log('File uploaded successfully');
        } else {
          console.error('Failed to upload file');
        }
      } else {
        setFileExists(false);
      }
    } catch (error) {
      console.error('Error in handleUpload:', error);
    }
  };

  useEffect(() => {
    const getPictoInfo = async () => {
      try {
        const response = await axios.get('http://localhost:5000/GET/getpicto-info');
        const { imageNames } = response.data;

        // Demander chaque fichier individuellement
        const imagePromises = imageNames.map(async (imageName: string) => {
          const imagePath = `http://localhost:5000/GET/getpicto-file?name=${encodeURIComponent(imageName)}`;
          const imageResponse = await axios.get(imagePath, {
            responseType: 'arraybuffer',
          });

          // Stocker les données binaires de l'image
          return imageResponse.data;
        });

        // Attendre que toutes les promesses soient résolues
        const images = await Promise.all(imagePromises);

        // Mettre à jour l'état avec les données binaires des images
        setImages(images);
      } catch (error) {
        console.error('Erreur lors de la récupération des informations sur les images :', error);
      }
    };

    getPictoInfo();
  }, []);

  return (
    <div className="upload-container">
      <div>
        {fileExists && <p className="error-message">Un pictogramme avec ce nom existe déjà.</p>}
        <label className="file-input-label">
          Choisir un fichier
          <input className="file-input" type="file" accept="image/*" onChange={handleFileChange} />
        </label>
        {selectedFile && <p className="selected-file">Fichier sélectionné : {selectedFile.name}</p>}
        <input className="text-input" type="text" value={pictoName} onChange={handleNameChange} placeholder="Entrer le nom du pictogramme" />
        <button className="upload-button" onClick={handleUpload}>Télécharger</button>
      </div>
      <div>
        <h2 className='txt_picto_present'>Liste des pictogrammes :</h2>
        <div className="picto-container">
        {imageError && <p className="error-message">{imageError}</p>}
        {images.map((imageData, index) => (
          <img
          key={index}
          src={`data:image/webp;base64,${btoa(new Uint8Array(imageData).reduce((data, byte) => data + String.fromCharCode(byte), ''))}`}
          alt={`Pictogramme ${index}`}
          style={{ maxWidth: '200px', maxHeight: '200px' }}
        />
        ))}
        </div>
      </div>
      <button className="back-button" onClick={() => redirection(2)}>Retour</button>

    </div>
  );
};

export default ImportPicto;
