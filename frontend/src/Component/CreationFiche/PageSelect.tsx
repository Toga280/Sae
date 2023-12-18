import React, {useState} from "react";
import UnSelect from "./UnSelect";
import "../../style/fiche1.css";
import "../../style/ficheGlobal.css";
import fonctionsMiniBoxInfoJson from "./MiniBoxInfoFunction";

function ajouterSelect(){
    return( <UnSelect name={"any"} image={"any"}/>);
}

function PageSelect(){

const [numSelect, setNumSelect] = useState(Number);

const handleClick = (numero: number) => {
  setNumSelect(numero);
};

  return (
    <div>
            <UnSelect name={"any"} image={"any"} numero={1}/>

            <button onClick={ajouterSelect}></button>
    </div>
  );
}
export default PageSelect;