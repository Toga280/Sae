import React from "react";
import axios from "axios";
import "./ModifierMdp.css";
import ModifierMdpEleve from "./ModifierMdpEleve";
import exp from "constants";
import ModifierMdpProf from "./ModifierMdpProf";

function ModifierMdp({redirection,role}:any){
    const setRedirectionTwo = () => {
        redirection(2);
    };
    console.log(role);

    return(
    <div>
        {role === "Admin" && (        
            <>
                <ModifierMdpEleve />
                <ModifierMdpProf />   
            </>
        )}

        {role === "ProfesseurAdmin" && (
            <ModifierMdpEleve>
            </ModifierMdpEleve>
        )}

        <button onClick={setRedirectionTwo} className="bouton_retour_modif_mdp_eleve">Retour</button>

    </div>

    )

}
export default ModifierMdp;