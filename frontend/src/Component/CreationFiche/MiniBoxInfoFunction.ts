import { FonctionsMiniBoxInfoJson } from './interface'

const FicheJsonBase = require('./FicheDeBase.json')
const FicheJson = JSON.parse(JSON.stringify(FicheJsonBase))

const fonctionsMiniBoxInfoJson: FonctionsMiniBoxInfoJson = {
  modifierCouleurTexte: (position, nouvelleCouleurTexte) => {
    updateMiniBoxProperty(position, 'CouleurTexte', nouvelleCouleurTexte)
  },

  getCouleurTexte: (position) => {
    return getMiniBoxProperty(position, 'CouleurTexte') || '#FFFFFF'
  },

  modifierChoixMiniBox: (position, nouveauChoix) => {
    updateMiniBoxProperty(position, 'ChoixMiniBox', nouveauChoix)
  },

  getChoixMiniBox: (position) => {
    return getMiniBoxProperty(position, 'ChoixMiniBox')
  },

  modifierIsSelectedMiniBox: (position, boolean) => {
    updateMiniBoxProperty(position, 'isSelected', boolean)
  },

  getIsSelectedMiniBox: (position) => {
    return getMiniBoxProperty(position, 'isSelected')
  },
  allIsSelectedMiniBoxFalse: () => {
    for (let key in FicheJson.AllMiniBox) {
      const currentBox = FicheJson.AllMiniBox[key]
      if (currentBox) {
        currentBox.isSelected = false
      }
    }
  },
  modifierPoliceTexte: (position, nouvellePolice) => {
    updateMiniBoxProperty(position, 'PoliceTexte', nouvellePolice)
  },

  getPoliceTexte: (position) => {
    return getMiniBoxProperty(position, 'PoliceTexte')
  },

  modifierTaille: (position, nouvelleTaille) => {
    updateMiniBoxProperty(position, 'Taille', nouvelleTaille)
  },

  getTaille: (position) => {
    return getMiniBoxProperty(position, 'Taille') || 12
  },

  modifierCouleurFond: (position, nouvelleCouleurFond) => {
    updateMiniBoxProperty(position, 'CouleurFond', nouvelleCouleurFond)
  },

  modificationAudio: (position, audio) => {
    updateMiniBoxProperty(position, 'Audio', audio)
  },

  getAudio: (position) => {
    return getMiniBoxProperty(position, 'Audio')
  },

  getNomPicto: (position) => {
    return getMiniBoxProperty(position, 'NomPicto')
  },

  setNomPicto: (position, nom) => {
    updateMiniBoxProperty(position, 'NomPicto', nom)
  },

  modifierNom: (nom) => {
    FicheJson.info.name = nom
  },

  getNom: () => {
    if (FicheJson.info.name === '') {
      return 'brouillon'
    }
    return FicheJson.info.name
  },

  modifierInputFiche: (position, value) => {
    if (position >= 1 && position <= 19) {
      const inputKey = 'input' + position
      if (FicheJson.InputFiche.hasOwnProperty(inputKey)) {
        FicheJson.InputFiche[inputKey] = value
      }
    }
  },

  getInputFiche: (position) => {
    if (position >= 1 && position <= 19) {
      const inputKey = 'input' + position
      if (FicheJson.InputFiche.hasOwnProperty(inputKey)) {
        return FicheJson.InputFiche[inputKey]
      }
    }
  },

  getInputFicheCheckbox: (position) => {
    if (position >= 1 && position <= 19) {
      const inputKey = 'input' + position
      if (FicheJson.InputFiche.hasOwnProperty(inputKey)) {
        return FicheJson.InputFiche[inputKey]
      }
    }
  },

  modifierInformationSuplementaire: (value) => {
    FicheJson.info.informationSuplementaire = value
  },

  getInformationSuplementaire: () => {
    return FicheJson.info.informationSuplementaire
  },

  changeEnCourTrue: () => {
    FicheJson.info.enCour = true
  },

  changeEnCourFalse: () => {
    FicheJson.info.enCour = false
  },

  getAllJson: () => {
    return FicheJson
  },
  modifierAllJsonToBase: () => {
    const newFicheJson = JSON.parse(JSON.stringify(FicheJsonBase))
    Object.assign(FicheJson, newFicheJson)
  },

  setNewJson: (newJson) => {
    if (typeof newJson === 'object' && newJson !== null) {
      if (newJson.AllMiniBox) {
        FicheJson.AllMiniBox = newJson.AllMiniBox
      } else {
        console.error(
          'Le paramètre newJson doit contenir une propriété AllMiniBox valide.',
        )
      }
      if (newJson.info) {
        FicheJson.info = newJson.info
      }
      if (newJson.Materiel) {
        FicheJson.Materiel = newJson.Materiel
      }
      if (newJson.InputFiche) {
        FicheJson.InputFiche = newJson.InputFiche
      }
      if (newJson.Commentaires) {
        FicheJson.Commentaires = newJson.Commentaires
      }
    } else {
      console.error('Le paramètre newJson doit être un objet JSON valide.')
    }
  },

  setMateriel: (Materiel, nMateriel) => {
    FicheJson.Materiel[nMateriel] = Materiel
  },

  getMateriel: (nMateriel) => {
    return FicheJson.Materiel[nMateriel]
  },
}

export default fonctionsMiniBoxInfoJson

function updateMiniBoxProperty(position: any, property: any, value: any) {
  if (position >= 1 && position <= 21) {
    const miniBoxKey = 'MiniBox' + position
    if (FicheJson.AllMiniBox.hasOwnProperty(miniBoxKey)) {
      FicheJson.AllMiniBox[miniBoxKey][property] = value
    }
  }
}

function getMiniBoxProperty(position: any, property: any) {
  if (position >= 1 && position <= 21) {
    const miniBoxKey = 'MiniBox' + position
    if (FicheJson.AllMiniBox.hasOwnProperty(miniBoxKey)) {
      return FicheJson.AllMiniBox[miniBoxKey][property]
    }
  }
  return null
}
