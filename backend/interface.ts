export interface MiniBox {
  ChoixMiniBox: string;
  Position: number;
  CouleurTexte: string;
  PoliceTexte: string;
  Taille: number;
  CouleurFond?: string;
  Audio: boolean;
}

export interface FicheInfo {
  name: string;
  nomEleveAttribuer: string;
  prenomEleveAttribuer: string;
}

export interface FicheDocument extends Document {
  info: FicheInfo;
  MiniBox1: MiniBox;
  MiniBox2: MiniBox;
  MiniBox3: MiniBox;
  MiniBox4: MiniBox;
  MiniBox5: MiniBox;
  MiniBox6: MiniBox;
  MiniBox7: MiniBox;
  MiniBox8: MiniBox;
  MiniBox9: MiniBox;
  MiniBox10: MiniBox;
  MiniBox11: MiniBox;
  MiniBox12: MiniBox;
  MiniBox13: MiniBox;
  MiniBox14: MiniBox;
  MiniBox15: MiniBox;
  MiniBox16: MiniBox;
  MiniBox17: MiniBox;
  MiniBox18: MiniBox;
  MiniBox19: MiniBox;
  MiniBox20: MiniBox;
  MiniBox21: MiniBox;
  MiniBox22: MiniBox;
  MiniBox23: MiniBox;
}

export interface Picto {
  name: string;
  url: string;
}

export interface Admin{
  nom: string;
  prenom: string;
  mdp: string;
  id: string;
}

export interface Eleve{
  nom: string,
  prenom: string,
  image: string,
  mdp: number,
  archiver: boolean
}
