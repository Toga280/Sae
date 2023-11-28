import { Document, Schema, model, Model } from "mongoose";
import { MiniBox, FicheDocument } from "./interface";
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const PORT = 5000;

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
  CouleurFond: { type: String, default: 'none' },
  Audio: { type: Boolean, required: true },
});

const ficheSchema = new Schema<FicheDocument>({
  info: { type: { name: String } },
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

const Fiche = model<FicheDocument>('Fiche', ficheSchema);

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

/*------------------- GET -------------------*/

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
