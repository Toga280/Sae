import { Color } from "react-color";

export interface MiniBox{
  ChoixMiniBox : "Pictogramme" | "Son" | "Texte",
  Position : number,
  CouleurTexte : string,
  PoliceTexte : string,
  Taille : Number,
  CouleurFond : string,
}

type ChoixMiniBoxType = "Texte" | "Son" | "Pictogramme";

export interface FonctionsMiniBoxInfoJson {
  modifierCouleurTexte: (position: number, nouvelleCouleurTexte: string) => void;
  getCouleurTexte: (position: number) => Color | undefined;
  modifierChoixMiniBox: (position: number, nouveauChoix: ChoixMiniBoxType) => void;
  getChoixMiniBox: (position: number) => string | null;
  modifierPoliceTexte: (position: number, nouvellePolice: string) => void;
  getPoliceTexte: (position: number) => string | null;
  modifierTaille: (position: number, nouvelleTaille: string) => void;
  getTaille: (position: number) => Number | undefined;
  modifierCouleurFond: (position: number, nouvelleTaille: string) => void;
  getAllJson: () => MiniBox;
}