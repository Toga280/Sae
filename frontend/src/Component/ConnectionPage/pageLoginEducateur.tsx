import React from "react";
import "./PageLoginEducateurStyle.css";

function PageLoginEducateur({loginButton}:any) {
  return (
    <div id="login-form-wrap">
      <h2>Connexion</h2>
      <form id="login-form">
        <p>
          <input type="text" id="username" name="username" placeholder="Nom" required />
        </p>
        <p>
          <input type="password" id="password" name="password" placeholder="Mots de passe" required />
        </p>
        <p>
          <input type="submit" id="login" value="Connexion" onClick={loginButton}/>
        </p>
      </form>

    </div>
  );
}

export default PageLoginEducateur;
