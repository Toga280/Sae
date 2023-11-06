import React from 'react';
import '../style/ficheGlobal.css';
import '../style/fiche1.css';


function FicheBox1() {
    let numeroFiche : number = 10

    return (
        <div className="Box">
            <h1>Fiche d'intervention N°{numeroFiche}</h1> 
        </div>
    );
}

export default FicheBox1;