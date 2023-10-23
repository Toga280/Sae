import React from 'react';

function FicheBox3() {
    return (
        <div>
            <fieldset>
                <legend>Demande</legend>
                <div>
                    <div className="titre">Nom du demandeur</div>
                    <div> <input disabled value="Responsable de maintenance"/></div>  
                </div>
                <div>
                    <div className="titre">Date de la demande</div>
                    <div> <input disabled value="Date du jour"/></div>
                    <div className="titre">Localisation</div>
                    <div> <input disabled value="Espace Lingerie"/></div>
                </div>
                <div className="colonnePrint">
                    <div className="titre demi">Description de la demande</div>
                    <div> 
                        <textarea disabled rows={10}>
                            Format vierge Plomberie
                        </textarea>
                    </div>
                </div>
                <div>
                    <div className="titre demi">Degré d'urgence</div>
                    <div> <input disabled value="format vieger"/></div>
                </div>
            </fieldset>
        </div>
    );
}

export default FicheBox3;
