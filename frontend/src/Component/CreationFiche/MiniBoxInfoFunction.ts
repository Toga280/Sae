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
    MiniBoxInfoJson.info.name = nom;
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
  modifierAllJsonToBase: () => {
    MiniBoxInfoJson.info.name = "";
    for (let key in MiniBoxInfoJson) {
      const currentBox = MiniBoxInfoJson[key];
      currentBox.ChoixMiniBox = "Texte";
      currentBox.CouleurTexte = "#000000";
      currentBox.PoliceTexte = "Times New Roman";
      currentBox.Taille = 18;
      currentBox.CouleurFond = "none";
      currentBox.Audio = false;
      currentBox.isSelected = false;
    }
  },
  setNewJson: (newJson: any) => {
    if (typeof newJson === 'object' && newJson !== null) {
      Object.keys(MiniBoxInfoJson).forEach((key) => {
        MiniBoxInfoJson[key] = newJson[key];
      });
    } else {
      console.error('Le paramètre newJson doit être un objet JSON valide.');
    }
  }
  };

export default fonctionsMiniBoxInfoJson;