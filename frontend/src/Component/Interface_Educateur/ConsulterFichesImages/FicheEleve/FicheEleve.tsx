import axios, { all } from 'axios'
import React, { useEffect, useState } from 'react'
import fonctionsMiniBoxInfoJson from '../../../CreationFiche/MiniBoxInfoFunction'
import FicheBoxTotal from '../../../CreationFiche/FicheBoxTotal'
import './FicheEleve.css'
const image = require('../../../CreationFiche/MiniBoxChoix/tts.webp')
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
  const [isPlaying, setIsPlaying] = useState(false)
  const [informationSuplementaire, setInformationSuplementaire] =
    useState(String)

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
    setFicheSelected(name)
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

  const GetInformationSupplementaire = async () => {
    axios
      .get(
        `http://localhost:5000/GET/info/informationSuplementaire?ficheName=${ficheSelected}`,
      )
      .then((response) => {
        console.log('GetInformationSupplementaire --> ', response.data)
        setInformationSuplementaire(response.data)
      })
      .catch((error) => {
        console.error('Erreur --> ', error)
      })
  }

  useEffect(() => {
    getFicheInProgressEleve()
    getFicheCompletedEleve()
  }, [])

  useEffect(() => {
    if (ficheSelected) {
      GetAllCommentaire(ficheSelected)
      GetInformationSupplementaire()
    }
  }, [ficheSelected])

  const lireTexte = (texte: string) => {
    if (!isPlaying) {
      setIsPlaying(true)
      const syntheseVocale = new SpeechSynthesisUtterance(texte)
      syntheseVocale.lang = 'fr-FR'
      syntheseVocale.onend = () => setIsPlaying(false)
      window.speechSynthesis.speak(syntheseVocale)
    }
  }

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
              <div className="all_commentaire">
                {informationSuplementaire ? (
                  <div>
                    <h1 className="add_com">
                      Informations supplémentaires de la fiche
                    </h1>
                    <textarea readOnly className="text_area_commentaire_fiche">
                      {informationSuplementaire}
                    </textarea>
                  </div>
                ) : null}

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
                <div key={index} className="global_all_commentaire">
                  <span className="commentateur_fiche">
                    {commentaire.idCommentateur}
                  </span>
                  :
                  <span className="commentaire_fiche_txt">
                    {commentaire.contenu}
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    {/* Bouton pour lire le texte en audio */}
                    <button
                      onClick={() => lireTexte(commentaire.contenu)}
                      disabled={isPlaying}
                      style={{ marginLeft: '10px' }}
                    >
                      <img
                        src={image}
                        alt="Lire en audio"
                        style={{ width: '24px', height: '24px' }}
                      />
                    </button>
                  </div>
                </div>
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
