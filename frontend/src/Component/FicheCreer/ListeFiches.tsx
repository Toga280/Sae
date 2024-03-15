import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './ListeFiches.css'
import fonctionsMiniBoxInfoJson from '../CreationFiche/MiniBoxInfoFunction'
import AffecterListe from './AffecterListe'
const token = localStorage.getItem('token');

function ListeFiches({ redirection, refreshFiche, identifiant }: any) {
  const [FichesNames, setFichesNames] = useState<string[]>([])
  const [affichageAffecterListe, setAffichageAffecterListe] = useState(false)
  const [nomFicheSelectionner, setNomFicheSelectionner] = useState('')
  const [eleveAffecte, setEleveAffecte] = useState<
    Record<string, string | undefined>
  >({})
  const [ficheexiste, setFicheexiste] = useState<boolean>(false)
  const [fondEcranUrl, setFondEcranUrl] = useState<string | null>(null)

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
          )}&token=${token}`,
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
        )}&token=${token}`,
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
          className={`affecter_fiche_crée ${eleveAffecte[item] && eleveAffecte[item] !== 'personne' ? 'attribué' : 'non_attribué'}`}
          onClick={() => affecterFiche(item)}
          disabled={!!(eleveAffecte[item] && eleveAffecte[item] !== 'personne')}
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
              console.log("post test name fiche "+ficheexiste)
              if (ficheexiste === false) {
                console.log("avant rename")
                modifnomfiche(item, newNom)
              } else {
                console.log("avant alert")
                alert(
                  'Une fiche avec ce nom existe déjà. Veuillez choisir un autre nom.',
                )
              }
            }
          }}
        />
        <p className='fiche_eleve_nom_attribuer'> Fiche attribuée à : {eleveAffecte[item]}</p>
      </div>
    )
  })

  const allFicheNames = () => {
    axios
      .get('http://localhost:5000/GET/allFicheNames', {
        params: {
          token: token
        }
      })
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
        )}`,{params: {token: token}}
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
        token: token,
      })
    } catch (error) {
      console.error(error)
    }
    redirection(2)
    redirection(6)
  }

  const testNameFiche = async (nomFiche: string) => {
    try {
      console.log(nomFiche)
      const response = await axios.get(
        `http://localhost:5000/GET/nameFicheExiste?name=${encodeURIComponent(
          nomFiche,
        )}`,{params: {token: token}}
      )
      if (response.data) {
        console.log(response.data)
        setFicheexistetrue()
        console.log("fiche exista set a true est a "+ficheexiste)
      } else {
        console.log(response.data)
        setFicheexisteFalse()
        console.log("fiche exista set a false est a "+ficheexiste)
      }
    } catch (error) {
      console.error('Erreur lors de la requête vers le serveur :', error)
      throw error
    }
  }

  const setFicheexistetrue = () => {
    setFicheexiste(true)
    console.log("dans const fiche exista set a true est a "+ficheexiste)
  }

  const setFicheexisteFalse = () => {
    setFicheexiste(false)
    console.log("dans const fiche exista set a false est a "+ficheexiste)
  }

  const dupliquerFiche = async (nomf: string) => {
    try {
      await axios.post('http://localhost:5000/POST/ficheDuplicate', {
        name: nomf,
        token: token,
      })
    } catch (error) {
      console.error(error)
    }
    redirection(2)
    redirection(6)
  }

  useEffect(() => {
    // Appeler la requête pour récupérer l'image du fond d'écran
    axios
      .get('http://localhost:5000/GET/fondecran', {
        params: {
          name: identifiant,
          token: token,
        },
        responseType: 'arraybuffer',
      })
      .then((response) => {
        const base64 = btoa(
          new Uint8Array(response.data).reduce(
            (data, byte) => data + String.fromCharCode(byte),
            '',
          ),
        )
        const url = `data:${response.headers[
          'content-type'
        ].toLowerCase()};base64,${base64}`
        setFondEcranUrl(url)
      })
      .catch((error) => console.error(error))
  }, [])

  return (
    <>
      {fondEcranUrl && (
        <style>
          {`
          body {
            background-image: url(${fondEcranUrl});
            background-size: cover;
            background-repeat: no-repeat;
          }
        `}
        </style>
      )}
      <div>
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

        </div>
        <button
            className="bouton_retour_liste_fiche_crée_edu"
            onClick={setRedirectionTwo}
          >
            Retour
          </button>
      </div>
    </>
  )
}

export default ListeFiches
