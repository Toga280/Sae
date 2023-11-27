import React from 'react';
import Pictogramme from './Pictogramme';
function ModificationPicto({ setModificationPictoPropsFalse }: any){
 return (
    <div className="select_all_choix_picto">
        <p>Choix du pictogramme : </p>
        <div onClick={setModificationPictoPropsFalse}>
            <Pictogramme />
        </div>
        <div onClick={setModificationPictoPropsFalse}> 
            <Pictogramme />
        </div>
    </div>
 )

}

export default ModificationPicto;