import React, { useEffect, useState } from 'react'
import './Interface.css'
import fonctionsMiniBoxInfoJson from '../CreationFiche/MiniBoxInfoFunction'
import axios from 'axios'

function Interface({ redirection, role, identifiant }: any) {
  const [fondEcranUrl, setFondEcranUrl] = useState<string | null>(null)
  const handleBoutonClic = () => {
    const confirmation = window.confirm(
      'Êtes-vous sûr de vouloir vous déconnecter ?',
    )
    if (confirmation) {
      redirection(1)
    }
  }

  const redirectionCreationFiche = () => {
    fonctionsMiniBoxInfoJson.modifierAllJsonToBase()
    redirection(3)
  }

  useEffect(() => {
    // Appeler la requête pour récupérer l'image du fond d'écran
    axios
      .get('http://localhost:5000/GET/fondecran', {
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
      {role === 'Admin' && (
        <div>
          <button
            className="bouton_deconnection_educateur"
            onClick={handleBoutonClic}
          >
            Se déconnecter
          </button>
          <img
            src={require('./icon_reglage.webp')}
            alt="reglage-icon"
            className="reglage-icon"
            style={{ width: '40px', height: '40px', cursor: 'pointer' }}
            onClick={() => redirection(18)}
          />
          <div className='global_txt_espace_prof'>
          <h2 className="txt_espace_prof">Espace super administrateur</h2>
          </div>
          <div className="global_bouton_interface_educateur">
            <button
              className="bouton_interface_educateur"
              onClick={redirectionCreationFiche}
            >
              Création fiche
            </button>
            <button
              className="bouton_interface_educateur"
              onClick={() => redirection(14)}
            >
              Consulter fiches/images
            </button>
            <button
              className="bouton_interface_educateur"
              onClick={() => redirection(10)}
            >
              {' '}
              Importer un pictogramme
            </button>
            {/* <button className="bouton_interface_educateur" onClick={() => redirection(3)}>Brouillons fiches </button> */}
            <button
              className="bouton_interface_educateur"
              onClick={() => redirection(6)}
            >
              Fiches créées
            </button>
            <button
              className="bouton_interface_educateur"
              onClick={() => redirection(9)}
            >
              Modifier les informations
            </button>
            <button
              className="bouton_interface_educateur"
              onClick={() => redirection(5)}
            >
              Créer un profil
            </button>
            <button
              className="bouton_interface_educateur"
              onClick={() => redirection(8)}
            >
              Archiver un profil
            </button>
            <button
              className="bouton_interface_educateur"
              onClick={() => redirection(12)}
            >
              Profil archivés
            </button>
            <button
              className="bouton_interface_educateur"
              onClick={() => redirection(15)}
            >
              Modifier les rôles
            </button>
            <button
              className="bouton_interface_educateur"
              onClick={() => redirection(17)}
            >
              Suivi élèves
            </button>
          </div>
        </div>
      )}

      {role === 'Professeur' && (
        <div>
          <button
            className="bouton_deconnection_educateur"
            onClick={handleBoutonClic}
          >
            Se déconnecter
          </button>
          <div className="global_txt_espace_prof">
            <h2 className="txt_espace_prof">Espace éducateur intervenant</h2>
          </div>
          <div className="global_bouton_interface_educateur">
            <button
              className="bouton_interface_educateur"
              onClick={() => redirection(3)}
            >
              Consulter fiches/images
            </button>
          </div>
        </div>
      )}
      {role === 'Cip' && (
        <div>
          <button
            className="bouton_deconnection_educateur"
            onClick={handleBoutonClic}
          >
            Se déconnecter
          </button>
          <img
            src={require('./icon_reglage.webp')}
            alt="reglage-icon"
            className="reglage-icon"
            style={{ width: '40px', height: '40px', cursor: 'pointer' }}
            onClick={() => redirection(18)}
          />
          <div className='global_txt_espace_prof'>
            <h2 className="txt_espace_prof">
              Espace conseillère insertion professionnelle
            </h2>
          </div>
          <div className="global_bouton_interface_educateur">
            <button
              className="bouton_interface_educateur"
              onClick={() => redirection(14)}
            >
              Consulter fiches/images
            </button>
            <button
              className="bouton_interface_educateur"
              onClick={() => redirection(17)}
            >
              Suivi élèves
            </button>
          </div>
        </div>
      )}
      {role === 'ProfesseurAdmin' && (
        <div>
          <button
            className="bouton_deconnection_educateur"
            onClick={handleBoutonClic}
          >
            Se déconnecter
          </button>
          <img
            src={require('./icon_reglage.webp')}
            alt="reglage-icon"
            className="reglage-icon"
            style={{ width: '40px', height: '40px', cursor: 'pointer' }}
            onClick={() => redirection(18)}
          />
          <div className='global_txt_espace_prof'>
          <h2 className="txt_espace_prof">Espace éducateur technique</h2>
          </div>
          <div className="global_bouton_interface_educateur">
            <button
              className="bouton_interface_educateur"
              onClick={redirectionCreationFiche}
            >
              Création fiche
            </button>
            <button
              className="bouton_interface_educateur"
              onClick={() => redirection(14)}
            >
              Consulter fiches/images
            </button>
            <button
              className="bouton_interface_educateur"
              onClick={() => redirection(10)}
            >
              {' '}
              Importer un pictogramme
            </button>
            {/* <button className="bouton_interface_educateur" onClick={() => redirection(3)}>Brouillons fiches </button> */}
            <button
              className="bouton_interface_educateur"
              onClick={() => redirection(6)}
            >
              Fiches crées
            </button>
            <button
              className="bouton_interface_educateur"
              onClick={() => redirection(9)}
            >
              Modifier les informations
            </button>
          </div>
        </div>
      )}
    </div>
    </>
  )
}

export default Interface
