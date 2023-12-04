import React from "react";
import CreationProfilEleves from "./CreationProfilEleves";
import "./CreationProfil.css";
function CreationProfil({ redirection }: any) {
  const setRedirectionTwo = () => {
    redirection(2);
  };

  

  return <CreationProfilEleves setRedirectionTwo={setRedirectionTwo} />;
}

export default CreationProfil;
