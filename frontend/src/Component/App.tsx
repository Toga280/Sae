import React, { useState } from "react";
import page_connection from "./ConnectionPage/pageConnection";
import FicheBoxTotal from "./CreationFiche/FicheBoxTotal";
import FicheBoxSelected from "./CreationFiche/FicheBoxSelected";
import PageConnection from "./ConnectionPage/pageConnection";
import Interface from "./Interface_Educateur/Interface";

function App() {
  const [selectBox, setSelectBox] = useState(null);
  const [redirection, setRedirection] = useState(1);

  const handleSelectBoxChange = (value: any) => {
    setSelectBox(value);
  };

  return (
    <div>
      {redirection === 1 && <PageConnection redirection={setRedirection} />}
      {redirection === 2 && <Interface redirection={setRedirection} />}
      {redirection === 3 ? (
        selectBox === null ? (
          <FicheBoxTotal onSelectBox={handleSelectBoxChange} />
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
