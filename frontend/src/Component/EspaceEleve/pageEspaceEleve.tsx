import React from "react";
import ".././EspaceEleve/pageEspaceEleve.css";

function PageEspaceEleve() {
  return (
    <div id="espaceEleve">

        <h2>Espace éleve</h2>
        <div id="content">
            <input type="button" id="maFiche" value="maFiche" />
            <input type="button" id="photo" value="voir mes photos" />
        </div>

    </div>
  );
}

export default PageEspaceEleve;