import React, {useState} from "react";
import "../../style/fiche1.css";
import "../../style/ficheGlobal.css";
import "./select.css";
import UnMat from "./UnMat";

function PageSelect({setSelect, numMat} : any){
  const setSelectFalse = () => setSelect(false);

  return (
    <div className="global_select">
      <button className="retour_select" onClick={() => setSelectFalse()}> Retour </button> 
          <h2 className="txt_choix_selec_mat">Séléctionnez un materiel à ajouter :</h2>
            <UnMat mat={"Champlat"}  numMat={numMat} setSelect={setSelect} image={100}/>
            <UnMat mat={"Chiffons"} numMat={numMat} setSelect={setSelect} image={101}/>
            <UnMat mat={"Colle acrylique de fixation pour plinthe"} numMat={numMat} setSelect={setSelect} image={102}/>
            <UnMat mat={"Colle pour toile de verre"} numMat={numMat} setSelect={setSelect} image={103}/>
            <UnMat mat={"Croisillons épaisseur 2 mm"} numMat={numMat} setSelect={setSelect} image={104}/>
            <UnMat mat={"Enduit à joint"} numMat={numMat} setSelect={setSelect} image={105}/>
            <UnMat mat={"Enduit de rebouchage"} numMat={numMat} setSelect={setSelect} image={106}/>
            <UnMat mat={"Etagère bois 20 x 60"} numMat={numMat} setSelect={setSelect} image={107}/>
            <UnMat mat={"Faïence mur 20 x 20"} numMat={numMat} setSelect={setSelect} image={108}/>
            <UnMat mat={"Joint poudre carrelage"} numMat={numMat} setSelect={setSelect} image={109}/>
            <UnMat mat={"Lot de colorants universels de peintre"} numMat={numMat} setSelect={setSelect} image={110}/>
            <UnMat mat={"Mortier colle poudre"} numMat={numMat} setSelect={setSelect} image={111}/>
            <UnMat mat={"Panneau bois (OSB ou aggloméré)"} numMat={numMat} setSelect={setSelect} image={112}/>
            <UnMat mat={"Papier de verre grain 120"} numMat={numMat} setSelect={setSelect} image={113}/>
            <UnMat mat={"Papier de verre grain 80"} numMat={numMat} setSelect={setSelect} image={114}/>
            <UnMat mat={"Peinture acrylique satinée"} numMat={numMat} setSelect={setSelect} image={115}/>
            <UnMat mat={"Peinture boiseries acrylique brillant"} numMat={numMat} setSelect={setSelect} image={116}/>
            <UnMat mat={"Peinture impression"} numMat={numMat} setSelect={setSelect} image={117}/>
            <UnMat mat={"Planche de coffrage"} numMat={numMat} setSelect={setSelect} image={118}/>
            <UnMat mat={"Plaque de Plâtre BA13"} numMat={numMat} setSelect={setSelect} image={119}/>
            <UnMat mat={"Plinthe MDF ou bois brut"} numMat={numMat} setSelect={setSelect} image={120}/>
            <UnMat mat={"Pointes tête homme"} numMat={numMat} setSelect={setSelect} image={121}/>
            <UnMat mat={"Portemanteau mural bois 2 têtes"} numMat={numMat} setSelect={setSelect} image={122}/>
            <UnMat mat={"Rail R48"} numMat={numMat} setSelect={setSelect} image={123}/>
            <UnMat mat={"Revêtement à peindre - toile de verre (largeur 1 m)"} numMat={numMat} setSelect={setSelect} image={124}/>
            <UnMat mat={"Serrure satandard encastrable NF Cylindre européen"} numMat={numMat} setSelect={setSelect} image={125}/>
            <UnMat mat={"Serrure standard en L encastrable"} numMat={numMat} setSelect={setSelect} image={126}/>
            <UnMat mat={"Tablette bois"} numMat={numMat} setSelect={setSelect} image={127}/>
            <UnMat mat={"Tasseau raboté"} numMat={numMat} setSelect={setSelect} image={128}/>
            <UnMat mat={"Verrou à bouton - cylindre 40 mm"} numMat={numMat} setSelect={setSelect} image={129}/>
            <UnMat mat={"Vis à bois 30 mm"} numMat={numMat} setSelect={setSelect} image={130}/>
            <UnMat mat={"Vis TRPF"} numMat={numMat} setSelect={setSelect} image={131}/>
            <UnMat mat={"Vis TTPC 25"} numMat={numMat} setSelect={setSelect} image={132}/>
            <UnMat mat={"Vis TTPC 35"} numMat={numMat} setSelect={setSelect} image={133}/>

            <UnMat mat={"annuler"} numMat={numMat} setSelect={setSelect} image={68}/>
    </div>
  );
}
export default PageSelect;