import React from "react";
import FicheBox1 from "./FicheBox1";
import FicheBox2 from "./FicheBox2";
import FicheBox3 from "./FicheBox3";
import FicheBox4 from "./FicheBox4";
import FicheBox5 from "./FicheBox5";
import FicheBox6 from "./FicheBox6";
import FicheBox7 from "./FicheBox7";
import FicheBox8 from "./FicheBox8";
function FicheBoxSelected({
  numberFichBox,
  onSelectBoxChange,
  listeType,
  setTypeMiniBox,
}: any) {
  const boutonRetour = () => {
    onSelectBoxChange(null);
  };

  return (
    <div>
      {numberFichBox === 1 ? (
        <FicheBox1
          choixMiniBox={[listeType[0]]}
          setTypeMiniBox={setTypeMiniBox}
          numeroMiniBox={[0]}
        />
      ) : (
        <p> </p>
      )}
      {numberFichBox === 2 ? (
        <FicheBox2
          choixMiniBox={[listeType[1], listeType[2]]}
          setTypeMiniBox={setTypeMiniBox}
          numeroMiniBox={[1, 2]}
        />
      ) : (
        <p> </p>
      )}
      {numberFichBox === 3 ? (
        <FicheBox3
          choixMiniBox={[
            listeType[3],
            listeType[4],
            listeType[5],
            listeType[6],
            listeType[7],
          ]}
          setTypeMiniBox={setTypeMiniBox}
          numeroMiniBox={[3, 4, 5, 6, 7]}
        />
      ) : (
        <p> </p>
      )}
      {numberFichBox === 4 ? (
        <FicheBox4
          choixMiniBox={[
            listeType[8],
            listeType[9],
            listeType[10],
            listeType[11],
          ]}
          setTypeMiniBox={setTypeMiniBox}
          numeroMiniBox={[8, 9, 10, 11]}
        />
      ) : (
        <p> </p>
      )}
      {numberFichBox === 5 ? (
        <FicheBox5
          choixMiniBox={[listeType[12], listeType[13], listeType[14]]}
          setTypeMiniBox={setTypeMiniBox}
          numeroMiniBox={[12, 13, 14]}
        />
      ) : (
        <p> </p>
      )}
      {numberFichBox === 6 ? (
        <FicheBox6
          choixMiniBox={[
            listeType[15],
            listeType[16],
            listeType[17],
            listeType[18],
          ]}
          setTypeMiniBox={setTypeMiniBox}
          numeroMiniBox={[15, 16, 17, 18]}
        />
      ) : (
        <p> </p>
      )}
      {numberFichBox === 7 ? (
        <FicheBox7
          choixMiniBox={[listeType[19], listeType[20]]}
          setTypeMiniBox={setTypeMiniBox}
          numeroMiniBox={[19, 20]}
        />
      ) : (
        <p> </p>
      )}
      {numberFichBox === 8 ? (
        <FicheBox8
          choixMiniBox={[listeType[21], listeType[22]]}
          setTypeMiniBox={setTypeMiniBox}
          numeroMiniBox={[21, 22]}
        />
      ) : (
        <p> </p>
      )}
      <button onClick={boutonRetour}>Retour</button>
    </div>
  );
}

export default FicheBoxSelected;
