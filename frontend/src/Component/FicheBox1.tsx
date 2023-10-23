
import React from 'react';

function FicheBox1() {
    let ok : number = 10

    return (
        <div className="Box">
            <div>
                <div className="nom_inter">Nom de l'intervenant</div>
                <div className="text_input">
                    <input type="text" />
                </div>
                <div className="prenom_inter">Prénom de l'intervenant</div>
                <div className="text_input">
                    <input type="text" />
                </div>
            </div>
        </div>
    );
}

export default FicheBox1;
