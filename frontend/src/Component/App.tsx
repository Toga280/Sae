import React, { useState, useEffect } from "react";
import FicheBoxTotal from "./CreationFiche/FicheBoxTotal";
import FicheBoxSelected from "./CreationFiche/FicheBoxSelected";
import PageConnection from "./ConnectionPage/pageConnection";
import Interface from "./Interface_Educateur/Interface";
import CreationProfil from "./Interface_Educateur/CreationProfil/CreationProfil";
import PageEspaceEleve from "./EspaceEleve/pageEspaceEleve";
import Sauvegarder from "./CreationFiche/Sauvegarder";
import ListeFiches from "./FicheCreer/ListeFiches";
import ArchiverProfil from "./Interface_Educateur/ArchiverProfil/ArchiverProfil";
import ImportPicto from "./Interface_Educateur/importpicto/importpicto";
import ConnectionEleveShema from "./ConnectionPage/ConnectionEleveShema";
import ListeProfilArchiver from "./Interface_Educateur/ListeProfilArchiver/ListeProfilArchiver";
import ModifierMdp from "./Interface_Educateur/ModifierMdp/ModifierMdp";
import PhotoEleve from "./EspaceEleve/PhotoEleve/PhotoEleve";
import ConsulterFichesImages from "./Interface_Educateur/ConsulterFichesImages/ConsulterFichesImages";
import ModifierRole from "./Interface_Educateur/ModifierRole/ModifierRole";
const noel = require("./fond/noel.webp");
const halloween = require("./fond/hallowen.webp");


function App() {
  const [selectBox, setSelectBox] = useState(null);
  const [redirection, setRedirection] = useState(1);
  const [saveName, setSaveName] = useState(false);
  const [role, setRole] = useState(String);
  const [eleve, set1Eleve] = useState(String);
  const [background, setBackground] = useState("");

  const handleSelectBoxChange = (value: any) => {
    setSelectBox(value);
  };

  useEffect(() => {
    const currentDate = new Date();
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth() + 1;

    if (currentMonth <= 11 && (currentMonth === 12 && currentDay >= 25) || (currentMonth === 1 && currentDay === 11)) {
      setBackground(noel);
    } else if (currentMonth === 10 && (currentDay <= 31 && currentDay >= 24)) {
      setBackground(halloween);
    } else {
      setBackground("default.jpg");
    }
  }, []);

  return (
    <div style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', height: '100vh' }}>
      {redirection === 1 && <PageConnection redirection={setRedirection} setRole={setRole} set1Eleve={set1Eleve} />}
      {redirection === 2 && <Interface redirection={setRedirection} role={role} />}
      {redirection === 4 && <PageEspaceEleve redirection={setRedirection} eleve={eleve} />}
      {redirection === 5 && <CreationProfil redirection={setRedirection} />}
      {redirection === 6 && <ListeFiches redirection={setRedirection} />}
      {redirection === 8 && <ArchiverProfil redirection={setRedirection} />}
      {redirection === 9 && <ModifierMdp redirection={setRedirection} role={role} />}
      {redirection === 10 && <ImportPicto redirection={setRedirection} />}
      {redirection === 11 && <ConnectionEleveShema redirection={setRedirection} set1Eleve={set1Eleve} />}
      {redirection === 12 && <ListeProfilArchiver redirection={setRedirection} />}
      {redirection === 13 && <PhotoEleve redirection={setRedirection} eleve={eleve} />}
      {redirection === 14 && <ConsulterFichesImages redirection={setRedirection} />}
      {redirection === 15 && <ModifierRole redirection={setRedirection} />}
      {redirection === 3 ? (
        selectBox === null ? (
          !saveName ? (
            <FicheBoxTotal
              onSelectBox={handleSelectBoxChange}
              redirection={setRedirection}
              setSaveName={setSaveName}
            />
          ) : (
            <Sauvegarder
              redirection={setRedirection}
              setSaveName={setSaveName}
            />
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
