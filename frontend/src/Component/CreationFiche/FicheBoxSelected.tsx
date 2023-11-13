import React from "react";
import FicheBox1 from "./FicheBox1";
import FicheBox2 from "./FicheBox2";
import FicheBox3 from "./FicheBox3";
import FicheBox4 from "./FicheBox4";
import FicheBox5 from "./FicheBox5";
import FicheBox6 from "./FicheBox6";
import FicheBox7 from "./FicheBox7";
import FicheBox8 from "./FicheBox8";
function FicheBoxSelected({ numberFichBox, onSelectBoxChange }: any) {
  const boutonRetour = () => {
    onSelectBoxChange(null);
  };

  return (
    <div>
      {numberFichBox === 1 ? <FicheBox1 numeroMiniBox={[0]} /> : <p> </p>}
      {numberFichBox === 2 ? <FicheBox2 numeroMiniBox={[1, 2]} /> : <p> </p>}
      {numberFichBox === 3 ? (
        <FicheBox3 numeroMiniBox={[3, 4, 5, 6, 7]} />
      ) : (
        <p> </p>
      )}
      {numberFichBox === 4 ? (
        <FicheBox4 numeroMiniBox={[8, 9, 10, 11]} />
      ) : (
        <p> </p>
      )}
      {numberFichBox === 5 ? (
        <FicheBox5 numeroMiniBox={[12, 13, 14]} />
      ) : (
        <p> </p>
      )}
      {numberFichBox === 6 ? (
        <FicheBox6 numeroMiniBox={[15, 16, 17, 18]} />
      ) : (
        <p> </p>
      )}
      {numberFichBox === 7 ? <FicheBox7 numeroMiniBox={[19, 20]} /> : <p> </p>}
      {numberFichBox === 8 ? <FicheBox8 numeroMiniBox={[21, 22]} /> : <p> </p>}
      <button onClick={boutonRetour}>Retour</button>
    </div>
  );
}

export default FicheBoxSelected;
