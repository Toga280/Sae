import React, { useState } from 'react';
import Pictogramme from './Pictogramme';

function ModificationPicto({ setModificationPictoPropsFalse }: any) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleSelect = (image: string) => {
    setSelectedImage(image);
  };

  return (
    <div className="select_all_choix_picto">
      <p>Choix du pictogramme : </p>
      <div onClick={setModificationPictoPropsFalse}>
        <Pictogramme onSelect={handleSelect} />
      </div>
      <p>Image sélectionnée : {selectedImage}</p>
    </div>
  );
}

export default ModificationPicto;
