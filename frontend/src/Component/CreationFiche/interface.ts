import { Color } from "react-color";

export interface MiniBox{
  ChoixMiniBox : "Pictogramme" | "Texte",
  Position : number,
  CouleurTexte : string,
  PoliceTexte : string,
  Taille : Number,
  CouleurFond : string,
  Audio : boolean
}

type ChoixMiniBoxType = "Texte" | "Pictogramme";

export interface FonctionsMiniBoxInfoJson {
  modifierCouleurTexte: (position: number, nouvelleCouleurTexte: string) => void;
  getCouleurTexte: (position: number) => Color | null;
  modifierChoixMiniBox: (position: number, nouveauChoix: ChoixMiniBoxType) => void;
  getChoixMiniBox: (position: number) => string | null;
  modifierIsSelectedMiniBox: (position : number, boolean : boolean) => void;
  getIsSelectedMiniBox: (position : number) => boolean | null;
  modifierPoliceTexte: (position: number, nouvellePolice: string) => void;
  getPoliceTexte: (position: number) => string | null;
  modifierTaille: (position: number, nouvelleTaille: string) => void;
  getTaille: (position: number) => Number | null;
  modifierCouleurFond: (position: number, nouvelleTaille: string) => void;
  modifierAllJsonToBase: () => void;
  modificationAudio: (position: number, audio: boolean) => void;
  getAudio: (position: number) => boolean | null;
  getAllJson: () => MiniBox;
}