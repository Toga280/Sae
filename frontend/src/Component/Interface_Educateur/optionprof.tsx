import React, { useState, useEffect } from 'react'
import './optionprof.css'
import axios from 'axios'

function Optionprof({ redirection, identifiant }: any) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [fondEcranUrl, setFondEcranUrl] = useState<string | null>(null)

  const setRedirectiontwo = () => {
    redirection(2)
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0]
    if (file) {
      setSelectedFile(file)
    }
  }

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

  const handleFileUpload = async () => {
    try {
      console.log('Uploading...')

      if (selectedFile && identifiant.trim() !== '') {
        const formData = new FormData()
        formData.append('file', selectedFile)
        const response = await axios.post(
          'http://192.168.120.71:5000/POST/uploadfondecran',
          formData,
          {
            params: {
              name: identifiant,
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
    redirection(2)
  }

  const handlesupprimer = async () => {
    try {
      console.log('Suppression...')

      if (identifiant.trim() !== '') {
        const response = await axios.get(
          `http://192.168.120.71:5000/DELETE/fond?name=${identifiant}`,
          {
            // Additional request configuration if needed
          },
        )

        if (response.status === 200) {
          console.log('File deleted successfully')
        } else {
          console.error('Failed to delete file')
        }
      }
    } catch (error) {
      console.error('Error in handlesupprimer:', error)
    }
    redirection(2)
  }

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
        <h2 className="titre_changer_fond">Changer le fond d'écran</h2>

        <div className="global_option_prof">
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
          <img
            src={require('./supprimer.webp')}
            alt="Supprimer une photo"
            onClick={handlesupprimer}
            className={`button_photo`}
          />
        </div>
        <div>
          <button onClick={setRedirectiontwo} className="button_retour">
            Retour
          </button>
        </div>
      </div>
    </>
  )
}

export default Optionprof
