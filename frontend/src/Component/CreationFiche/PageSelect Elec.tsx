import React, {useState} from "react";
import "../../style/fiche1.css";
import "../../style/ficheGlobal.css";
import "./select.css";
import UnMat from "./UnMat";

function PageSelectElec({setSelect, numMat} : any){
  const setSelectFalse = () => setSelect(false);

  return (
    <div className="global_select">
      <button className="retour_select" onClick={() => setSelectFalse()}> Retour </button> 
          <h2 className="txt_choix_selec_mat">Séléctionnez un materiel à ajouter :</h2>
            <UnMat mat={"Ampoule E 27"}  numMat={numMat} setSelect={setSelect} image={70}/>
            <UnMat mat={"Bornes connection rapide - 3 entrées"} numMat={numMat} setSelect={setSelect} image={71}/>
            <UnMat mat={"Bornes connection rapide - 2 entrées"} numMat={numMat} setSelect={setSelect} image={72}/>
            <UnMat mat={"Colliers type Atlas double Ø12"} numMat={numMat} setSelect={setSelect} image={73}/>
            <UnMat mat={"Colliers type Atlas Simple Ø12"} numMat={numMat} setSelect={setSelect} image={74}/>
            <UnMat mat={"Conducteur HO7VU 1,5² Bleu"} numMat={numMat} setSelect={setSelect} image={75}/>
            <UnMat mat={"Conducteur HO7VU 1,5² Noir"} numMat={numMat} setSelect={setSelect} image={76}/>
            <UnMat mat={"Conducteur HO7VU 1,5² Orange"} numMat={numMat} setSelect={setSelect} image={77}/>
            <UnMat mat={"Conducteur HO7VU 1,5² Rouge"} numMat={numMat} setSelect={setSelect} image={78}/>
            <UnMat mat={"Conducteur HO7VU 1,5² Vert/Jaune"} numMat={numMat} setSelect={setSelect} image={79}/>
            <UnMat mat={"Conducteur HO7VU 2,5² Bleu"} numMat={numMat} setSelect={setSelect} image={80}/>
            <UnMat mat={"Conducteur HO7VU 2,5² Rouge"} numMat={numMat} setSelect={setSelect} image={81}/>
            <UnMat mat={"Conducteur HO7VU 2,5² Vert/Jaune"} numMat={numMat} setSelect={setSelect} image={82}/>
            <UnMat mat={"Convecteur électrique"} numMat={numMat} setSelect={setSelect} image={83}/>
            <UnMat mat={"Enduit de rebouchage"} numMat={numMat} setSelect={setSelect} image={84}/>
            <UnMat mat={"Ensemble intérupteur SA/VV - encastrable"} numMat={numMat} setSelect={setSelect} image={85}/>
            <UnMat mat={"Ensemble Prise 2P+T - encastrable"} numMat={numMat} setSelect={setSelect} image={86}/>
            <UnMat mat={"Fiche DCL et douille électrique E27"} numMat={numMat} setSelect={setSelect} image={87}/>
            <UnMat mat={"Gaine ICTA Ø 20"} numMat={numMat} setSelect={setSelect} image={88}/>
            <UnMat mat={"Intérupteur automatique avec détecteur de mouvement"} numMat={numMat} setSelect={setSelect} image={89}/>
            <UnMat mat={"Plaque de Plâtre BA13"} numMat={numMat} setSelect={setSelect} image={90}/>
            <UnMat mat={"Montant M48"} numMat={numMat} setSelect={setSelect} image={91}/>
            <UnMat mat={"Vis TTPC 25"} numMat={numMat} setSelect={setSelect} image={92}/>
            <UnMat mat={"Lave-mains"} numMat={numMat} setSelect={setSelect} image={93}/>
            <UnMat mat={"annuler"} numMat={numMat} setSelect={setSelect} image={68}/>
    </div>
  );
}
export default PageSelectElec;