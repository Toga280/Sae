import React, { useEffect, useState } from "react";
import axios from "axios";

function ConnectionEleve({ redirection }: any){
  const redirectionTwelve = () => {
    redirection(11);
  };
  const [eleves, setEleves] = useState<any[]>([]);

  useEffect(() => {
    const getEleve = () => {
      axios
        .get(`http://localhost:5000/GET/allEleve`)
        .then((response) => {
          setEleves(response.data); 
        })
        .catch((error) => {
          console.error("erreur : ", error);
        });
    };

    getEleve();
  }, []); 

  return (
    <div className="general_login">
    {eleves.map((eleve, index) => (
      <div className="login-container" key={index}>
        <img
          className="user-photo"
          src="https://imgs.search.brave.com/wZqgVgvAm4-m466eGodB8hhPfHnBTqDPTQ318uWeBk0/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cGhvdG9zLWdyYXR1/aXRlL3BldGl0LWdh/cmNvbi1zb3VyaWFu/dC1wb3J0cmFpdC12/aXNhZ2UtZ3Jvcy1w/bGFuXzUzODc2LTE1/MzI3Ni5qcGc_c2l6/ZT02MjYmZXh0PWpw/Zw"
          alt="Photo de l'utilisateur"
        />
        <div className="user-name">{`${eleve.prenom} ${eleve.nom}`}</div>
        <button  className="login-button" onClick={redirectionTwelve}>
          Se connecter
        </button>
      </div>
    ))}

    {redirection}
  </div>
    
  );
};

export default ConnectionEleve;
