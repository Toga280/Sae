import React, { useEffect, useState } from "react";
import FicheBox1 from "./FicheBox1";
import FicheBox2 from "./FicheBox2";
import FicheBox3 from "./FicheBox3";
import FicheBox4 from "./FicheBox4";
import FicheBox5 from "./FicheBox5";
import FicheBox6 from "./FicheBox6";
import FicheBox7 from "./FicheBox7";
import FicheBox8 from "./FicheBox8";
import fonctionsMiniBoxInfoJson from "./MiniBoxInfoFunction";
import { imprimerPage } from "../FonctionEleve/Imprimer";

function FicheBoxTotal({ onSelectBox }: any) {
  const [numBox, setNumBox] = useState(0);
  const handleClick = (numero: number) => {
    setNumBox(numero);
  };

  const consoleLogJson = () => {
    console.log(fonctionsMiniBoxInfoJson.getAllJson());
  };

  const infoSelectionChoixMiniBox = (
    booleanChoixMiniBox: boolean,
    numeroMiniBox: any
  ) => {};

  useEffect(() => {
    if (numBox !== 0) {
      onSelectBox(numBox);
    }
  }, [numBox, onSelectBox]);

  return (
    <div>
      <button className="boutton_retour_interaction_edu">Retour</button>
      <div onClick={() => handleClick(1)}>
        <FicheBox1
          numeroMiniBox={[0]}
          infoSelectionChoixMiniBox={infoSelectionChoixMiniBox}
          classNameDiv={"Box"}
        />
      </div>
      <div onClick={() => handleClick(2)}>
        <FicheBox2
          numeroMiniBox={[1, 2]}
          infoSelectionChoixMiniBox={infoSelectionChoixMiniBox}
          classNameDiv={"Box"}
        />
      </div>
      <div onClick={() => handleClick(3)}>
        <FicheBox3
          numeroMiniBox={[3, 4, 5, 6, 7]}
          infoSelectionChoixMiniBox={infoSelectionChoixMiniBox}
          classNameDiv={"Box"}
        />
      </div>
      <div onClick={() => handleClick(4)}>
        <FicheBox4
          numeroMiniBox={[8, 9, 10, 11]}
          infoSelectionChoixMiniBox={infoSelectionChoixMiniBox}
          classNameDiv={"Box"}
        />
      </div>
      <div onClick={() => handleClick(5)}>
        <FicheBox5
          numeroMiniBox={[12, 13, 14]}
          infoSelectionChoixMiniBox={infoSelectionChoixMiniBox}
          classNameDiv={"Box"}
        />
      </div>
      <div onClick={() => handleClick(6)}>
        <FicheBox6
          numeroMiniBox={[15, 16, 17, 18]}
          infoSelectionChoixMiniBox={infoSelectionChoixMiniBox}
          classNameDiv={"Box"}
        />
      </div>
      <div onClick={() => handleClick(7)}>
        <FicheBox7
          numeroMiniBox={[19, 20]}
          infoSelectionChoixMiniBox={infoSelectionChoixMiniBox}
          classNameDiv={"Box"}
        />
      </div>
      <div onClick={() => handleClick(8)}>
        <FicheBox8
          numeroMiniBox={[21, 22]}
          infoSelectionChoixMiniBox={infoSelectionChoixMiniBox}
          classNameDiv={"Box"}
        />
      </div>
      <button onClick={consoleLogJson}>return log json</button>
      <button onClick={imprimerPage}>imprimer</button>
      <button className="boutton_sauvegarder_interaction_edu">Sauvegarder</button>
      <button className="boutton_brouillon_interaction_edu">Brouillons</button>
    </div>
  );
}

export default FicheBoxTotal;
