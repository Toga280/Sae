import React from "react";
const image = require("./tts.webp");

function Son({ Texte, Balise, ClassName }: { Texte: string, Balise: number, ClassName: string }) {
  const lireTexte = () => {
    
    const syntheseVocale = new SpeechSynthesisUtterance(Texte);
    syntheseVocale.lang = "fr-FR";
    window.speechSynthesis.speak(syntheseVocale);
  }

  return (
    <div>
      {Balise === null ? <h1 className={ClassName}>{Texte}</h1> : null}
      {Balise === 1 ? <div className={ClassName}>{Texte}</div> : null}
      {Balise === 2 ? <h1 className={ClassName}>{Texte}</h1> : null}
      {Balise === 3 ? <legend className={ClassName}>{Texte}</legend> : null}
      {Balise === 4 ? <label className={ClassName}>{Texte}</label> : null}
      <button onClick={lireTexte}>
        <img src={image} alt="Lire en audio" style={{width: "24px", height: "24px"}} />
      </button>
    </div>
  );
}

export default Son;
