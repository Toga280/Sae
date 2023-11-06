import React from 'react';

function FicheBox3() {
    return (
            <div className="boxes">
                <div>
                    <div className="titre">Nom du demandeur</div>
                    <div> <input value=""/></div>  
                </div>
                <div>
                    <div className="">Date de la demande</div>
                        <input value=""/>
                    <div className="">Localisation</div>
                        <input value=""/>
                </div>
                <div className="">
                    <div className="">Description de la demande</div>
                    <div> 
                        <textarea rows={10}>
                        </textarea>
                    </div>
                </div>
                <div>
                    <div className="">Degré d'urgence</div>
                    <div> <input value=""/></div>
                </div>
            </div>
    );
}

export default FicheBox3;
