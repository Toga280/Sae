import { Schema, model } from 'mongoose'
import { MiniBox, FicheDocument, Picto, Eleve, Admin } from './interface'
import { generateJWT,secretKey,verifyJWT } from './jwt';
import sharp from 'sharp'
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const PORT = 5000
const multer = require('multer')
const expiresIn = "24h";
import fs from 'fs'
import path from 'path'
import { error } from 'console'
import crypto from 'crypto';
const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

const DB_URL = 'mongodb://0.0.0.0/sae'

app.use(cors())
app.use(express.json())
app.listen(PORT, () => {
  console.log('connection au port 5000 reussi')
})

mongoose.connect(DB_URL)
const conn = mongoose.connection

conn.once('open', () => {
  console.log('connection reussite')
})
conn.on('error', () => {
  console.log('error connecting to database')
  process.exit(1)
})

const miniBoxSchema = new Schema<MiniBox>(
  {
    ChoixMiniBox: { type: String, required: true },
    Position: { type: Number, required: true },
    CouleurTexte: { type: String, required: true },
    PoliceTexte: { type: String, required: true },
    Taille: { type: Number, required: true },
    Audio: { type: Boolean, required: true },
    NomPicto: { type: String, required: true },
  },
  { _id: false },
)

const ficheSchema = new Schema<FicheDocument>({
  info: {
    name: { type: String, required: true },
    nomEleveAttribuer: { type: String },
    prenomEleveAttribuer: { type: String },
    enCour: { type: Boolean },
    informationSuplementaire: { type: String },
    typeFiche: { type: String },
    reacteleve: { type: String },
    _id: false,
  },
  AllMiniBox: {
    MiniBox1: { type: miniBoxSchema, required: true },
    MiniBox2: { type: miniBoxSchema, required: true },
    MiniBox3: { type: miniBoxSchema, required: true },
    MiniBox4: { type: miniBoxSchema, required: true },
    MiniBox5: { type: miniBoxSchema, required: true },
    MiniBox6: { type: miniBoxSchema, required: true },
    MiniBox7: { type: miniBoxSchema, required: true },
    MiniBox8: { type: miniBoxSchema, required: true },
    MiniBox9: { type: miniBoxSchema, required: true },
    MiniBox10: { type: miniBoxSchema, required: true },
    MiniBox11: { type: miniBoxSchema, required: true },
    MiniBox12: { type: miniBoxSchema, required: true },
    MiniBox13: { type: miniBoxSchema, required: true },
    MiniBox14: { type: miniBoxSchema, required: true },
    MiniBox15: { type: miniBoxSchema, required: true },
    MiniBox16: { type: miniBoxSchema, required: true },
    MiniBox17: { type: miniBoxSchema, required: true },
    MiniBox18: { type: miniBoxSchema, required: true },
    MiniBox19: { type: miniBoxSchema, required: true },
    MiniBox20: { type: miniBoxSchema, required: true },
    MiniBox21: { type: miniBoxSchema, required: true },
  },
  Materiel: {
    Mat1: { type: String },
    Mat2: { type: String },
    Mat3: { type: String },
    Mat4: { type: String },
    Mat5: { type: String },
    Mat6: { type: String },
    Mat7: { type: String },
    Mat8: { type: String },
    Mat9: { type: String },
    Mat10: { type: String },
  },
  InputFiche: {
    input1: { type: String },
    input2: { type: String },
    input3: { type: String },
    input4: { type: String },
    input5: { type: String },
    input6: { type: String },
    input7: { type: String },
    input8: { type: String },
    input9: { type: String },
    input10: { type: Boolean },
    input11: { type: Boolean },
    input12: { type: Boolean },
    input13: { type: Boolean },
    input14: { type: Boolean },
    input15: { type: Boolean },
    input16: { type: Boolean },
    input17: { type: String },
    input18: { type: String },
    input19: { type: Boolean },
  },
  Commentaires: [
    {
      contenu: { type: String },
      idCommentateur: { type: String },
      _id: false,
    },
  ],
})

const admin = new Schema<Admin>({
  nom: { type: String },
  prenom: { type: String },
  mdp: { type: String },
  id: { type: String },
  role: { type: String },
})

const Admin = model<Admin>('Admin', admin)

const Fiche = model<FicheDocument>('Fiche', ficheSchema)

const pictoSchema = new Schema<Picto>({
  name: { type: String, required: true },
  url: { type: String, required: true },
})

const Picto = model<Picto>('Picto', pictoSchema)

const Eleve = new Schema<Eleve>({
  nom: { type: String },
  prenom: { type: String },
  image: { type: String },
  mdp: { type: String },
  comCIP: { type: [[String]], default: [] },
  archiver: { type: Boolean, default: false },
})

const EleveModel = model<Eleve>('Eleve', Eleve)

//condition pour creer un admin automatiquement
async function CreateAdminIfNotExiste() {
  const adminExistant = await Admin.findOne({ role: 'Admin' })

  if (!adminExistant) {
    console.log(
      "Aucun admininstrateur de la base de donné, création de l'administrateur.",
    )
    try {
      const adminBasique = new Admin({
        nom: 'admin',
        prenom: 'admin',
        mdp: 'admin',
        id: 'admin',
        role: 'Admin',
      })
      adminBasique.mdp = hashPassword(adminBasique.mdp)
      adminBasique
        .save()
        .then(() => {
          console.log(
            "Administrateur creer avec succée. L'identiant est : 'admin', le mot de passe est 'admin'. Changé le mdp des que possible svp.",
          )
        })
        .catch((error: any) => {
          console.error(
            "Erreur lors de la création de l'administrateur : ",
            error,
          )
        })
    } catch (error) {
      console.log(
        "Erreur lors de la creation de l'administrateur standare.",
        error,
      )
    }
  }
}

CreateAdminIfNotExiste()

/*------------------- POST -------------------*/

/*POST FICHE ===========================================================*/
/*autorisation : Admin*/
/*autorisation : ProfesseurAdmin*/
app.post('/POST/fiche', (req: any, res: any) => {
  const newData = req.body.data
  const token = req.body.token
  const newFiche = new Fiche(newData)
  const { valid, payload } = verifyJWT(token, secretKey);
  if (valid && (payload.role === 'ProfesseurAdmin' || payload.role === 'Admin')) {
  newFiche
    .save()
    .then(() => {
      console.log('Document enregistré avec succès dans la base de données')
      res.status(200).send('Document enregistré avec succès')
    })
    .catch((err: any) => {
      if (err.name === 'ValidationError') {
        console.error('Erreur de validation des données :', err.message)
        res.status(400).send('Données de requête invalides')
      } else {
        console.error(
          "Erreur lors de l'enregistrement du document dans la base de données :",
          err,
        )
        res.status(500).send('Erreur interne du serveur')
      }
    })
  } else {
    res.status(401).send('Non autorisé')
  }
})

/*POST COMMENTAIRE ===========================================================*/
/*autorisation : Admin*/
/*autorisation : ProfesseurAdmin*/
/*autorisation : Professeur*/
/*autorisation : Cip*/
app.post('/POST/commentaire', async (req: any, res: any) => {
  const { ficheName, contenu, idCommentateur, token } = req.body
  const { valid, payload } = verifyJWT(token, secretKey);
  if (valid && (payload.role === 'ProfesseurAdmin' || payload.role === 'Admin' || payload.role === 'Professeur' || payload.role === 'Cip')) {
  const fiche = await Fiche.findOne({ 'info.name': ficheName })
  try {
    if (!fiche) {
      res.status(404).json({ error: 'fiche non trouvé' })
    }
    if (!contenu) {
      res.status(500).json({ error: 'contenu vide' })
    }
    fiche?.Commentaires.push({
      contenu: contenu,
      idCommentateur: idCommentateur,
    })
    await fiche?.save()
    res.status(200).json({ message: 'Commentaire ajouté avec succès' })
  } catch (error) {
    console.error("Erreur lors de l'ajout d'un commentaire : ", error)
    res.status(500).json({ error: 'Erreur serveur' })
  }
  } else {
    res.status(401).send('Non autorisé')
  }
})

/*GET COMMENTAIRE ===========================================================*/
/*autorisation : Admin*/
/*autorisation : ProfesseurAdmin*/
/*autorisation : Professeur*/
/*autorisation : Cip*/
/*autorisation : eleve*/
app.get('/GET/allCommentaire', async (req: any, res: any) => {
  const ficheName = req.query.ficheName
  const token = req.query.token
  const { valid, payload } = verifyJWT(token, secretKey);
  if (valid && (payload.role === 'Admin' || payload.role === 'ProfesseurAdmin' || payload.role === 'Professeur' || payload.role === 'Cip' || payload.role === 'eleve')) {

  try {
    if (!ficheName) {
      return res.status(400).json({ error: 'Paramètre ficheName manquant' })
    }

    const fiche = await Fiche.findOne({ 'info.name': ficheName })

    if (!fiche) {
      return res.status(404).json({ error: 'Fiche non trouvée' })
    }

    const commentaires = fiche.Commentaires || []

    res.status(200).json({ commentaires: commentaires })
  } catch (error) {
    console.error('Erreur lors de la récupération des commentaires : ', error)
    res.status(500).json({ error: 'Erreur serveur' })
  }
} else {
  res.status(401).send('Non autorisé')
}
})

/*GET INFO SUPP FICHE ===========================================================*/
/*autorisation : Admin*/
/*autorisation : ProfesseurAdmin*/
/*autorisation : Professeur*/
/*autorisation : Cip*/
app.get('/GET/info/informationSuplementaire', async (req: any, res: any) => {
  const ficheName = req.query.ficheName
  const token = req.query.token
  const { valid, payload } = verifyJWT(token, secretKey);
  if (valid && (payload.role === 'Admin' || payload.role === 'ProfesseurAdmin' || payload.role === 'Professeur' || payload.role === 'Cip')) {
  try {
    if (!ficheName) {
      return res.status(400).json({ error: 'Paramètre ficheName manquant' })
    }

    const fiche = await Fiche.findOne({ 'info.name': ficheName })

    if (!fiche) {
      return res.status(404).json({ error: 'Fiche non trouvée' })
    }

    const informationSuplementaire = fiche.info.informationSuplementaire

    res.status(200).send(informationSuplementaire)
  } catch (error) {
    console.error(
      'Erreur lors de la récupération des informations supplémentaires : ',
      error,
    )
    res.status(500).json({ error: 'Erreur serveur' })
  }
} else {
  res.status(401).send('Non autorisé')
}
})

/* UPLOAD IMAGE ELEVES ===========================================================*/
/*autorisation : Admin*/
/*autorisation : eleve*/
app.post('/POST/uploadImageEleve',upload.single('file'), async (req: any, res: any) => {
  const token = req.query.token
  const { valid, payload } = verifyJWT(token, secretKey);
  if (valid && (payload.role === 'Admin' || payload.role === 'eleve')) {
    try {
      const { name } = req.query

      if (!req.file) {
        return res
          .status(400)
          .json({ error: "Aucun fichier n'a été téléchargé." })
      }

      const fileBuffer = req.file.buffer
      const newFileName = `${Date.now()}.webp`
      const filePath = `./src/photo/${name}/${newFileName}`

      // Créer récursivement le répertoire parent si nécessaire
      const directoryPath = `./src/photo/${name}/`
      if (!fs.existsSync(directoryPath)) {
        fs.mkdirSync(directoryPath, { recursive: true })
      }

      if (fs.existsSync(filePath)) {
        res.status(409).json({ message: 'Le fichier existe déjà' })
      } else {
        // Utiliser sharp pour convertir l'image au format WebP
        await sharp(fileBuffer).toFormat('webp').toFile(filePath)

        res.status(200).json({ message: 'Image téléchargée avec succès' })
      }
    } catch (error) {
      console.error('Erreur lors du téléchargement du fichier:', error)
      res.status(500).json({ error: 'Erreur interne du serveur' })
    }
    } else {
  res.status(401).send('Non autorisé')
}
  },
)

/*UPLOAD PICTO==============================================*/
/*autorisation : Admin*/
/*autorisation : ProfesseurAdmin*/
app.post('/POST/uploadpicto',upload.single('file'),async (req: any, res: any) => {
  const token = req.query.token
  const { valid, payload } = verifyJWT(token, secretKey);
  if (valid && (payload.role === 'Admin' || payload.role === 'ProfesseurAdmin')) {
    try {
      const { name } = req.query

      if (!req.file) {
        return res
          .status(400)
          .json({ error: "Aucun fichier n'a été téléchargé." })
      }

      const fileBuffer = req.file.buffer

      const originalFileName = req.file.originalname
      const fileExtension = originalFileName.split('.').pop()
      const newFileName = `${name}.webp` // Change the file extension to webp
      const filePath = `./src/picto/${newFileName}`

      // Créer récursivement le répertoire parent si nécessaire
      const directoryPath = `./src/picto/`
      if (!fs.existsSync(directoryPath)) {
        fs.mkdirSync(directoryPath, { recursive: true })
      }

      if (fs.existsSync(filePath)) {
        res.status(409).json({ message: 'Le fichier existe déjà' })
      } else {
        // Use sharp to convert the image to WebP format
        await sharp(fileBuffer).toFormat('webp').toFile(filePath)

        res.status(200).json({ message: 'Image téléchargée avec succès' })
      }
    } catch (error) {
      console.error('Erreur lors du téléchargement du fichier:', error)
      res.status(500).json({ error: 'Erreur interne du serveur' })
    }
  } else {
    res.status(401).send('Non autorisé')
  } 
  },
)

/* upload fond ecran======================================================*/
/*autorisation : Admin*/
/*autorisation : ProfesseurAdmin*/
/*autorisation : Professeur*/
/*autorisation : Cip*/
/*autorisation : eleve*/
app.post('/POST/uploadfondecran',upload.single('file'),async (req: any, res: any) => {
  const token = req.query.token
  const { valid, payload } = verifyJWT(token, secretKey);
  console.log('payload.role -> ', payload.role)
  if (valid && (payload.role === 'Admin' || payload.role === 'ProfesseurAdmin' || payload.role === 'Professeur' || payload.role === 'Cip' || payload.role === 'eleve')) {
    try {
      const { name } = req.query

      if (!req.file) {
        return res
          .status(400)
          .json({ error: "Aucun fichier n'a été téléchargé." })
      }

      const fileBuffer = req.file.buffer

      const originalFileName = req.file.originalname
      const fileExtension = originalFileName.split('.').pop()
      const newFileName = `${name}.webp` // Change the file extension to webp
      const filePath = `./src/fond/${newFileName}`

      const directoryPath = `./src/fond/`
      if (!fs.existsSync(directoryPath)) {
        fs.mkdirSync(directoryPath, { recursive: true })
      }

      // Use sharp to convert the image to WebP format
      await sharp(fileBuffer).toFormat('webp').toFile(filePath)

      res.status(200).json({ message: 'Image téléchargée avec succès' })
    } catch (error) {
      console.error('Erreur lors du téléchargement du fichier:', error)
      res.status(500).json({ error: 'Erreur interne du serveur' })
    }
  } else {
    res.status(401).send('Non autorisé')
  }
  },
)

/* upload photo profil eleve======================================================*/
/*autorisation : Admin*/
/*autorisation : ProfesseurAdmin*/
app.post('/POST/uploadpictoEleve',upload.single('file'),async (req: any, res: any) => {
  const token = req.query.token
  const { valid, payload } = verifyJWT(token, secretKey);
  if (valid && (payload.role === 'Admin' || payload.role === 'ProfesseurAdmin')) {
    try {
      const { name } = req.query

      if (!req.file) {
        return res
          .status(400)
          .json({ error: "Aucun fichier n'a été téléchargé." })
      }

      const fileBuffer = req.file.buffer

      const originalFileName = req.file.originalname
      const fileExtension = originalFileName.split('.').pop()
      const newFileName = `${name}.webp` // Change the file extension to webp
      const filePath = `./src/piceleve/${newFileName}`

      const directoryPath = `./src/piceleve/`
      if (!fs.existsSync(directoryPath)) {
        fs.mkdirSync(directoryPath, { recursive: true })
      }

      // Use sharp to convert the image to WebP format
      await sharp(fileBuffer).toFormat('webp').toFile(filePath)

      res.status(200).json({ message: 'Image téléchargée avec succès' })
    } catch (error) {
      console.error('Erreur lors du téléchargement du fichier:', error)
      res.status(500).json({ error: 'Erreur interne du serveur' })
    }
  } else {
    res.status(401).send('Non autorisé')
  }
  },
)

/* AJOUT ELEVE=========================================================*/
/*autorisation : Admin*/
app.post('/POST/eleves', (req: any, res: any) => {
  const newData = req.body.params.eleveData;
  const { nom, prenom, image, mdp } = newData;
  const hashedMdp = hashPassword(mdp);
  const newEleve = new EleveModel({ nom, prenom, image, mdp: hashedMdp });
  const token = req.body.params.token;
  const { valid, payload } = verifyJWT(token, secretKey);
  if (valid && payload.role === 'Admin') {
    newEleve
      .save()
      .then(() => {
        console.log('Élève enregistré avec succès dans la base de données');
        res.status(200).send('Élève enregistré avec succès');
      })
      .catch((err: any) => {
        if (err.name === 'ValidationError') {
          console.error('Erreur de validation des données :', err.message);
          res.status(400).send('Données de requête invalides');
        } else {
          console.error(
            "Erreur lors de l'enregistrement de l'élève dans la base de données :",
            err,
          );
          res.status(500).send('Erreur interne du serveur');
        }
      });
  } else {
    res.status(401).send('Non autorisé');
  }
});

/* MODFIER MDP ELEVE======================================================*/
/*autorisation : Admin*/
/*autorisation : ProfesseurAdmin*/
app.post('/POST/eleveUpdatePassword', async (req: any, res: any) => {
  const { nom, prenom, mdp } = req.body.params.eleveData
  const token = req.body.params.token
  const { valid, payload } = verifyJWT(token, secretKey);
  if (valid && (payload.role === 'Admin' || payload.role === 'ProfesseurAdmin')) {

  try {
    const eleve = await EleveModel.findOne({ nom, prenom })

    if (!eleve) {
      return res.status(404).json({ message: 'Élève non trouvé' })
    }

    if (mdp !== '' || mdp !== null || mdp !== undefined) {
      let newMdp = hashPassword(mdp)
      eleve.mdp = newMdp
    }

    await eleve.save()
    res.status(200).json({ message: 'Mot de passe mis à jour avec succès' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Erreur serveur' })
  }
} else {
  res.status(401).send('Non autorisé')
}
})

/*MODIFIER MDP PROF=====================================================*/
/*autorisation : Admin*/
app.post('/POST/profUpdatePassword', async (req: any, res: any) => {
  const { mdp, nom, prenom } = req.body.params.ProfData
  const token = req.body.params.token
  const { valid, payload } = verifyJWT(token, secretKey);
  if (valid && (payload.role === 'Admin')) {

  try {
    const admin = await Admin.findOne({ nom, prenom })

    if (!admin) {
      return res.status(404).json({ message: 'Prof non trouvé' })
    }
    let newMdp = hashPassword(mdp)
    admin.mdp = newMdp
    await admin.save()
    res.status(200).json({ message: 'Mot de passe mis à jour avec succès' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Erreur serveur' })
  }
} else {
  res.status(401).send('Non autorisé')
}
})

/*ARCHIVER ELEVE================================================================*/
/*autorisation : Admin*/
app.post('/POST/archiverEleve', async (req: any, res: any) => {
  const { nom, prenom, token } = req.body
  const { valid, payload } = verifyJWT(token, secretKey);
  if (valid && (payload.role === 'Admin')) {

  try {
    const eleve = await EleveModel.findOne({ nom, prenom })
    if (!eleve) {
      return res.status(404).json({ message: 'Élève non trouvé' })
    }
    eleve.archiver = true
    await eleve.save()
    res.status(200).json({ message: 'Eleve archiver' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Erreur serveur' })
  }
} else {
  res.status(401).send('Non autorisé')
}
})

/*RESTORER ELEVE=================================================================*/
/*autorisation : Admin*/
app.post('/POST/restorerEleve', async (req: any, res: any) => {
  const { nom, prenom, token } = req.body
  const { valid, payload } = verifyJWT(token, secretKey);
  if (valid && (payload.role === 'Admin')) {
  try {
    const eleve = await EleveModel.findOne({ nom, prenom })
    if (!eleve) {
      return res.status(404).json({ message: 'Élève non trouvé' })
    }
    eleve.archiver = false
    await eleve.save()
    res.status(200).json({ message: 'Eleve restorer' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Erreur serveur' })
  }
} else {
  res.status(401).send('Non autorisé')
}
})

/*AFFECTER UN ELEVE A UNE FICHE=====================================================*/
/*autorisation : Admin*/
/*autorisation : ProfesseurAdmin*/
app.post('/POST/affectereleve', async (req: any, res: any) => {
  const { nom, prenom, ficheName, token } = req.body
  const { valid, payload } = verifyJWT(token, secretKey);
  if (valid && (payload.role === 'Admin' || payload.role === 'ProfesseurAdmin')) {
  console.log('nom, prenom, ficheName -> ', nom, prenom, ficheName)
  try {
    if (!ficheName || !nom || !prenom) {
      return res.status(500).send('Information manquante')
    }

    const fiche = await Fiche.findOne({ 'info.name': ficheName })
    const ficheEleveDejaAttribuer = await Fiche.findOne({
      'info.nomEleveAttribuer': nom,
      'info.prenomEleveAttribuer': prenom,
      'info.enCour': true,
    })

    if (ficheEleveDejaAttribuer) {
      return res.status(501).json({
        success: false,
        message:
          nom +
          '' +
          prenom +
          ' na pas fini sa fiche en cour, il doit la finir avent de pouvoir lui en attribuer une nouvelle.',
      })
    }

    if (!fiche) {
      return res.status(404).json({ message: 'Fiche non trouvée' })
    }

    if (!fiche.info.nomEleveAttribuer && !fiche.info.prenomEleveAttribuer) {
      fiche.info.nomEleveAttribuer = nom
      fiche.info.prenomEleveAttribuer = prenom
      fiche.info.enCour = true
    } else if (
      fiche.info.nomEleveAttribuer === nom &&
      fiche.info.prenomEleveAttribuer === prenom
    ) {
      return res.status(501).json({
        success: false,
        message:
          'La fiche est déjà affectée à ' +
          fiche.info.prenomEleveAttribuer +
          ' ' +
          fiche.info.nomEleveAttribuer +
          '. il doit finir sa fiche précédente pour pouvoir lui en affecter une nouvelle',
      })
    } else {
      return res.status(501).json({
        success: false,
        message:
          'La fiche est déjà affectée à ' +
          fiche.info.prenomEleveAttribuer +
          ' ' +
          fiche.info.nomEleveAttribuer +
          ". elle ne peut pas être affectée à quelqu'un d'autre",
      })
    }

    await fiche.save()

    console.log('fiche.info --> ', fiche.info)

    res.status(200).json({ success: true, message: 'Fiche bien attribuée' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Erreur serveur' })
  }
} else {
  res.status(401).send('Non autorisé')
}
})

/*AJOUTER UN Admin===============================================================*/
/*autorisation : Admin*/
app.post('/POST/admin', (req: any, res: any) => {
  const newData = req.body
  const token = req.query.token
  const { valid, payload } = verifyJWT(token, secretKey);
  if (valid && (payload.role === 'Admin')) {
  const newAdmin = new Admin(newData)
  newAdmin.mdp = hashPassword(newAdmin.mdp)
  newAdmin
    .save()
    .then(() => {
      console.log('Admin enregistré avec succès dans la base de données')
      console.log(newAdmin)

      res.status(200).send('Admin enregistré avec succès')
    })
    .catch((err: any) => {
      if (err.name === 'ValidationError') {
        console.error('Erreur de validation des données :', err.message)
        res.status(400).send('Données de requête invalides')
      } else {
        console.error(
          "Erreur lors de l'enregistrement de l'Admin dans la base de données :",
          err,
        )
        res.status(500).send('Erreur interne du serveur')
      }
    })
  } else {
    res.status(401).send('Non autorisé')
  }
})

/*MODIFIER ROLE PROF================================================================*/
/*autorisation : Admin*/
app.post('/POST/ProfUpdateRole', async (req: any, res: any) => {
  const { nom, prenom, role} = req.body.params.ProfData
  const token = req.body.params.token
  const { valid, payload } = verifyJWT(token, secretKey);
  if (valid && (payload.role === 'Admin')) {
  try {
    const admin = await Admin.findOne({ nom, prenom })

    if (!admin) {
      return res.status(404).json({ message: 'Prof non trouvé' })
    }
    admin.role = role
    await admin.save()
    res.status(200).json({ message: 'Mot de passe mis à jour avec succès' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Erreur serveur' })
  }
} else {
  res.status(401).send('Non autorisé')
}
})

/*modifier NOM FICHE================================================================*/
/*autorisation : Admin*/
/*autorisation : ProfesseurAdmin*/
app.post('/POST/ficheUpdateName', async (req: any, res: any) => {
  const { name, newName, token } = req.body
  const { valid, payload } = verifyJWT(token, secretKey);
  if (valid && (payload.role === 'Admin' || payload.role === 'ProfesseurAdmin')) {
  try {
    const fiche = await Fiche.findOne({ 'info.name': name })

    if (!fiche) {
      return res.status(404).json({ message: 'Fiche non trouvée' })
    }
    if (newName === '') {
      return res
        .status(404)
        .json({ message: 'Le nom de la fiche ne peut pas être vide' })
    }

    fiche.info.name = newName
    await fiche.save()
    res.status(200).json({ message: 'Nom de la fiche mis à jour avec succès' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Erreur serveur' })
  }
} else {
  res.status(401).send('Non autorisé')
}
})

/*dupliquer FICHE================================================================*/
/*autorisation : Admin*/
/*autorisation : ProfesseurAdmin*/
app.post('/POST/ficheDuplicate', async (req: any, res: any) => {
  const { name, token } = req.body
  const { valid, payload } = verifyJWT(token, secretKey);
  if (valid && (payload.role === 'Admin' || payload.role === 'ProfesseurAdmin')) {
  try {
    const fiche = await Fiche.findOne({ 'info.name': name }).lean()

    if (!fiche) {
      return res.status(404).json({ message: 'Fiche non trouvée' })
    }

    if (name === '') {
      return res
        .status(404)
        .json({ message: 'Le nom de la fiche ne peut pas être vide' })
    }
    // Créer une copie de l'objet sans le champ _id
    const { _id, ...ficheWithoutId } = fiche
    fiche.info.nomEleveAttribuer = ''
    fiche.info.prenomEleveAttribuer = ''
    fiche.info.enCour = true

    const newFiche = new Fiche(ficheWithoutId)
    let ficheTestExiste: string = `${ficheWithoutId.info.name} - Copie`
    const ficheTestExisteBack: string = ficheTestExiste
    let ficheTestExisteSearsh = await Fiche.findOne({
      'info.name': ficheTestExiste,
    })
    let x: number = 1
    while (ficheTestExisteSearsh) {
      ficheTestExiste = ficheTestExisteBack
      ficheTestExiste = ficheTestExiste + x
      x++
      ficheTestExisteSearsh = await Fiche.findOne({
        'info.name': ficheTestExiste,
      })
    }
    newFiche.info.name = ficheTestExiste

    await newFiche.save()
    res.status(200).json({ message: 'Fiche dupliquée avec succès' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Erreur serveur' })
  }
} else {
  res.status(401).send('Non autorisé')
}
})

/* ajouter un comentaire de la Cip =================================================*/
/*autorisation : Admin*/
/*autorisation : Cip*/
app.post('/POST/comCIP', async (req: any, res: any) => {
  const { nom, prenom, comCIP, token } = req.body
  const { valid, payload } = verifyJWT(token, secretKey);
  if (valid && (payload.role === 'Admin' || payload.role === 'Cip')) {
  try {
    const eleve = await EleveModel.findOne({ 'nom': nom, 'prenom': prenom }).exec();

    if (!eleve) {
      return res.status(404).json({ message: 'Eleve non trouvé' })
    }
    eleve.comCIP.push(comCIP)
    await eleve.save()
    res.status(200).json({ message: 'commentaire ajouter avec succès' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Erreur serveur' })
  }
} else {
  res.status(401).send('Non autorisé')
}
})

/*------------------- GET -------------------*/

/* GET ALL FICHES ===========================================================*/
/*autorisation : Admin*/
/*autorisation : ProfesseurAdmin*/
app.get('/GET/allFicheNames', async (req: any, res: any) => {
  const token = req.query.token
  const { valid, payload } = verifyJWT(token, secretKey);
  if (valid && (payload.role === 'Admin' || payload.role === 'ProfesseurAdmin')) {
  try {
    const ficheNames = await Fiche.find({}, 'info.name').exec()

    if (!ficheNames || ficheNames.length === 0) {
      return res.status(404).send('Aucune fiche trouvée')
    }

    const allNames = ficheNames.map((fiche: any) => fiche.info?.name)
    res.status(200).json(allNames)
  } catch (error) {
    console.error('Erreur lors de la recherche des noms de fiches :', error)
    res.status(500).send('Erreur interne du serveur')
  }
} else {
  res.status(401).send('Non autorisé')
}
})

/* GET FICHE =============================================*/
/*autorisation : Admin*/
/*autorisation : ProfesseurAdmin*/
/*autorisation : Professeur*/
/*autorisation : Cip*/
/*autorisation : eleve*/
app.get('/GET/nameFiche', async (req: any, res: any) => {
  const { name } = req.query
  const token = req.query.token
  const { valid, payload } = verifyJWT(token, secretKey);
  if (valid && (payload.role === 'Admin' || payload.role === 'ProfesseurAdmin' || payload.role === 'Professeur' || payload.role === 'Cip' || payload.role === 'eleve')) {
  if (!name) {
    return res.status(400).send('Le paramètre "name" est requis.')
  }

  try {
    const fiche = await Fiche.findOne({ 'info.name': name }).exec()

    if (!fiche) {
      return res.status(404).send('Fiche non trouvée')
    }

    res.status(200).json(fiche)
  } catch (error) {
    console.error('Erreur lors de la recherche de la fiche :', error)
    res.status(500).send('Erreur interne du serveur')
  }
} else {
  res.status(401).send('Non autorisé')
}
})

/* GET NAME FICHES EXISTE =============================================*/
/*autorisation : Admin*/
/*autorisation : ProfesseurAdmin*/
app.get('/GET/nameFicheExiste', async (req: any, res: any) => {
  const { name } = req.query
  const token = req.query.token
  const { valid, payload } = verifyJWT(token, secretKey);
  if (valid && (payload.role === 'Admin' || payload.role === 'ProfesseurAdmin')) {
  if (!name) {
    return res.status(400).send('Le paramètre "name" est requis.')
  }

  try {
    const fiche = await Fiche.findOne({ 'info.name': name }).exec()

    if (fiche) {
      res.status(200).send(true)
    } else {
      return res.status(200).send(false)
    }
  } catch (error) {
    console.error('Erreur lors de la recherche de la fiche :', error)
    res.status(500).send('Erreur interne du serveur')
  }
} else {
  res.status(401).send('Non autorisé')
}

})

/* GET ELEVES ============================================================*/
app.get('/GET/allEleve', async (req: any, res: any) => {
  try {
    const eleve = await EleveModel.find(
      { archiver: { $ne: true } },
      'nom prenom image ',
    ).exec()
    res.json(eleve)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Erreur serveur' })
  }
})

/* GET ELEVES ARCHIVER=======================================================*/
/*autorisation : Admin*/
app.get('/GET/allEleveArchiver', async (req: any, res: any) => {
  const token = req.query.token
  const { valid, payload } = verifyJWT(token, secretKey);
  if (valid && (payload.role === 'Admin')) {
  try {
    const eleve = await EleveModel.find(
      { archiver: { $ne: false } },
      'nom prenom image ',
    ).exec()
    res.json(eleve)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Erreur serveur' })
  }
} else {
  res.status(401).send('Non autorisé')
}
})

/*GET ELEVE AUTHENTIFICATION =================================================*/
app.get('/GET/eleve/authentification', async (req: any, res: any) => {
  const { nom, prenom, mdp } = req.query
  try {
    const eleve = await EleveModel.findOne({ nom, prenom}).exec()
    if (eleve) {
      if (comparePassword(mdp, eleve.mdp)) {
      const payload = {
        role: 'eleve',
        nom: eleve.nom,
        prenom: eleve.prenom,
      }
      const token = generateJWT(payload, secretKey, expiresIn);
      res.status(200).send({ rep: true, token: token });
      } else {
        res.status(401).send(false)
      }
    } else {
      res.status(401).send(false)
    }
  } catch (error) {
    console.error('Error during authentication:', error)
    res.status(500).json({ success: false, message: 'Internal server error' })
  }
})

/*GET ELEVE FICHE =================================================*/
/*autorisation : Admin*/
/*autorisation : ProfesseurAdmin*/
/*autorisation : Professeur*/
/*autorisation : Cip*/
/*autorisation : eleve*/
app.get('/GET/eleve/fiche', async (req: any, res: any) => {
  const { nom, prenom } = req.query
  const token = req.query.token
  const { valid, payload } = verifyJWT(token, secretKey);
  if (valid && (payload.role === 'Admin' || payload.role === 'ProfesseurAdmin' || payload.role === 'Professeur' || payload.role === 'Cip' || payload.role === 'eleve')) {
  try {
    const fiche = await Fiche.findOne({
      'info.nomEleveAttribuer': nom,
      'info.prenomEleveAttribuer': prenom,
      'info.enCour': true,
    }).exec()
    res.status(200).json(fiche)
  } catch (error) {
    console.error('Error during authentication:', error)
    res.status(500).json({ success: false, message: 'Internal server error' })
  }
} else {
  res.status(401).send('Non autorisé')
}
})

/*GET ELEVE FICHE IN PROGRESS =================================================*/
/*autorisation : Admin*/
/*autorisation : ProfesseurAdmin*/
/*autorisation : Professeur*/
/*autorisation : Cip*/
/*autorisation : eleve*/
app.get('/GET/eleve/FicheInProgress', async (req: any, res: any) => {
  const { nom, prenom } = req.query
  const token = req.query.token
  const { valid, payload } = verifyJWT(token, secretKey);
  if (valid && (payload.role === 'Admin' || payload.role === 'ProfesseurAdmin' || payload.role === 'Professeur' || payload.role === 'Cip' || payload.role === 'eleve')) {
  try {
    const ficheName = await Fiche.findOne({
      'info.nomEleveAttribuer': nom,
      'info.prenomEleveAttribuer': prenom,
      'info.enCour': true,
    }).exec()

    if (!ficheName) {
      res.status(200).send('Aucune fiche trouvée')
      return
    }

    if (!ficheName.info) {
      res.status(200).send('Aucune information de fiche trouvée')
      return
    }

    const Names = ficheName.info.name

    if (!Names) {
      res.status(200).send('Aucun nom de fiche trouvé')
      return
    }

    res.status(200).json(Names)
  } catch (error) {
    console.error('Error during authentication:', error)
    res.status(500).json({ success: false, message: 'Internal server error' })
  }
} else {
  res.status(401).send('Non autorisé')
}
})

/*GET ELEVE FICHE COMPLETED =================================================*/
/*autorisation : Admin*/
/*autorisation : ProfesseurAdmin*/
/*autorisation : Professeur*/
/*autorisation : Cip*/
/*autorisation : eleve*/
app.get('/GET/eleve/FicheCompleted', async (req: any, res: any) => {
  const { nom, prenom } = req.query
  const token = req.query.token
  const { valid, payload } = verifyJWT(token, secretKey);
  if (valid && (payload.role === 'Admin' || payload.role === 'ProfesseurAdmin' || payload.role === 'Professeur' || payload.role === 'Cip' || payload.role === 'eleve')) {
  try {
    const fichesTermines = await Fiche.find({
      'info.nomEleveAttribuer': nom,
      'info.prenomEleveAttribuer': prenom,
      'info.enCour': false, // Fiches terminées
    }).exec()

    if (!fichesTermines || fichesTermines.length === 0) {
      res.status(200).send('Aucune fiche terminée trouvée')
      return
    }

    const names = fichesTermines.map((fiche) => fiche.info.name).filter(Boolean)

    if (names.length === 0) {
      res.status(200).send('Aucun nom de fiche trouvé')
      return
    }

    res.status(200).json(names)
  } catch (error) {
    console.error('Error during authentication:', error)
    res.status(500).json({ success: false, message: 'Internal server error' })
  }
} else {
  res.status(401).send('Non autorisé')
}
})


// /*GET FICHE TYPE =================================================*/
// /*autorisation : Admin*/
// /*autorisation : ProfesseurAdmin*/
// /*autorisation : Professeur*/
// /*autorisation : Cip*/
// /*autorisation : eleve*/
// app.get('/fiches/type/:typeFiche', async (req: any, res: any) => {
//   const { nom, prenom } = req.query
//   const ficheName = await Fiche.findOne({
//     'info.nomEleveAttribuer': nom,
//     'info.prenomEleveAttribuer': prenom,
//     'info.enCour': true,
//   }).exec()

//   try {
//     const fiches = await Fiche.find({}).exec()
//     res.status(200).json(fiches)
//   } catch (error) {
//     console.error('Error during authentication:', error)
//     res.status(500).json({ success: false, message: 'Internal server error' })
//   }
// })


/*GET AUTENTIFICATION PROF======================================================================*/
app.get('/GET/admin/authentification', async (req: any, res: any) => {
  const { id, mdp } = req.query
  try {
    const admin = await Admin.findOne({ id }).exec()
    if (admin) {
      if (comparePassword(mdp, admin.mdp)) {
      const payload = {
        role: admin.role,
        nom: admin.nom,
        prenom: admin.prenom,
      }
      const token = generateJWT(payload, secretKey, expiresIn);
      res.status(200).send({ rep: true, token: token });
      } else {
        res.status(401).send(false)
      }
    } else {
      res.status(401).send(false)
    }
  } catch (error) {
    console.error('Error during authentication:', error)
    res.status(500).json({ success: false, message: 'Internal server error' })
  }
})

/*GET ROLE PROF ====================================================================*/
app.get('/GET/roleProf', async (req: any, res: any) => {
  const { id } = req.query
  try {
    const admin = await Admin.findOne({ id: id }).exec()

    if (admin) {
      res.status(200).json({ role: admin.role })
    } else {
      res.status(401).json({ success: false, message: 'Admin not found' })
    }
  } catch (error) {
    console.error('Error during get role:', error)
    res.status(500).json({ success: false, message: 'Internal server error' })
  }
})

/*GET ALL PROF =====================================================================*/
/*autorisation : Admin*/
app.get('/GET/allProf', async (req: any, res: any) => {
  const token = req.query.token
  const { valid, payload } = verifyJWT(token, secretKey);
  if (valid && (payload.role === 'Admin')) {
  try {
    const admin = await Admin.find({}, 'nom prenom').exec()
    res.json(admin)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Erreur serveur' })
  }
} else {
  res.status(401).send('Non autorisé')
}
})

/* GET PICTO ===================================================================*/
/*autorisation : Admin*/
/*autorisation : ProfesseurAdmin*/
/*autorisation : Professeur*/
/*autorisation : Cip*/
/*autorisation : eleve*/
app.get('/GET/getpicto-info', async (req: any, res: any) => {
  const pictoDirectory = path.join(__dirname, './src/picto')
  const token = req.query.token
  const { valid, payload } = verifyJWT(token, secretKey);
  if (valid && (payload.role === 'Admin' || payload.role === 'ProfesseurAdmin' || payload.role === 'Professeur' || payload.role === 'Cip' || payload.role === 'eleve')) {
  try {
    const files = fs.readdirSync(pictoDirectory)

    // Construction des noms des fichiers d'images
    const imageNames = files.map((file) => file)

    // Envoi du nombre de fichiers et de la liste des noms de fichiers en réponse à la requête
    res.status(200).json({ numFiles: imageNames.length, imageNames })
  } catch (error) {
    console.error('Erreur lors de la lecture du répertoire des images :', error)
    res.status(500).send('Erreur interne du serveur')
  }
} else {
  res.status(401).send('Non autorisé')
}
})

/* GET PICTO FILE ===============================================================*/
/*autorisation : Admin*/
/*autorisation : ProfesseurAdmin*/
/*autorisation : Professeur*/
/*autorisation : Cip*/
/*autorisation : eleve*/
app.get('/GET/getpicto-file', async (req: any, res: any) => {
  const pictoDirectory = path.join(__dirname, './src/picto')
  const { name , token } = req.query
  const { valid, payload } = verifyJWT(token, secretKey);
  if (valid && (payload.role === 'Admin' || payload.role === 'ProfesseurAdmin' || payload.role === 'Professeur' || payload.role === 'Cip' || payload.role === 'eleve')) {
  try {
    // Construction du chemin complet du fichier image
    const imagePath = path.join(pictoDirectory, name)

    // Envoi du fichier image en réponse à la requête
    res.status(200).sendFile(imagePath)
  } catch (error) {
    console.error('Erreur lors de la récupération du fichier image :', error)
    res.status(500).send('Erreur interne du serveur')
  }
} else {
  res.status(401).send('Non autorisé')
}
})

/* GET photo profil ELEVE ===============================================================*/
app.get('/GET/piceleve', async (req: any, res: any) => {
  const pictoDirectory = path.join(__dirname, './src/piceleve')
  const { name } = req.query

  try {
    // Construction du chemin complet du fichier image
    const imagePath = path.join(pictoDirectory, name)

    // Vérification si le fichier image existe
    if (fs.existsSync(imagePath)) {
      // Envoi du fichier image en réponse à la requête
      res.status(200).sendFile(imagePath)
    } else {
      // Chemin de l'image par défaut

      const defaultImagePath = path.join(
        pictoDirectory,
        '/image_default/iapasdimge.webp',
      )
      // Envoi de l'image par défaut en réponse à la requête
      res.status(200).sendFile(defaultImagePath)
    }
  } catch (error) {
    console.error('Erreur lors de la récupération du fichier image :', error)
    res.status(500).send('Erreur interne du serveur')
  }
})

/* GET PHOTO ELEVE INFO ===================================================================*/
/*autorisation : Admin*/
/*autorisation : ProfesseurAdmin*/
/*autorisation : Professeur*/
/*autorisation : Cip*/
/*autorisation : eleve*/
app.get('/GET/getphotoeleve-info', async (req: any, res: any) => {
  const { eleve, token } = req.query
  const pictoDirectory = path.join(__dirname, './src/photo/' + eleve)
  const { valid, payload } = verifyJWT(token, secretKey);
  if (valid && (payload.role === 'Admin' || payload.role === 'ProfesseurAdmin' || payload.role === 'Professeur' || payload.role === 'Cip' || payload.role === 'eleve')) {

  try {
    const files = fs.readdirSync(pictoDirectory)

    // Construction des noms des fichiers d'images
    const imageNames = files.map((file) => file)

    // Envoi du nombre de fichiers et de la liste des noms de fichiers en réponse à la requête
    res.status(200).json({ numFiles: imageNames.length, imageNames })
  } catch (error) {
    console.error('Erreur lors de la lecture du répertoire des images :', error)
    res.status(500).send('Erreur interne du serveur')
  }
} else {
  res.status(401).send('Non autorisé')
}

})

/* GET PHOTO ELEVE FILE ===============================================================*/
/*autorisation : Admin*/
/*autorisation : ProfesseurAdmin*/
/*autorisation : Professeur*/
/*autorisation : Cip*/
/*autorisation : eleve*/
app.get('/GET/getphotoeleve-file', async (req: any, res: any) => {
  const { eleve, name, token } = req.query
  const pictoDirectory = path.join(__dirname, './src/photo/' + eleve)
  const { valid, payload } = verifyJWT(token, secretKey);
  if (valid && (payload.role === 'Admin' || payload.role === 'ProfesseurAdmin' || payload.role === 'Professeur' || payload.role === 'Cip' || payload.role === 'eleve')) {
  try {
    // Construction du chemin complet du fichier image
    const imagePath = path.join(pictoDirectory, name)

    // Envoi du fichier image en réponse à la requête
    res.status(200).sendFile(imagePath)
  } catch (error) {
    console.error('Erreur lors de la récupération du fichier image :', error)
    res.status(500).send('Erreur interne du serveur')
  }
} else {
  res.status(401).send('Non autorisé')
}
})

/* GET FOND ECRAN===============================================================*/
/*autorisation : Admin*/
/*autorisation : ProfesseurAdmin*/
/*autorisation : Professeur*/
/*autorisation : Cip*/
/*autorisation : eleve*/
app.get('/GET/fondecran', async (req: any, res: any) => {
  const pictoDirectory = path.join(__dirname, './src/fond')
  const { name, token } = req.query
  const { valid, payload } = verifyJWT(token, secretKey);
  if (valid && (payload.role === 'Admin' || payload.role === 'ProfesseurAdmin' || payload.role === 'Professeur' || payload.role === 'Cip' || payload.role === 'eleve')) {
  try {
    // Construction du chemin complet du fichier image
    const imagePath = path.join(pictoDirectory, name + '.webp')

    // Vérification si le fichier image existe
    if (fs.existsSync(imagePath)) {
      // Envoi du fichier image en réponse à la requête
      res.status(200).sendFile(imagePath)
    } else {
      res.status(404).send('Image non trouvée')
    }
  } catch (error) {
    console.error('Erreur lors de la récupération du fichier image :', error)
    res.status(500).send('Erreur interne du serveur')
  }
} else {
  res.status(401).send('Non autorisé')
}
})

/* get eleve affecter a fiche ===============================================================*/
/*autorisation : Admin*/
/*autorisation : ProfesseurAdmin*/
app.get('/GET/eleveAffecter', async (req: any, res: any) => {
  const { ficheName, token } = req.query
  const { valid, payload } = verifyJWT(token, secretKey);
  if (valid && (payload.role === 'Admin' || payload.role === 'ProfesseurAdmin')) {
  try {
    const fiche = await Fiche.findOne({ 'info.name': ficheName }).exec()
    if (!fiche) {
      return res.status(404).send('Fiche non trouvée')
    }
    if (!fiche.info.nomEleveAttribuer && !fiche.info.prenomEleveAttribuer) {
      return res.status(200).send('personne')
    }
    const eleveAffecteString = `${fiche.info.nomEleveAttribuer} ${fiche.info.prenomEleveAttribuer}`
    return res.status(200).send(eleveAffecteString)
  } catch (error) {
    console.error('Erreur lors de la recherche de la fiche :', error)
    res.status(500).send('Erreur interne du serveur')
  }
} else {
  res.status(401).send('Non autorisé')
}
})

/* GET tableau réaction eleve ======================================================================*/
/*autorisation : Admin*/
/*autorisation : Cip*/
app.get('/GET/reactionEleve', async (req: any, res: any) => {
  const { nomeleve, prenomeleve, token } = req.query
  const { valid, payload } = verifyJWT(token, secretKey);
  if (valid && (payload.role === 'Admin' || payload.role === 'Cip')) {
  try {
    const ficheArray = await Fiche.find().exec()
    const reactionEleveArray = []
    const nomficheArray = []

    for (const fiche of ficheArray) {
      if (
        fiche.info.nomEleveAttribuer === nomeleve &&
        fiche.info.prenomEleveAttribuer === prenomeleve
      ) {
        reactionEleveArray.push(fiche.info.reacteleve)
        nomficheArray.push(fiche.info.name)
      }
    }

    res.status(200).send({ reactions: reactionEleveArray, fiches: nomficheArray });
  } catch (error) {
    console.error('Erreur lors de la récupération des fiches :', error)
    res.status(500).send('Erreur interne du serveur')
  }
} else {
  res.status(401).send('Non autorisé')
}
})

/* GET comentaire de la CIP pour un élève donné =====================================================*/
/*autorisation : Admin*/
/*autorisation : Cip*/
app.get('/GET/comentaireCIP', async (req: any, res: any) => {
  const { nomeleve, prenomeleve, token } = req.query;
  const { valid, payload } = verifyJWT(token, secretKey);
  if (valid && (payload.role === 'Admin' || payload.role === 'Cip')) {
  try {
    const eleve = await EleveModel.findOne({ 'nom': nomeleve, 'prenom': prenomeleve }).exec();

    if (!eleve) {
      return res.status(404).json({ message: 'Eleve non trouvé' });
    }
    const taille: number = eleve.comCIP.length;

    if (!eleve.comCIP || taille === 0) {
      return res.status(404).send('Aucun commentaire trouvé');
    }

    res.status(200).send(eleve.comCIP);
  } catch (error) {
    console.error('Erreur lors de la récupération des fiches :', error);
    res.status(500).send('Erreur interne du serveur');
  }
} else {
  res.status(401).send('Non autorisé')
}
})

/* GET CSV ======================================================================*/
/*autorisation : Admin*/
app.get('/GET/csv', async (req: any, res: any) => {
  const { nom, prenom, token } = req.query;
  const { valid, payload } = verifyJWT(token, secretKey);
  if (valid && (payload.role === 'Admin')) {
    try {
      const eleve = await EleveModel.findOne({ 'nom': nom, 'prenom': prenom }).exec();
      if (!eleve) {
        return res.status(404).json({ message: 'Eleve non trouvé' });
      }
      
      // Extracting name for CSV file name
      const fileName = `${eleve.nom}_${eleve.prenom}.csv`;

      // Generate the CSV data
      const csvData = await generateCSVData(eleve);

      // Set the response headers with dynamic file name
      res.setHeader('Content-Type', 'text/csv');
      res.setHeader('Content-Disposition', `attachment; filename="${fileName}"`);

      // Send the CSV data as the response
      res.send(csvData);
    } catch (error) {
      res.status(500).send('Erreur serveur');
    }
  } else {
    res.status(401).send('Non autorisé');
  }
});


async function generateCSVData(eleve: any) {
  let csvData = '';
  //partie commentaire de la CIP
  csvData += `"Commentaire de la CIP";"";"█"\n`;
  csvData += `"Date";"Commentaire";"█"\n`;
  eleve.comCIP.forEach((commentaire: [Date, string]) => {
    const [date, comment] = commentaire;
    csvData += `" ${date}";"${comment}";"█"\n`;
  });
  csvData += `"██████████████████████████";"██████████████████████████";"█"\n`;

  //partie fiche
  csvData += `\n"liste des fiche"\n`;
  const fiches = await Fiche.find({
    'info.nomEleveAttribuer': eleve.nom,
    'info.prenomEleveAttribuer': eleve.prenom,
  }).exec()

  let input10: string = '';
  let input11: string = '';
  let input12: string = '';
  let input13: string = '';
  let input14: string = '';
  let input15: string = '';
  let input16: string = '';
  let input19: string = '';

  fiches.forEach((fiche: any) => {
    csvData += `"information de la fiche"\n`;
    csvData += `"Nom de la fiche";"type de la fiche";"Informations supplémentaires";"Réaction de l'élève";\n`;
    csvData += `"${fiche.info.name}";"${fiche.info.typeFiche}";"${fiche.info.informationSuplementaire}";"${fiche.info.reacteleve}"\n`;
    csvData += `\n"Case remplie"\n`;
    csvData += `"Nom de la case";"Contenue remplie"\n`;
    csvData += `"Nom de l'intervenant";"${fiche.InputFiche.input1}"\n`;
    csvData += `"Prénom de l'intervenant";"${fiche.InputFiche.input2}"\n`;
    csvData += `"Date d'intervention";"${fiche.InputFiche.input8}"\n`;
    csvData += `"Durée de l'opération";"${fiche.InputFiche.input9}"\n`;
    input10 = fiche.InputFiche.input10 ? "case cochée" : "case non cochée";
    input11 = fiche.InputFiche.input11 ? "case cochée" : "case non cochée";
    input12 = fiche.InputFiche.input12 ? "case cochée" : "case non cochée";
    input13 = fiche.InputFiche.input13 ? "case cochée" : "case non cochée";
    input14 = fiche.InputFiche.input14 ? "case cochée" : "case non cochée";
    input15 = fiche.InputFiche.input15 ? "case cochée" : "case non cochée";
    input16 = fiche.InputFiche.input16 ? "case cochée" : "case non cochée";
    input19 = fiche.InputFiche.input19 ? "case cochée" : "case non cochée";

    csvData += `"améliorative";"${input10}"\n`;
    csvData += `"préventive";"${input11}"\n`;
    csvData += `"corrective";"${input12}"\n`;
    csvData += `"Aménagement";"${input13}"\n`;
    csvData += `"Finitions";"${input14}"\n`;
    csvData += `"Installation sanitaire";"${input15}"\n`;
    csvData += `"Installation électrique";"${input16}"\n`;
    csvData += `"Travaux réalisés";"${fiche.InputFiche.input17}"\n`;
    csvData += `"Travaux non réalisés";"${fiche.InputFiche.input18}"\n`;
    csvData += `"Nécessite une nouvelle intervention";"${input19}"\n`;

    csvData += `\n"Commentaire de la fiche"\n`;
    csvData += `"Nom du commentateur";"Commentaire"\n`;
    fiche.Commentaires.slice(1).forEach((commentaire: any) => {
      const { contenu, idCommentateur } = commentaire;
      csvData += `"${idCommentateur}";"${contenu}"\n`;
    });
    csvData += `\n"██████████████████████████";"██████████████████████████";"██████████████████████████";"██████████████████████████"\n\n`;
  });

  return csvData;
}




/*------------------- DELETE -------------------*/

/* DELETE FICHE ===============================================================*/
/*autorisation : Admin*/
/*autorisation : ProfesseurAdmin*/
app.get('/DELETE/ficheName', async (req: any, res: any) => {
  const { name, token } = req.query
  const { valid, payload } = verifyJWT(token, secretKey);
  if (valid && (payload.role === 'Admin' || payload.role === 'ProfesseurAdmin')) {

  if (!name) {
    return res.status(400).send('Le paramètre "name" est requis.')
  }

  try {
    const deletedFiche = await Fiche.findOneAndDelete({
      'info.name': name,
    }).exec()

    if (!deletedFiche) {
      return res.status(404).send('Fiche non trouvée')
    }

    console.log('Fiche supprimée avec succès:', deletedFiche)
    res.status(200).send(true)
  } catch (error) {
    console.error('Erreur lors de la suppression de la fiche :', error)
    res.status(500).send('Erreur interne du serveur')
  }
} else {
  res.status(401).send('Non autorisé')
}
})

/* delete fond ecran ===============================================================*/
/*autorisation : Admin*/
/*autorisation : ProfesseurAdmin*/
/*autorisation : Professeur*/
/*autorisation : Cip*/
/*autorisation : eleve*/
app.get('/DELETE/fond', async (req: any, res: any) => {
  const { name, token } = req.query
  const { valid, payload } = verifyJWT(token, secretKey);
  if (valid && (payload.role === 'Admin' || payload.role === 'ProfesseurAdmin' || payload.role === 'Professeur' || payload.role === 'Cip' || payload.role === 'eleve')) {
  const imagePath = path.join(__dirname, './src/fond', `${name}.webp`)
  try {
    // Check if the file exists
    if (fs.existsSync(imagePath)) {
      // Delete the file
      fs.unlinkSync(imagePath)
      console.log('File deleted successfully')
      res.status(200).send('File deleted successfully')
    } else {
      res.status(404).send('File ' + imagePath + ' not found')
    }
  } catch (error) {
    console.error('Error deleting the file:', error)
    res.status(500).send('Internal server error')
  }
} else {
  res.status(401).send('Non autorisé')
}
})

/* hashage du mot de passe ========================================================================*/
const salt = 'Flugabwehrraketensystem Roland auf Radkraftfahrzeug';

function hashPassword(mdp: any) {
  const hashedPassword = crypto.pbkdf2Sync(mdp, salt, 1000, 64, 'sha512').toString('hex');
  return hashedPassword;
}

function comparePassword(mdp: string, hash: string): boolean {
  const hashedPassword = crypto.pbkdf2Sync(mdp, salt, 1000, 64, 'sha512').toString('hex');
  return hashedPassword === hash;
}