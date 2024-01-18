import React, { useEffect, useState } from 'react'
import ChoixMiniBox from './MiniBoxChoix/ChoixMiniBox'
import '../../style/ficheGlobal.css'
import '../../style/fiche6.css'
import fonctionsMiniBoxInfoJson from './MiniBoxInfoFunction'
function FicheBox6({
  numeroMiniBox,
  infoSelectionChoixMiniBox,
  classNameDiv,
  versionProf,
  versionVue,
}: any) {
  const [input13, setInput13] = useState(
    fonctionsMiniBoxInfoJson.getInputFicheCheckbox(13),
  )
  const [input14, setInput14] = useState(
    fonctionsMiniBoxInfoJson.getInputFicheCheckbox(14),
  )
  const [input15, setInput15] = useState(
    fonctionsMiniBoxInfoJson.getInputFicheCheckbox(15),
  )
  const [input16, setInput16] = useState(
    fonctionsMiniBoxInfoJson.getInputFicheCheckbox(16),
  )

  const handleInput13Change = () => {
    setInput13((prevValue) => !prevValue)
  }
  const handleInput14Change = () => {
    setInput14((prevValue) => !prevValue)
  }
  const handleInput15Change = () => {
    setInput15((prevValue) => !prevValue)
  }
  const handleInput16Change = () => {
    setInput16((prevValue) => !prevValue)
  }

  useEffect(() => {
    if (!versionProf) {
      fonctionsMiniBoxInfoJson.modifierInputFiche(13, input13)
    }
  }, [input13])

  useEffect(() => {
    if (!versionProf) {
      fonctionsMiniBoxInfoJson.modifierInputFiche(14, input14)
    }
  }, [input14])

  useEffect(() => {
    if (!versionProf) {
      fonctionsMiniBoxInfoJson.modifierInputFiche(15, input15)
    }
  }, [input15])

  useEffect(() => {
    if (!versionProf) {
      fonctionsMiniBoxInfoJson.modifierInputFiche(16, input16)
    }
  }, [input16])

  return (
    <div className={classNameDiv}>
      <div className="grp_nature_intervention">
        <div className="">
          {versionProf ? (
            <input
              type="checkbox"
              onChange={handleInput13Change}
              checked={input13}
              disabled={true}
            />
          ) : (
            <input
              type="checkbox"
              onChange={handleInput13Change}
              checked={input13}
              disabled={versionVue}
            />
          )}
        </div>
        <div className="">
          <ChoixMiniBox
            TexteInfo={'Aménagement'}
            Balise={4}
            ClassName={'txt_nature_intervention'}
            numeroMiniBox={numeroMiniBox[0]}
            infoSelectionChoixMiniBox={infoSelectionChoixMiniBox}
            versionProf={versionProf}
          />
        </div>
      </div>
      <div className="grp_nature_intervention">
        <div className="">
          {versionProf ? (
            <input
              type="checkbox"
              onChange={handleInput14Change}
              checked={input14}
              disabled={true}
            />
          ) : (
            <input
              type="checkbox"
              onChange={handleInput14Change}
              checked={input14}
              disabled={versionVue}
            />
          )}
        </div>
        <div className="">
          <ChoixMiniBox
            TexteInfo={'Finitions'}
            Balise={4}
            ClassName={'txt_nature_intervention'}
            numeroMiniBox={numeroMiniBox[1]}
            infoSelectionChoixMiniBox={infoSelectionChoixMiniBox}
            versionProf={versionProf}
          />
        </div>
      </div>
      <div className="grp_nature_intervention">
        <div className="">
          {versionProf ? (
            <input
              type="checkbox"
              onChange={handleInput15Change}
              checked={input15}
              disabled={true}
            />
          ) : (
            <input
              type="checkbox"
              onChange={handleInput15Change}
              checked={input15}
              disabled={versionVue}
            />
          )}
        </div>
        <div className="">
          <ChoixMiniBox
            TexteInfo={'Installation sanitaire'}
            Balise={4}
            ClassName={'txt_nature_intervention'}
            numeroMiniBox={numeroMiniBox[2]}
            infoSelectionChoixMiniBox={infoSelectionChoixMiniBox}
            versionProf={versionProf}
          />
        </div>
      </div>
      <div className="grp_nature_intervention">
        <div className="">
          {versionProf ? (
            <input
              type="checkbox"
              onChange={handleInput16Change}
              checked={input16}
              disabled={true}
            />
          ) : (
            <input
              type="checkbox"
              onChange={handleInput16Change}
              checked={input16}
              disabled={versionVue}
            />
          )}
        </div>
        <div className="">
          <ChoixMiniBox
            TexteInfo={'Installation électrique'}
            Balise={4}
            ClassName={'txt_nature_intervention'}
            numeroMiniBox={numeroMiniBox[3]}
            infoSelectionChoixMiniBox={infoSelectionChoixMiniBox}
            versionProf={versionProf}
          />
        </div>
      </div>
    </div>
  )
}

export default FicheBox6
