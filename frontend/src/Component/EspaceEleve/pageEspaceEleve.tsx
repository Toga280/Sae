import React, { useEffect, useState } from 'react'
import './pageEspaceEleve.css'
import FicheBoxTotal from '../CreationFiche/FicheBoxTotal'
import axios from 'axios'
import fonctionsMiniBoxInfoJson from '../CreationFiche/MiniBoxInfoFunction'
import FicheEleve from '../Interface_Educateur/ConsulterFichesImages/FicheEleve/FicheEleve'

function PageEspaceEleve({ redirection, nomEleve, prenomEleve, eleve }: any) {
  const [fondEcranUrl, setFondEcranUrl] = useState<string | null>(null)
  const [seeMaFiche, setSeeMaFiche] = useState(Boolean)
  const [pasDeFicheEnCour, setPasDeFicheEnCour] = useState<boolean>(false)
  const [seeMesFichesTermine, setSeeMesFichesTermine] = useState<boolean>(false)

  useEffect(() => {
    // Appeler la requête pour récupérer l'image du fond d'écran
    axios
      .get('http://localhost:5000/GET/fondecran', {
        params: {
          name: eleve,
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

  const setRedirectionThriteen = () => {
    redirection(13)
  }

  const setSeeMesFichesTermineFalse = () => {
    setSeeMesFichesTermine(false)
  }

  const setMaFiche = () => {
    axios
      .get(
        `http://localhost:5000/GET/eleve/fiche?nom=${encodeURIComponent(
          nomEleve,
        )}&prenom=${encodeURIComponent(prenomEleve)}`,
      )
      .then((response) => {
        if (response.data) {
          fonctionsMiniBoxInfoJson.setNewJson(response.data)
          setSeeMaFiche(true)
        } else {
          setPasDeFicheEnCour(true)
        }
      })
      .catch((error) => {
        console.error('Erreur lors de la requête vers le serveur :', error)
      })
  }

  useEffect(() => {
    // Appeler la requête pour récupérer l'image du fond d'écran
    axios
      .get('http://localhost:5000/GET/fondecran', {
        params: {
          name: eleve,
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
    <div
      style={{
        backgroundImage: `url(${fondEcranUrl})`,
        backgroundSize: 'cover',
        height: '100vh',
      }}
    >
      {!seeMaFiche && !seeMesFichesTermine ? (
        <div
          style={{
            backgroundImage: `url(${fondEcranUrl})`,
            backgroundSize: 'cover',
            height: '100vh',
          }}
        >
          <button
            className="bouton_deconnection_eleve"
            onClick={() => redirection(1)}
          >
            Se déconnecter
          </button>
          <img
            src={require('./icon_reglage.webp')}
            alt="reglage-icon"
            className="reglage-icon"
            style={{ width: '40px', height: '40px', cursor: 'pointer' }}
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
                Ma fiche
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
              <button
                className="bouton_interface_eleve"
                type="button"
                id="photo"
                value="Voir mes photos"
                onClick={() => setSeeMesFichesTermine(true)}
              >
                Mes fiches finies
              </button>
            </div>
          </div>
          <div className="global_pas_de_fiche">
            {pasDeFicheEnCour ? (
              <p className="pas_de_fiche">Tu n'as pas de fiche !</p>
            ) : null}
          </div>
        </div>
      ) : null}
      {seeMesFichesTermine ? (
        <FicheEleve
          prenomEleve={prenomEleve}
          nomEleve={nomEleve}
          setVoirFicheFalse={setSeeMesFichesTermineFalse}
          versionEleve={true}
        />
      ) : null}
      {seeMaFiche ? (
        <FicheBoxTotal versionProf={false} redirection={setSeeMaFiche} />
      ) : null}
    </div>
  )
}

export default PageEspaceEleve
