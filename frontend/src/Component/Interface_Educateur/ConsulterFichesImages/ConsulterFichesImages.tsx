import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './ConsulterFichesImages.css'
import FicheEleve from './FicheEleve/FicheEleve'

function ConsulterFichesImages({ redirection, IdConnecter }: any) {
  const setRedirectionTwo = () => {
    redirection(2)
  }

  const [eleves, setEleves] = useState<any[]>([])
  const [eleveSelectionne, setEleveSelectionne] = useState<any | null>(null)
  const [voirphoto, setVoirPhoto] = useState<boolean>(false)
  const [voirFiche, setVoirFiche] = useState<boolean>(false)
  const [images, setImages] = useState<ArrayBuffer[]>([])
  const [imageError, setImageError] = useState<string>('')
  const [prenomEleveSelectionne, setPrenomEleveSelectionne] = useState(String)
  const [nomEleveSelectionne, setNomEleveSelectionne] = useState(String)

  const setVoirFicheFalse = () => {
    setVoirFiche(false)
  }

  useEffect(() => {
    const getEleve = () => {
      axios
        .get(`http://localhost:5000/GET/allEleve`)
        .then((response) => {
          setEleves(response.data)
        })
        .catch((error) => {
          console.error('erreur : ', error)
        })
    }

    getEleve()
  }, [])

  const handleSelectionEleve = async (eleve: any) => {
    setEleveSelectionne(eleve)
    await setNomEleveSelectionne(eleve.nom)
    await setPrenomEleveSelectionne(eleve.prenom)
  }

  useEffect(() => {
    if (voirphoto && eleveSelectionne) {
      setImageError('')
      const getPictoInfo = async () => {
        try {
          const response = await axios.get(
            'http://localhost:5000/GET/getphotoeleve-info',
            {
              params: {
                eleve: eleveSelectionne.nom + eleveSelectionne.prenom,
              },
            },
          )
          const { imageNames } = response.data

          // Demander chaque fichier individuellement
          const imagePromises = imageNames.map(async (imageName: string) => {
            const imagePath = `http://localhost:5000/GET/getphotoeleve-file?eleve=${encodeURIComponent(
              eleveSelectionne.nom + eleveSelectionne.prenom,
            )}&name=${encodeURIComponent(imageName)}`
            const imageResponse = await axios.get(imagePath, {
              responseType: 'arraybuffer',
            })

            // Stocker les données binaires de l'image
            return imageResponse.data
          })

          // Attendre que toutes les promesses soient résolues
          const images = await Promise.all(imagePromises)

          // Mettre à jour l'état avec les données binaires des images
          setImages(images)
        } catch (error) {
          if (
            (error as any).response &&
            (error as any).response.status === 500
          ) {
            setImages([])
            setImageError('Aucune image trouvée')
          } else {
            console.error(
              'Erreur lors de la récupération des informations sur les images :',
              error,
            )
          }
        }
      }

      getPictoInfo()
    }
  }, [voirphoto, eleveSelectionne])

  const handleVoirPhototrue = () => {
    setVoirPhoto(true)
  }

  const handleVoirPhotofalse = () => {
    setVoirPhoto(false)
  }

  const handleFicheTrue = () => {
    setVoirFiche(true)
  }

  return (
    <div>
      {!voirphoto && !voirFiche ? (
        <div>
        <div className="custom_global_affecter_fiche">
          <h1 className="custom_titleh1">Consulter Fiches/Images d'un élève</h1>
          <h2 className="custom_title">Liste des élèves</h2>
          <ul>
            {eleves.map((eleve) => (
              <li
                key={eleve.id}
                onClick={() => handleSelectionEleve(eleve)}
                style={{
                  cursor: 'pointer',
                  fontWeight: eleve === eleveSelectionne ? 'bold' : 'normal',
                }}
              >
                {eleve.nom} {eleve.prenom}
              </li>
            ))}
          </ul>
          <div>
            {eleveSelectionne && (
              <div className="custom_eleve_selec">
                <h3>Élève sélectionné :</h3>
                <p>
                  {eleveSelectionne.nom} {eleveSelectionne.prenom}
                </p>
                <div className="custom_button_choose">
                  <button
                    className="custom_affecter_fiche_eleve"
                    onClick={handleVoirPhototrue}
                  >
                    Voir les photos
                  </button>
                  <button
                    className="custom_affecter_fiche_eleve"
                    onClick={handleFicheTrue}
                  >
                    Voir les fiches
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        <button className="retour_liste_fiches" onClick={setRedirectionTwo}>
            Retour
          </button>
      </div>
      ) : null}

      {voirphoto && (
        <div>
          <div className='global_liste_photo_eleve'>
            <h2 className="liste_photo_eleve">Liste des photos :</h2>
          </div>
          <div className="global-vu-picto">
            <div className="picto-container-vue">
              {imageError && <p className="error-message">{imageError}</p>}
              {images.map((imageData, index) => (
                <img
                  key={index}
                  src={`data:image/webp;base64,${btoa(
                    new Uint8Array(imageData).reduce(
                      (data, byte) => data + String.fromCharCode(byte),
                      '',
                    ),
                  )}`}
                  alt={`Pictogramme ${index}`}
                  style={{ maxWidth: '200px', maxHeight: '200px' }}
                />
              ))}
            </div>
            <button className="retour" onClick={handleVoirPhotofalse}>
              Retour
            </button>
          </div>
        </div>
      )}
      {voirFiche ? (
        <div>
          <FicheEleve
            prenomEleve={prenomEleveSelectionne}
            nomEleve={nomEleveSelectionne}
            setVoirFicheFalse={setVoirFicheFalse}
            IdConnecter={IdConnecter}
          />
        </div>
      ) : null}
    </div>
  )
}

export default ConsulterFichesImages
