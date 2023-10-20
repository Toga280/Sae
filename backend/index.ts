import {  Personnel,
  Apprenti,
  Formation,
  Session,
  EducAdmin,
  ElementDefaut,
  FicheIntervention,
  LaisserTrace,
  Assister,
  Composer} from './sequelize';
const express = require('express')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())



app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`)
});