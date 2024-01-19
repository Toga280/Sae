import React, { useEffect, useState } from 'react'
import FicheBox1 from './FicheBox1'
import FicheBox2 from './FicheBox2'
import FicheBox3 from './FicheBox3'
import FicheBox4 from './FicheBox4'
import FicheBox5 from './FicheBox5'
import FicheBox6 from './FicheBox6'
import FicheBox7 from './FicheBox7'
import FicheBox8 from './FicheBox8'
import SelectionChoixMiniBox from './MiniBoxChoix/SelectionChoixMiniBox'
import fonctionsMiniBoxInfoJson from './MiniBoxInfoFunction'
import axios from 'axios'
function FicheBoxSelected({ numberFichBox, onSelectBoxChange, identifiant }: any) {
  const [selectionChoixMiniBox, setSelectionChoixMiniBox] = useState(false)
  const [numeroMiniBox, setnumeroMiniBox] = useState(Number)
  const [fondEcranUrl, setFondEcranUrl] = useState<string | null>(null)
  const setSelectionChoixMiniBoxFalse = () => {
    setSelectionChoixMiniBox(false)
  }

  const boutonRetour = () => {
    onSelectBoxChange(null)
    fonctionsMiniBoxInfoJson.allIsSelectedMiniBoxFalse()
  }

  const infoSelectionChoixMiniBox = (
    booleanChoixMiniBox: boolean,
    numeroMiniBox: any,
  ) => {
    setSelectionChoixMiniBox(booleanChoixMiniBox)
    setnumeroMiniBox(numeroMiniBox)
  }

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
      {numberFichBox === 1 ? (
        <FicheBox1
          nomfiche={fonctionsMiniBoxInfoJson.getNom()}
          classNameDiv={'Box'}
        />
      ) : null}
      {numberFichBox === 2 ? (
        <FicheBox2
          numeroMiniBox={[1, 2]}
          infoSelectionChoixMiniBox={infoSelectionChoixMiniBox}
          classNameDiv={'boxSelected'}
          versionProf={true}
        />
      ) : null}
      {numberFichBox === 3 ? (
        <FicheBox3
          numeroMiniBox={[3, 4, 5, 6, 7]}
          infoSelectionChoixMiniBox={infoSelectionChoixMiniBox}
          classNameDiv={'boxSelected'}
          versionProf={true}
        />
      ) : null}
      {numberFichBox === 4 ? (
        <FicheBox4
          numeroMiniBox={[8, 9]}
          infoSelectionChoixMiniBox={infoSelectionChoixMiniBox}
          classNameDiv={'boxSelected'}
          versionProf={true}
        />
      ) : null}
      {numberFichBox === 5 ? (
        <FicheBox5
          numeroMiniBox={[10, 11, 12]}
          infoSelectionChoixMiniBox={infoSelectionChoixMiniBox}
          classNameDiv={'boxSelected'}
          versionProf={true}
        />
      ) : null}
      {numberFichBox === 6 ? (
        <FicheBox6
          numeroMiniBox={[13, 14, 15, 16]}
          infoSelectionChoixMiniBox={infoSelectionChoixMiniBox}
          classNameDiv={'boxSelected'}
          versionProf={true}
        />
      ) : null}
      {numberFichBox === 7 ? (
        <FicheBox7
          numeroMiniBox={[17, 18, 19]}
          infoSelectionChoixMiniBox={infoSelectionChoixMiniBox}
          classNameDiv={'boxSelected'}
          versionProf={true}
        />
      ) : null}
      {numberFichBox === 8 ? (
        <FicheBox8 classNameDiv={'boxSelected'} versionProf={true} />
      ) : null}

      <div>
        {selectionChoixMiniBox === true ? (
          <SelectionChoixMiniBox
            setSelectionChoixMiniBoxFalse={setSelectionChoixMiniBoxFalse}
            numeroMiniBox={numeroMiniBox}
          />
        ) : null}
        <button className="bouton_choix_elem_retour" onClick={boutonRetour}>
          Retour
        </button>
      </div>
    </div>
    </>
  )
}

export default FicheBoxSelected
