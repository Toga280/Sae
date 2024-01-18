import React, { useState } from 'react'
import '../../style/ficheGlobal.css'
import '../CreationFiche/unMat.css'
import fonctionsMiniBoxInfoJson from './MiniBoxInfoFunction'

// IMAGES PLOMBERIE
const a = require('./imagesFiche/bondelavemain.png')
const b = require('./imagesFiche/bouchonlaiton.webp')
const c = require('./imagesFiche/chevilleexpansion.jpg')
const d = require('./imagesFiche/chevilleafrapper.jpg')
const e = require('./imagesFiche/chevilleautof.jpg')
const f = require('./imagesFiche/chiffon.jpg')
const g = require('./imagesFiche/colleplinthe.jpg')
const h = require('./imagesFiche/collepvc.jpg')
const i = require('./imagesFiche/collierpvc.jpg')
const j = require('./imagesFiche/collierpvc.jpg')
const k = require('./imagesFiche/collierpvc.jpg')
const l = require('./imagesFiche/collieratlas.jpg')
const m = require('./imagesFiche/collieratlassimple.jpg')
const n = require('./imagesFiche/coude90.webp')
const o = require('./imagesFiche/coudepvc.jpg')
const p = require('./imagesFiche/coudepvc.jpg')
const q = require('./imagesFiche/coudepvc.jpg')
const r = require('./imagesFiche/faience.jpg')
const s = require('./imagesFiche/collepoudre.jpg')
const t = require('./imagesFiche/jointpoudrecarrelage.jpg')
const u = require('./imagesFiche/bouchoncolletbattut.webp')
const v = require('./imagesFiche/joints.jfif')
const w = require('./imagesFiche/kitrobinnet.webp')
const x = require('./imagesFiche/lavemain.jpg')
const y = require('./imagesFiche/chevilleclip.webp')
const z = require('./imagesFiche/paroicreuse.webp')
const a2 = require('./imagesFiche/paroipleine.webp')
const b2 = require('./imagesFiche/mcuivre.jpg')
const c2 = require('./imagesFiche/mcuivre.jpg')
const d2 = require('./imagesFiche/manchondilatation.jpg')
const e2 = require('./imagesFiche/manchonCGU.jpg')
const f2 = require('./imagesFiche/manchonCGU.jpg')
const g2 = require('./imagesFiche/manchonPVC.jpg')
const h2 = require('./imagesFiche/manchonPVC.jpg')
const i2 = require('./imagesFiche/manchonPVC.jpg')
const j2 = require('./imagesFiche/melangeurlavemain.webp')
const k2 = require('./imagesFiche/pack-wc.jpg')
const l2 = require('./imagesFiche/osb.jpg')
const m2 = require('./imagesFiche/papierverre.webp')
const n2 = require('./imagesFiche/papierverre.webp')
const o2 = require('./imagesFiche/patteavis.jpg')
const p2 = require('./imagesFiche/pipewc.jpg')
const q2 = require('./imagesFiche/pipewcdroite.webp')
const r2 = require('./imagesFiche/planchecoffrage.jpg')
const s2 = require('./imagesFiche/reductionPVC.jpg')
const t2 = require('./imagesFiche/Platinerobinetjardinlaitonnickele2.jpg')
const u2 = require('./imagesFiche/robinnetracordement.webp')
const v2 = require('./imagesFiche/rosace.jpg')
const w2 = require('./imagesFiche/siphon.jpg')
const x2 = require('./imagesFiche/ssiphonmachine.jpg')
const y2 = require('./imagesFiche/tampon.jpg')
const z2 = require('./imagesFiche/bouchon-tampon-de-visite-mf-ø-100-réf-ft-nicoll.webp')
const a3 = require('./imagesFiche/bouchon-tampon-de-visite-mf-ø-100-réf-ft-nicoll.webp')
const b3 = require('./imagesFiche/te-cuivre-egal_10.jpg')
const c3 = require('./imagesFiche/31cMJS38XUL._AC_UF1000,1000_QL80_.jpg')
const d3 = require('./imagesFiche/31cMJS38XUL._AC_UF1000,1000_QL80_.jpg')
const e3 = require('./imagesFiche/31cMJS38XUL._AC_UF1000,1000_QL80_.jpg')
const f3 = require('./imagesFiche/tube-cuivre-12-mm-4-m~3506465167137_36c.webp')
const g3 = require('./imagesFiche/tubepvc.webp')
const h3 = require('./imagesFiche/tubepvc.webp')
const i3 = require('./imagesFiche/tubepvc.webp')
const j3 = require('./imagesFiche/vanne-d-arret-1-4-de-tour-male-femelle-12x17-diall~5052931288410_03c.jpg')
const k3 = require('./imagesFiche/verrou.jpg')
const l3 = require('./imagesFiche/visabois.jpg')
const m3 = require('./imagesFiche/vistrpf-389349.jpg')
const n3 = require('./imagesFiche/vis-ttpc-tete-trompette-platre_vis35025-bte_b5_pai.jpg')
const o3 = require('./imagesFiche/vis-ttpc-milieu-humide_vi35035mh_p_pai.jpg')
const p3 = require('./imagesFiche/vis-ttpc-milieu-humide_vi35035mh_p_pai.jpg')
const q3 = require('./imagesFiche/annuler.jpg')

const a4 = require('./imageFicheElec/1.webp')
const b4 = require('./imageFicheElec/2.jpg')
const c4 = require('./imageFicheElec/3.jpg')
const d4 = require('./imageFicheElec/4.jpg')
const e4 = require('./imageFicheElec/5.jpg')
const f4 = require('./imageFicheElec/6.jpg')
const g4 = require('./imageFicheElec/7.jpg')
const h4 = require('./imageFicheElec/8.jpg')
const i4 = require('./imageFicheElec/9.jpg')
const j4 = require('./imageFicheElec/10.jpg')
const k4 = require('./imageFicheElec/11.jpg')
const l4 = require('./imageFicheElec/12.jpg')
const m4 = require('./imageFicheElec/13.jpg')
const n4 = require('./imageFicheElec/14.jpg')
const o4 = require('./imageFicheElec/15.webp')
const p4 = require('./imageFicheElec/16.jpg')
const q4 = require('./imageFicheElec/17.jpg')
const r4 = require('./imageFicheElec/18.jpg')
const s4 = require('./imageFicheElec/19.jpg')
const t4 = require('./imageFicheElec/20.jpg')
const u4 = require('./imageFicheElec/21.jpg')
const v4 = require('./imageFicheElec/22.webp')
const w4 = require('./imageFicheElec/23.jpg')

const a5 = require('./imageFicheFinition/1.jpg')
const b5 = require('./imageFicheFinition/2.jpg')
const c5 = require('./imageFicheFinition/3.jpg')
const d5 = require('./imageFicheFinition/4.jpg')
const e5 = require('./imageFicheFinition/5.jpeg')
const f5 = require('./imageFicheFinition/6.png')
const g5 = require('./imageFicheFinition/7.webp')
const h5 = require('./imageFicheFinition/8.webp')
const i5 = require('./imageFicheFinition/9.jpg')
const j5 = require('./imageFicheFinition/10.jpg')
const k5 = require('./imageFicheFinition/11.jpg')
const l5 = require('./imageFicheFinition/12.jpg')
const m5 = require('./imageFicheFinition/13.jpg')
const n5 = require('./imageFicheFinition/14.webp')
const o5 = require('./imageFicheFinition/15.jpeg')
const p5 = require('./imageFicheFinition/16.jpg')
const q5 = require('./imageFicheFinition/17.webp')
const r5 = require('./imageFicheFinition/18.jpg')
const s5 = require('./imageFicheFinition/19.jpg')
const t5 = require('./imageFicheFinition/20.webp')
const u5 = require('./imageFicheFinition/21.webp')
const v5 = require('./imageFicheFinition/22.webp')
const w5 = require('./imageFicheFinition/23.webp')
const x5 = require('./imageFicheFinition/24.webp')
const y5 = require('./imageFicheFinition/25.jpeg')
const z5 = require('./imageFicheFinition/26.jpg')
const a6 = require('./imageFicheFinition/27.jpg')
const b6 = require('./imageFicheFinition/28.jpg')
const c6 = require('./imageFicheFinition/29.jpg')
const d6 = require('./imageFicheFinition/30.jpg')
const e6 = require('./imageFicheFinition/31.jpg')
const f6 = require('./imageFicheFinition/32.jpg')
const g6 = require('./imageFicheFinition/33.jpg')

const parDefaut = require('./imagesFiche/1.webp')

let img = ''

function UnMat({ mat, numMat, setSelect, image }: any) {
  switch (image) {
    //FICHE PLOMBERIE
    case 0:
      img = a
      break
    case 1:
      img = b
      break
    case 2:
      img = c
      break
    case 3:
      img = d
      break
    case 4:
      img = e
      break
    case 5:
      img = f
      break
    case 6:
      img = g
      break
    case 7:
      img = h
      break
    case 8:
      img = i
      break
    case 9:
      img = j
      break
    case 10:
      img = k
      break
    case 11:
      img = l
      break
    case 12:
      img = m
      break
    case 13:
      img = n
      break
    case 14:
      img = o
      break
    case 15:
      img = p
      break
    case 16:
      img = q
      break
    case 17:
      img = r
      break
    case 18:
      img = s
      break
    case 19:
      img = t
      break
    case 20:
      img = u
      break
    case 21:
      img = v
      break
    case 22:
      img = w
      break
    case 23:
      img = x
      break
    case 24:
      img = y
      break
    case 25:
      img = z
      break
    case 26:
      img = a2
      break
    case 27:
      img = b2
      break
    case 28:
      img = c2
      break
    case 29:
      img = d2
      break
    case 30:
      img = e2
      break
    case 31:
      img = f2
      break
    case 32:
      img = g2
      break
    case 33:
      img = h2
      break
    case 34:
      img = i2
      break
    case 35:
      img = j2
      break
    case 36:
      img = k2
      break
    case 37:
      img = l2
      break
    case 38:
      img = m2
      break
    case 39:
      img = n2
      break
    case 40:
      img = o2
      break
    case 41:
      img = p2
      break
    case 42:
      img = q2
      break
    case 43:
      img = r2
      break
    case 44:
      img = s2
      break
    case 45:
      img = t2
      break
    case 46:
      img = u2
      break
    case 47:
      img = v2
      break
    case 48:
      img = w2
      break
    case 49:
      img = x2
      break
    case 50:
      img = y2
      break
    case 51:
      img = z2
      break
    case 52:
      img = a3
      break
    case 53:
      img = b3
      break
    case 54:
      img = c3
      break
    case 55:
      img = d3
      break
    case 56:
      img = e3
      break
    case 57:
      img = f3
      break
    case 58:
      img = g3
      break
    case 59:
      img = h3
      break
    case 60:
      img = i3
      break
    case 61:
      img = j3
      break
    case 62:
      img = k3
      break
    case 63:
      img = l3
      break
    case 64:
      img = m3
      break
    case 65:
      img = n3
      break
    case 66:
      img = o3
      break
    case 67:
      img = p3
      break
    case 68:
      img = q3
      break
    // FICHE ELECTRICITE
    case 70:
      img = a4
      break
    case 71:
      img = b4
      break
    case 72:
      img = c4
      break
    case 73:
      img = d4
      break
    case 74:
      img = e4
      break
    case 75:
      img = f4
      break
    case 76:
      img = g4
      break
    case 77:
      img = h4
      break
    case 78:
      img = i4
      break
    case 79:
      img = j4
      break
    case 80:
      img = k4
      break
    case 81:
      img = l4
      break
    case 82:
      img = m4
      break
    case 83:
      img = n4
      break
    case 84:
      img = o4
      break
    case 85:
      img = p4
      break
    case 86:
      img = q4
      break
    case 87:
      img = r4
      break
    case 88:
      img = s4
      break
    case 89:
      img = t4
      break
    case 90:
      img = u4
      break
    case 91:
      img = v4
      break
    case 92:
      img = w4
      break
    // FICHE FINITION
    case 100:
      img = a5
      break
    case 101:
      img = b5
      break
    case 102:
      img = c5
      break
    case 103:
      img = d5
      break
    case 104:
      img = e5
      break
    case 105:
      img = f5
      break
    case 106:
      img = g5
      break
    case 107:
      img = h5
      break
    case 108:
      img = i5
      break
    case 109:
      img = j5
      break
    case 110:
      img = k5
      break
    case 111:
      img = l5
      break
    case 112:
      img = m5
      break
    case 113:
      img = n5
      break
    case 114:
      img = o5
      break
    case 115:
      img = p5
      break
    case 116:
      img = q5
      break
    case 117:
      img = r5
      break
    case 118:
      img = s5
      break
    case 119:
      img = t5
      break
    case 120:
      img = u5
      break
    case 121:
      img = v5
      break
    case 122:
      img = w5
      break
    case 123:
      img = x5
      break
    case 124:
      img = y5
      break
    case 125:
      img = z5
      break
    case 126:
      img = a6
      break
    case 127:
      img = b6
      break
    case 128:
      img = c6
      break
    case 129:
      img = d6
      break
    case 130:
      img = e6
      break
    case 131:
      img = f6
      break
    case 132:
      img = g6
      break

    default:
      img = parDefaut
      console.log(img)
  }
  const setSelectFalse = () => {
    setSelect(false)
  }

  function obtenirMateriel(nom: string): string {
    switch (nom) {
      case 'Mat1':
        return 'Matériel n°1'
      case 'Mat2':
        return 'Matériel n°2'
      case 'Mat3':
        return 'Matériel n°3'
      case 'Mat4':
        return 'Matériel n°4'
      case 'Mat5':
        return 'Matériel n°5'
      case 'Mat6':
        return 'Matériel n°6'
      case 'Mat7':
        return 'Matériel n°7'
      case 'Mat8':
        return 'Matériel n°8'
      case 'Mat9':
        return 'Matériel n°9'
      case 'Mat10':
        return 'Matériel n°10'
      default:
        return 'Matériel inconnu'
    }
  }
  const returnMat = () => {
    if (mat === 'annuler') {
      fonctionsMiniBoxInfoJson.setMateriel(obtenirMateriel(numMat), numMat)
      setSelectFalse()
    } else {
      fonctionsMiniBoxInfoJson.setMateriel(mat, numMat)
      setSelectFalse()
    }
  }
  return (
    <div className="UnMat" onClick={returnMat}>
      <div className="matname">{mat}</div>
      <img src={img} alt={mat} className="imageMat" />
    </div>
  )
}

export default UnMat
