import React from "react";
import CreationProfilProf from "./CreationProfilProf";
import "./CreationProfil.css";
function CreationProfil({ redirection }: any) {
  const setRedirectionTwo = () => {
    redirection(2);
  };

  return <CreationProfilProf setRedirectionTwo={setRedirectionTwo} />;
}

export default CreationProfil;
