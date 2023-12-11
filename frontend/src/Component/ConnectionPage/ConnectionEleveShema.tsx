import React, { useState } from "react";
import "./connectionEleveShema.css";
function ConnectionEleveShema({ redirection }: any){
  
  const redirectionFour = () => {
      redirection(4);
  };

  const [password, setPassword] = useState(Number);
  const [numberPos, setNumberPos] = useState(Number);
  const addNumber = (Int: number) => {
    if (numberPos < 9){
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

    if (password === 1234){
      redirection(4);
    } else { 
      alert("Mot de passe incorrect");
      setPassword(0);
      setNumberPos(0);
    }
  }
  return (
    <div className="container">
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
          <button className="bouton" onClick={() => removeNumber()}> <img src = "" alt="suprimmer chiffre"></img> </button>
        </div>  
        
      </div>
      <div className="affichage">
      <p className="affichageMDP">{password !== 0 ? (password) : null }</p> 
      </div>
      <button className="bouton" onClick={() => submbitPassword()}>Suivant</button>
    </div>
  );

};
export default ConnectionEleveShema;