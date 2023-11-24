import React from "react";
import fonctionsMiniBoxInfoJson from "./../MiniBoxInfoFunction";
import "../../../style/pute.css";
function Texte({ Texte, Balise, ClassName, numeroMiniBox }: any) {
  return (
    <div
      className={
        fonctionsMiniBoxInfoJson.getIsSelectedMiniBox(numeroMiniBox) === true
          ? "sUUUU"
          : ""
      }
    >
      {Balise === null ? <h1 className={ClassName}>{Texte}</h1> : <p></p>}
      {Balise === 1 ? <div className={ClassName}>{Texte}</div> : <p></p>}
      {Balise === 2 ? <h1 className={ClassName}>{Texte}</h1> : <p></p>}
      {Balise === 3 ? <legend className={ClassName}>{Texte}</legend> : <p></p>}
      {Balise === 4 ? <label className={ClassName}>{Texte}</label> : <p></p>}
    </div>
  );
}

export default Texte;
