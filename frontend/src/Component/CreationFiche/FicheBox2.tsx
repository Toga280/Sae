import React from 'react';
import "../../style/fiche2.css"
import "../../style/ficheGlobal.css"

function FicheBox2() {
    return (
        <div className='Box'>
                <div className='fb2'>
                    <div className="nom_inter">Nom de l'intervenant</div>
                    <div>
                        <input type="text" />
                    </div>
                    <div className="prenom_inter">Prénom de l'intervenant</div>
                    <div>
                        <input type="text" />
                    </div>
                </div>
        </div>
    );
};

export default FicheBox2;