import React from 'react';

function FicheBox3() {
    return (
        <div>
            <div className="espaceHor"></div>
            <fieldset>
                <legend>Intervention</legend>

                <div className="espaceHor"></div>
                <div>
                    <div className="titre">Date d'intervention</div>
                    <div>
                        <input type="date" />
                    </div>
                    <div className="titre">Durée de l'opération</div>
                    <div>
                        <select>
                            <option>-- Choisir une durée --</option>
                            <option>00h15</option>
                            <option>00h30</option>
                            <option>00h45</option>
                            <option>01h00</option>
                            <option>01h15</option>
                            <option>01h30</option>
                            <option>01h45</option>
                            <option>02h00</option>
                            <option>02h15</option>
                            <option>02h30</option>
                            <option>02h45</option>
                            <option>03h00</option>
                            <option>03h15</option>
                            <option>03h30</option>
                            <option>03h45</option>
                            <option>04h00</option>
                        </select>
                    </div>
                    <div className="espaceHor"></div>
                    <div>
                        <div className="colonne listeCheckbox">
                            <fieldset className="colonne">
                                <legend>Action</legend>
                                <div>
                                    <div className="demi">
                                        <input type="checkbox" />
                                    </div>
                                    <div className="droite">
                                        <label> </label>
                                    </div>
                                </div>
                                <div></div>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </fieldset>
        </div>
    );
};

export default FicheBox3;
