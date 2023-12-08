import React, { useState } from "react";
import "./connectionEleveShema.css";
import axios from "axios";

function ConnectionEleveShema({ redirection, setC, nomEleveActuelle, prenomEleveActuelle }: any) {
  const [mdpFaux, setMdpFaux] = useState(false);

  const Connexion = (event: React.FormEvent) => {
    event.preventDefault();
    setMdpFaux(false);

    axios
      .get(
        `http://localhost:5000/GET/eleve/authentification?prenom=${encodeURIComponent(
          prenomEleveActuelle
        )}&nom=${encodeURIComponent(nomEleveActuelle)}&mdp=${encodeURIComponent(password)}`
      )
      .then((response) => {
        console.log("Réponse du serveur :", response.data);
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
          console.error("Erreur lors de la requête :", error);
        }
      });
  };

  const redirectionOne = () => {
    redirection(1);
  };
/*CREATION MDP */
  const [password, setPassword] = useState(0);
  const [numberPos, setNumberPos] = useState(0);

  const addNumber = (digit: number) => {
    if (numberPos < 9) {
      setPassword(password * 10 + digit);
      setNumberPos(numberPos + 1);
    }

    console.log("password" + password);
    console.log("numpos" + numberPos);
  };

  const removeNumber = () => {
    if (numberPos <= 0) {
      setPassword(0);
      setNumberPos(0);
    } else {
      setPassword((password - (password % 10)) / 10);
      setNumberPos(numberPos - 1);
    }

    console.log("password" + password);
    console.log("numpos" + numberPos);
  };

  return (
    <div className="container">
      <div className="boutons">
        <div className="boutonsChiffre">
          <button className="bouton" onClick={() => addNumber(1)}>
            1
          </button>
          <button className="bouton" onClick={() => addNumber(2)}>
            2
          </button>
          <button className="bouton" onClick={() => addNumber(3)}>
            3
          </button>
          <button className="bouton" onClick={() => addNumber(4)}>
            4
          </button>
          <button className="bouton" onClick={() => addNumber(5)}>
            5
          </button>
          <button className="bouton" onClick={() => addNumber(6)}>
            6
          </button>
          <button className="bouton" onClick={() => addNumber(7)}>
            7
          </button>
          <button className="bouton" onClick={() => addNumber(8)}>
            8
          </button>
          <button className="bouton" onClick={() => addNumber(9)}>
            9
          </button>
          <button className="bouton_supprimer_connection_eleve" >
            <img onClick={() => removeNumber()} src="https://imgs.search.brave.com/fpxQsMuPsocHpxLxfAthJgxXqjxcXHNjfBElYp6YlWk/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudGhlbm91bnBy/b2plY3QuY29tL3Bu/Zy82MzMyOTY2LTIw/MC5wbmc" alt="suprimmer chiffre"></img>
          </button>
        </div>
        </div>
      <div className="affichage">
        <p className="affichageMDP">{password !== 0 ? password : null}</p>
        <p className="affichageMDP">{mdpFaux ? "Mot de passe incorrect" : null}</p>
      </div>
      <button className="bouton_suivant_connection_eleve" onClick={(e) => Connexion(e)}>
        Suivant
      </button>
      <button className="bouton_retour_connection_eleve" onClick={() => setC(false)}>
        Retour
      </button>
    </div>
  );
}

export default ConnectionEleveShema;
