import React from 'react';
import "../../style/fiche3.css"
import "../../style/ficheGlobal.css"

function FicheBox3() {
    return (
            <div className='Box'>
                <div className='flex'>
                    <div className='grp_demandeur'>
                        <div className='name_demandeur'>Nom du demandeur</div>
                        <div> <input value=""/></div>  
                    </div>
                    <div className='grp_localisation'>
                        <div className="date_localisation">Date de la demande</div>
                            <input value=""/>
                        <div className="locali_localisation">Localisation</div>
                            <input value=""/>
                    </div>
                    <div className="description_demande">Description de la demande</div>
                    <div> 
                        <textarea rows={10}>
                        </textarea>
                    </div>
                    <div>
                        <div className="">Degré d'urgence</div>
                        <div> <input value=""/></div>
                    </div>
                </div>
            </div>
    );
}

export default FicheBox3;
