import React, { useEffect, useState } from 'react'
import ChoixMiniBox from './MiniBoxChoix/ChoixMiniBox'
import '../../style/ficheGlobal.css'
import '../../style/fiche7.css'
import fonctionsMiniBoxInfoJson from './MiniBoxInfoFunction'
function FicheBox7({
  numeroMiniBox,
  infoSelectionChoixMiniBox,
  classNameDiv,
  versionProf,
  versionVue,
}: any) {
  const [input17, setInput17] = useState(
    fonctionsMiniBoxInfoJson.getInputFiche(17),
  )
  const [input18, setInput18] = useState(
    fonctionsMiniBoxInfoJson.getInputFiche(18),
  )
  const [input19, setInput19] = useState(
    fonctionsMiniBoxInfoJson.getInputFicheCheckbox(19),
  )

  const handleInput17Change = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput17(e.target.value)
  }
  const handleInput18Change = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput18(e.target.value)
  }
  const handleInput19Change = () => {
    setInput19((prevValue) => !prevValue)
  }

  useEffect(() => {
    if (!versionProf) {
      fonctionsMiniBoxInfoJson.modifierInputFiche(17, input17)
    }
  }, [input17])

  useEffect(() => {
    if (!versionProf) {
      fonctionsMiniBoxInfoJson.modifierInputFiche(18, input18)
    }
  }, [input18])

  useEffect(() => {
    if (!versionProf) {
      fonctionsMiniBoxInfoJson.modifierInputFiche(19, input19)
    }
  }, [input19])

  return (
    <div className={classNameDiv}>
      <div className="grp_travaux_realises">
        <ChoixMiniBox
          TexteInfo={'Travaux réalisés'}
          Balise={4}
          ClassName={'txt_travaux_realises'}
          numeroMiniBox={numeroMiniBox[0]}
          infoSelectionChoixMiniBox={infoSelectionChoixMiniBox}
          versionProf={versionProf}
        />
        <textarea
          rows={10}
          className="descdmd"
          onChange={handleInput17Change}
          value={input17}
          readOnly={versionVue}
        ></textarea>
      </div>
      <div className="grp_travaux_non_realises">
        <div>
          <ChoixMiniBox
            TexteInfo={'Travaux non réalisés'}
            Balise={4}
            ClassName={'txt_travaux_non_realises'}
            numeroMiniBox={numeroMiniBox[1]}
            infoSelectionChoixMiniBox={infoSelectionChoixMiniBox}
            versionProf={versionProf}
          />
          <div>
            <textarea
              rows={10}
              className="descdmd"
              onChange={handleInput18Change}
              value={input18}
              readOnly={versionVue}
            ></textarea>
          </div>
        </div>
      </div>
      <div className="nvlle_inter">
        <div className="">
          <input
            type="checkbox"
            onChange={handleInput19Change}
            checked={input19}
            disabled={versionVue}
          />
        </div>
        <ChoixMiniBox
          TexteInfo={'Nécessite une nouvelle intervention'}
          Balise={4}
          ClassName={''}
          numeroMiniBox={numeroMiniBox[2]}
          infoSelectionChoixMiniBox={infoSelectionChoixMiniBox}
          versionProf={versionProf}
        />
      </div>
    </div>
  )
}

export default FicheBox7
