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
            <UnMat mat={"Bonde à grille pour lave-mains"}  numMat={numMat} setSelect={setSelect} image={0}/>
            <UnMat mat={"Bouchon laiton à visser F 1/2"} numMat={numMat} setSelect={setSelect} image={1}/>
             <UnMat mat={"Chevilles à expansion avec patte à vis"} numMat={numMat} setSelect={setSelect} image={2}/>
            <UnMat mat={"Chevilles à frapper"} numMat={numMat} setSelect={setSelect} image={3}/>
            <UnMat mat={"Chevilles autoforeuses - Fixation plaque de plâtre"} numMat={numMat} setSelect={setSelect} image={4}/>
            <UnMat mat={"Chiffons"} numMat={numMat} setSelect={setSelect} image={5}/>
            <UnMat mat={"Colle acrylique de fixation pour plinthe"} numMat={numMat} setSelect={setSelect} image={6}/>
            <UnMat mat={"Colle PVC"} numMat={numMat} setSelect={setSelect} image={7}/>
            <UnMat mat={"Collier PVC Ø 40"} numMat={numMat} setSelect={setSelect} image={8}/>
            <UnMat mat={"Colliers PVC Ø 32"} numMat={numMat} setSelect={setSelect} image={9}/>
            <UnMat mat={"Colliers PVC Ø 100"} numMat={numMat} setSelect={setSelect} image={10}/>
            <UnMat mat={"Colliers type Atlas double Ø12"} numMat={numMat} setSelect={setSelect} image={11}/>
            <UnMat mat={"Colliers type Atlas Simple Ø12"} numMat={numMat} setSelect={setSelect} image={12}/>
            <UnMat mat={"Coude cuivre 90° à souder FF Ø 12"} numMat={numMat} setSelect={setSelect} image={13}/>
            <UnMat mat={"Coude PVC 87°30° FF Ø 100"} numMat={numMat} setSelect={setSelect} image={14}/>
            <UnMat mat={"Coude PVC 87°30° FF Ø 32"} numMat={numMat} setSelect={setSelect} image={15}/>
            <UnMat mat={"Coude PVC 87°30° FF Ø 40"} numMat={numMat} setSelect={setSelect} image={16}/>
            <UnMat mat={"Faïence mur 20 x 20"} numMat={numMat} setSelect={setSelect} image={17}/>
            <UnMat mat={"Mortier colle poudre"} numMat={numMat} setSelect={setSelect} image={18}/>
            <UnMat mat={"Joint poudre carrelage"} numMat={numMat} setSelect={setSelect} image={19}/>
            <UnMat mat={"Ecrou laiton à collet battu 12x17 Ø 12"} numMat={numMat} setSelect={setSelect} image={20}/>
            <UnMat mat={"Joints d'étanchéité suivant montages"} numMat={numMat} setSelect={setSelect} image={21}/>
            <UnMat mat={"Kit robinet d'arrêt WC équerre + flexible + joint"} numMat={numMat} setSelect={setSelect} image={22}/>
            <UnMat mat={"Lave-mains"} numMat={numMat} setSelect={setSelect} image={23}/>
            <UnMat mat={"Lot de 2 chevilles clips pour fixation WC 6x70"} numMat={numMat} setSelect={setSelect} image={24}/>
            <UnMat mat={"Lot de 2 fixations pour lave-mains parois creuse + cheville"} numMat={numMat} setSelect={setSelect} image={25}/>
            <UnMat mat={"Lot de 2 fixations pour lave-mains parois pleine + cheville"} numMat={numMat} setSelect={setSelect} image={26}/>
            <UnMat mat={"Manchon cuivre à souder FF Ø 12"} numMat={numMat} setSelect={setSelect} image={28}/>
            <UnMat mat={"Manchon de dilatation PVC H Ø 100"} numMat={numMat} setSelect={setSelect} image={29}/>
            <UnMat mat={"Manchon mâle 243 CGU Ø 12 - M 12x17"} numMat={numMat} setSelect={setSelect} image={30}/>
            <UnMat mat={"Manchon mâle 243 CGU Ø 12 - M 15x21"} numMat={numMat} setSelect={setSelect} image={31}/>
            <UnMat mat={"Manchon PVC Ø 100"} numMat={numMat} setSelect={setSelect} image={32}/>
            <UnMat mat={"Manchon PVC Ø 32"} numMat={numMat} setSelect={setSelect} image={33}/>
            <UnMat mat={"Manchon PVC Ø 40"} numMat={numMat} setSelect={setSelect} image={34}/>
            <UnMat mat={"Mélangeur pour lave-mains + Fléxibles de raccordement"} numMat={numMat} setSelect={setSelect} image={35}/>
            <UnMat mat={"Pack WC à poser sortie horizontale"} numMat={numMat} setSelect={setSelect} image={36}/>
            <UnMat mat={"Panneau bois (OSB ou aggloméré)"} numMat={numMat} setSelect={setSelect} image={37}/>
            <UnMat mat={"Papier de verre grain 120"} numMat={numMat} setSelect={setSelect} image={38}/>
            <UnMat mat={"Papier de verre grain 80"} numMat={numMat} setSelect={setSelect} image={39}/>
            <UnMat mat={"Pates à vis"} numMat={numMat} setSelect={setSelect} image={40}/>
            <UnMat mat={"Pipe coudée WC 90° 110 mm"} numMat={numMat} setSelect={setSelect} image={41}/>
            <UnMat mat={"Pipe droite WC 110 mm"} numMat={numMat} setSelect={setSelect} image={42}/>
            <UnMat mat={"Planche de coffrage"} numMat={numMat} setSelect={setSelect} image={43}/>
            <UnMat mat={"Réduction PVC Ø 40/32"} numMat={numMat} setSelect={setSelect} image={44}/>
            <UnMat mat={"Robinet de puisage de lave-linge + platine de fixation"} numMat={numMat} setSelect={setSelect} image={45}/>
            <UnMat mat={"Robinet simple pour lave-mains + fléxible de raccordement"} numMat={numMat} setSelect={setSelect} image={46}/>
            <UnMat mat={"Rosaces coniques H19"} numMat={numMat} setSelect={setSelect} image={47}/>
            <UnMat mat={"Siphon lavabo/lave-mains à visser sortie Ø 32"} numMat={numMat} setSelect={setSelect} image={48}/>
            <UnMat mat={"Système de vidage PVC pour machine à laver"} numMat={numMat} setSelect={setSelect} image={49}/>
            <UnMat mat={"Tampon de réduction simple PVC Ø 100/40"} numMat={numMat} setSelect={setSelect} image={50}/>
            <UnMat mat={"Tampon de visite PVC avec bouchon M/F Ø 100"} numMat={numMat} setSelect={setSelect} image={51}/>
            <UnMat mat={"Tampon de visite PVC avec bouchon M/F Ø 32"} numMat={numMat} setSelect={setSelect} image={52}/>
            <UnMat mat={"Té égal cuivre à souder FFF Ø 12"} numMat={numMat} setSelect={setSelect} image={53}/>
            <UnMat mat={"Té pied de biche 87°30 FF PVC Ø 100"} numMat={numMat} setSelect={setSelect} image={54}/>
            <UnMat mat={"Té pied de biche 87°30 FF PVC Ø 32"} numMat={numMat} setSelect={setSelect} image={55}/>
            <UnMat mat={"Té pied de biche 87°30 FF PVC Ø 40"} numMat={numMat} setSelect={setSelect} image={56}/>
            <UnMat mat={"Tube cuivre Ø 12"} numMat={numMat} setSelect={setSelect} image={57}/>
            <UnMat mat={"Tube PVC Ø 100"} numMat={numMat} setSelect={setSelect} image={58}/>
            <UnMat mat={"Tube PVC Ø 32"} numMat={numMat} setSelect={setSelect} image={59}/>
            <UnMat mat={"Tube PVC Ø 40"} numMat={numMat} setSelect={setSelect} image={60}/>
            <UnMat mat={"Vanne d'arrêt MF 1/4 de tour - 12x17"} numMat={numMat} setSelect={setSelect} image={61}/>
            <UnMat mat={"Verrou à bouton - cylindre 40 mm"} numMat={numMat} setSelect={setSelect} image={62}/>
            <UnMat mat={"Vis à bois 30 mm"} numMat={numMat} setSelect={setSelect} image={63}/>
            <UnMat mat={"Vis TRPF"} numMat={numMat} setSelect={setSelect} image={64}/>
            <UnMat mat={"Vis TTPC 25"} numMat={numMat} setSelect={setSelect} image={65}/>
            <UnMat mat={"Vis TTPC 35"} numMat={numMat} setSelect={setSelect} image={67}/>
            <UnMat mat={"anuller"} numMat={numMat} setSelect={setSelect} image={68}/>
            
    </div>
  );
}
export default PageSelect;