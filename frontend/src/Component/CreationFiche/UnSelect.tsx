import React , { useState } from "react";
import PageSelect from "./PageSelect";
import "../../style/ficheGlobal.css";
import "./select.css";


function UnSelect({name , image, num} : any ) {
  
  const [select, setSelect] = useState(false);
  const [numSelect, setNumSelect] = useState(0);
  const handleClick = (numero: number) => {
      setNumSelect(numero);
  };


  return (

    <div className="unSelect">
        <div onClick={() => handleClick(num)}>
          {name} , {image}
        </div>
    </div>
  );
}

export default UnSelect;
