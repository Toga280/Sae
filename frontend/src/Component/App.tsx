import React, { useState } from "react";
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
function App() {
  const [selectBox, setSelectBox] = useState(null);
  const [redirection, setRedirection] = useState(1);
  const [saveName, setSaveName] = useState(false);
  const [role, setRole] = useState(String);

  const handleSelectBoxChange = (value: any) => {
    setSelectBox(value);
  };

  return (
    <div>
      {redirection === 1 && <PageConnection redirection={setRedirection}  setRole={setRole}/>}
      {redirection === 2 && <Interface redirection={setRedirection} role={role}/>}
      {redirection === 4 && <PageEspaceEleve redirection={setRedirection} />}
      {redirection === 5 && <CreationProfil redirection={setRedirection} />}
      {redirection === 6 && <ListeFiches redirection={setRedirection} />}
      {redirection === 8 && <ArchiverProfil redirection={setRedirection} />}
      {redirection === 9 && <ModifierMdp redirection={setRedirection} role={role}/>}
      {redirection === 10 && <ImportPicto redirection={setRedirection} />}
      {redirection === 11 && <ConnectionEleveShema redirection={setRedirection} />}
      {redirection === 12 && (<ListeProfilArchiver redirection={setRedirection} />)}
      {redirection === 13 && <PhotoEleve redirection={setRedirection} />}
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
