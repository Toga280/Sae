import React, { useState } from "react";
const image = require("./tts.webp");


function Son({ Texte, Balise, ClassName }: { Texte: string, Balise: number, ClassName: string }) {
  const [isPlaying, setIsPlaying] = useState(false);

  // Fonction pour lire le texte en audio
  const lireTexte = () => {
    if (!isPlaying) {
      setIsPlaying(true);
      const syntheseVocale = new SpeechSynthesisUtterance(Texte);
      syntheseVocale.lang = "fr-FR";
      syntheseVocale.onend = () => setIsPlaying(false);
      window.speechSynthesis.speak(syntheseVocale);
    }
  }

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {/* Bouton pour lire le texte en audio */}
      <button onClick={lireTexte} disabled={isPlaying} style={{ marginLeft: "10px" }}>
        <img src={image} alt="Lire en audio" style={{ width: "24px", height: "24px" }} />
      </button>
    </div>
  );
}

export default Son;
