export interface MiniBox{
  ChoixMiniBox : "Pictogramme" | "Texte",
  Position : number,
  CouleurTexte : string,
  PoliceTexte : string,
  Taille : Number,
  CouleurFond : string,
  Audio : boolean
}

type ChoixMiniBoxType = "Texte" | "Pictogramme" | "Rayanair";

export interface FonctionsMiniBoxInfoJson {
  modifierCouleurTexte: (position: number, nouvelleCouleurTexte: string) => void;
  getCouleurTexte: (position: number) => string;
  modifierChoixMiniBox: (position: number, nouveauChoix: ChoixMiniBoxType) => void;
  getChoixMiniBox: (position: number) => string;
  modifierIsSelectedMiniBox: (position : number, boolean : boolean) => void;
  getIsSelectedMiniBox: (position : number) => boolean | null;
  allIsSelectedMiniBoxFalse: () => void;
  modifierPoliceTexte: (position: number, nouvellePolice: string) => void;
  getPoliceTexte: (position: number) => string | undefined;
  modifierTaille: (position: number, nouvelleTaille: number) => void;
  getTaille: (position: number) => number;
  modifierCouleurFond: (position: number, nouvelleTaille: string) => void;
  modifierAllJsonToBase: () => void;
  modificationAudio: (position: number, audio: boolean) => void;
  getAudio: (position: number) => boolean | null;
  getNomPicto: (position: number) => string | null;
  setNomPicto: (position: number, nom: string) => void;
  modifierNom: (nom: string) => void;
  getNom: () => string;
  getAllJson: () => MiniBox;
  setNewJson: (newJson : any) => void;
}