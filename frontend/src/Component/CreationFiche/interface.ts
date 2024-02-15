export interface MiniBox {
  ChoixMiniBox: 'Pictogramme' | 'Texte' | 'TexteEtPictogramme'
  Position: number
  CouleurTexte: string
  PoliceTexte: string
  Taille: Number
  CouleurFond: string
  Audio: boolean
}

type ChoixMiniBoxType = 'Texte' | 'Pictogramme' | 'TexteEtPictogramme'

export interface FonctionsMiniBoxInfoJson {
  modifierCouleurTexte: (position: number, nouvelleCouleurTexte: string) => void
  getCouleurTexte: (position: number) => string
  modifierChoixMiniBox: (
    position: number,
    nouveauChoix: ChoixMiniBoxType,
  ) => void
  getChoixMiniBox: (position: number) => string
  modifierIsSelectedMiniBox: (position: number, boolean: boolean) => void
  getIsSelectedMiniBox: (position: number) => boolean | null
  allIsSelectedMiniBoxFalse: () => void
  modifierPoliceTexte: (position: number, nouvellePolice: string) => void
  getPoliceTexte: (position: number) => string | undefined
  modifierTaille: (position: number, nouvelleTaille: number) => void
  getTaille: (position: number) => number
  modifierCouleurFond: (position: number, nouvelleTaille: string) => void
  modifierAllJsonToBase: () => void
  modificationAudio: (position: number, audio: boolean) => void
  getAudio: (position: number) => boolean | null
  getNomPicto: (position: number) => string | null
  setNomPicto: (position: number, nom: string) => void
  modifierNom: (nom: string) => void
  getNom: () => string
  modifierInputFiche: (position: number, value: string | boolean) => void
  getInputFiche: (position: number) => string
  getInputFicheCheckbox: (position: number) => boolean
  modifierInformationSuplementaire: (value: string) => void
  getInformationSuplementaire: () => string
  changeEnCourTrue: () => void
  changeEnCourFalse: () => void
  getAllJson: () => any
  setNewJson: (newJson: any) => void
  setMateriel: (Materiel: string, nMateriel: string) => void
  getMateriel: (nMateriel: string) => string
  modifierTypeFiche: (value: string) => void
  getTypeFiche: () => string
  modifierreacteleve: (value: string) => void
  getreacteleve: () => string
}
