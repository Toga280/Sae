

import React, { useState } from "react";
import "../../style/ficheGlobal.css";
import "./unMat.css";
import fonctionsMiniBoxInfoJson from "./MiniBoxInfoFunction";
// IMAGES
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
const d2 = require("./imagesFiche/coudepvc.jpg");
const e2 = require("./imagesFiche/coudepvc.jpg");
const f2 = require("./imagesFiche/coudepvc.jpg");
const g2 = require("./imagesFiche/coudepvc.jpg");
const h2 = require("./imagesFiche/coudepvc.jpg");
const i2 = require("./imagesFiche/coudepvc.jpg");
const j2 = require("./imagesFiche/coudepvc.jpg");
const k2 = require("./imagesFiche/coudepvc.jpg");
const l2 = require("./imagesFiche/coudepvc.jpg");
const m2 = require("./imagesFiche/coudepvc.jpg");
const n2 = require("./imagesFiche/coudepvc.jpg");
const o2 = require("./imagesFiche/coudepvc.jpg");
const p2 = require("./imagesFiche/coudepvc.jpg");
const q2 = require("./imagesFiche/coudepvc.jpg");
const r2 = require("./imagesFiche/coudepvc.jpg");
const s2 = require("./imagesFiche/coudepvc.jpg");
const t2 = require("./imagesFiche/coudepvc.jpg");
const parDefaut = require("./imagesFiche/1.webp");
let img = "";

function UnMat({ mat, numMat, setSelect, image }: any) {
  
  switch (image) {
    case 0:
    img = a;
    console.log("image : " + img);
    break;
    case 1:
      img = b;
      console.log("image : " + img);
      break;
    case 2:
      img = c;
      console.log("image : " + img);
      break;
    case 3:
      img = d;
      console.log("image : " + img);
      break;
    case 4:
      img = e;
      console.log("image : " + img);
      break; 
    case 5:
      img = f;
      console.log("image : " + img);
      break;  
    case 6:
      img = g;
      console.log("image : " + img);
      break;
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






    default:
      img = parDefaut;
      console.log(img);
  }
  const setSelectFalse = () => {
    setSelect(false);
  };
  const returnMat = () => {
    fonctionsMiniBoxInfoJson.setMateriel(mat, numMat);
    setSelectFalse();
  };
  return (
    <div className="UnMat" onClick={returnMat}>
      <div className="matname">{mat}</div>
      <img src={img} alt={mat} className="imageMat" />
    </div>
  );
}

export default UnMat;
