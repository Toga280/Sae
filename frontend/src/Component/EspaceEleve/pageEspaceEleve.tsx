import React, { useEffect, useState } from "react";
import "./pageEspaceEleve.css";
import FicheBoxTotal from "../CreationFiche/FicheBoxTotal";
import axios from "axios";
import fonctionsMiniBoxInfoJson from "../CreationFiche/MiniBoxInfoFunction";

function PageEspaceEleve({ redirection, eleve, nomEleve, prenomEleve }: any) {
  const [seeMaFiche, setSeeMaFiche] = useState(Boolean);
  const [fondEcranUrl, setFondEcranUrl] = useState<string | null>(null);

  const setRedirectionThriteen = () => {
    redirection(13);
  };

  const setMaFiche = () => {
    axios
      .get(
        `http://localhost:5000/GET/eleve/fiche?nom=${encodeURIComponent(
          nomEleve
        )}&prenom=${encodeURIComponent(prenomEleve)}`
      )
      .then((response) => {
        console.log(response.data);
        fonctionsMiniBoxInfoJson.setNewJson(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors de la requête vers le serveur :", error);
      });
    console.log();
    setSeeMaFiche(true);
  };

  useEffect(() => {
    // Appeler la requête pour récupérer l'image du fond d'écran
    axios.get('http://localhost:5000/GET/fondecran', {
      params: {
        name: eleve
      },
      responseType: 'arraybuffer',
    })
      .then(response => {
        const base64 = btoa(
          new Uint8Array(response.data).reduce(
            (data, byte) => data + String.fromCharCode(byte),
            ''
          )
        );
        const url = `data:${response.headers['content-type'].toLowerCase()};base64,${base64}`;
        setFondEcranUrl(url);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      {!seeMaFiche ? (
        <div style={{ backgroundImage: `url(${fondEcranUrl})`, backgroundSize: 'cover', height: '100vh' }}>
          <button
            className="bouton_deconnection_eleve"
            onClick={() => redirection(1)}
          >
            Se déconnecter
          </button>
          <img
            src={require("./icon_reglage.webp")}
            alt="reglage-icon"
            className="reglage-icon"
            style={{ width: "40px", height: "40px", cursor: "pointer" }}
            onClick={() => redirection(16)}
          />
          <div className="global_bouton_interface_élève">
            <p className="txt_espace_élève">Espace élève</p>

            <div className="content_espace_eleve">
              <button
                className="bouton_interface_eleve"
                type="button"
                id="maFiche"
                value="ma Fiche"
                onClick={setMaFiche}
              >
                Ma Fiche
              </button>
              <button
                className="bouton_interface_eleve"
                type="button"
                id="photo"
                value="Voir mes photos"
                onClick={setRedirectionThriteen}
              >
                Mes photos
              </button>
            </div>
          </div>
        </div>
      ) : (
        <FicheBoxTotal versionProf={false} redirection={setSeeMaFiche} />
      )}
    </div>
  );
}

export default PageEspaceEleve;
