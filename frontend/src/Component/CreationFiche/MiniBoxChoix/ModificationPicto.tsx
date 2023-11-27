import React from 'react';
import Pictogramme from './Pictogramme';
import '../../../style/style_choix.css';

function ModificationPicto({setBoolImage, BoolImage}: any) {

  return (
    <div className='container_bouton_choix_elem'>
      <p>Choisissez un pictogramme parmi la liste</p>
      <div onClick={setBoolImage(true)}>
        <Pictogramme image={BoolImage} />
      </div>
      <div onClick={setBoolImage(false)}>
        <Pictogramme image={BoolImage} />
      </div>
      <Pictogramme image={BoolImage}/>
    </div>
  );
}

export default ModificationPicto;