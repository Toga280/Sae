import React from 'react'
import axios from 'axios'
import './Sauvegarder.css'
function PopUpSauvegarder({
  setUpPopUpSauvegarder,
  nomFiche,
  sauvegarde,
}: any) {
  const deleteFiche = (nomFiche: string) => {
    axios
      .get(
        `http://192.168.120.71:5000/DELETE/ficheName?name=${encodeURIComponent(
          nomFiche,
        )}`,
      )
      .then((response) => {
        if (response.data) {
          sauvegarde()
          setUpPopUpSauvegarder(false)
        }
      })
      .catch((error) => {
        console.error('Erreur lors de la requête vers le serveur :', error)
      })
  }

  return (
    <div className="Sauevgarder_global_fiche_ecraser">
      <p>Il existe déjà une fiche avec ce nom, voulez vous l'écrasez ?</p>
      <button
        className="bouton_annuler_ecraser"
        onClick={() => setUpPopUpSauvegarder(false)}
      >
        annuler
      </button>
      <button
        className="bouton_delete_ecraser"
        onClick={() => deleteFiche(nomFiche)}
      >
        écraser
      </button>
    </div>
  )
}

export default PopUpSauvegarder
