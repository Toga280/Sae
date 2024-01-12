import { FonctionsMiniBoxInfoJson } from "./interface";

const MiniBoxInfoJson = require("./MiniBoxInfo.json");

const fonctionsMiniBoxInfoJson: FonctionsMiniBoxInfoJson = {
    modifierCouleurTexte: (position, nouvelleCouleurTexte) => {
        updateMiniBoxProperty(position, 'CouleurTexte', nouvelleCouleurTexte);
    },

    getCouleurTexte: (position) => {
        return getMiniBoxProperty(position, 'CouleurTexte') || "#FFFFFF";
    },

    modifierChoixMiniBox: (position, nouveauChoix) => {
        updateMiniBoxProperty(position, 'ChoixMiniBox', nouveauChoix);
    },

    getChoixMiniBox: (position) => {
        return getMiniBoxProperty(position, 'ChoixMiniBox');
    },

    modifierIsSelectedMiniBox: (position, boolean) => {
        updateMiniBoxProperty(position, 'isSelected', boolean);
    },

    getIsSelectedMiniBox: (position) => {
        return getMiniBoxProperty(position, 'isSelected');
    },
    allIsSelectedMiniBoxFalse: () => {
      for (let key in MiniBoxInfoJson.AllMiniBox) {
        const currentBox = MiniBoxInfoJson.AllMiniBox[key];
        if (currentBox) {
            currentBox.isSelected = false;
        }
      }
    },
    modifierPoliceTexte: (position, nouvellePolice) => {
        updateMiniBoxProperty(position, 'PoliceTexte', nouvellePolice);
    },

    getPoliceTexte: (position) => {
        return getMiniBoxProperty(position, 'PoliceTexte');
    },

    modifierTaille: (position, nouvelleTaille) => {
        updateMiniBoxProperty(position, 'Taille', nouvelleTaille);
    },

    getTaille: (position) => {
        return getMiniBoxProperty(position, 'Taille') || 12;
    },

    modifierCouleurFond: (position, nouvelleCouleurFond) => {
        updateMiniBoxProperty(position, 'CouleurFond', nouvelleCouleurFond);
    },

    modificationAudio: (position, audio) => {
        updateMiniBoxProperty(position, 'Audio', audio);
    },

    getAudio: (position) => {
        return getMiniBoxProperty(position, 'Audio');
    },

    getNomPicto: (position) => {
        return getMiniBoxProperty(position, 'NomPicto');
    },

    setNomPicto: (position, nom) => {
        updateMiniBoxProperty(position, 'NomPicto', nom);
    },

    modifierNom: (nom) => {
        MiniBoxInfoJson.info.name = nom;
    },

    getNom: () => {
        for (let key in MiniBoxInfoJson.AllMiniBox) {
            return MiniBoxInfoJson.AllMiniBox[key].name;
        }
        return "Nom de la fiche";
    },
    getAllJson: () => {
        return MiniBoxInfoJson;
    },
    modifierAllJsonToBase: () => {
    MiniBoxInfoJson.info.name = "";

    for (let miniBoxKey in MiniBoxInfoJson.AllMiniBox) {
        const currentBox = MiniBoxInfoJson.AllMiniBox[miniBoxKey];
        if (currentBox) {
            currentBox.ChoixMiniBox = "Texte";
            currentBox.CouleurTexte = "#000000";
            currentBox.PoliceTexte = "Times New Roman";
            currentBox.Taille = 18;
            currentBox.CouleurFond = "none";
            currentBox.Audio = false;
            currentBox.isSelected = false;
        }
    }
},

setNewJson: (newJson) => {
  console.log('newJson --> ', newJson);

  if (typeof newJson === 'object' && newJson !== null) {
      if (newJson.AllMiniBox) {
          MiniBoxInfoJson.AllMiniBox = newJson.AllMiniBox;
      } else {
          console.error('Le paramètre newJson doit contenir une propriété AllMiniBox valide.');
      }
  } else {
      console.error('Le paramètre newJson doit être un objet JSON valide.');
  }
},


    setMateriel: (Materiel, nMateriel) => {
        Object.keys(MiniBoxInfoJson.Materiel).forEach((key) => {
            if (key === nMateriel) {
                MiniBoxInfoJson.Materiel[key] = Materiel;
            }
        });
    },

    getMateriel: (nMateriel: String): string => {
        let result: string = "null";
        Object.keys(MiniBoxInfoJson.Materiel).forEach((key) => {
            if (key === nMateriel) {
                result = MiniBoxInfoJson.Materiel[key];
            }
        });
        return result;
    }
};

export default fonctionsMiniBoxInfoJson;

// Helper function to update mini-box property
function updateMiniBoxProperty(position : any, property : any, value : any) {
    if (position >= 1 && position <= 21) {
        const miniBoxKey = "MiniBox" + position;
        if (MiniBoxInfoJson.AllMiniBox.hasOwnProperty(miniBoxKey)) {
            MiniBoxInfoJson.AllMiniBox[miniBoxKey][property] = value;
        }
    }
}

// Helper function to get mini-box property
function getMiniBoxProperty(position : any, property : any) {
    if (position >= 1 && position <= 21) {
        const miniBoxKey = "MiniBox" + position;
        if (MiniBoxInfoJson.AllMiniBox.hasOwnProperty(miniBoxKey)) {
            return MiniBoxInfoJson.AllMiniBox[miniBoxKey][property];
        }
    }
    return null;
}
