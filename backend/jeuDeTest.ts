const {Sequelize} = require('sequelize');
const {sequelize} = require('./sequelize');
const {
  Personnel,
  Apprenti,
  Formation,
  Session,
  EducAdmin,
  ElementDefaut,
  FicheIntervention,
  LaisserTrace,
  Assister,
  Composer
} = require('./sequelize');

async function insererDonnees() {
  try {

    await sequelize.sync();

    // Insérer dans la table personnel
    await Personnel.bulkCreate([
      { nom: 'Doe', prénom: 'John', login: 'john.doe', mdp: 'motdepasse1', rôle: 'admin' },
      { nom: 'Smith', prénom: 'Jane', login: 'jane.smith', mdp: 'motdepasse2', rôle: 'educateur' },
      { nom: 'Brown', prénom: 'Jim', login: 'jim.brown', mdp: 'motdepasse3', rôle: 'educateur' }
    ]);

    // Insérer dans la table apprenti
    await Apprenti.bulkCreate([
      { nom: 'Johnson', prénom: 'Mike', login: 'mike.johnson', mdp: 'motdepasse4', photo: 'chemin/vers/photo1.jpg' },
      { nom: 'Williams', prénom: 'Sarah', login: 'sarah.williams', mdp: 'motdepasse5', photo: 'chemin/vers/photo2.jpg' },
      { nom: 'Taylor', prénom: 'Chris', login: 'chris.taylor', mdp: 'motdepasse6', photo: 'chemin/vers/photo3.jpg' }
    ]);

    // Insérer dans la table formation
    await Formation.bulkCreate([
      { intitulé: 'Formation A', niveau_qualif: 1, groupe: 'Groupe A' },
      { intitulé: 'Formation B', niveau_qualif: 2, groupe: 'Groupe B' },
      { intitulé: 'Formation C', niveau_qualif: 3, groupe: 'Groupe C' }
    ]);

    // Insérer dans la table session
    await Session.bulkCreate([
      { thème: 'Séance 1', cours: 'Contenu de la séance 1', durée: 120, id_formation: 1 },
      { thème: 'Séance 2', cours: 'Contenu de la séance 2', durée: 90, id_formation: 2 },
      { thème: 'Séance 3', cours: 'Contenu de la séance 3', durée: 150, id_formation: 3 }
    ]);

    // Insérer dans la table Educ_Admin
    await EducAdmin.bulkCreate([
      { id_personnel: 1 },
      { id_personnel: 2 },
      { id_personnel: 3 }
    ]);

    // Insérer dans la table element_defaut
    await ElementDefaut.bulkCreate([
      { type: 'Type 1', picto: 'chemin/vers/picto1.jpg', text: 'Texte élément 1', audio: 'chemin/vers/audio1.mp3', id_personnel: 1 },
      { type: 'Type 2', picto: 'chemin/vers/picto2.jpg', text: 'Texte élément 2', audio: 'chemin/vers/audio2.mp3', id_personnel: 2 },
      { type: 'Type 3', picto: 'chemin/vers/picto3.jpg', text: 'Texte élément 3', audio: 'chemin/vers/audio3.mp3', id_personnel: 3 }
    ]);

    // Insérer dans la table fiche_intervention
    await FicheIntervention.bulkCreate([
      // Remplacez les dates par des dates réelles au format ISO 8601
      { numéro: 1, nom_du_demandeur: 'John Doe', date_demande: '2023-10-16T10:00:00.000Z', date_intervention: '2023-10-17T13:00:00.000Z', durée_intervention: '2 heures', localisation: 'Localisation 1', description_demande: 'Description demande 1', degré_urgence: 'Urgent', type_intervention: 'Type 1', nature_intervention: 'Nature 1', couleur_intervention: 'Rouge', etat_fiche: 'En attente', date_création: '2023-10-16T09:00:00.000Z', id_personnel: 1, id_apprenti: 1 },
      { numéro: 2, nom_du_demandeur: 'Jane Smith', date_demande: '2023-10-16T11:00:00.000Z', date_intervention: '2023-10-18T14:00:00.000Z', durée_intervention: '3 heures', localisation: 'Localisation 2', description_demande: 'Description demande 2', degré_urgence: 'Moyen', type_intervention: 'Type 2', nature_intervention: 'Nature 2', couleur_intervention: 'Vert', etat_fiche: 'En attente', date_création: '2023-10-16T10:00:00.000Z', id_personnel: 2, id_apprenti: 2 },
      { numéro: 3, nom_du_demandeur: 'Jim Brown', date_demande: '2023-10-16T12:00:00.000Z', date_intervention: '2023-10-19T15:00:00.000Z', durée_intervention: '1 heure', localisation: 'Localisation 3', description_demande: 'Description demande 3', degré_urgence: 'Faible', type_intervention: 'Type 3', nature_intervention: 'Nature 3', couleur_intervention: 'Bleu', etat_fiche: 'En attente', date_création: '2023-10-16T11:00:00.000Z', id_personnel: 3, id_apprenti: 3 }
    ]);

    // Insérer dans la table laisser_trace
    await LaisserTrace.bulkCreate([
      { id_personnel: 1, horodatage: '2023-10-17T10:00:00.000Z', intitulé: 'Intitulé 1', éval_texte: 'Évaluation texte 1', commentaire_texte: 'Commentaire texte 1', éval_audio: 'Évaluation audio 1', commentaire_audio: 'Commentaire audio 1', id_fiche: 1 },
      { id_personnel: 2, horodatage: '2023-10-18T11:00:00.000Z', intitulé: 'Intitulé 2', éval_texte:    'Évaluation texte 2', commentaire_texte: 'Commentaire texte 2', éval_audio: 'Évaluation audio 2', commentaire_audio: 'Commentaire audio 2', id_fiche: 2 },
      { id_personnel: 3, horodatage: '2023-10-19T12:00:00.000Z', intitulé: 'Intitulé 3', éval_texte: 'Évaluation texte 3', commentaire_texte: 'Commentaire texte 3', éval_audio: 'Évaluation audio 3', commentaire_audio: 'Commentaire audio 3', id_fiche: 3 }
    ]);

    // Insérer dans la table Assister
    await Assister.bulkCreate([
      { id_apprenti: 1, id_session: 1 },
      { id_apprenti: 2, id_session: 2 },
      { id_apprenti: 3, id_session: 3 }
    ]);

    // Insérer dans la table composer
    await Composer.bulkCreate([
      { id_élément: 1, id_fiche: 1, picto: 'chemin/vers/picto4.jpg', text: 'Texte composer 1', taille_texte: 'petite', police: 'Arial', audio: 'chemin/vers/audio4.mp3', couleur: 'rouge', couleur_fond: 'blanc', niveau: 1 },
      { id_élément: 2, id_fiche: 2, picto: 'chemin/vers/picto5.jpg', text: 'Texte composer 2', taille_texte: 'moyenne', police: 'Verdana', audio: 'chemin/vers/audio5.mp3', couleur: 'vert', couleur_fond: 'bleu', niveau: 2 },
      { id_élément: 3, id_fiche: 3, picto: 'chemin/vers/picto6.jpg', text: 'Texte composer 3', taille_texte: 'grande', police: 'Times New Roman', audio: 'chemin/vers/audio6.mp3', couleur: 'bleu', couleur_fond: 'rouge', niveau: 3 }
    ]);

    console.log('Données insérées avec succès!');
  } catch (error) {
    console.error('Erreur lors de l\'insertion des données :', error);
  }
}

// Appeler la fonction pour insérer les données
insererDonnees();

