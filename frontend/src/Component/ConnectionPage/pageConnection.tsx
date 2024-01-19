import React, { useState } from 'react'
import PageLoginEducateur from './pageLoginEducateur'
import ConnectionEleve from './connectionEleve'
import './pageConnection.css'

function PageConnection({
  redirection,
  setRole,
  set1Eleve,
  setNomEleveActuelleApp,
  setPrenomEleveActuelleApp,
  setIdConnecter,
}: any) {
  const [selectBoutton, setSelectBoutton] = useState(false)
  const BoutonCliquezConnection = (etat: boolean) => {
    setSelectBoutton(etat)
  }

  return (
    <div className="">
      {!selectBoutton && (
        <button
          className="button_connection_edu"
          onClick={() => BoutonCliquezConnection(true)}
        >
          Connexion éducateur
        </button>
      )}
      {!selectBoutton && (
        <ConnectionEleve
          redirection={redirection}
          set1Eleve={set1Eleve}
          setNomEleveActuelleApp={setNomEleveActuelleApp}
          setPrenomEleveActuelleApp={setPrenomEleveActuelleApp}
        />
      )}

      {selectBoutton ? (
        <PageLoginEducateur
          redirection={redirection}
          setRole={setRole}
          setIdConnecter={setIdConnecter}
        />
      ) : null}
      {selectBoutton && (
        <button
          className="bouton_retour_connection_edu"
          onClick={() => BoutonCliquezConnection(false)}
        >
          Retour
        </button>
      )}
    </div>
  )
}

export default PageConnection
