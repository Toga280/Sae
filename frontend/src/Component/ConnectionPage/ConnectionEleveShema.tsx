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


  const [password, setPassword] = useState(Number);
  const [numberPos, setNumberPos] = useState(Number);
  const addNumber = (Int: number) => {
    if (numberPos < 6){
      setPassword(password * 10 + (Int));
      setNumberPos(numberPos + 1);
    }

    console.log("password" + password);
    console.log("numpos" + numberPos);
  }

  const removeNumber = () => {

    if(numberPos <= 0){
      setPassword(0);
      setNumberPos(0);
    } else {
      setPassword((password - password % 10) / 10);
      setNumberPos(numberPos - 1);
    }

    console.log("password" + password);
    console.log("numpos" + numberPos);
  }

  const submbitPassword = () => {

    if (checkPassword()){
      redirection(4);
    } else { 
      alert("Mot de passe incorrect");
      setPassword(0);
      setNumberPos(0);
    }
  }

  const checkPassword = () => {
    if (password === 1234){
        return true;
    } else { 
        return false;
    }
  }

  return (
    <div className="container">
        <p className="affichageMDP">{mdpFaux ? "Mot de passe incorrect" : null}</p>
        <div className="affichage">
        <p className="affichageMDP">{password !== 0 ? (password) : null }</p> 
        </div>
            <div className="boutons">
                <div className="boutonsChiffre">
                    <button className="bouton" onClick={() => addNumber(1)}>1</button>
                    <button className="bouton" onClick={() => addNumber(2)}>2</button>
                    <button className="bouton" onClick={() => addNumber(3)}>3</button>
                    <button className="bouton" onClick={() => addNumber(4)}>4</button>
                    <button className="bouton" onClick={() => addNumber(5)}>5</button>
                    <button className="bouton" onClick={() => addNumber(6)}>6</button>
                    <button className="bouton" onClick={() => addNumber(7)}>7</button>
                    <button className="bouton" onClick={() => addNumber(8)}>8</button>
                    <button className="bouton" onClick={() => addNumber(9)}>9</button>
                    <button className="bouton" onClick={() => removeNumber()}> <img src = {require("../CreationFiche/MiniBoxChoix/imagesTestStuart/retour.png")} alt="suprimmer chiffre" className="btn-retour-pin"></img> </button>
                    <button className="bouton" onClick={() => addNumber(0)}>0</button>
                    <button className="bouton" onClick={(e) => Connexion(e)}>Connexion</button>
                    <button className="bouton_retour_connection_eleve" onClick={() => setC(false)}>
                    Retour
                  </button>
                </div>  
            </div>
    </div>
  );

};
export default ConnectionEleveShema;