import React, { useEffect, useState } from 'react'
import ChoixMiniBox from './MiniBoxChoix/ChoixMiniBox'
import '../../style/ficheGlobal.css'
import '../../style/fiche5.css'
import fonctionsMiniBoxInfoJson from './MiniBoxInfoFunction'

function FicheBox5({
  numeroMiniBox,
  infoSelectionChoixMiniBox,
  classNameDiv,
  versionProf,
  versionVue,
}: any) {
  const [input10, setInput10] = useState(
    fonctionsMiniBoxInfoJson.getInputFicheCheckbox(10),
  )
  const [input11, setInput11] = useState(
    fonctionsMiniBoxInfoJson.getInputFicheCheckbox(11),
  )
  const [input12, setInput12] = useState(
    fonctionsMiniBoxInfoJson.getInputFicheCheckbox(12),
  )

  const handleInput10Change = () => {
    setInput10((prevValue) => !prevValue)
  }

  const handleInput11Change = () => {
    setInput11((prevValue) => !prevValue)
  }

  const handleInput12Change = () => {
    setInput12((prevValue) => !prevValue)
  }

  useEffect(() => {
    if (!versionProf) {
      fonctionsMiniBoxInfoJson.modifierInputFiche(10, input10)
    }
  }, [input10])

  useEffect(() => {
    if (!versionProf) {
      fonctionsMiniBoxInfoJson.modifierInputFiche(11, input11)
    }
  }, [input11])

  useEffect(() => {
    if (!versionProf) {
      fonctionsMiniBoxInfoJson.modifierInputFiche(12, input12)
    }
  }, [input12])

  return (
    <div className={classNameDiv}>
      <div className="grp_type_maintenance">
        <div className="">
          {versionProf ? (
            <input
              type="checkbox"
              onChange={handleInput10Change}
              checked={input10}
              disabled={true}
            />
          ) : (
            <input
              type="checkbox"
              onChange={handleInput10Change}
              checked={input10}
              disabled={versionVue}
            />
          )}
        </div>
        <div className="">
          <ChoixMiniBox
            TexteInfo={'améliorative'}
            Balise={4}
            ClassName={'txt_type_maintenance'}
            numeroMiniBox={numeroMiniBox[0]}
            infoSelectionChoixMiniBox={infoSelectionChoixMiniBox}
            versionProf={versionProf}
          />
        </div>
      </div>
      <div className="grp_type_maintenance">
        <div className="">
          {versionProf ? (
            <input
              type="checkbox"
              onChange={handleInput11Change}
              checked={input11}
              disabled={true}
            />
          ) : (
            <input
              type="checkbox"
              onChange={handleInput11Change}
              checked={input11}
              disabled={versionVue}
            />
          )}
        </div>
        <div className="droite">
          <ChoixMiniBox
            TexteInfo={'préventive'}
            Balise={4}
            ClassName={'txt_type_maintenance'}
            numeroMiniBox={numeroMiniBox[1]}
            infoSelectionChoixMiniBox={infoSelectionChoixMiniBox}
            versionProf={versionProf}
          />
        </div>
      </div>
      <div className="grp_type_maintenance">
        <div className="">
          {versionProf ? (
            <input
              type="checkbox"
              onChange={handleInput12Change}
              checked={input12}
              disabled={true}
            />
          ) : (
            <input
              type="checkbox"
              onChange={handleInput12Change}
              checked={input12}
              disabled={versionVue}
            />
          )}
        </div>
        <div className="">
          <ChoixMiniBox
            TexteInfo={'corrective'}
            Balise={4}
            ClassName={'txt_type_maintenance'}
            numeroMiniBox={numeroMiniBox[2]}
            infoSelectionChoixMiniBox={infoSelectionChoixMiniBox}
            versionProf={versionProf}
          />
        </div>
      </div>
    </div>
  )
}

export default FicheBox5
