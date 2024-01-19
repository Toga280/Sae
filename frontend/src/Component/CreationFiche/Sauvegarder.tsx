import React, { useEffect, useState } from 'react'
import fonctionsMiniBoxInfoJson from './MiniBoxInfoFunction'
import PopUpSauvegarder from './PopUpSauvegarder'
import axios from 'axios'
import './Sauvegarder.css'

function Sauvegarder({ redirection, setSaveName }: any) {
  const [nomFiche, setNomFiche] = useState('')
  const [upPopUpSauvegarder, setUpPopUpSauvegarder] = useState(false)
  const [informationSuplementaire, setInformationSuplementaire] =
    useState(String)
  const [boutonClique, setBoutonClique] = useState(false);
    const [fondEcranUrl, setFondEcranUrl] = useState<string | null>(null)

  const handleTypeSelection = async (type: string) => {
    fonctionsMiniBoxInfoJson.modifierTypeFiche(type);
  }

  const addInformationSuplementaire = () => {
    fonctionsMiniBoxInfoJson.modifierInformationSuplementaire(
      informationSuplementaire,
    )
  }

  const handleInformationSuplementaireChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setInformationSuplementaire(e.target.value)
  }

  const handleInputChange = (event: any) => {
    setNomFiche(event.target.value)
  }

  const sauvegarde = async () => {
    fonctionsMiniBoxInfoJson.modifierNom(nomFiche)
    fonctionsMiniBoxInfoJson.changeEnCourTrue()
    addInformationSuplementaire()
    postFiche()
  }

  const postFiche = async () => {
    const data = fonctionsMiniBoxInfoJson.getAllJson()
    axios
      .post('http://localhost:5000/POST/fiche', data)
      .then((response) => {
        redirection(2)
        setSaveName(false)
        fonctionsMiniBoxInfoJson.modifierAllJsonToBase()
      })
      .catch((error) => {
        console.error('Erreur lors de la requête vers le serveur :', error)
      })
  }

  const testNameFiche = async (nomFiche: string) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/GET/nameFicheExiste?name=${encodeURIComponent(
          nomFiche,
        )}`,
      )

      if (response.data) {
        setUpPopUpSauvegarder(true)
      } else {
        sauvegarde()
      }
    } catch (error) {
      console.error('Erreur lors de la requête vers le serveur :', error)
      throw error
    }
  }

  useEffect(() => {
    fonctionsMiniBoxInfoJson.modifierInformationSuplementaire(
      informationSuplementaire,
    )
  }, [informationSuplementaire])

  return (
    <div>
      <div className="global_sauvegarder_fiche">
        <h1 className="title_choose_name_for_fiche">
          Choisir un nom pour votre fiche
        </h1>

        <h2 className="titleCommentaire">Nom de la fiche</h2>
        <input
          className="input_sauvegarder_ficheBox"
          type="text"
          placeholder="Nom de la fiche"
          value={nomFiche}
          required
          onChange={handleInputChange}
        />
        <h2 className="titleCommentaire">Type de la fiche</h2>
        <div>
          <input
            type="button"
            className="boutton_type_ficheBox"
            value="Électricité"
            onClick={() => {
              handleTypeSelection('Électricité')
              setBoutonClique(true)
              
            }}
          />
          <input
            type="button"
            className="boutton_type_ficheBox"
            value="Finition"
            onClick={() => {
              handleTypeSelection('Finition')
              setBoutonClique(true)
            }}
          />
          <input
            type="button"
            className="boutton_type_ficheBox "
            value="Plomberie"
            onClick={() => {
              handleTypeSelection('Plomberie')
              setBoutonClique(true)
            }}
          />
        </div>

        {boutonClique && (
          <div>
            <div className="commentaire">
              <h2 className="titleCommentaire">Commentaire</h2>
              <textarea
                className="input_commenter_ficheBox"
                placeholder="Informations supplémentaires"
                onChange={handleInformationSuplementaireChange}
              />
            </div>

            <input
              type="button"
              className="boutton_sauvegarder_ficheBox"
              value="Sauvegarder"
              required
              onClick={() => {
                if (nomFiche.trim() !== '') {
                  testNameFiche(nomFiche)
                } else {
                  alert(
                    'Veuillez saisir un nom pour votre fiche avant de sauvegarder.',
                  )
                }
              }}
            />

            {upPopUpSauvegarder ? (
              <PopUpSauvegarder
                setUpPopUpSauvegarder={setUpPopUpSauvegarder}
                nomFiche={nomFiche}
                sauvegarde={sauvegarde}
              />
            ) : null}
          </div>
        )}
      </div>
      <button className="retour_btn_save" onClick={() => setSaveName(false)}>
        Retour
      </button>
    </div>
  )
}

export default Sauvegarder
