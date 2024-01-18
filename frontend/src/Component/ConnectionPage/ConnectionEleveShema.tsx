import React, { useState, useEffect } from "react";
import "./connectionEleveShema.css";
import axios from "axios";

function ConnectionEleveShema({
  redirection,
  setC,
  nomEleveActuelle,
  prenomEleveActuelle,
  set1Eleve,
}: any) {
  
  const TAILLE_MAX_MDP = 6;
  const [mdpFaux, setMdpFaux] = useState(false);
  const [boutonDesactive, setBoutonDesactive] = useState(false);
  const [message, setMessage] = useState("");
  const [time, setTime] = useState(30);
  const [nombreEssais, setNombreEssais] = useState(0);
  const [password, setPassword] = useState<number[]>([]);

  const Connexion = (event: React.FormEvent) => {
    event.preventDefault();
    setMdpFaux(false);
    set1Eleve(`${nomEleveActuelle}${prenomEleveActuelle}`);

    axios
      .get(
        `http://localhost:5000/GET/eleve/authentification?prenom=${encodeURIComponent(
          prenomEleveActuelle
        )}&nom=${encodeURIComponent(nomEleveActuelle)}&mdp=${encodeURIComponent(
          password.join("")
        )}`
      )
      .then((response) => {
        if (response.data) {
          redirection(4);
        } else {
          setMdpFaux(true);
        }
      })
      .catch((error) => {
        if (error.response && error.response.status === 401) {
          setMdpFaux(true);
        } else {
          console.error("Error during the request:", error);
        }
      });
    // RESETPASSWORD
    if (mdpFaux) {
      setPassword([]);
    }
  };

  const addNumber = (num: number) => {
    if (password.length < TAILLE_MAX_MDP) {
      setPassword([...password, num]);
    }
  };

  const removeNumber = () => {
    if (password.length > 0) {
      setPassword(password.slice(0, -1));
    }
  };

  return (
    <div className="container">
      <p className="info_nom_eleve">{`${prenomEleveActuelle} ${nomEleveActuelle}`}</p>
      <div className="affichage">
        <p className="affichageMDP">{password.join("")}</p>
      </div>

      <div className="boutons">
        <div className="boutonsChiffre">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
            <button key={num} className="bouton" onClick={() => addNumber(num)}>
              {num}
            </button>
          ))}
          <button className="bouton" onClick={removeNumber}>
            <img
              src={require("../CreationFiche/MiniBoxChoix/imagesTestStuart/retour.png")}
              alt="supprimer chiffre"
              className="btn-retour-pin"
            />
          </button>
          <button
            className="bouton"
            onClick={(e) => Connexion(e)}
            disabled={boutonDesactive}
          >
            Connexion
          </button>
          {/* <input
            type="text"
            className="countdown"
            disabled={true}
            value={message}
          /> */}
        </div>
      </div>
    </div>
  );
}

export default ConnectionEleveShema;
