import React from "react";
import "./PageLoginEducateurStyle.css";

function PageLoginEducateur({ redirection }: any) {
  const redirectionTwo = () => {
    redirection(2);
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
