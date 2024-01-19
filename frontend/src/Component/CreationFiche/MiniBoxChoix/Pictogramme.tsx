import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Pictogramme({ onSelect }: { onSelect: (selectedImage: string) => void }) {
  const [images, setImages] = useState<ArrayBuffer[]>([]);
  const [imageNames, setImageNames] = useState<string[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [imageError, setImageError] = useState<string>('');

  useEffect(() => {
    const getPictoInfo = async () => {
      try {
        const response = await axios.get('http://192.168.120.71:5000/GET/getpicto-info');
        const { numFiles, imageNames } = response.data;

        // Afficher les informations
        console.log(`Nombre de fichiers: ${numFiles}`);
        console.log('Liste des noms de fichiers:', imageNames);

        // Demander chaque fichier individuellement
        const imagePromises = imageNames.map(async (imageName: string) => {
          const imagePath = `http://192.168.120.71:5000/GET/getpicto-file?name=${encodeURIComponent(imageName)}`;
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
        setImageNames(imageNames);
      } catch (error) {
        console.error('Erreur lors de la récupération des informations sur les images :', error);
        setImageError('Erreur lors de la récupération des informations sur les images');
      }
    };

    getPictoInfo();
  }, []);

  const handleImageClick = (index: number) => {
    const imageName = imageNames[index];
    const imageData = images[index];
    const dataURL = `data:image/webp;base64,${btoa(
      new Uint8Array(imageData).reduce((data, byte) => data + String.fromCharCode(byte), '')
    )}`;
    setSelectedImage(dataURL);
    onSelect(imageName); // Appel de la fonction onSelect pour renvoyer le nom de l'image
  };

  return (
    <div>
      {imageError && <p className="error-message">{imageError}</p>}
      {images.map((imageData, index) => (
        <img
          key={index}
          src={`data:image/webp;base64,${btoa(
            new Uint8Array(imageData).reduce((data, byte) => data + String.fromCharCode(byte), '')
          )}`}
          alt={`Pictogramme ${index}`}
          style={{
            maxWidth: '100px',
            maxHeight: '100px',
            border: selectedImage === String(index) ? '2px solid blue' : 'none', // Mettre en surbrillance la sélection
          }}
          onClick={() => handleImageClick(index)}
        />
      ))}
    </div>
  );
}

export default Pictogramme;
