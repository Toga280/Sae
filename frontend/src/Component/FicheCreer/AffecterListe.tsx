import axios from 'axios'
import './AffecterListe.css'
import React, { useEffect, useState } from 'react'

function AffecterListe({
  setAffichageAffecterListeFalse,
  nomFicheSelectionner,
  redirection,
}: any) {
  const [eleves, setEleves] = useState<any[]>([])
  const [erreurAffecter, setErreurAffecter] = useState<boolean>(false)
  const [erreurAffecterMessage, setErreurAffecterMessage] = useState(String)
  const [eleveSelectionne, setEleveSelectionne] = useState<any | null>(null)

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

  const handleSelectionEleve = (eleve: any) => {
    setEleveSelectionne(eleve)
  }

  const affecterFiche = (nom: string, prenom: string) => {
    const ficheName = nomFicheSelectionner
    axios
      .post(
        `http://localhost:5000/POST/affectereleve`,
        {
          nom,
          prenom,
          ficheName,
        },
        {
          validateStatus: function (status) {
            return status == 501 || status == 200
          },
        },
      )
      .then((response) => {
        if (!response.data.success) {
          alert('Vous ne pouvez pas affecter une fiche à cet élève');
          setErreurAffecterMessage(response.data.message)
        } else {
          setAffichageAffecterListeFalse()
          redirection(2)
          redirection(6)
          
        }
        window.scrollTo(0, 0)
      })
      .catch((error) => {
        if (!error.response || error.response.status !== 501) {
          console.error('Erreur autre que 501 :', error)
        }
      })
  }

  return (
    <div className="global_affecter_fiche">
      {erreurAffecter ? (
        <p className="erreur_affectation_fiche"> {erreurAffecterMessage} </p>
      ) : null}
      <h1 className="titleh1">Affecter une fiche</h1>
      <h2 className="title">Liste des élèves</h2>
      <h3>Fiche sélectionné : {nomFicheSelectionner}</h3>
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
          <div>
            <div className="custom_eleve_selec">
              <h3>Élève sélectionné :</h3>
              <p>
                {eleveSelectionne.nom} {eleveSelectionne.prenom}
              </p>
              <button
                className="affecter_fiche_eleve"
                onClick={() =>
                  affecterFiche(eleveSelectionne.nom, eleveSelectionne.prenom)
                }
              >
                Affecter
              </button>
            </div>
          </div>
        )}
      </div>
      {/* <button
        className="retour_liste_fiches"
        onClick={setAffichageAffecterListeFalse}
      >
        Retour
      </button> */}
    </div>
  )
}

export default AffecterListe
