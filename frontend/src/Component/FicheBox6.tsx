import React from 'react';

function FicheBox6() {
    return (
        <div>
            <div className="colonnePrint">
                <div className="titre demi">Travaux réalisés</div>
                <div>
                    <textarea rows={10}></textarea>
                </div>
            </div>
            <div className="espaceHor"></div>

            <div>
                <div className="colonnePrint">
                    <div className="titre demi">Travaux non réalisés</div>
                    <div>
                        <textarea rows={5}></textarea>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FicheBox6;
