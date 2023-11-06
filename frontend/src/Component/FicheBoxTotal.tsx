import React from 'react';
import FicheBox1 from "./FicheBox1";
import FicheBox2 from "./FicheBox2";
import FicheBox3 from "./FicheBox3";
import FicheBox4 from "./FicheBox4";
import FicheBox5 from "./FicheBox5";
import FicheBox6 from "./FicheBox6";
import FicheBox7 from "./FicheBox7";
import FicheBox8 from "./FicheBox8";

function FicheBoxTotal() {
    return (
        <div>
            <div>
                <FicheBox1 />
            </div>
            <div>
                <FicheBox2 />
            </div>
            <div>
                <FicheBox3 />
            </div>
            <div>
                <FicheBox4 />
            </div>
            <div>
                <FicheBox5 />
            </div>
            <div>
                <FicheBox6 />
            </div>
            <div>
                <FicheBox7 />
            </div>
            <div>
                <FicheBox8 />
            </div>
        </div>
    );
}

export default FicheBoxTotal;