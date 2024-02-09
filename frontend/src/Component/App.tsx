import React, { useState, useEffect } from 'react'
import FicheBoxTotal from './CreationFiche/FicheBoxTotal'
import FicheBoxSelected from './CreationFiche/FicheBoxSelected'
import PageConnection from './ConnectionPage/pageConnection'
import Interface from './Interface_Educateur/Interface'
import CreationProfil from './Interface_Educateur/CreationProfil/CreationProfil'
import PageEspaceEleve from './EspaceEleve/pageEspaceEleve'
import Sauvegarder from './CreationFiche/Sauvegarder'
import ListeFiches from './FicheCreer/ListeFiches'
import ArchiverProfil from './Interface_Educateur/ArchiverProfil/ArchiverProfil'
import ImportPicto from './Interface_Educateur/importpicto/importpicto'
import ListeProfilArchiver from './Interface_Educateur/ListeProfilArchiver/ListeProfilArchiver'
import ModifierMdp from './Interface_Educateur/ModifierMdp/ModifierMdp'
import PhotoEleve from './EspaceEleve/PhotoEleve/PhotoEleve'
import ConsulterFichesImages from './Interface_Educateur/ConsulterFichesImages/ConsulterFichesImages'
import ModifierRole from './Interface_Educateur/ModifierRole/ModifierRole'
import Optioneleve from './EspaceEleve/optioneleve'
import SuiviEleve from './Interface_Educateur/SuiviEleve/SuiviEleve'
import Optionprof from './Interface_Educateur/optionprof'
const noel = require('./fond/noel.png')
const halloween = require('./fond/halloween.png')

function App() {
  const [selectBox, setSelectBox] = useState(null)
  const [redirection, setRedirection] = useState(1)
  const [saveName, setSaveName] = useState(false)
  const [role, setRole] = useState(String)
  const [eleve, set1Eleve] = useState(String)
  const [background, setBackground] = useState('')
  const [nomEleveActuelleApp, setNomEleveActuelleApp] = useState(String)
  const [prenomEleveActuelleApp, setPrenomEleveActuelleApp] = useState(String)
  const [forceRefreshFiche, setForceRefreshFiche] = useState(Boolean)
  const [IdConnecter, setIdConnecter] = useState(String)
  const [identifiant, setIdentifiant] = useState(String)

  const handleSelectBoxChange = (value: any) => {
    setSelectBox(value)
  }

  const refreshFiche = () => {
    setForceRefreshFiche(!forceRefreshFiche)
  }

  useEffect(() => {
    const currentDate = new Date()
    const currentDay = currentDate.getDate()
    const currentMonth = currentDate.getMonth() + 1

    if (currentMonth <= 11 && currentMonth === 12 && currentDay >= 25) {
      setBackground(noel)
    } else if (currentMonth === 10 && currentDay <= 31 && currentDay >= 24 ) {
      setBackground(halloween)
    } else {
      setBackground('default.jpg')
    }
  }, [])

  return (
    <>
    {background && (
      <style>
        {`
          body {
            background-image: url(${background});
            background-size: cover;
            background-repeat: no-repeat;
          }
        `}
      </style>
    )}
    <div>
      {redirection === 1 && (
        <PageConnection
          redirection={setRedirection}
          setRole={setRole}
          set1Eleve={set1Eleve}
          setNomEleveActuelleApp={setNomEleveActuelleApp}
          setPrenomEleveActuelleApp={setPrenomEleveActuelleApp}
          setIdConnecter={setIdConnecter}
          identifiant={setIdentifiant}
        />
      )}
      {redirection === 2 && (
        <Interface redirection={setRedirection} role={role} identifiant={identifiant} />
      )}
      {redirection === 4 && (
        <PageEspaceEleve
          redirection={setRedirection}
          eleve={eleve}
          nomEleve={nomEleveActuelleApp}
          prenomEleve={prenomEleveActuelleApp}
        />
      )}
      {redirection === 5 && <CreationProfil redirection={setRedirection} identifiant={identifiant} />}
      {redirection === 6 && (
        <ListeFiches redirection={setRedirection} refreshFiche={refreshFiche} identifiant={identifiant} />
      )}
      {redirection === 8 && <ArchiverProfil redirection={setRedirection} identifiant={identifiant} />}
      {redirection === 9 && (
        <ModifierMdp redirection={setRedirection} role={role} identifiant={identifiant} />
      )}
      {redirection === 10 && <ImportPicto redirection={setRedirection} identifiant={identifiant} />}
      {redirection === 12 && (
        <ListeProfilArchiver redirection={setRedirection} identifiant={identifiant} />
      )}
      {redirection === 13 && (
        <PhotoEleve redirection={setRedirection} eleve={eleve} />
      )}
      {redirection === 14 && (
        <ConsulterFichesImages
          redirection={setRedirection}
          IdConnecter={IdConnecter}
          identifiant={identifiant} 
        />
      )}
      {redirection === 15 && <ModifierRole redirection={setRedirection} identifiant={identifiant} />}
      {redirection === 16 && (
        <Optioneleve redirection={setRedirection} eleve={eleve} />
      )}
      {redirection === 17 && <SuiviEleve redirection={setRedirection} identifiant={identifiant} />}
      {redirection === 18 && <Optionprof redirection={setRedirection} identifiant={identifiant} />}
      {redirection === 3 ? (
        selectBox === null ? (
          !saveName ? (
            <FicheBoxTotal
              onSelectBox={handleSelectBoxChange}
              redirection={setRedirection}
              setSaveName={setSaveName}
              versionProf={true}
              forceRefreshFiche={forceRefreshFiche}
              identifiant={identifiant}
            />
          ) : (
            <Sauvegarder
              redirection={setRedirection}
              setSaveName={setSaveName}
              identifiant={identifiant}
            />
          )
        ) : (
          <FicheBoxSelected
            numberFichBox={selectBox}
            onSelectBoxChange={handleSelectBoxChange}
            identifiant={identifiant}
          />
        )
      ) : null}
    </div>
    </>
  )
}

export default App
