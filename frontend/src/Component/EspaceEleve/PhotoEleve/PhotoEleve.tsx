import React, { useState , useEffect } from "react";
import axios from "axios";
import "./PhotoEleve.css";

function PhotoEleve({ redirection, eleve }: any) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [images, setImages] = useState<ArrayBuffer[]>([]);
  const [imageError, setImageError] = useState<string>('');

  const setRedirectionfour = () => {
    redirection(4);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleFileUpload = async () => {
    try {
      console.log('Uploading...');

      if (selectedFile && eleve.trim() !== '') {
        const formData = new FormData();
        formData.append('file', selectedFile);

        console.log(formData)
        const response = await axios.post('http://localhost:5000/POST/uploadImageEleve', formData, {
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
  };

  useEffect(() => {
    const getPictoInfo = async () => {
      try {
        const response = await axios.get('http://localhost:5000/GET/getphotoeleve-info', {
          params: {
            eleve: eleve,
          },
        });
        const { imageNames } = response.data;

        // Demander chaque fichier individuellement
        const imagePromises = imageNames.map(async (imageName: string) => {
          const imagePath = `http://localhost:5000/GET/getphotoeleve-file?eleve=${encodeURIComponent(eleve)}&name=${encodeURIComponent(imageName)}`;
          const imageResponse = await axios.get(imagePath,{
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
    <div className="global_bouton_interface_élève">
      <div>
      <h2 className='txt_picto_present'>uploader une photo</h2>
      <div className="content_espace__take_photo_eleve">
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
        />
        <button onClick={handleFileUpload} className="button_photo">
          Télécharger une photo
        </button>
      </div>
      </div>
      <div>
        <h2 className='txt_picto_present'>Liste des photo :</h2>
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
      <button onClick={setRedirectionfour} className="button_retour">
        Retour
      </button>
    </div>
  );
}

export default PhotoEleve;