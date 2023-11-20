import React from "react";
import "./PageLoginEducateurStyle.css";

function PageLoginEducateur() {
  return (
    <div id="login-form-wrap">
      <h2>Connexion</h2>
      <form id="login-form">
        <p>
          <input type="text" id="username" name="username" placeholder="Nom" required />
          <i className="validation"><span></span><span></span></i>
        </p>
        <p>
          <input type="password" id="password" name="password" placeholder="Mots de passe" required />
          <i className="validation"><span></span><span></span></i>
        </p>
        <p>
          <input type="submit" id="login" value="Connexion" />
        </p>
      </form>

    </div>
  );
}

export default PageLoginEducateur;
