import React, { useEffect, useState } from 'react'
import FicheBox1 from './FicheBox1'
import FicheBox2 from './FicheBox2'
import FicheBox3 from './FicheBox3'
import FicheBox4 from './FicheBox4'
import FicheBox5 from './FicheBox5'
import FicheBox6 from './FicheBox6'
import FicheBox7 from './FicheBox7'
import FicheBox8 from './FicheBox8'
import fonctionsMiniBoxInfoJson from './MiniBoxInfoFunction'
import { imprimerPage } from '../FonctionEleve/Imprimer'
import './imprimerFiche.css'
import axios from 'axios'
const token = localStorage.getItem('token');

function FicheBoxTotal({
  onSelectBox,
  redirection,
  setSaveName,
  versionProf,
  forceRefreshFiche,
  versionVue,
  setFicheSave,
  identifiant,
}: any) {
  const [numBox, setNumBox] = useState(0)

  const [isDraftSaved, setIsDraftSaved] = useState(false)

  const [fondEcranUrl, setFondEcranUrl] = useState<string | null>(null)
  const [reactionencours, setReactionencours] = useState(false)

  const modifierFiche = async () => {
    await deleteFiche(fonctionsMiniBoxInfoJson.getNom())
    await postFiche()
  }

  const postFiche = async () => {
    const data = {data: fonctionsMiniBoxInfoJson.getAllJson(), token:token}
    axios
      .post('http://localhost:5000/POST/fiche', data)
      .then((response) => {})
      .catch((error) => {
        console.error('Erreur lors de la requête vers le serveur :', error)
      })
  }

  const deleteFiche = async (nomFiche: string) => {
    axios
      .get(
        `http://localhost:5000/DELETE/ficheName?name=${encodeURIComponent(
          nomFiche,
        )}`,
      )
      .then((response) => {
        if (response.data) {
          console.log('fiche supprimé avec succer')
        }
      })
      .catch((error) => {
        console.error('Erreur lors de la requête vers le serveur :', error)
      })
  }

  const handleClick = (numero: number) => {
    if (versionProf) {
      setNumBox(numero)
      fonctionsMiniBoxInfoJson.allIsSelectedMiniBoxFalse()
    }
  }

  const Sauvegarder = async () => {
    if (versionProf) {
      if (fonctionsMiniBoxInfoJson.getNom() === 'brouillon') {
        setSaveName(true)
      } else {
        await deleteFiche(fonctionsMiniBoxInfoJson.getNom())
        await postFiche()
        redirection(2)
      }
    } else if (!versionProf) {
      await fonctionsMiniBoxInfoJson.changeEnCourFalse()
      console.log("reaction function", fonctionsMiniBoxInfoJson.getreacteleve())
      setFicheSave(true)
      setTimeout(() => setFicheSave(false), 5000)
      modifierFiche()
      window.scrollTo(0, 0)
      redirection(false)
    }
  }

  const setReaction = async (value: string) => {
    await fonctionsMiniBoxInfoJson.modifierreacteleve(value)
    Sauvegarder()
  }

  const Brouillon = () => {
    if (!versionProf) {
      modifierFiche()
      setIsDraftSaved(true)
      setTimeout(() => setIsDraftSaved(false), 5000)
    }
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const retour = () => {
    if (versionProf) {
      redirection(2)
    } else if (!versionProf) {
      window.scrollTo(0, 0)
      redirection(false)
    }
  }

  const reactionencourscalcul = () => {
    if (versionProf) {
      Sauvegarder();
    } else if (!versionProf) {
      setReactionencours(true)
    }
  }

  const infoSelectionChoixMiniBox = (
    booleanChoixMiniBox: boolean,
    numeroMiniBox: any,
  ) => {}

  useEffect(() => {
    if (numBox !== 0) {
      onSelectBox(numBox)
    }
  }, [numBox, onSelectBox, forceRefreshFiche])

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
      {!reactionencours && (
      <div>
        {isDraftSaved && (
          <div className="message_brouillon">Fiche mise en brouillon</div>
        )}

        <div onClick={() => handleClick(1)}>
          <FicheBox1
            classNameDiv={'Box'}
            versionProf={versionProf}
            nomfiche={fonctionsMiniBoxInfoJson.getNom()}
          />
        </div>
        <div onClick={() => handleClick(2)}>
          <FicheBox2
            numeroMiniBox={[1, 2]}
            infoSelectionChoixMiniBox={infoSelectionChoixMiniBox}
            classNameDiv={'Box'}
            versionProf={versionProf}
            versionVue={versionVue}
          />
        </div>
        <div onClick={() => handleClick(3)}>
          <FicheBox3
            numeroMiniBox={[3, 4, 5, 6, 7]}
            infoSelectionChoixMiniBox={infoSelectionChoixMiniBox}
            classNameDiv={'Box'}
            versionProf={versionProf}
            versionVue={versionVue}
          />
        </div>
        <div onClick={() => handleClick(4)}>
          <FicheBox4
            numeroMiniBox={[8, 9]}
            infoSelectionChoixMiniBox={infoSelectionChoixMiniBox}
            classNameDiv={'Box'}
            versionProf={versionProf}
            versionVue={versionVue}
          />
        </div>
        <div onClick={() => handleClick(5)}>
          <FicheBox5
            numeroMiniBox={[10, 11, 12]}
            infoSelectionChoixMiniBox={infoSelectionChoixMiniBox}
            classNameDiv={'Box'}
            versionProf={versionProf}
            versionVue={versionVue}
          />
        </div>
        <div onClick={() => handleClick(6)}>
          <FicheBox6
            numeroMiniBox={[13, 14, 15, 16]}
            infoSelectionChoixMiniBox={infoSelectionChoixMiniBox}
            classNameDiv={'Box'}
            versionProf={versionProf}
            versionVue={versionVue}
          />
        </div>
        <div onClick={() => handleClick(7)}>
          <FicheBox7
            numeroMiniBox={[17, 18, 19]}
            infoSelectionChoixMiniBox={infoSelectionChoixMiniBox}
            classNameDiv={'Box'}
            versionProf={versionProf}
            versionVue={versionVue}
          />
        </div>
        <div onClick={() => handleClick(8)}>
          <FicheBox8
            classNameDiv={'Box'}
            versionVue={versionVue}
            versionProf={versionProf}
          />
        </div>

        {/* <button onClick={consoleLogJson}>return log json</button> */}
        <button className="boutton_retour_interaction_edu" onClick={retour}>
          Retour
        </button>
        {!versionVue ? (
          <button
            onClick={reactionencourscalcul}
            className="boutton_sauvegarder_interaction_edu"
          >
            Sauvegarder
          </button>
        ) : null}
        {!versionProf && !versionVue ? (
          <>
            <button
              className="boutton_brouillon_interaction_edu"
              onClick={Brouillon}
            >
              Brouillons
            </button>
          </>
        ) : null}

        {versionProf ? (
          <button
            className="boutton_sauvegarder_interaction_edu"
            onClick={imprimerPage}
          >
            Imprimer
          </button>
        ) : null}
      </div>
      )}
      {reactionencours && (
        <div>
                    <img
            src={require('./EmojiEleve/s3.png')}
            onClick={async () => await setReaction("pasbien")}
            alt="smiley Rouge"
            style={{ width: '200px', height: '200px', cursor: 'pointer' }}
          />
          
          <img
            src={require('./EmojiEleve/s2.png')}
            onClick={async () => await setReaction("moyen")}
            alt="smiley jaune"
            style={{ width: '200px', height: '200px', cursor: 'pointer' }}
          />
          <img
            src={require('./EmojiEleve/s1.png')}
            onClick={async () => await setReaction("bien")}
            alt="smiley vert"
            style={{ width: '200px', height: '200px', cursor: 'pointer' }}
          />
      </div>
      )}
    </>
  )
}

export default FicheBoxTotal
