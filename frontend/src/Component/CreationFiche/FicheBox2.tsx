import React, { useEffect, useState } from 'react'
import '../../style/fiche2.css'
import '../../style/ficheGlobal.css'
import ChoixMiniBox from './MiniBoxChoix/ChoixMiniBox'
import fonctionsMiniBoxInfoJson from './MiniBoxInfoFunction'
function FicheBox2({
  numeroMiniBox,
  infoSelectionChoixMiniBox,
  classNameDiv,
  versionProf,
  versionVue,
}: any) {
  const [input1, setInput1] = useState(
    fonctionsMiniBoxInfoJson.getInputFiche(1),
  )
  const [input2, setInput2] = useState(
    fonctionsMiniBoxInfoJson.getInputFiche(2),
  )

  const handleInput1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput1(e.target.value)
  }

  const handleInput2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput2(e.target.value)
  }

  useEffect(() => {
    if (!versionProf) {
      fonctionsMiniBoxInfoJson.modifierInputFiche(1, input1)
    }
  }, [input1])

  useEffect(() => {
    if (!versionProf) {
      fonctionsMiniBoxInfoJson.modifierInputFiche(2, input2)
    }
  }, [input2])

  return (
    <div className={classNameDiv}>
      <div className="fd2">
        <ChoixMiniBox
          TexteInfo={"Nom de l'intervenant"}
          Balise={1}
          ClassName={'nom_inter'}
          numeroMiniBox={numeroMiniBox[0]}
          infoSelectionChoixMiniBox={infoSelectionChoixMiniBox}
          versionProf={versionProf}
        />
        <input
          type="text"
          className="TextInput"
          onChange={handleInput1Change}
          value={input1}
          readOnly={versionVue}
        />
        <ChoixMiniBox
          TexteInfo={"Prénom de l'intervenant"}
          Balise={1}
          ClassName={'prenom_inter'}
          numeroMiniBox={numeroMiniBox[1]}
          infoSelectionChoixMiniBox={infoSelectionChoixMiniBox}
          versionProf={versionProf}
        />
        <input
          type="text"
          className="TextInput"
          onChange={handleInput2Change}
          value={input2}
          readOnly={versionVue}
        />
      </div>
    </div>
  )
}

export default FicheBox2
