import { Document, Schema, model, Model } from "mongoose";
import { MiniBox, FicheDocument, Picto, CreationEleve, Admin } from "./interface";
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const PORT = 5000;
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const DB_URL = 'mongodb://0.0.0.0/sae';

app.use(cors());
app.use(express.json());
app.listen(PORT, () => {
  console.log("connection au port 5000 reussi")
})

mongoose.connect(DB_URL);
const conn = mongoose.connection;

conn.once('open', () => {
  console.log('connection reussite')
})
conn.on('error', () =>{
  console.log('error connecting to database');
  process.exit(1);
})

const miniBoxSchema = new Schema<MiniBox>({
  ChoixMiniBox: { type: String, required: true },
  Position: { type: Number, required: true },
  CouleurTexte: { type: String, required: true },
  PoliceTexte: { type: String, required: true },
  Taille: { type: Number, required: true },
  Audio: { type: Boolean, required: true },
}, { _id: false }); 

const ficheSchema = new Schema<FicheDocument>({
  info: { type: { name: String }, _id: false },
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
  MiniBox22: { type: miniBoxSchema, required: true },
  MiniBox23: { type: miniBoxSchema, required: true },
});

const admin = new Schema<Admin>({
  nom: {type: String},
  prenom: {type: String},
  mdp: {type: String},
  id: {type: String}
});

const Admin = model<Admin>('Admin', admin)

const Fiche = model<FicheDocument>('Fiche', ficheSchema);

const pictoSchema = new Schema<Picto>({
  name: { type: String, required: true },
  url: { type: String, required: true },
});

const Picto = model<Picto>('Picto', pictoSchema);



const Eleve = new Schema<CreationEleve>({
  nom: {type: String},
  prenom: {type: String},
  image: {type: String},
  mdp: {type: Number}
});

const EleveModel = model<CreationEleve>('Eleve', Eleve);
/*------------------- POST -------------------*/

app.post('/POST/fiche', (req : any, res : any) => {
  const newData = req.body;
  const newFiche = new Fiche(newData);
  newFiche.save()
  .then(() => {
    console.log('Document enregistré avec succès dans la base de données');
    res.status(200).send('Document enregistré avec succès');
  })
  .catch((err : any) => {
    if (err.name === 'ValidationError') {
      console.error('Erreur de validation des données :', err.message);
      res.status(400).send('Données de requête invalides');
    } else {
      console.error('Erreur lors de l\'enregistrement du document dans la base de données :', err);
      res.status(500).send('Erreur interne du serveur');
    }
  });
});



app.post('/POST/uploadpicto', upload.single('file'), async (req: any, res: any) => {
  try {
    const { name } = req.query;

    if (!req.file) {
      return res.status(400).json({ error: 'Aucun fichier n\'a été téléchargé.' });
    }

    const fileBuffer = req.file.buffer;

    const originalFileName = req.file.originalname;
    const fileExtension = originalFileName.split('.').pop();
    const newFileName = `${name}.webp`; // Change the file extension to webp
    const filePath = `./src/picto/${newFileName}`;
    if (fs.existsSync(filePath)) {
      res.status(409).json({ message: 'Le fichier existe déjà' });
    } else {
      // Use sharp to convert the image to WebP format
      await sharp(fileBuffer)
        .toFormat('webp')
        .toFile(filePath);
      
      res.status(200).json({ message: 'Image téléchargée avec succès' });
    }
  } catch (error) {
    console.error('Erreur lors du téléchargement du fichier:', error);
    res.status(500).json({ error: 'Erreur interne du serveur' });
  }
});


/*------------------- GET -------------------*/


/*  */
app.get('/GET/allFicheNames', async (req: any, res: any) => {
  try {
    const ficheNames = await Fiche.find({}, 'info.name').exec();

    if (!ficheNames || ficheNames.length === 0) {
      return res.status(404).send('Aucune fiche trouvée');
    }

    const allNames = ficheNames.map((fiche: any) => fiche.info?.name);
    res.status(200).json(allNames);
  } catch (error) {
    console.error('Erreur lors de la recherche des noms de fiches :', error);
    res.status(500).send('Erreur interne du serveur');
  }
});

/* */
app.get('/GET/nameFiche', async (req: any, res: any) => {
  const { name } = req.query;

  if (!name) {
    return res.status(400).send('Le paramètre "name" est requis.');
  }

  try {
    const fiche = await Fiche.findOne({ 'info.name': name }).exec();

    if (!fiche) {
      return res.status(404).send('Fiche non trouvée');
    }

    res.status(200).json(fiche);
  } catch (error) {
    console.error('Erreur lors de la recherche de la fiche :', error);
    res.status(500).send('Erreur interne du serveur');
  }
});


/* GET NAME FICHES EXISTE =============================================*/
app.get('/GET/nameFicheExiste', async (req: any, res: any) => {
  const { name } = req.query;

  if (!name) {
    return res.status(400).send('Le paramètre "name" est requis.');
  }

  try {
    const fiche = await Fiche.findOne({ 'info.name': name }).exec();

    if(fiche) {
      res.status(200).send(true);
    } else {
      return res.status(200).send(false);
    }
  } catch (error) {
    console.error('Erreur lors de la recherche de la fiche :', error);
    res.status(500).send('Erreur interne du serveur');
  }
});
/* GET ELEVES =============================================*/

app.get('/GET/allEleve', async (req: any, res: any) => {
  try {
    const eleve = await EleveModel.find({}, "nom prenom image ",).exec();
    
    if (!eleve) {
      return res.status(404).json({ message: 'Élève non trouvé' });
    }

    res.json(eleve);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur serveur' });
  }
});
/*------------------- MODFIER MDP ELEVE -------------------*/
app.post('/POST/updatePassword', async (req: any, res: any) => {
  const { nom, prenom, mdp } = req.body;

  try {
    const eleve = await EleveModel.findOne({ nom, prenom });

    if (!eleve) {
      return res.status(404).json({ message: 'Élève non trouvé' });
    }
    eleve.mdp = mdp;
    await eleve.save();
    res.json({ message: 'Mot de passe mis à jour avec succès' });
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

app.get('/GET/admin/authentification', async (req: any, res : any) => {
  const { nom, prenom, mdp} = req.body;
  try{
    const admin = await Admin.findOne({nom, prenom, mdp}).exec();
    if (admin) {
      res.status(200).send(true);
    }else{
      res.status(401).send(false);
    }
  } catch (error){
    console.error('Error during authentication:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});


app.get('/GET/getpicto', async (req: any, res: any) => {
  const pictoDirectory = path.join(__dirname, './src/picto');
  const { name } = req.query;

  try {
    const files = fs.readdirSync(pictoDirectory);
    let images = [];

      images = files.filter(file => {
        const extension = path.extname(file).toLowerCase();
        return extension === '.webp';
      });

    // Envoyer les fichiers au lieu des noms de fichiers
    const imagePaths = images.map(image => path.join(pictoDirectory, image));
    res.status(200).sendFile(imagePaths[0]); // Vous pouvez ajuster cela en fonction de vos besoins

  } catch (error) {
    console.error('Erreur lors de la lecture du répertoire des images :', error);
    res.status(500).send('Erreur interne du serveur');
  }
});

/*------------------- DELETE -------------------*/

app.get('/DELETE/ficheName', async (req: any, res: any) => {
  const { name } = req.query;
  if (!name) {
    return res.status(400).send('Le paramètre "name" est requis.');
  }

  try {
    const deletedFiche = await Fiche.findOneAndDelete({ 'info.name': name }).exec();

    if (!deletedFiche) {
      return res.status(404).send('Fiche non trouvée');
    }

    console.log('Fiche supprimée avec succès:', deletedFiche);
    res.status(200).send(true);
  } catch (error) {
    console.error('Erreur lors de la suppression de la fiche :', error);
    res.status(500).send('Erreur interne du serveur');
  }
});

