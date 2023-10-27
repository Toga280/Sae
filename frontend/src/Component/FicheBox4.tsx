import React from 'react';

function FicheBox4() {
    return (
        <div className="boxes">
            <div>
                <div className="">Date d'intervention</div>
                <div>
                    <input type="" />
                </div>
                <div className="">Durée de l'opération</div>
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
                <div>
                    <div className="">
                        <div className="">
                            <legend>Action</legend>
                            <div>
                                <div className="">
                                    <input type="" />
                                </div>
                                <div className="">
                                    <label> </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FicheBox4;
