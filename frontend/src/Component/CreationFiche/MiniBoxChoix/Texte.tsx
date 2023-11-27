import React from "react";
import fonctionsMiniBoxInfoJson from "./../MiniBoxInfoFunction";
import "../../../style/selected.css";
function Texte({ Texte, Balise, ClassName, numeroMiniBox }: any) {
  return (
    <div
      className={
        fonctionsMiniBoxInfoJson.getIsSelectedMiniBox(numeroMiniBox) === true
          ? "selected"
          : ""
      }
    >
      {Balise === null ? (
        <h1
          className={ClassName}
          style={{
            color: fonctionsMiniBoxInfoJson.getCouleurTexte(numeroMiniBox),
            fontFamily: fonctionsMiniBoxInfoJson.getPoliceTexte(numeroMiniBox),
            fontSize: fonctionsMiniBoxInfoJson.getTaille(numeroMiniBox),
          }}
        >
          {Texte}
        </h1>
      ) : (
        <p></p>
      )}
      {Balise === 1 ? (
        <div
          className={ClassName}
          style={{
            color: fonctionsMiniBoxInfoJson.getCouleurTexte(numeroMiniBox),
            fontFamily: fonctionsMiniBoxInfoJson.getPoliceTexte(numeroMiniBox),
            fontSize: fonctionsMiniBoxInfoJson.getTaille(numeroMiniBox),
          }}
        >
          {Texte}
        </div>
      ) : (
        <p></p>
      )}
      {Balise === 2 ? (
        <h1
          className={ClassName}
          style={{
            color: fonctionsMiniBoxInfoJson.getCouleurTexte(numeroMiniBox),
            fontFamily: fonctionsMiniBoxInfoJson.getPoliceTexte(numeroMiniBox),
            fontSize: fonctionsMiniBoxInfoJson.getTaille(numeroMiniBox),
          }}
        >
          {Texte}
        </h1>
      ) : (
        <p></p>
      )}
      {Balise === 3 ? (
        <legend
          className={ClassName}
          style={{
            color: fonctionsMiniBoxInfoJson.getCouleurTexte(numeroMiniBox),
            fontFamily: fonctionsMiniBoxInfoJson.getPoliceTexte(numeroMiniBox),
            fontSize: fonctionsMiniBoxInfoJson.getTaille(numeroMiniBox),
          }}
        >
          {Texte}
        </legend>
      ) : (
        <p></p>
      )}
      {Balise === 4 ? (
        <label
          className={ClassName}
          style={{
            color: fonctionsMiniBoxInfoJson.getCouleurTexte(numeroMiniBox),
            fontFamily: fonctionsMiniBoxInfoJson.getPoliceTexte(numeroMiniBox),
            fontSize: fonctionsMiniBoxInfoJson.getTaille(numeroMiniBox),
          }}
        >
          {Texte}
        </label>
      ) : (
        <p></p>
      )}
    </div>
  );
}

export default Texte;
