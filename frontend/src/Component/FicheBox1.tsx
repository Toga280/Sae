
import React from 'react';
import '../style/fiche.css';

function FicheBox1() {
    let numeroFiche : number = 10

    return (
        <div className="boxes">
            <h1>Fiche d'intervention N°{numeroFiche}</h1> 
        </div>
    );
}

export default FicheBox1;
