import React, { useState } from 'react'
import './PageLoginEducateurStyle.css'
import axios from 'axios'

function PageLoginEducateur({ redirection, setRole, setIdConnecter, identifiant }: any) {
  const [id, setId] = useState(String)
  const [mdp, setMdp] = useState(String)
  const [mdpFaut, setMdpFaut] = useState(Boolean)

  const handleInputId = (event: any) => {
    setId(event.target.value)
    identifiant(event.target.value)
  }

  const handleInputMdp = (event: any) => {
    setMdp(event.target.value)
  }

  const getRole = (id: string) => {
    axios
      .get(`http://localhost:5000/GET/roleProf?id=${encodeURIComponent(id)}`)
      .then((response) => {
        let role = response.data.role
        setRole(role)
      })
      .catch((error) => {
        console.error('Erreur lors de la requête :', error)
      })
  }

  const Connexion = (event: React.FormEvent) => {
    event.preventDefault()
    setMdpFaut(false)
    axios
      .get(
        `http://localhost:5000/GET/admin/authentification?id=${encodeURIComponent(
          id,
        )}&mdp=${encodeURIComponent(mdp)}`,
      )
      .then((response) => {
        if (response.data) {
          getRole(id)
          setIdConnecter(id)
          redirection(2)
        }
      })
      .catch((error) => {
        if (error.response && error.response.status === 401) {
          setMdpFaut(true)
        } else {
          console.error('Erreur lors de la requête :', error)
        }
      })
  }

  return (
    <div id="login-form-wrap">
      <h2 className="nom_login_edu">Connexion</h2>
      <form id="login-form">
        <p>
          <input
            type="text"
            className="form_login_edu"
            id="username"
            name="username"
            placeholder="Identifiant"
            required
            onChange={handleInputId}
          />
        </p>
        <p>
          <input
            type="password"
            className="form_login_edu"
            id="password"
            name="password"
            placeholder="Mots de passe"
            required
            onChange={handleInputMdp}
          />
        </p>
        <p>
          <button
            className="bouton_submit_formulaire_edu"
            type="submit"
            id="login"
            value="Connexion"
            onClick={(e) => Connexion(e)}
          >
            Se connecter
          </button>
        </p>
        {mdpFaut ? <p className='mdp_faux'>Mots de passe incorrect</p> : null}
      </form>
    </div>
  )
}

export default PageLoginEducateur
