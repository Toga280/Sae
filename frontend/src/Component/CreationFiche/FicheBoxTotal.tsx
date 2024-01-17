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

function FicheBoxTotal({
  onSelectBox,
  redirection,
  setSaveName,
  versionProf,
  forceRefreshFiche,
  versionVue,
}: any) {
  const [numBox, setNumBox] = useState(0)

  const modifierFiche = async () => {
    console.log('nom de la fiche --> ', fonctionsMiniBoxInfoJson.getNom())
    await deleteFiche(fonctionsMiniBoxInfoJson.getNom())
    await postFiche()
  }

  const postFiche = async () => {
    const data = fonctionsMiniBoxInfoJson.getAllJson()
    axios
      .post('http://localhost:5000/POST/fiche', data)
      .then((response) => {
        console.log('Réponse du serveur :', response.data)
      })
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

  const consoleLogJson = () => {
    console.log(fonctionsMiniBoxInfoJson.getAllJson())
  }

  const Sauvegarder = async () => {
    if (versionProf) {
      setSaveName(true)
    } else if (!versionProf) {
      await fonctionsMiniBoxInfoJson.changeEnCourFalse()
      modifierFiche()
      redirection(false)
    }
  }

  const Brouillon = () => {
    if (!versionProf) {
      modifierFiche()
    }
  }

  const retour = () => {
    if (versionProf) {
      redirection(2)
    } else if (!versionProf) {
      redirection(false)
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
    console.log(forceRefreshFiche)
  }, [numBox, onSelectBox, forceRefreshFiche])

  return (
    <div>
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
        <FicheBox8 classNameDiv={'Box'} versionVue={versionVue} />
      </div>
      <button onClick={consoleLogJson}>return log json</button>
      <button className="boutton_retour_interaction_edu" onClick={retour}>
        Retour
      </button>
      {!versionVue ? (
        <button
          onClick={Sauvegarder}
          className="boutton_sauvegarder_interaction_edu"
        >
          Sauvegarder
        </button>
      ) : null}
      {!versionProf && !versionVue ? (
        <button
          className="boutton_brouillon_interaction_edu"
          onClick={Brouillon}
        >
          Brouillons
        </button>
      ) : null}

      {versionProf ? (
        <button
          className="boutton_sauvegarder_interaction_edu"
          onClick={imprimerPage}
        >
          imprimer
        </button>
      ) : null}
    </div>
  )
}

export default FicheBoxTotal
