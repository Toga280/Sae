import React, { useEffect, useState } from 'react'
import '../../style/fiche3.css'
import '../../style/ficheGlobal.css'
import ChoixMiniBox from './MiniBoxChoix/ChoixMiniBox'
import fonctionsMiniBoxInfoJson from './MiniBoxInfoFunction'
function FicheBox3({
  numeroMiniBox,
  infoSelectionChoixMiniBox,
  classNameDiv,
  versionProf,
  versionVue,
}: any) {
  const [input3, setInput3] = useState(
    fonctionsMiniBoxInfoJson.getInputFiche(3),
  )
  const [input4, setInput4] = useState(
    fonctionsMiniBoxInfoJson.getInputFiche(4),
  )
  const [input5, setInput5] = useState(
    fonctionsMiniBoxInfoJson.getInputFiche(5),
  )
  const [input6, setInput6] = useState(
    fonctionsMiniBoxInfoJson.getInputFiche(6),
  )
  const [input7, setInput7] = useState(
    fonctionsMiniBoxInfoJson.getInputFiche(7),
  )

  const handleInput3Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput3(e.target.value)
  }

  const handleInput4Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput4(e.target.value)
  }

  const handleInput5Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput5(e.target.value)
  }

  const handleInput6Change = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput6(e.target.value)
  }

  const handleInput7Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput7(e.target.value)
  }

  useEffect(() => {
    if (versionProf) {
      fonctionsMiniBoxInfoJson.modifierInputFiche(3, input3)
    }
  }, [input3])

  useEffect(() => {
    if (versionProf) {
      fonctionsMiniBoxInfoJson.modifierInputFiche(4, input4)
    }
  }, [input4])

  useEffect(() => {
    if (versionProf) {
      fonctionsMiniBoxInfoJson.modifierInputFiche(5, input5)
    }
  }, [input5])

  useEffect(() => {
    if (versionProf) {
      fonctionsMiniBoxInfoJson.modifierInputFiche(6, input6)
    }
  }, [input6])

  useEffect(() => {
    if (versionProf) {
      fonctionsMiniBoxInfoJson.modifierInputFiche(7, input7)
    }
  }, [input7])

  return (
    <div className={classNameDiv}>
      <div className="grp3">
        <div className="grp_demande">
          <ChoixMiniBox
            TexteInfo={'Nom du demandeur'}
            Balise={1}
            ClassName={'name_demandeur'}
            numeroMiniBox={numeroMiniBox[0]}
            infoSelectionChoixMiniBox={infoSelectionChoixMiniBox}
            versionProf={versionProf}
          />
          <div>
            {!versionProf ? (
              <input
                type="text"
                className="TextInput"
                onChange={handleInput3Change}
                value={input3}
                readOnly={true}
              />
            ) : (
              <input
                type="text"
                className="TextInput"
                onChange={handleInput3Change}
                value={input3}
                readOnly={versionVue}
              />
            )}
          </div>
        </div>
        <div className="grp_demande">
          <ChoixMiniBox
            TexteInfo={'Date de la demande'}
            Balise={1}
            ClassName={'date_localisation'}
            numeroMiniBox={numeroMiniBox[1]}
            infoSelectionChoixMiniBox={infoSelectionChoixMiniBox}
            versionProf={versionProf}
          />
          {!versionProf ? (
            <input
              type="text"
              className="TextInput"
              onChange={handleInput4Change}
              value={input4}
              readOnly={true}
            />
          ) : (
            <input
              type="text"
              className="TextInput"
              onChange={handleInput4Change}
              value={input4}
              readOnly={versionVue}
            />
          )}

          <ChoixMiniBox
            TexteInfo={'Localisation'}
            Balise={1}
            ClassName={'locali_localisation'}
            numeroMiniBox={numeroMiniBox[2]}
            infoSelectionChoixMiniBox={infoSelectionChoixMiniBox}
            versionProf={versionProf}
          />
          {!versionProf ? (
            <input
              type="text"
              className="TextInput"
              onChange={handleInput5Change}
              value={input5}
              readOnly={true}
            />
          ) : (
            <input
              type="text"
              className="TextInput"
              onChange={handleInput5Change}
              value={input5}
              readOnly={versionVue}
            />
          )}
        </div>
        <div className="grp_demande">
          <ChoixMiniBox
            TexteInfo={'Description de la demande'}
            Balise={1}
            ClassName={'description_demande'}
            numeroMiniBox={numeroMiniBox[3]}
            infoSelectionChoixMiniBox={infoSelectionChoixMiniBox}
            versionProf={versionProf}
          />
        </div>
        <div>
          {!versionProf ? (
            <textarea
              rows={10}
              className="descdmd"
              onChange={handleInput6Change}
              value={input6}
              readOnly={true}
            ></textarea>
          ) : (
            <textarea
              rows={10}
              className="descdmd"
              onChange={handleInput6Change}
              value={input6}
              readOnly={versionVue}
            ></textarea>
          )}
        </div>
        <div className="grp_demande">
          <ChoixMiniBox
            TexteInfo={"Degré d'urgence"}
            Balise={1}
            ClassName={'txt_urgence'}
            numeroMiniBox={numeroMiniBox[4]}
            infoSelectionChoixMiniBox={infoSelectionChoixMiniBox}
            versionProf={versionProf}
          />
          <div>
            {!versionProf ? (
              <input
                type="text"
                className="TextInput"
                onChange={handleInput7Change}
                value={input7}
                readOnly={true}
              />
            ) : (
              <input
                type="text"
                className="TextInput"
                onChange={handleInput7Change}
                value={input7}
                readOnly={versionVue}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FicheBox3
