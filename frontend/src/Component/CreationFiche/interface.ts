
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
  modifierChoixMiniBox: (position: number, nouveauChoix: ChoixMiniBoxType) => void;
  getChoixMiniBox: (position: number) => string | null;
  modifierPoliceTexte: (position: number, nouvellePolice: string) => void;
  modifierTaille: (position: number, nouvelleTaille: string) => void;
  modifierCouleurFond: (position: number, nouvelleTaille: string) => void;
  modifierAllJsonToBase: () => void;
  getAllJson: () => MiniBox;
}