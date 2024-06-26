import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './PhotoEleve.css'
const token = localStorage.getItem('token');


function PhotoEleve({ redirection, eleve }: any) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [images, setImages] = useState<ArrayBuffer[]>([])
  const [imageError, setImageError] = useState<string>('')
  const [fondEcranUrl, setFondEcranUrl] = useState<string | null>(null)

  const setRedirectionfour = () => {
    redirection(4)
  }
  const setRedirectionThristeen = () => {
    redirection(13)
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0]
    if (file) {
      setSelectedFile(file)
    }
  }

  const handleFileUpload = async () => {
    try {
      console.log('Uploading...')

      if (selectedFile && eleve.trim() !== '') {
        const formData = new FormData()
        formData.append('file', selectedFile)
        const response = await axios.post(
          'http://localhost:5000/POST/uploadImageEleve',
          formData,
          {
            params: {
              name: eleve,
              token: token,
            },
            validateStatus: function (status) {
              return status >= 200 || status == 409
            },
          },
        )

        if (response.status === 200) {
          console.log('File uploaded successfully')
        } else {
          console.error('Failed to upload file')
        }
      }
    } catch (error) {
      console.error('Error in handleUpload:', error)
    }
    redirection(4)
    redirection(13)
  }

  useEffect(() => {
    // Appeler la requête pour récupérer l'image du fond d'écran
    axios
      .get('http://localhost:5000/GET/fondecran', {
        params: {
          name: eleve,
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

  useEffect(() => {
    const getPictoInfo = async () => {
      try {
        const response = await axios.get(
          'http://localhost:5000/GET/getphotoeleve-info',
          {
            params: {
              eleve: eleve,
              token: token,
            },
          },
        )
        const { imageNames } = response.data

        // Demander chaque fichier individuellement
        const imagePromises = imageNames.map(async (imageName: string) => {
          const imagePath = `http://localhost:5000/GET/getphotoeleve-file?eleve=${encodeURIComponent(
            eleve,
          )}&name=${encodeURIComponent(imageName)}&token=${token}`
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
        console.error(
          'Erreur lors de la récupération des informations sur les images :',
          error,
        )
      }
    }

    getPictoInfo()
  }, [])

  useEffect(() => {
    // Appeler la requête pour récupérer l'image du fond d'écran
    axios
      .get('http://localhost:5000/GET/fondecran', {
        params: {
          name: eleve,
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
      <div className="global_bouton_interface_élève">
        <div>
          <div className="content_espace__take_photo_eleve">
            <label htmlFor="fileInput" className={`custom-file-upload`}>
              {selectedFile
                ? `Fichier sélectionné: ${selectedFile.name}`
                : 'Choisir une photo'}
              <input
                type="file"
                id="fileInput"
                accept="image/*"
                onChange={handleFileChange}
                style={{ display: 'none' }}
              />
            </label>
            <img
              src={require('./telecharger.png')}
              alt="Télécharger une photo"
              onClick={handleFileUpload}
              className={`button_photo ${selectedFile ? 'selected' : ''}`}
            />
          </div>
        </div>
        <div>
          <div className='global_txt_espace_élève'>
            <h2 className="txt_photo_eleve_all">Liste de mes photos :</h2>
          </div>
          <div className="picto-container">
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
        </div>
        <button onClick={setRedirectionfour} className="button_retour">
          Retour
        </button>
      </div>
    </>
  )
}

export default PhotoEleve
