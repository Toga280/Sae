import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './ListeFiches.css'
import fonctionsMiniBoxInfoJson from '../CreationFiche/MiniBoxInfoFunction'
import AffecterListe from './AffecterListe'

function ListeFiches({ redirection, refreshFiche }: any) {
  const [FichesNames, setFichesNames] = useState<string[]>([])
  const [affichageAffecterListe, setAffichageAffecterListe] = useState(false)
  const [nomFicheSelectionner, setNomFicheSelectionner] = useState('')
  const [eleveAffecte, setEleveAffecte] = useState<
    Record<string, string | undefined>
  >({})
  const [ficheexiste, setFicheexiste] = useState(false)

  const setAffichageAffecterListeFalse = () => {
    setAffichageAffecterListe(false)
  }

  const deleteFiche = (nomFiche: string) => {
    const confirmation = window.confirm(
      `Êtes-vous sûr de vouloir supprimer cette fiche ${nomFiche} ?`,
    )

    if (confirmation) {
      axios
        .get(
          `http://localhost:5000/DELETE/ficheName?name=${encodeURIComponent(
            nomFiche,
          )}`,
        )
        .then((response) => {
          if (response.data) {
            setFichesNames((prevFiches) =>
              prevFiches.filter((fiche) => fiche !== nomFiche),
            )
          }
        })
        .catch((error) => {
          console.error('Erreur lors de la requête vers le serveur :', error)
        })
    }
  }

  const affecterFiche = (item: string) => {
    setAffichageAffecterListe(true)
    setNomFicheSelectionner(item)
  }

  const getEleveAffecteAsync = async (nomf: string) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/GET/eleveAffecter?ficheName=${encodeURIComponent(
          nomf,
        )}`,
      )
      return response.data
    } catch (error) {
      console.error('Erreur lors de la requête vers le serveur :', error)
      return ''
    }
  }

  useEffect(() => {
    const fetchData = async (itemName: string) => {
      try {
        const data = await getEleveAffecteAsync(itemName)
        setEleveAffecte((prevData) => ({
          ...prevData,
          [itemName]: data, // Use itemName as a key to store the data for each item
        }))
      } catch (error) {
        console.error('Erreur lors de la requête vers le serveur :', error)
      }
    }

    // Fetch data for each item in FichesNames
    FichesNames.forEach((itemName) => {
      fetchData(itemName)
    })
  }, [FichesNames]) // Depend on FichesNames to trigger the effect when it changes

  const elements = FichesNames.sort().map((item, index) => {
    return (
      <div className="global_liste_nom_fiches_crée" key={index}>
        <div
          className="liste_nom_fiches_crée"
          onClick={() => SetUpModificationFiche(item)}
        >
          {item}
        </div>
        <img
          src={require('./delete-icon.png')}
          alt="delete-icon"
          className="delete-icon"
          style={{ width: '30px', height: '40px', cursor: 'pointer' }}
          onClick={() => deleteFiche(item)}
        />
        <button
          className="affecter_fiche_crée"
          onClick={() => affecterFiche(item)}
        >
          Affecter
        </button>
        <img
          src={require('./dupliquer.webp')}
          className="autre-icon"
          style={{ width: '30px', height: '40px', cursor: 'pointer' }}
          onClick={() => dupliquerFiche(item)}
        />
        <img
          src={require('./modifier.webp')}
          style={{ width: '30px', height: '30px', cursor: 'pointer' }}
          className="autre-icon"
          onClick={async () => {
            const newNom = prompt('Entrez le nouveau nom de la fiche :')
            if (newNom !== null) {
              await testNameFiche(newNom)
              if (ficheexiste === true) {
                modifnomfiche(item, newNom)
              } else {
                alert(
                  'Une fiche avec ce nom existe déjà. Veuillez choisir un autre nom.',
                )
              }
            }
          }}
        />
        <p> Fiche attribuée à : {eleveAffecte[item]}</p>
      </div>
    )
  })

  const allFicheNames = () => {
    axios
      .get('http://localhost:5000/GET/allFicheNames')
      .then((response) => {
        setFichesNames(response.data)
      })
      .catch((error) => {
        console.error('Erreur lors de la requête vers le serveur :', error)
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
    } catch (error) {
      console.error('Erreur lors de la requête vers le serveur :', error)
    }
  }

  const SetUpModificationFiche = async (item: string) => {
    await FicheNames(item)
    refreshFiche()
    redirection(3)
  }

  useEffect(() => {
    allFicheNames()
  }, [])

  const setRedirectionTwo = () => {
    redirection(2)
  }

  const modifnomfiche = async (oldnom: string, newnom: string) => {
    if (newnom === '') {
      alert(
        "Le nom de la fiche ne peut pas être vide, le nom n'a pas été modifié",
      )
    }

    try {
      await axios.post(`http://localhost:5000/POST/ficheUpdateName`, {
        name: oldnom,
        newName: newnom,
      })
    } catch (error) {
      console.error(error)
    }
    redirection(2)
    redirection(6)
  }

  const testNameFiche = async (nomFiche: string) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/GET/nameFicheExiste?name=${encodeURIComponent(
          nomFiche,
        )}`,
      )
      if (response.data) {
        setFicheexiste(true)
      } else {
        setFicheexiste(false)
      }
    } catch (error) {
      console.error('Erreur lors de la requête vers le serveur :', error)
      throw error
    }
  }

  const dupliquerFiche = async (nomf: string) => {
    try {
      await axios.post('http://localhost:5000/POST/ficheDuplicate', {
        name: nomf,
      })
    } catch (error) {
      console.error(error)
    }
    redirection(2)
    redirection(6)
  }

  useEffect(() => {}, [])

  return (
    <div>
      {affichageAffecterListe === true ? (
        <AffecterListe
          setAffichageAffecterListeFalse={setAffichageAffecterListeFalse}
          nomFicheSelectionner={nomFicheSelectionner}
          redirection={redirection}
        />
      ) : (
        <div className="global_all_fiche">
          <h1 className="titre_h1_fiche_crée">Liste de vos fiches :</h1>
          {elements}
        </div>
      )}
      <button
        className="bouton_retour_liste_fiche_crée_edu"
        onClick={setRedirectionTwo}
      >
        Retour
      </button>
    </div>
  )
}

export default ListeFiches
