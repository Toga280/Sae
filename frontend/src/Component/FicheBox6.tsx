import React from 'react';

function FicheBox6() {
    return (
        <div className="colonne listeCheckbox">
            <fieldset className="colonne">
                <legend>Nature de l'intervention</legend>
                <div>
                    <div className="demi">
                        <input type="checkbox" />
                    </div>
                    <div className="droite">
                        <label>Aménagement</label>
                    </div>
                </div>
                <div>
                    <div className="demi">
                        <input type="checkbox" />
                    </div>
                    <div className="droite">
                        <label>Finitions</label>
                    </div>
                </div>
                <div>
                    <div className="demi">
                        <input type="checkbox" />
                    </div>
                    <div className="droite">
                        <label>Installation sanitaire</label>
                    </div>
                </div>
                <div>
                    <div className="demi">
                        <input type="checkbox" />
                    </div>
                    <div className="droite">
                        <label>Installation électrique</label>
                    </div>
                </div>
            </fieldset>
        </div>
    );
};

export default FicheBox6;
