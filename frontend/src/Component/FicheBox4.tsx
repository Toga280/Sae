import React from 'react';

function FicheBox4() {
    return (
        <div className="colonne listeCheckbox">
            <fieldset className="colonne">
                <legend>Type de Maintenance</legend>
                <div>
                    <div className="demi">
                        <input type="checkbox" />
                    </div>
                    <div className="droite">
                        <label>améliorative</label>
                    </div>
                </div>
                <div>
                    <div className="demi">
                        <input type="checkbox" />
                    </div>
                    <div className="droite">
                        <label>préventive</label>
                    </div>
                </div>
                <div>
                    <div className="demi">
                        <input type="checkbox" />
                    </div>
                    <div className="droite">
                        <label>corrective</label>
                    </div>
                </div>
            </fieldset>
        </div>
    );
}

export default FicheBox4;
