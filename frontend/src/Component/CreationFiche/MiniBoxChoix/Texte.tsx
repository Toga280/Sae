import React from "react";

function Texte({ Texte, Balise, ClassName }: any) {
  return (
    <div>
      {Balise === null ? <h1 className={ClassName}>{Texte}</h1> : <p></p>}
      {Balise === 1 ? <div className={ClassName}>{Texte}</div> : <p></p>}
      {Balise === 2 ? <h1 className={ClassName}>{Texte}</h1> : <p></p>}
      {Balise === 3 ? <legend className={ClassName}>{Texte}</legend> : <p></p>}
      {Balise === 4 ? <label className={ClassName}>{Texte}</label> : <p></p>}
    </div>
  );
}

export default Texte;
