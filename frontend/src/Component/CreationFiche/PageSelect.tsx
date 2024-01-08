import React, {useState} from "react";
import "../../style/fiche1.css";
import "../../style/ficheGlobal.css";
import UnMat from "./UnMat";
function PageSelect({setSelect, numMat} : any){
  
  const setSelectFalse = () => setSelect(false);
  return (
    <div>
      <button onClick={() => setSelectFalse()}> Retour </button> 
          Séléctionnez un materiel à ajouter :
            <UnMat mat={"Bonde à grille pour lave-mains"}  numMat={numMat} setSelect={setSelect} image={""}/>
            <UnMat mat={"Bouchon laiton à visser F 1/2"} numMat={numMat} setSelect={setSelect} image={""}/>
            <UnMat mat={"Chevilles à expansion avec patte à vis"} numMat={numMat} setSelect={setSelect} image={""}/>
            <UnMat mat={"Chevilles à frapper"} numMat={numMat} setSelect={setSelect} image={""}/>
            <UnMat mat={"Chevilles autoforeuses - Fixation plaque de plâtre"} numMat={numMat} setSelect={setSelect} image={""}/>
            <UnMat mat={"Chiffons"} numMat={numMat} setSelect={setSelect} image={""}/>
            <UnMat mat={"Colle acrylique de fixation pour plinthe"} numMat={numMat} setSelect={setSelect} image={""}/>
            <UnMat mat={"Colle PVC"} numMat={numMat} setSelect={setSelect} image={""}/>
            <UnMat mat={"Collier PVC Ø 40"} numMat={numMat} setSelect={setSelect} image={""}/>
            <UnMat mat={"Colliers PVC Ø 32"} numMat={numMat} setSelect={setSelect} image={""}/>
            <UnMat mat={"Colliers PVC Ø 100"} numMat={numMat} setSelect={setSelect} image={""}/>
            <UnMat mat={"Colliers type Atlas double Ø12"} numMat={numMat} setSelect={setSelect} image={""}/>
            <UnMat mat={"Colliers type Atlas Simple Ø12"} numMat={numMat} setSelect={setSelect} image={""}/>
            <UnMat mat={"Coude cuivre 90° à souder FF Ø 12"} numMat={numMat} setSelect={setSelect} image={""}/>
            <UnMat mat={"Coude PVC 87°30° FF Ø 100"} numMat={numMat} setSelect={setSelect} image={""}/>
            <UnMat mat={"Coude PVC 87°30° FF Ø 32"} numMat={numMat} setSelect={setSelect} image={""}/>
            <UnMat mat={"Coude PVC 87°30° FF Ø 40"} numMat={numMat} setSelect={setSelect} image={""}/>
            <UnMat mat={"Faïence mur 20 x 20"} numMat={numMat} setSelect={setSelect} image={""}/>
            <UnMat mat={"Mortier colle poudre"} numMat={numMat} setSelect={setSelect} image={""}/>
            <UnMat mat={"Joint poudre carrelage"} numMat={numMat} setSelect={setSelect} image={""}/>
            <UnMat mat={"Ecrou laiton à collet battu 12x17 Ø 12"} numMat={numMat} setSelect={setSelect} image={""}/>
            <UnMat mat={"Joints d'étanchéité suivant montages"} numMat={numMat} setSelect={setSelect} image={""}/>
            <UnMat mat={"Kit robinet d'arrêt WC équerre + flexible + joint"} numMat={numMat} setSelect={setSelect} image={""}/>
            <UnMat mat={"Lave-mains"} numMat={numMat} setSelect={setSelect} image={""}/>
            <UnMat mat={"Lot de 2 chevilles clips pour fixation WC 6x70"} numMat={numMat} setSelect={setSelect} image={""}/>
            <UnMat mat={"Lot de 2 fixations pour lave-mains parois creuse + cheville"} numMat={numMat} setSelect={setSelect} image={""}/>
            <UnMat mat={"Lot de 2 fixations pour lave-mains parois pleine + cheville"} numMat={numMat} setSelect={setSelect} image={""}/>
            <UnMat mat={"Manchon cuivre à souder FF Ø 12"} numMat={numMat} setSelect={setSelect} image={""}/>
            <UnMat mat={"Manchon de dilatation PVC H Ø 100"} numMat={numMat} setSelect={setSelect} image={""}/>
            <UnMat mat={"Manchon mâle 243 CGU Ø 12 - M 12x17"} numMat={numMat} setSelect={setSelect} image={""}/>
            <UnMat mat={"Manchon mâle 243 CGU Ø 12 - M 15x21"} numMat={numMat} setSelect={setSelect} image={""}/>
            <UnMat mat={"Manchon PVC Ø 100"} numMat={numMat} setSelect={setSelect} image={""}/>
            <UnMat mat={"Manchon PVC Ø 32"} numMat={numMat} setSelect={setSelect} image={""}/>
            <UnMat mat={"Manchon PVC Ø 40"} numMat={numMat} setSelect={setSelect} image={""}/>
            <UnMat mat={"Mélangeur pour lave-mains + Fléxibles de raccordement"} numMat={numMat} setSelect={setSelect} image={""}/>
            <UnMat mat={"Pack WC à poser sortie horizontale"} numMat={numMat} setSelect={setSelect} image={""}/>
            <UnMat mat={"Panneau bois (OSB ou aggloméré)"} numMat={numMat} setSelect={setSelect} image={""}/>
            <UnMat mat={"Papier de verre grain 120"} numMat={numMat} setSelect={setSelect} image={""}/>
            <UnMat mat={"Papier de verre grain 80"} numMat={numMat} setSelect={setSelect} image={""}/>
            <UnMat mat={"Pates à vis"} numMat={numMat} setSelect={setSelect} image={""}/>
            <UnMat mat={"Pipe coudée WC 90° 110 mm"} numMat={numMat} setSelect={setSelect} image={""}/>
            <UnMat mat={"Pipe droite WC 110 mm"} numMat={numMat} setSelect={setSelect} image={""}/>
            <UnMat mat={"Planche de coffrage"} numMat={numMat} setSelect={setSelect} image={""}/>
            <UnMat mat={"Réduction PVC Ø 40/32"} numMat={numMat} setSelect={setSelect} image={""}/>
            <UnMat mat={"Robinet de puisage de lave-linge + platine de fixation"} numMat={numMat} setSelect={setSelect} image={""}/>
            <UnMat mat={"Robinet simple pour lave-mains + fléxible de raccordement"} numMat={numMat} setSelect={setSelect} image={""}/>
            <UnMat mat={"Rosaces coniques H19"} numMat={numMat} setSelect={setSelect} image={""}/>
            <UnMat mat={"Siphon lavabo/lave-mains à visser sortie Ø 32"} numMat={numMat} setSelect={setSelect} image={""}/>
            <UnMat mat={"Système de vidage PVC pour machine à laver"} numMat={numMat} setSelect={setSelect} image={""}/>
            <UnMat mat={"Tampon de réduction simple PVC Ø 100/40"} numMat={numMat} setSelect={setSelect} image={""}/>
            <UnMat mat={"Tampon de visite PVC avec bouchon M/F Ø 100"} numMat={numMat} setSelect={setSelect} image={""}/>
            <UnMat mat={"Tampon de visite PVC avec bouchon M/F Ø 32"} numMat={numMat} setSelect={setSelect} image={""}/>
            <UnMat mat={"Té égal cuivre à souder FFF Ø 12"} numMat={numMat} setSelect={setSelect} image={""}/>
            <UnMat mat={"Té pied de biche 87°30 FF PVC Ø 100"} numMat={numMat} setSelect={setSelect} image={""}/>
            <UnMat mat={"Té pied de biche 87°30 FF PVC Ø 32"} numMat={numMat} setSelect={setSelect} image={""}/>
            <UnMat mat={"Té pied de biche 87°30 FF PVC Ø 40"} numMat={numMat} setSelect={setSelect} image={""}/>
            <UnMat mat={"Tube cuivre Ø 12"} numMat={numMat} setSelect={setSelect} image={""}/>
            <UnMat mat={"Tube PVC Ø 100"} numMat={numMat} setSelect={setSelect} image={""}/>
            <UnMat mat={"Tube PVC Ø 32"} numMat={numMat} setSelect={setSelect} image={""}/>
            <UnMat mat={"Tube PVC Ø 40"} numMat={numMat} setSelect={setSelect} image={""}/>
            <UnMat mat={"Vanne d'arrêt MF 1/4 de tour - 12x17"} numMat={numMat} setSelect={setSelect} image={""}/>
            <UnMat mat={"Verrou à bouton - cylindre 40 mm"} numMat={numMat} setSelect={setSelect} image={""}/>
            <UnMat mat={"Vis à bois 30 mm"} numMat={numMat} setSelect={setSelect} image={""}/>
            <UnMat mat={"Vis TRPF"} numMat={numMat} setSelect={setSelect} image={""}/>
            <UnMat mat={"Vis TTPC 25"} numMat={numMat} setSelect={setSelect} image={""}/>
            <UnMat mat={"Vis TTPC 35"} numMat={numMat} setSelect={setSelect} image={""}/>
            <UnMat mat={"null"} numMat={numMat} setSelect={setSelect} image={""}/>
            
    </div>
  );
}
export default PageSelect;