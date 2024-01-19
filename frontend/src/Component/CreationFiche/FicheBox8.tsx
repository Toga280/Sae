import React, { useState } from 'react'
import '../../style/fiche8.css'
import '../../style/ficheGlobal.css'
import PageSelect from './PageSelect'
import SelectsAffichage from './SelectsAffichage'
import fonctionsMiniBoxInfoJson from './MiniBoxInfoFunction'
import PageSelectElec from './PageSelect Elec'
import PageSelectFinition from './PageSelect Finition'
function FicheBox8({ classNameDiv, versionVue, versionProf }: any) {
  const [select, setSelect] = useState(false)
  const [numMat, setNumMat] = useState(String)
  

  
  return (
    <div className={classNameDiv}>
      <button onClick={fonctionsMiniBoxInfoJson.getTypeFiche}></button>
      {select && !versionVue && fonctionsMiniBoxInfoJson.getTypeFiche() === "Pomberie" ? (
        <PageSelect setSelect={setSelect} numMat={numMat} />
      ) : select && !versionVue && fonctionsMiniBoxInfoJson.getTypeFiche() === "Electricité" ? (
        <PageSelectElec setSelect={setSelect} numMat={numMat} />
      ):select && !versionVue && fonctionsMiniBoxInfoJson.getTypeFiche() === "Finition" ? (
        <PageSelectFinition setSelect={setSelect} numMat={numMat} />
      ):(
        <SelectsAffichage
          setSelect={setSelect}
          setNumMat={setNumMat}
          versionProf={versionProf}
        />
      )}
    </div>
  )
}

export default FicheBox8
