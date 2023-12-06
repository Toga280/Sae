import React, { useState } from 'react';
import axios from 'axios';

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
    <div>
      {fileExists && <p>un pictogramme avec ce nom existe déjà</p>}
      {nameError && <p>Veuiller donner un nom au pictogramme</p>}
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <input type="text" value={pictoName} onChange={handleNameChange} placeholder="Enter picto name" />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default ImportPicto;
