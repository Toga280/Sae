import React, { useEffect, useState } from 'react'
import ChoixMiniBox from './MiniBoxChoix/ChoixMiniBox'
import '../../style/ficheGlobal.css'
import '../../style/fiche4.css'
import fonctionsMiniBoxInfoJson from './MiniBoxInfoFunction'

function FicheBox4({
  numeroMiniBox,
  infoSelectionChoixMiniBox,
  classNameDiv,
  versionProf,
  versionVue,
}: any) {
  const [input8, setInput8] = useState(
    fonctionsMiniBoxInfoJson.getInputFiche(8),
  )
  const [input9, setInput9] = useState(
    fonctionsMiniBoxInfoJson.getInputFiche(9),
  )

  const handleInput8Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput8(e.target.value)
  }

  const handleInput9Change = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setInput9(e.target.value)
  }

  useEffect(() => {
    if (!versionProf) {
      fonctionsMiniBoxInfoJson.modifierInputFiche(8, input8)
    }
  }, [input8])

  useEffect(() => {
    if (!versionProf) {
      fonctionsMiniBoxInfoJson.modifierInputFiche(9, input9)
    }
  }, [input9])

  return (
    <div className={classNameDiv}>
      <div className="grp_intervention">
        <ChoixMiniBox
          TexteInfo={"Date d'intervention"}
          Balise={1}
          ClassName={''}
          numeroMiniBox={numeroMiniBox[0]}
          infoSelectionChoixMiniBox={infoSelectionChoixMiniBox}
          versionProf={versionProf}
        />
        <input
          type="text"
          className="TextInput"
          onChange={handleInput8Change}
          value={input8}
          readOnly={versionVue}
        />
        <ChoixMiniBox
          TexteInfo={"Durée de l'opération"}
          Balise={1}
          ClassName={'duree_operation'}
          numeroMiniBox={numeroMiniBox[1]}
          infoSelectionChoixMiniBox={infoSelectionChoixMiniBox}
          versionProf={versionProf}
        />
        <div>
          <select
            className="selecteur_duree"
            onChange={handleInput9Change}
            value={input9}
            disabled={versionVue}
          >
            <option>-- Choisir une durée --</option>
            <option>00h15</option>
            <option>00h30</option>
            <option>00h45</option>
            <option>01h00</option>
            <option>01h15</option>
            <option>01h30</option>
            <option>01h45</option>
            <option>02h00</option>
            <option>02h15</option>
            <option>02h30</option>
            <option>02h45</option>
            <option>03h00</option>
            <option>03h15</option>
            <option>03h30</option>
            <option>03h45</option>
            <option>04h00</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default FicheBox4
