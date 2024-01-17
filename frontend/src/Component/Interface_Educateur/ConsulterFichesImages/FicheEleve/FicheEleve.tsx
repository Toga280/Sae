import axios from 'axios'
import React, { useEffect, useState } from 'react'
import fonctionsMiniBoxInfoJson from '../../../CreationFiche/MiniBoxInfoFunction'
import FicheBoxTotal from '../../../CreationFiche/FicheBoxTotal'

function FicheEleve({ nomEleve, prenomEleve, setVoirFicheFalse }: any) {
  const [ficheEnCour, SetFicheEnCour] = useState(String)
  const [ficheTerminee, SetFicheTerminee] = useState<string[]>([])
  const [aucuneFicheTerminee, setAucuneFicheTerminee] = useState<boolean>(false)
  const [voirFiche, setVoirFiche] = useState(Boolean)

  const consulterFicheEnCour = async () => {
    await FicheNames(ficheEnCour)
  }

  const consulterFicheTerminee = async (name: string) => {
    await FicheNames(name)
  }

  const getFicheInProgressEleve = () => {
    axios
      .get(
        `http://localhost:5000/GET/eleve/FicheInProgress?nom=${nomEleve}&prenom=${prenomEleve}`,
      )
      .then((response) => {
        SetFicheEnCour(response.data)
      })
      .catch((error) => {
        console.error(
          'Erreur lors de la récupération des noms des fiches en cours :',
          error,
        )
      })
  }

  const getFicheCompletedEleve = () => {
    axios
      .get(
        `http://localhost:5000/GET/eleve/FicheCompleted?nom=${nomEleve}&prenom=${prenomEleve}`,
      )
      .then((response) => {
        if (response.data === 'Aucune fiche terminée trouvée') {
          setAucuneFicheTerminee(true)
        } else {
          SetFicheTerminee(response.data)
        }
      })
      .catch((error) => {
        console.error(
          'Erreur lors de la récupération des noms des fiches terminées :',
          error,
        )
      })
  }

  const FicheNames = async (nameValue: string) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/GET/nameFiche?name=${encodeURIComponent(
          nameValue,
        )}`,
      )
      fonctionsMiniBoxInfoJson.setNewJson(response.data)
      setVoirFiche(true)
    } catch (error) {
      console.error('Erreur lors de la requête vers le serveur :', error)
    }
  }

  useEffect(() => {
    getFicheInProgressEleve()
    getFicheCompletedEleve()
  }, [])

  return (
    <div>
      {!voirFiche ? (
        <div>
          <p>Fiche en cour</p>
          <div onClick={consulterFicheEnCour}>{ficheEnCour}</div>
          <p>Fiche(s) fini</p>
          {!aucuneFicheTerminee ? (
            ficheTerminee.map((ficheTerminee) => (
              <div onClick={() => consulterFicheTerminee(ficheTerminee)}>
                {ficheTerminee}
              </div>
            ))
          ) : (
            <p>aucune fiche trouvée</p>
          )}
          <button
            className="boutton_retour_interaction_edu"
            onClick={setVoirFicheFalse}
          >
            Retour
          </button>
        </div>
      ) : (
        <FicheBoxTotal
          versionProf={false}
          versionVue={true}
          redirection={setVoirFiche}
        />
      )}
    </div>
  )
}
export default FicheEleve
