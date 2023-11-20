import { FonctionsMiniBoxInfoJson } from "./interface";

const MiniBoxInfoJson = require("./MiniBoxInfo.json");

const fonctionsMiniBoxInfoJson: FonctionsMiniBoxInfoJson = {
  modifierCouleurTexte: (position, nouvelleCouleurTexte) => {
    for (let key in MiniBoxInfoJson) {
      const currentBox = MiniBoxInfoJson[key];
  
      if (currentBox.Position === position) {
        currentBox.CouleurTexte = nouvelleCouleurTexte;
        break;
      }
    }
  },
  getCouleurTexte: (position) => {
    for (let key in MiniBoxInfoJson) {
      const currentBox = MiniBoxInfoJson[key];
  
      if (currentBox.Position === position) {
        return currentBox.CouleurTexte;
      }
    }

    return null;
  },
  modifierChoixMiniBox: (position, nouveauChoix) => {
    for (let key in MiniBoxInfoJson) {
      const currentBox = MiniBoxInfoJson[key];
  
      if (currentBox.Position === position) {
        currentBox.ChoixMiniBox = nouveauChoix;
        break;
      }
    }
  },
  getChoixMiniBox: (position) => {
    for (let key in MiniBoxInfoJson) {
      const currentBox = MiniBoxInfoJson[key];
  
      if (currentBox.Position === position) {
        return currentBox.ChoixMiniBox;
      }
    }

    return null;
  },
  modifierPoliceTexte: (position, nouvellePolice) => {
    for (let key in MiniBoxInfoJson) {
      const currentBox = MiniBoxInfoJson[key];
  
      if (currentBox.Position === position) {
        currentBox.PoliceTexte = nouvellePolice;
        break;
      }
    }
  },
  getPoliceTexte: (position) => {
    for (let key in MiniBoxInfoJson) {
      const currentBox = MiniBoxInfoJson[key];
  
      if (currentBox.Position === position) {
        return currentBox.PoliceTexte;
      }
    }

    return null;
  },
  modifierTaille: (position, nouvelleTaille) => {
    for (let key in MiniBoxInfoJson) {
      const currentBox = MiniBoxInfoJson[key];
  
      if (currentBox.Position === position) {
        currentBox.Taille = nouvelleTaille;
        break;
      }
    }
  },
  getTaille: (position) => {
    for (let key in MiniBoxInfoJson) {
      const currentBox = MiniBoxInfoJson[key];
  
      if (currentBox.Position === position) {
        return currentBox.Taille;
      }
    }

    return null;
  },
  modifierCouleurFond: (position, nouvelleCouleurFond) => {
    for (let key in MiniBoxInfoJson) {
      const currentBox = MiniBoxInfoJson[key];
  
      if (currentBox.Position === position) {
        currentBox.CouleurFond = nouvelleCouleurFond;
        break;
      }
    }
  },
  getAllJson:() => {
    return MiniBoxInfoJson
  }
};

export default fonctionsMiniBoxInfoJson;