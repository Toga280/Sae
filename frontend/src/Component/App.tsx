import React, { useState } from "react";
import FicheBoxTotal from "./CreationFiche/FicheBoxTotal";

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
        <p> ok </p>
      )}
    </div>
  );
}

export default App;
