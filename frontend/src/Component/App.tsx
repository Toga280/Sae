import React, { useState } from "react";
import page_connection from "./ConnectionPage/pageConnection";
import FicheBoxTotal from "./CreationFiche/FicheBoxTotal";
import FicheBoxSelected from "./CreationFiche/FicheBoxSelected";
import PageConnection from "./ConnectionPage/pageConnection";

function App() {
  
  const [selectBox, setSelectBox] = useState(null);
  const [loginButton , setLoginButton] = useState(false);

  const setLoginButtonTrue = () => {
    setLoginButton(true);
  };

  const handleSelectBoxChange = (value: any) => {
    setSelectBox(value);
  };
  
  return (
  
    <div>
      {loginButton === true ? (selectBox === null ? (
        /*<PageConnection />*/
        <FicheBoxTotal onSelectBox={handleSelectBoxChange} />
      ) : (
        <FicheBoxSelected
          numberFichBox={selectBox}
          onSelectBoxChange={handleSelectBoxChange}
        />
      )) : <PageConnection loginButton={setLoginButtonTrue}/>}
      
    </div>

    
  );
}

export default App;
