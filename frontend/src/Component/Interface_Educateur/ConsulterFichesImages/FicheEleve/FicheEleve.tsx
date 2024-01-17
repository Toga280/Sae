import axios from 'axios'
import React, { useEffect, useState } from 'react'
import fonctionsMiniBoxInfoJson from '../../../CreationFiche/MiniBoxInfoFunction'
import FicheBoxTotal from '../../../CreationFiche/FicheBoxTotal'
import "./FicheEleve.css";
function FicheEleve({ nomEleve, prenomEleve, setVoirFicheFalse }: any) {
  const [ficheEnCour, SetFicheEnCour] = useState(String)
  const [ficheTerminee, SetFicheTerminee] = useState<string[]>([])
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
        SetFicheTerminee(response.data)
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
    <div className="global_consultation_fiche">
      {!voirFiche ? (
        <>
          <div className='section fiche_en_cours'>
            <p className='section_title'>Fiche en cours</p>
            <div onClick={consulterFicheEnCour} className='fiche_container nom_fiche'>
              <div className='fiche_nom'>{ficheEnCour}</div>
              <textarea
                className="fiche_commentaire input_commenter_fiche"
                placeholder="Commentaires"
              />
            </div>
          </div>
          <div className='section fiche_fini'>
            <p className='section_title'>Fiche(s) finie(s)</p>
            {ficheTerminee.map((fiche, index) => (
              <div key={index} onClick={() => consulterFicheTerminee(fiche)} className='fiche_container nom_fiche'>
                <div className='fiche_nom'>{fiche}</div>
                <textarea
                  className="fiche_commentaire input_commenter_fiche"
                  placeholder="Commentaires"
                />
              </div>
            ))}
          </div>
          <button
            className="bouton_retour interaction_edu"
            onClick={setVoirFicheFalse}
          >
            Retour
          </button>
        </>
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
