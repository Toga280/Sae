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

    return "#FFFFFF";
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
  modifierIsSelectedMiniBox: (position, boolean) => {
    for (let key in MiniBoxInfoJson) {
      const currentBox = MiniBoxInfoJson[key];
  
      if (currentBox.Position === position) {
        currentBox.isSelected = boolean;
        break;
      }
    }
  },
  getIsSelectedMiniBox: (position) => {
    for (let key in MiniBoxInfoJson) {
      const currentBox = MiniBoxInfoJson[key];
  
      if (currentBox.Position === position) {
        return currentBox.isSelected;
      }
    }

    return null;
  },
  allIsSelectedMiniBoxFalse: () => {
    for (let key in MiniBoxInfoJson) {
      const currentBox = MiniBoxInfoJson[key];
      currentBox.isSelected = false
    }
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

    return undefined;
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

    return 12;
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
  modificationAudio: (position, audio) => {
    for (let key in MiniBoxInfoJson) {
      const currentBox = MiniBoxInfoJson[key];
  
      if (currentBox.Position === position) {
        currentBox.Audio = audio;
        break;
      }
    }
  },
  getAudio: (position) => {
    for (let key in MiniBoxInfoJson) {
      const currentBox = MiniBoxInfoJson[key];
  
      if (currentBox.Position === position) {
        return currentBox.Audio;
      }
    }

    return null;
  },
  modifierNom: (nom) => {
    for (let key in MiniBoxInfoJson) {
      const currentBox = MiniBoxInfoJson[key];
        currentBox.name = nom
    }
  },
  getNom: () => {
    for (let key in MiniBoxInfoJson) {
      const currentBox = MiniBoxInfoJson[key];
        return currentBox.name
    }
    return "Nom de la fiche"
  },
  getAllJson:() => {
    return MiniBoxInfoJson
  },
  modifierAllJsonToBase:() => {
    for (let key in MiniBoxInfoJson) {
      const currentBox = MiniBoxInfoJson[key];
      if(currentBox.Position === key) {
        currentBox.ChoixMiniBox = "Texte"
        currentBox.CouleurTexte = "Black"
        currentBox.PoliceTexte = "none"
        currentBox.Taille = "none"
        currentBox.CouleurFond = "none"
      }
    }
  }
};

export default fonctionsMiniBoxInfoJson;