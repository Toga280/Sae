import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../../ConnectionPage/pageConnection.css'
import './ArchiverProfil.css'
function ConnectionEleve({ redirection, identifiant }: any) {
  const redirectionTwo = () => {
    redirection(2)
  }
  const [eleves, setEleves] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [studentImages, setStudentImages] = useState<string[]>([])
  const [fondEcranUrl, setFondEcranUrl] = useState<string | null>(null)

  const getEleve = () => {
    axios
      .get(`http://192.168.120.71:5000/GET/allEleve`)
      .then((response) => {
        setEleves(response.data)
      })
      .catch((error) => {
        console.error('erreur : ', error)
      })
  }

  const getStudentImages = async () => {
    try {
      setLoading(true)
      const responses = await Promise.all(
        eleves.map(async (eleve: any) => {
          const imageName = `${eleve.nom}${eleve.prenom}.webp`
          console.log("Recherche de l'image :", imageName)
          try {
            const imagePath = `http://192.168.120.71:5000/GET/piceleve?name=${encodeURIComponent(
              imageName,
            )}`
            const response = await axios.get(imagePath, {
              responseType: 'arraybuffer',
            })

            const imageData = `data:image/webp;base64,${btoa(
              new Uint8Array(response.data).reduce(
                (data, byte) => data + String.fromCharCode(byte),
                '',
              ),
            )}`

            return imageData
          } catch (error) {
            console.error(
              `Erreur lors de la récupération de l'image pour ${eleve.prenom} ${eleve.nom} :`,
              error,
            )
            return ''
          }
        }),
      )

      setStudentImages(responses.filter((image) => !!image))
    } catch (error) {
      console.error(
        'Erreur lors de la récupération des images des étudiants :',
        error,
      )
      setStudentImages([])
    } finally {
      setLoading(false)
    }
  }

  const archiverEleve = (nom: String, prenom: String) => {
    const confirmation = window.confirm(
      `Êtes-vous sûr de vouloir archiver ${prenom} ?`,
    )
    if (confirmation) {
      axios
        .post('http://192.168.120.71:5000/POST/archiverEleve', { nom, prenom })
        .then((response) => {
          getEleve()
        })
        .catch((error) => {
          console.error('error : ', error)
        })
    }
  }

  useEffect(() => {
    getEleve()
  }, [])

  useEffect(() => {
    const loadStudentImages = async () => {
      await getStudentImages()
    }

    if (eleves.length > 0) {
      loadStudentImages()
    }
  }, [eleves])

  useEffect(() => {
    // Appeler la requête pour récupérer l'image du fond d'écran
    axios
      .get('http://192.168.120.71:5000/GET/fondecran', {
        params: {
          name: identifiant,
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
        <div className="general_login">
          {eleves.map((eleve, index) => (
            <div className="login-container" key={index}>
              {loading ? (
                <div className="loading-spinner">Chargement...</div>
              ) : studentImages[index] ? (
                <img
                  className="user-photo"
                  src={studentImages[index]}
                  alt={`Portrait de ${eleve.prenom} ${eleve.nom}`}
                />
              ) : (
                <div className="error-message">image non présente</div>
              )}
              <div className="user-name">{`${eleve.prenom} ${eleve.nom}`}</div>
              <button
                className="archiver-button"
                onClick={() => archiverEleve(eleve.nom, eleve.prenom)}
              >
                Archiver
              </button>
            </div>
          ))}

          {redirection}
        </div>
      </div>
      <button className="button_retour" onClick={redirectionTwo}>
        Retour
      </button>
    </div>
    </>
  )
}

export default ConnectionEleve
