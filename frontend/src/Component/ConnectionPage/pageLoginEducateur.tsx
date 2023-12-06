import React, { useState } from "react";
import "./PageLoginEducateurStyle.css";
import axios from "axios";

function PageLoginEducateur({ redirection }: any) {
  const [id, setId] = useState(String);
  const [mdp, setMdp] = useState(String);

  const handleInputId = (event: any) => {
    setId(event.target.value);
  };

  const handleInputMdp = (event: any) => {
    setMdp(event.target.value);
  };

  const redirectionTwo = () => {
    redirection(2);
  };

  const configConnexion = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const Connexion = () => {
    const data = JSON.stringify({ id, mdp });
    axios
      .post("http://localhost:5000/GET/admin/azeazr", data, configConnexion)
      .then((response) => {
        console.log("Réponse du serveur :", response.data);
        if (response.data) {
        }
      });
  };

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
            placeholder="Nom"
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
            onClick={redirectionTwo}
          >
            Se connecter
          </button>
        </p>
      </form>
    </div>
  );
}

export default PageLoginEducateur;
