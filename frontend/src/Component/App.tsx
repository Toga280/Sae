import React, { useState } from "react";
import FicheBoxTotal from "./CreationFiche/FicheBoxTotal";
import FicheBoxSelected from "./CreationFiche/FicheBoxSelected";
function App() {
  const [selectBox, setSelectBox] = useState(null);

  const [listeType, setListeType] = useState<number[]>([
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  ]);

  const handleSelectBoxChange = (value: any) => {
    setSelectBox(value);
  };

  const setTypeMiniBox = (Type: number, numero: number) => {
    setListeType((prevListeType) => {
      const newListeType = [...prevListeType];
      newListeType[numero] = Type;
      return newListeType;
    });
  };

  return (
    <div>
      {selectBox === null ? (
        <FicheBoxTotal
          onSelectBox={handleSelectBoxChange}
          listeType={listeType}
          setTypeMiniBox={setTypeMiniBox}
        />
      ) : (
        <FicheBoxSelected
          numberFichBox={selectBox}
          onSelectBoxChange={handleSelectBoxChange}
          listeType={listeType}
          setTypeMiniBox={setTypeMiniBox}
        />
      )}
    </div>
  );
}

export default App;
