import React, { useState } from "react";
import FicheBoxTotal from "./CreationFiche/FicheBoxTotal";
import FicheBoxSelected from "./CreationFiche/FicheBoxSelected";
function App() {
  const [selectBox, setSelectBox] = useState(null);

  const handleSelectBoxChange = (value: any) => {
    setSelectBox(value);
  };

  return (
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
  );
}

export default App;
