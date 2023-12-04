import React, { useState } from 'react';
import axios from 'axios';

const ImportPicto = ({ redirection }: any): JSX.Element => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [pictoName, setPictoName] = useState<string>('');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPictoName(event.target.value);
  };

  const handleUpload = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);

      try {
        const response = await axios.post('http://localhost:5000/POST/uploadpicto', formData, {
          params: {
            name: pictoName,
          },
        });

        if (response.status === 200) {
          console.log('File uploaded successfully');
        } else {
          console.error('Failed to upload file');
        }
      } catch (error) {
        console.error('Error during file upload:', error);
      }
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <input type="text" value={pictoName} onChange={handleNameChange} placeholder="Enter picto name" />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default ImportPicto;
