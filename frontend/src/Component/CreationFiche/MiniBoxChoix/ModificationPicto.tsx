import React from 'react';
import Pictogramme from './Pictogramme';
function ModificationPicto({ setModificationPictoPropsFalse }: any){
 return (
    <div>
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