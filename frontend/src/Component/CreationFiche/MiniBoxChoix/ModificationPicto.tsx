import React, { useState, useEffect } from 'react';
import Pictogramme from './Pictogramme';
import fonctionsMiniBoxInfoJson from '../MiniBoxInfoFunction';
import "./ModificationPicto.css";
function ModificationPicto({ setModificationPictoPropsFalse, numeroMiniBox }: any) {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
  const [selectedImageName, setSelectedImageName] = useState<string | null>(null);

  const handleSelect = (imageName: string) => {
    setSelectedImageName(imageName);

    // Mettre à jour l'état de selectedImage avec le chemin complet de l'image
    const imagePath = `http://192.168.105.71:5000/GET/getpicto-file?name=${encodeURIComponent(imageName)}`;
    setSelectedImage(imagePath);
  };

  // Utilisation de useEffect pour exécuter une action après la mise à jour de l'état
  useEffect(() => {
    if (selectedImageName !== null) {
      fonctionsMiniBoxInfoJson.setNomPicto(numeroMiniBox, selectedImageName);
    }
  }, [selectedImageName, numeroMiniBox]);

  return (
    <div className="select_all_choix_picto">
      <p>Choix du pictogramme : </p>
      <div onClick={setModificationPictoPropsFalse}>
        <Pictogramme onSelect={handleSelect} />
      </div>
      {selectedImageName && (
        <div>
          <p>Image sélectionnée :</p>
          <img src={selectedImage} alt="pictogramme" style={{ maxWidth: '200px', maxHeight: '200px' }} />
          <p>Nom de l'image sélectionnée : {selectedImageName}</p>
        </div>
      )}
    </div>
  );
}

export default ModificationPicto;
