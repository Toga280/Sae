import React, { useState } from "react";
import FicheBoxTotal from "./CreationFiche/FicheBoxTotal";
import FicheBoxSelected from "./CreationFiche/FicheBoxSelected";
import PageConnection from "./ConnectionPage/pageConnection";
import Interface from "./Interface_Educateur/Interface";
import CreationProfil from "./Interface_Educateur/CreationProfil";
import PageEspaceEleve from "./EspaceEleve/pageEspaceEleve";
import Sauvegarder from "./CreationFiche/Sauvegarder";

function App() {
  const [selectBox, setSelectBox] = useState(null);
  const [redirection, setRedirection] = useState(1);
  const [saveName, setSaveName] = useState(false);

  const handleSelectBoxChange = (value: any) => {
    setSelectBox(value);
  };

  return (
    <div>

      {redirection === 1 && <PageConnection redirection={setRedirection} />}
      {redirection === 2 && <Interface redirection={setRedirection} />}
      {redirection === 4 && <PageEspaceEleve redirection={setRedirection} />}
      {redirection === 5 && <CreationProfil redirection={setRedirection} />}
      {redirection === 3 ? (
        selectBox === null ? (!saveName ? (
          <FicheBoxTotal
            onSelectBox={handleSelectBoxChange}
            redirection={setRedirection}
            setSaveName={setSaveName}
          />) : (
            <Sauvegarder redirection={setRedirection}
            setSaveName={setSaveName} />
          )
        ) : (
          <FicheBoxSelected
            numberFichBox={selectBox}
            onSelectBoxChange={handleSelectBoxChange}
          />
        )
      ) : null}

    </div>
  );
}

export default App;
