import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ModifierMdp.css";
import ModifierMdpEleve from "./ModifierMdpEleve";
import exp from "constants";
import ModifierMdpProf from "./ModifierMdpProf";

function ModifierMdp({redirection,role,identifiant}:any){
    const setRedirectionTwo = () => {
        redirection(2);
    };
    const [fondEcranUrl, setFondEcranUrl] = useState<string | null>(null)
    console.log(role);

    useEffect(() => {
        // Appeler la requête pour récupérer l'image du fond d'écran
        axios
          .get('http://localhost:5000/GET/fondecran', {
            params: {
              name: identifiant,
            },
            responseType: 'arraybuffer',
          })
          .then((response) => {
            const base64 = btoa(
              new Uint8Array(response.data).reduce(
                (data, byte) => data + String.fromCharCode(byte),
                '',
              ),
            )
            const url = `data:${response.headers[
              'content-type'
            ].toLowerCase()};base64,${base64}`
            setFondEcranUrl(url)
          })
          .catch((error) => console.error(error))
      }, [])
    
      return (
        <>
        {fondEcranUrl && (
          <style>
            {`
              body {
                background-image: url(${fondEcranUrl});
                background-size: cover;
                background-repeat: no-repeat;
              }
            `}
          </style>
        )}
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
    </>

    )

}
export default ModifierMdp;