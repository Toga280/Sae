import React from 'react';
import DupliquerSelect from './DupliquerSelect';
import "../../style/ficheGlobal.css";
import "../../style/fiche8.css"
function FicheBox8() {
    return (

        <div className="Box">
        <input type="checkbox" /> Nécessite une nouvelle intervention

            <div className='SelectMateriaux'>
            Matériaux Utilisés
                <DupliquerSelect />
                <DupliquerSelect />
                <DupliquerSelect />
                <DupliquerSelect />
                <DupliquerSelect />
                <DupliquerSelect />
                <DupliquerSelect />
                <DupliquerSelect />
                <DupliquerSelect />
                <DupliquerSelect />
            </div>
        </div>

    );
}


export default FicheBox8;
