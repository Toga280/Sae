export interface MiniBox {
  ChoixMiniBox: string
  Position: number
  CouleurTexte: string
  PoliceTexte: string
  Taille: number
  CouleurFond?: string
  Audio: boolean
  NomPicto: string
}

export interface AllMiniBox {
  MiniBox1: MiniBox
  MiniBox2: MiniBox
  MiniBox3: MiniBox
  MiniBox4: MiniBox
  MiniBox5: MiniBox
  MiniBox6: MiniBox
  MiniBox7: MiniBox
  MiniBox8: MiniBox
  MiniBox9: MiniBox
  MiniBox10: MiniBox
  MiniBox11: MiniBox
  MiniBox12: MiniBox
  MiniBox13: MiniBox
  MiniBox14: MiniBox
  MiniBox15: MiniBox
  MiniBox16: MiniBox
  MiniBox17: MiniBox
  MiniBox18: MiniBox
  MiniBox19: MiniBox
  MiniBox20: MiniBox
  MiniBox21: MiniBox
}

export interface FicheInfo {
  name: string
  nomEleveAttribuer: string
  prenomEleveAttribuer: string
  enCour: Boolean
  informationSuplementaire: string
  typeFiche: string;
  reacteleve: string;
}

export interface FicheDocument extends Document {
  info: FicheInfo
  AllMiniBox: AllMiniBox
  Materiel: Materiel
  InputFiche: InputFiche
  Commentaires: Commentaire[]
}

export interface Picto {
  name: string
  url: string
}

export interface Admin {
  nom: string
  prenom: string
  mdp: string
  id: string
  role: string
}

export interface Eleve {
  nom: string
  prenom: string
  image: string
  mdp: string
  archiver: boolean
  wallpaper: string
}

export interface Materiel {
  Mat1: string
  Mat2: string
  Mat3: string
  Mat4: string
  Mat5: string
  Mat6: string
  Mat7: string
  Mat8: string
  Mat9: string
  Mat10: string
}

export interface InputFiche {
  input1: string
  input2: string
  input3: string
  input4: string
  input5: string
  input6: string
  input7: string
  input8: string
  input9: string
  input10: Boolean
  input11: Boolean
  input12: Boolean
  input13: Boolean
  input14: Boolean
  input15: Boolean
  input16: Boolean
  input17: string
  input18: string
  input19: Boolean
}

export interface Commentaire {
  contenu: string
  idCommentateur: string
}
