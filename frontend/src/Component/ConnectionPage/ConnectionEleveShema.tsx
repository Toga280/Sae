import React, { useState } from "react";
import "./connectionEleveShema.css";
import axios from "axios";
function ConnectionEleveShema({ redirection, setC, nomEleveActuelle, prenomEleveActuelle }: any) {
  
  
  const [mdpFaux, setMdpFaux] = useState(true);
  const [nombreEssais, setnombreEssais] = useState(Number);
  const [boutonDesactive, setBoutonDesactive] = useState(false);
  const [message, setMessage] = useState(String);
  const [timeOut, setTimeOut] = useState(Number);
  const TAILLE_MAX_MDP = 6;

  const Connexion = (event: React.FormEvent) => {
    event.preventDefault();
    setMdpFaux(true);

    axios
      .get(
        `http://localhost:5000/GET/eleve/authentification?prenom=${encodeURIComponent(
          prenomEleveActuelle
        )}&nom=${encodeURIComponent(nomEleveActuelle)}&mdp=${encodeURIComponent(password.toString())}`
      )
      .then((response) => {
        console.log("Réponse du serveur :", response.data);
        if (response.data) {
          redirection(4);
        } else {
          setMdpFaux(false);
        }
      })
      .catch((error) => {
        if (error.response && error.response.status === 401) {
          setMdpFaux(true);
        } else {
          console.error("Erreur lors de la requête :", error);
        }
      });

      if (!mdpFaux){
        redirection(4);
      } else { 
        alert("Mot de passe incorrect");
        // remettre le mdp a 0
        
        alert("Mot de passe incorrect");
        setPassword([]);
    
        setnombreEssais(nombreEssais + 1);
      }
      //// BELEK LOUPE INFINI ////

      /// BELEK LOUPE INFINI ///

    //   if (nombreEssais === 2){
    //     setBoutonDesactive(false);
    //     setTimeOut(30);
    //     while (timeOut > 0) {
    //       setTimeout(() => {
            
    //         }, 1000);
    //         setTimeOut(timeOut - 1);
    //         setMessage("Trop d'éssais, patientez" + timeOut + "secondes");
    //         console.log(timeOut);
    //     }
    //     setBoutonDesactive(true);
    //     setnombreEssais(0);
    //   }
   };
  

  const [password, setPassword] = useState<Number[]>([]);

  const addNumber = (Int: number) => {
    if (password.length < TAILLE_MAX_MDP){
      setPassword([...password, Int]);
      console.log("password" + password.toString());
    }
  }

  const removeNumber = () => {

    if(password.length <= 0){
      setPassword([]);

    } else {
      const updatedPassword = password.slice(0, -1);
      setPassword(updatedPassword);
    }

    console.log("password" + password);
  }

  return (
    <div className="container">
        
    <button className="bouton_deconnection_eleve" onClick={() => setC(false)}> Se déconnecter</button>
        <div className="affichage">
        <p className="affichageMDP">{password.map(num => num).join('')}</p> 
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
                    <button className="bouton" onClick={() => removeNumber()}>
                       <img src = {require("../CreationFiche/MiniBoxChoix/imagesTestStuart/retour.png")} alt="suprimmer chiffre" className="btn-retour-pin"></img> </button>
                    <button className="bouton" onClick={() => addNumber(0)}>0</button>
                    <button className="bouton" onClick={(e) => Connexion(e)}>Connexion</button>
                 
                </div>  
            </div>
    </div>
  );

};
export default ConnectionEleveShema;