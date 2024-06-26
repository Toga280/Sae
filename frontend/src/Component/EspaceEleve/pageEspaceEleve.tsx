import React, { useEffect, useState } from 'react'
import './pageEspaceEleve.css'
import FicheBoxTotal from '../CreationFiche/FicheBoxTotal'
import axios from 'axios'
import fonctionsMiniBoxInfoJson from '../CreationFiche/MiniBoxInfoFunction'
import FicheEleve from '../Interface_Educateur/ConsulterFichesImages/FicheEleve/FicheEleve'
const token = localStorage.getItem('token');

function PageEspaceEleve({ redirection, nomEleve, prenomEleve, eleve }: any) {
  const [fondEcranUrl, setFondEcranUrl] = useState<string | null>(null)
  const [seeMaFiche, setSeeMaFiche] = useState(Boolean)
  const [pasDeFicheEnCour, setPasDeFicheEnCour] = useState<boolean>(false)
  const [seeMesFichesTermine, setSeeMesFichesTermine] = useState<boolean>(false)
  const [ficheSave, setFicheSave] = useState<boolean>(false)

  useEffect(() => {
    // Appeler la requête pour récupérer l'image du fond d'écran
    axios
      .get('http://localhost:5000/GET/fondecran', {
        params: {
          name: eleve,
          token: token,
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
        )}&prenom=${encodeURIComponent(prenomEleve)}`,{params : {token:token}}
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
          token: token,
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
      {ficheSave ? (
        <div className="message_brouillon">Fiche Sauvegardée !</div>
      ) : null}
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
            onClick={() => {
              localStorage.removeItem('token');
              redirection(1);
            }}
          >
            Se déconnecter 
            <img src={require('./icon_deconnection.png')} alt="Deconnection" />
          </button>
          <img
            src={require('./icon_reglage.webp')}
            alt="reglage-icon"
            className="reglage-icon"
            style={{ width: '40px', height: '40px', cursor: 'pointer' }}
            onClick={() => redirection(16)}
          />
          <div className="global_bouton_interface_élève">
            <div className='global_txt_espace_élève'>
              <h1 className="txt_espace_élève">Espace élève</h1>
              <img src={require('./icon_eleve.png')} alt="Deconnection" />
            </div>

            <div className="content_espace_eleve">
              <button className="bouton_interface_eleve" id="maFiche" onClick={setMaFiche}>
                <img src={require('./icon_fiche.png')} alt="Ma fiche" />
                Ma fiche
              </button>

                <button
                  className="bouton_interface_eleve"
                  type="button"
                  id="photo"
                  value="Voir mes photos"
                  onClick={setRedirectionThriteen}
                >
                <img src={require('./icon_photo.png')} alt="Ma fiche" />
                  Mes photos
                </button>
                <button
                  className="bouton_interface_eleve"
                  type="button"
                  id="photo"
                  value="Voir mes photos"
                  onClick={() => setSeeMesFichesTermine(true)}
                >
                  <img src={require('./icon_all_fiches.png')} alt="Ma fiche" />
                  Mon Espace Fiches
                </button>
              </div>
              <div className="global_pas_de_fiche">
                {pasDeFicheEnCour ? (
                  <p className="pas_de_fiche">Tu n'as pas de fiche !</p>
                ) : null}
            </div>

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
        <FicheBoxTotal
          versionProf={false}
          redirection={setSeeMaFiche}
          setFicheSave={setFicheSave}
        />
      ) : null}
    </div>
    </>
  )
}

export default PageEspaceEleve
