import { Document, Schema, model, Model } from 'mongoose'
import { MiniBox, FicheDocument, Picto, Eleve, Admin } from './interface'
import sharp from 'sharp'
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const PORT = 5000
const multer = require('multer')
import fs from 'fs'
import path from 'path'
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
  archiver: { type: Boolean, default: false },
})

const EleveModel = model<Eleve>('Eleve', Eleve)
/*------------------- POST -------------------*/

app.post('/POST/fiche', (req: any, res: any) => {
  const newData = req.body
  const newFiche = new Fiche(newData)
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
})

app.post('/POST/commentaire', async (req: any, res: any) => {
  const { ficheName, contenu, idCommentateur } = req.body
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
})

app.get('/GET/allCommentaire', async (req: any, res: any) => {
  const ficheName = req.query.ficheName

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
})

/* UPLOAD IMAGE ELEVES ===========================================================*/

app.post(
  '/POST/uploadImageEleve',
  upload.single('file'),
  async (req: any, res: any) => {
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
  },
)

/*UPLOAD PICTO==============================================*/

app.post(
  '/POST/uploadpicto',
  upload.single('file'),
  async (req: any, res: any) => {
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
  },
)
/* upload fond ecran elelve======================================================*/

app.post(
  '/POST/uploadfondecran',
  upload.single('file'),
  async (req: any, res: any) => {
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
  },
)

/* upload photo profil eleve======================================================*/

app.post(
  '/POST/uploadpictoEleve',
  upload.single('file'),
  async (req: any, res: any) => {
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
  },
)

/* AJOUT ELEVE=========================================================*/

app.post('/POST/eleves', (req: any, res: any) => {
  const newData = req.body
  const newEleve = new EleveModel(newData)
  newEleve
    .save()
    .then(() => {
      console.log('Élève enregistré avec succès dans la base de données')
      res.status(200).send('Élève enregistré avec succès')
    })
    .catch((err: any) => {
      if (err.name === 'ValidationError') {
        console.error('Erreur de validation des données :', err.message)
        res.status(400).send('Données de requête invalides')
      } else {
        console.error(
          "Erreur lors de l'enregistrement de l'élève dans la base de données :",
          err,
        )
        res.status(500).send('Erreur interne du serveur')
      }
    })
})

/* MODFIER MDP ELEVE======================================================*/

app.post('/POST/eleveUpdatePassword', async (req: any, res: any) => {
  const { nom, prenom, mdp } = req.body

  try {
    const eleve = await EleveModel.findOne({ nom, prenom })

    if (!eleve) {
      return res.status(404).json({ message: 'Élève non trouvé' })
    }

    if (mdp !== '' || mdp !== null || mdp !== undefined) {
      eleve.mdp = mdp
    }

    await eleve.save()
    res.status(200).json({ message: 'Mot de passe mis à jour avec succès' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Erreur serveur' })
  }
})

/*MODIFIER MDP PROF=====================================================*/

app.post('/POST/profUpdatePassword', async (req: any, res: any) => {
  const { mdp, nom, prenom } = req.body

  try {
    const admin = await Admin.findOne({ nom, prenom })

    if (!admin) {
      return res.status(404).json({ message: 'Prof non trouvé' })
    }
    admin.mdp = mdp
    await admin.save()
    res.status(200).json({ message: 'Mot de passe mis à jour avec succès' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Erreur serveur' })
  }
})

/*ARCHIVER ELEVE================================================================*/

app.post('/POST/archiverEleve', async (req: any, res: any) => {
  const { nom, prenom } = req.body

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
})

/*RESTORER ELEVE=================================================================*/

app.post('/POST/restorerEleve', async (req: any, res: any) => {
  const { nom, prenom } = req.body

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
})

/*AFFECTER UN ELEVE A UNE FICHE=====================================================*/

app.post('/POST/affectereleve', async (req: any, res: any) => {
  const { nom, prenom, ficheName } = req.body
  console.log('nom, prenom, ficheName -> ', nom, prenom, ficheName)
  try {
    if (!ficheName || !nom || !prenom) {
      return res.status(500).send('Information manquante')
    }

    const fiche = await Fiche.findOne({ 'info.name': ficheName })

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

    res.status(200).json({ message: 'Fiche bien attribuée' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Erreur serveur' })
  }
})

/*AJOUTER UN ADMIN===============================================================*/

app.post('/POST/admin', (req: any, res: any) => {
  const newData = req.body
  const newAdmin = new Admin(newData)
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
})

/*MODIFIER ROLE PROF================================================================*/

app.post('/POST/ProfUpdateRole', async (req: any, res: any) => {
  const { nom, prenom, role } = req.body

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
})

/*modifier NOM FICHE================================================================*/

app.post('/POST/ficheUpdateName', async (req: any, res: any) => {
  const { name, newName } = req.body

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
})

/*dupliquer FICHE================================================================*/

app.post('/POST/ficheDuplicate', async (req: any, res: any) => {
  const { name } = req.body

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
    newFiche.info.name = `${ficheWithoutId.info.name} - Copie`

    await newFiche.save()
    res.status(200).json({ message: 'Fiche dupliquée avec succès' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Erreur serveur' })
  }
})

/*------------------- GET -------------------*/

/* GET ALL FICHES ===========================================================*/

app.get('/GET/allFicheNames', async (req: any, res: any) => {
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
})

/* GET FICHE =============================================*/

app.get('/GET/nameFiche', async (req: any, res: any) => {
  const { name } = req.query

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
})

/* GET NAME FICHES EXISTE =============================================*/

app.get('/GET/nameFicheExiste', async (req: any, res: any) => {
  const { name } = req.query

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

app.get('/GET/allEleveArchiver', async (req: any, res: any) => {
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
})

/*GET ELEVE AUTHENTIFICATION =================================================*/

app.get('/GET/eleve/authentification', async (req: any, res: any) => {
  const { nom, prenom, mdp } = req.query
  try {
    const admin = await EleveModel.findOne({ nom, prenom, mdp }).exec()
    if (admin) {
      res.status(200).send(true)
    } else {
      res.status(401).send(false)
    }
  } catch (error) {
    console.error('Error during authentication:', error)
    res.status(500).json({ success: false, message: 'Internal server error' })
  }
})

/*GET ELEVE AUTHENTIFICATION =================================================*/

app.get('/GET/eleve/fiche', async (req: any, res: any) => {
  const { nom, prenom } = req.query
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
})

app.get('/GET/eleve/FicheInProgress', async (req: any, res: any) => {
  const { nom, prenom } = req.query
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
})

app.get('/GET/eleve/FicheCompleted', async (req: any, res: any) => {
  const { nom, prenom } = req.query
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
})

// GET TYPEFICHE

app.get('/fiches/type/:typeFiche', async (req: any, res: any) => {
  const { nom, prenom } = req.query;
  const ficheName = await Fiche.findOne({
    'info.nomEleveAttribuer': nom,
    'info.prenomEleveAttribuer': prenom,
    'info.enCour': true,
  }).exec()
  
    try {
      const fiches = await Fiche.find({ }).exec()
      res.status(200).json(fiches)
    } catch (error) {
      console.error('Error during authentication:', error)
      res.status(500).json({ success: false, message: 'Internal server error' })
    }
  }
);

/*GET ADMIN======================================================================*/

app.get('/GET/admin/authentification', async (req: any, res: any) => {
  const { id, mdp } = req.query
  try {
    const admin = await Admin.findOne({ id, mdp }).exec()
    if (admin) {
      res.status(200).send(true)
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

app.get('/GET/allProf', async (req: any, res: any) => {
  try {
    const admin = await Admin.find({}, 'nom prenom').exec()
    res.json(admin)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Erreur serveur' })
  }
})

/* GET PICTO ===================================================================*/

app.get('/GET/getpicto-info', async (req: any, res: any) => {
  const pictoDirectory = path.join(__dirname, './src/picto')

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
})

/* GET PICTO FILE ===============================================================*/

app.get('/GET/getpicto-file', async (req: any, res: any) => {
  const pictoDirectory = path.join(__dirname, './src/picto')
  const { name } = req.query

  try {
    // Construction du chemin complet du fichier image
    const imagePath = path.join(pictoDirectory, name)

    // Envoi du fichier image en réponse à la requête
    res.status(200).sendFile(imagePath)
  } catch (error) {
    console.error('Erreur lors de la récupération du fichier image :', error)
    res.status(500).send('Erreur interne du serveur')
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

app.get('/GET/getphotoeleve-info', async (req: any, res: any) => {
  const { eleve } = req.query
  const pictoDirectory = path.join(__dirname, './src/photo/' + eleve)

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
})

/* GET PHOTO ELEVE FILE ===============================================================*/

app.get('/GET/getphotoeleve-file', async (req: any, res: any) => {
  const { eleve } = req.query
  const pictoDirectory = path.join(__dirname, './src/photo/' + eleve)
  const { name } = req.query

  try {
    // Construction du chemin complet du fichier image
    const imagePath = path.join(pictoDirectory, name)

    // Envoi du fichier image en réponse à la requête
    res.status(200).sendFile(imagePath)
  } catch (error) {
    console.error('Erreur lors de la récupération du fichier image :', error)
    res.status(500).send('Erreur interne du serveur')
  }
})

/* GET FOND ECRAN ELEVE ===============================================================*/

app.get('/GET/fondecran', async (req: any, res: any) => {
  const pictoDirectory = path.join(__dirname, './src/fond')
  const { name } = req.query

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
})

/* get eleve affecter a fiche ===============================================================*/

app.get('/GET/eleveAffecter', async (req: any, res: any) => {
  const { ficheName } = req.query
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
})

/*------------------- DELETE -------------------*/

/* DELETE FICHE ===============================================================*/

app.get('/DELETE/ficheName', async (req: any, res: any) => {
  const { name } = req.query
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
})

/* delete fond ecran eleve ===============================================================*/

app.get('/DELETE/fond', async (req: any, res: any) => {
  const { name } = req.query
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
})


