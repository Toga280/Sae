import React, { useState } from "react";
import "../../style/ficheGlobal.css";
import "../CreationFiche/unMat.css";
import fonctionsMiniBoxInfoJson from "./MiniBoxInfoFunction";

// IMAGES PLOMBERIE
const a = require("./imagesFiche/bondelavemain.png");
const b = require("./imagesFiche/bouchonlaiton.webp");
const c = require("./imagesFiche/chevilleexpansion.jpg");
const d = require("./imagesFiche/chevilleafrapper.jpg");
const e = require("./imagesFiche/chevilleautof.jpg");
const f = require("./imagesFiche/chiffon.jpg");
const g = require("./imagesFiche/colleplinthe.jpg");
const h = require("./imagesFiche/collepvc.jpg");
const i = require("./imagesFiche/collierpvc.jpg");
const j = require("./imagesFiche/collierpvc.jpg");
const k = require("./imagesFiche/collierpvc.jpg");
const l = require("./imagesFiche/collieratlas.jpg");
const m = require("./imagesFiche/collieratlassimple.jpg");
const n = require("./imagesFiche/coude90.webp");
const o = require("./imagesFiche/coudepvc.jpg");
const p = require("./imagesFiche/coudepvc.jpg");
const q = require("./imagesFiche/coudepvc.jpg");
const r = require("./imagesFiche/faience.jpg");
const s = require("./imagesFiche/collepoudre.jpg");
const t = require("./imagesFiche/jointpoudrecarrelage.jpg");
const u = require("./imagesFiche/bouchoncolletbattut.webp");
const v = require("./imagesFiche/joints.jfif");
const w = require("./imagesFiche/kitrobinnet.webp");
const x = require("./imagesFiche/lavemain.jpg");
const y = require("./imagesFiche/chevilleclip.webp");
const z = require("./imagesFiche/paroicreuse.webp");
const a2 = require("./imagesFiche/paroipleine.webp");
const b2 = require("./imagesFiche/mcuivre.jpg");
const c2 = require("./imagesFiche/mcuivre.jpg");
const d2 = require("./imagesFiche/manchondilatation.jpg");
const e2 = require("./imagesFiche/manchonCGU.jpg");
const f2 = require("./imagesFiche/manchonCGU.jpg");
const g2 = require("./imagesFiche/manchonPVC.jpg");
const h2 = require("./imagesFiche/manchonPVC.jpg");
const i2 = require("./imagesFiche/manchonPVC.jpg");
const j2 = require("./imagesFiche/melangeurlavemain.webp");
const k2 = require("./imagesFiche/pack-wc.jpg");
const l2 = require("./imagesFiche/osb.jpg");
const m2 = require("./imagesFiche/papierverre.webp");
const n2 = require("./imagesFiche/papierverre.webp");
const o2 = require("./imagesFiche/patteavis.jpg");
const p2 = require("./imagesFiche/pipewc.jpg");
const q2 = require("./imagesFiche/pipewcdroite.webp");
const r2 = require("./imagesFiche/planchecoffrage.jpg");
const s2 = require("./imagesFiche/reductionPVC.jpg");
const t2 = require("./imagesFiche/Platinerobinetjardinlaitonnickele2.jpg");
const u2 = require("./imagesFiche/robinnetracordement.webp");
const v2 = require("./imagesFiche/rosace.jpg");
const w2 = require("./imagesFiche/siphon.jpg");
const x2 = require("./imagesFiche/ssiphonmachine.jpg");
const y2 = require("./imagesFiche/tampon.jpg");
const z2 = require("./imagesFiche/bouchon-tampon-de-visite-mf-ø-100-réf-ft-nicoll.webp");
const a3 = require("./imagesFiche/bouchon-tampon-de-visite-mf-ø-100-réf-ft-nicoll.webp");
const b3 = require("./imagesFiche/te-cuivre-egal_10.jpg");
const c3 = require("./imagesFiche/31cMJS38XUL._AC_UF1000,1000_QL80_.jpg");
const d3 = require("./imagesFiche/31cMJS38XUL._AC_UF1000,1000_QL80_.jpg");
const e3 = require("./imagesFiche/31cMJS38XUL._AC_UF1000,1000_QL80_.jpg");
const f3 = require("./imagesFiche/tube-cuivre-12-mm-4-m~3506465167137_36c.webp");
const g3 = require("./imagesFiche/tubepvc.webp");
const h3 = require("./imagesFiche/tubepvc.webp");
const i3 = require("./imagesFiche/tubepvc.webp");
const j3 = require("./imagesFiche/vanne-d-arret-1-4-de-tour-male-femelle-12x17-diall~5052931288410_03c.jpg");
const k3 = require("./imagesFiche/verrou.jpg");
const l3 = require("./imagesFiche/visabois.jpg");
const m3 = require("./imagesFiche/vistrpf-389349.jpg");
const n3 = require("./imagesFiche/vis-ttpc-tete-trompette-platre_vis35025-bte_b5_pai.jpg");
const o3 = require("./imagesFiche/vis-ttpc-milieu-humide_vi35035mh_p_pai.jpg");
const p3 = require("./imagesFiche/vis-ttpc-milieu-humide_vi35035mh_p_pai.jpg");
const q3 = require("./imagesFiche/annuler.jpg");
const parDefaut = require("./imagesFiche/1.webp");


// const fs = require('fs');
// const path = require('path');

// // Répertoire des images
// const imageDirectory = './imageFicheElec';

// // Liste des noms de fichiers d'images (vous pouvez obtenir cette liste de différentes manières)
// const imageFileNames = ['', ''];

// // Obtenir le chemin complet de chaque image
// const imagePaths = imageFileNames.map(fileName => path.join(imageDirectory, fileName));

// // Importer chaque image
// const imageObjects = imagePaths.map(imagePath => require(imagePath));



let img = "";

function UnMat({ mat, numMat, setSelect, image }: any) {
  
  switch (image) {
    case 0: img = a; break;
    case 1: img = b; break;
    case 2:img = c;break;
    case 3: img = d;break;
    case 4: img = e; break; 
    case 5:img = f; break;  
    case 6:  img = g; break;
    case 7: img = h;break;
    case 8: img = i; break;
    case 9:  img = j; break; 
    case 10: img = k; break;   
    case 11: img = l; break;   
    case 12: img = m; break;   
    case 13: img = n; break;  
    case 14: img = o; break;  
    case 15: img = p; break;  
    case 16: img = q; break;  
    case 17: img = r; break;  
    case 18: img = s; break;   
    case 19: img = t; break;  
    case 20: img = u; break;
    case 21: img = v; break;
    case 22: img = w; break;
    case 23: img = x; break;
    case 24: img = y; break;
    case 25: img = z; break;
    case 26: img = a2; break;
    case 27: img = b2; break;
    case 28: img = c2; break;
    case 29: img = d2; break;
    case 30: img = e2; break;
    case 31: img = f2; break;
    case 32: img = g2; break;
    case 33: img = h2; break;
    case 34: img = i2; break;
    case 35: img = j2; break;
    case 36: img = k2; break;
    case 37: img = l2; break;
    case 38: img = m2; break;
    case 39: img = n2; break;
    case 40: img = o2; break;
    case 41: img = p2; break;
    case 42: img = q2; break;
    case 43: img = r2; break;
    case 44: img = s2; break;
    case 45: img = t2; break;
    case 46: img = u2; break;
    case 47: img = v2; break;
    case 48: img = w2; break;
    case 49: img = x2; break;
    case 50: img = y2; break;
    case 51: img = z2; break;
    case 52: img = a3; break;
    case 53: img = b3; break;
    case 54: img = c3; break;
    case 55: img = d3; break;
    case 56: img = e3; break;
    case 57: img = f3; break;
    case 58: img = g3; break;
    case 59: img = h3; break;
    case 60: img = i3; break;
    case 61: img = j3; break;
    case 62: img = k3; break;
    case 63: img = l3; break;
    case 64: img = m3; break;
    case 65: img = n3; break;
    case 66: img = o3; break;
    case 67: img = p3; break;
    case 68: img = q3; break;


    default:
      img = parDefaut;
      console.log(img);
  }
  const setSelectFalse = () => {
    setSelect(false);
  };

  function obtenirMateriel(nom: string): string {
    switch (nom) {
        case "Mat1":
            return "Matériel n°1";
        case "Mat2":
            return "Matériel n°2";
        case "Mat3":
            return "Matériel n°3";
        case "Mat4":
            return "Matériel n°4";
        case "Mat5":
            return "Matériel n°5";
        case "Mat6":
            return "Matériel n°6";
        case "Mat7":
            return "Matériel n°7";
        case "Mat8":
            return "Matériel n°8";
        case "Mat9":
            return "Matériel n°9";
        case "Mat10":
            return "Matériel n°10";
        default:
            return "Matériel inconnu";
    }
}
  const returnMat = () => {
    if (mat === "annuler") {
      fonctionsMiniBoxInfoJson.setMateriel(obtenirMateriel(numMat), numMat);
      setSelectFalse();
    } else {
    fonctionsMiniBoxInfoJson.setMateriel(mat, numMat);
    setSelectFalse();
    }
  };
  return (
    <div className="UnMat" onClick={returnMat}>
      <div className="matname">{mat}</div>
      <img src={img} alt={mat} className="imageMat" />
    </div>
  );
}

export default UnMat;
