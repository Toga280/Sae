import React, { useState, useEffect } from "react";

interface Eleve {
  nom: string;
  prenom: string;
}

function ConnectionEleve({ redirection }: any) {
  const [eleves, setEleves] = useState<Eleve[]>([]);

  useEffect(() => {
    const fetchEleves = async () => {
      try {
        const response = await fetch('/GET/allEleveNames');
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des élèves');
        }
        const data = await response.json();
        setEleves(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchEleves();
  }, []);

  const redirectionFour = () => {
    redirection(4);
  };

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
          <button onClick={redirectionFour} className="login-button">
            Se connecter
          </button>
        </div>
      ))}
    </div>
  );
}

export default ConnectionEleve;
