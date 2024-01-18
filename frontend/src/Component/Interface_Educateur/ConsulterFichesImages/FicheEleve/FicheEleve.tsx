import axios, { all } from 'axios'
import React, { useEffect, useState } from 'react'
import fonctionsMiniBoxInfoJson from '../../../CreationFiche/MiniBoxInfoFunction'
import FicheBoxTotal from '../../../CreationFiche/FicheBoxTotal'
import './FicheEleve.css'
function FicheEleve({
  nomEleve,
  prenomEleve,
  setVoirFicheFalse,
  IdConnecter,
  versionEleve,
}: any) {
  const [ficheEnCour, SetFicheEnCour] = useState(String)
  const [ficheSelected, setFicheSelected] = useState(String)
  const [ficheTerminee, SetFicheTerminee] = useState<string[]>([])
  const [allCommentaire, setAllCommentaire] = useState<
    {
      contenu: string
      idCommentateur: string
    }[]
  >([])
  const [aucuneFicheTerminee, setAucuneFicheTerminee] = useState<boolean>(false)
  const [voirFiche, setVoirFiche] = useState(Boolean)
  const [contenu, setContenu] = useState(String)

  const consulterFicheEnCour = async () => {
    await FicheNames(ficheEnCour)
    setFicheSelected(ficheEnCour)
  }

  const handleTextAreaCommentaire = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setContenu(e.target.value)
  }

  const consulterFicheTerminee = async (name: string) => {
    await FicheNames(name)
    setFicheSelected(ficheEnCour)
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

  const PostCommentaire = async () => {
    axios
      .post(`http://localhost:5000/POST/commentaire`, {
        ficheName: ficheSelected,
        contenu: contenu,
        idCommentateur: IdConnecter,
      })
      .then((response) => {
        if (response.data.message === 'Commentaire ajouté avec succès') {
          GetAllCommentaire(ficheSelected)
        } else {
        }
      })
      .catch((error) => {
        console.error('Erreur --> ', error)
      })
  }

  const GetAllCommentaire = async (ficheName: string) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/GET/allCommentaire?ficheName=${ficheName}`,
      )
      setAllCommentaire(response.data.commentaires)
    } catch (error) {
      console.error('Erreur lors de la récupération des commentaires :', error)
    }
  }

  useEffect(() => {
    getFicheInProgressEleve()
    getFicheCompletedEleve()
  }, [])

  useEffect(() => {
    if (ficheSelected) {
      GetAllCommentaire(ficheSelected)
    }
  }, [ficheSelected])

  return (
    <div>
      {!voirFiche ? (
        <div className="global_consultation_fiche">
          <div className="section fiche_en_cours">
            <p className="section_title">Fiche en cours</p>
            {ficheEnCour != 'Aucune fiche trouvée' ? (
              <div
                onClick={consulterFicheEnCour}
                className="fiche_container nom_fiche"
              >
                <div className="fiche_nom">{ficheEnCour}</div>
              </div>
            ) : (
              <p className="aucune_fiche_trouvé"> aucune fiche trouvée </p>
            )}
            <div className="section fiche_fini">
              <p className="section_title">Fiche(s) finie(s)</p>
              {!aucuneFicheTerminee ? (
                ficheTerminee.map((ficheTerminee) => (
                  <div
                    onClick={() => consulterFicheTerminee(ficheTerminee)}
                    className="fiche_container nom_fiche"
                  >
                    <div className="fiche_nom">{ficheTerminee}</div>
                  </div>
                ))
              ) : (
                <p className="aucune_fiche_trouvé">aucune fiche trouvée</p>
              )}
            </div>
            <button
              className="bouton_retour interaction_edu"
              onClick={setVoirFicheFalse}
            >
              Retour
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div className="div_text_area_commentaire_fiche">
            {!versionEleve ? (
              <div>
                <h1 className="add_com">Ajouter un commentaire</h1>

                <textarea
                  className="text_area_commentaire_fiche"
                  placeholder="Commentaires"
                  onChange={handleTextAreaCommentaire}
                ></textarea>
                <button
                  className="bouton_retour interaction_edu"
                  onClick={PostCommentaire}
                >
                  Valider
                </button>
              </div>
            ) : null}
            {Array.isArray(allCommentaire) &&
              allCommentaire.map((commentaire, index) => (
                <p key={index}>
                  {commentaire.idCommentateur} : {commentaire.contenu}
                </p>
              ))}
          </div>

          <div className="fiche_version_prof">
            <FicheBoxTotal
              versionProf={false}
              versionVue={true}
              redirection={setVoirFiche}
            />
          </div>
        </div>
      )}
    </div>
  )
}
export default FicheEleve
