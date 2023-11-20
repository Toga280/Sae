import React, { useState } from "react";
import page_connection from "./ConnectionPage/pageConnection";
import FicheBoxTotal from "./CreationFiche/FicheBoxTotal";
import FicheBoxSelected from "./CreationFiche/FicheBoxSelected";
import PageConnection from "./ConnectionPage/pageConnection";

function App() {
  /*
  const [selectBox, setSelectBox] = useState(null);

  const handleSelectBoxChange = (value: any) => {
    setSelectBox(value);
  };
  */
  return (
    /*
    <div>
      {selectBox === null ? (
        <FicheBoxTotal onSelectBox={handleSelectBoxChange} />
      ) : (
        <FicheBoxSelected
          numberFichBox={selectBox}
          onSelectBoxChange={handleSelectBoxChange}
        />
      )}
    </div>
*/
    <PageConnection />
  );
}

export default App;
