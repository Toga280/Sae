import React, { useState } from 'react';
import axios from 'axios';
import './importpicto.css';

const ImportPicto = ({ redirection }: any): JSX.Element => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [pictoName, setPictoName] = useState<string>('');
  const [fileExists, setFileExists] = useState<boolean>(false);
  const [nameError, setNameError] = useState<boolean>(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPictoName(event.target.value);
    setNameError(false);
  };

  const handleUpload = async () => {
    try {
      console.log('Uploading...');

      if (selectedFile && pictoName.trim() !== '') {
        const formData = new FormData();
        formData.append('file', selectedFile);

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
        setNameError(true);
      }
    } catch (error) {
      console.error('Error in handleUpload:', error);
    }
  };

  return (
    <div className="upload-container">
      {fileExists && <p className="error-message">Un pictogramme avec ce nom existe déjà.</p>}
      {nameError && <p className="error-message">Veuillez donner un nom au pictogramme.</p>}
      <label className="file-input-label">
        Choisir un fichier
        <input className="file-input" type="file" accept="image/*" onChange={handleFileChange} />
      </label>
      {selectedFile && <p className="selected-file">Fichier sélectionné : {selectedFile.name}</p>}
      <input className="text-input" type="text" value={pictoName} onChange={handleNameChange} placeholder="Entrer le nom du pictogramme" />
      <button className="upload-button" onClick={handleUpload}>Télécharger</button>
      <button className="back-button" onClick={() => redirection(2)}>Retour</button>
    </div>
  );
};

export default ImportPicto;
