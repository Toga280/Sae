import React from "react";
import axios from "axios";
import "./ModifierMdp.css";
import ModifierMdpEleve from "./ModifierMdpEleve";
import exp from "constants";
import ModifierMdpProf from "./ModifierMdpProf";

function ModifierMdp({redirection}:any){
    const setRedirectionTwo = () => {
        redirection(2);
    };
      
    return(
    <div>
        <ModifierMdpEleve>
            
        </ModifierMdpEleve>
        <ModifierMdpProf>
            
        </ModifierMdpProf>
        <button onClick={setRedirectionTwo} className="bouton_retour_modif_mdp_eleve">Retour</button>

    </div>

    )

}
export default ModifierMdp;