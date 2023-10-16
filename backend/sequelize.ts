const {Sequelize, DataTypes} = require('sequelize')

export const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'database.db',
})

export const Personnel = sequelize.define('Personnel', {
  id_personnel: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nom: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  prénom: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  login: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  mdp: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  rôle: {
    type: DataTypes.TEXT
  }
})

export const Apprenti = sequelize.define('Apprenti',{
  id_apprenti: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nom: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  prénom: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  login: {
    type: DataTypes.TEXT
  },
  mdp: {
    type: DataTypes.TEXT
  },
  photo: {
    type: DataTypes.TEXT
  }
});

export const Formation = sequelize.define('Formation',{
  id_formation: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  intitulé: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  niveau_qualif: {
    type: DataTypes.INTEGER
  },
  groupe: {
    type: DataTypes.TEXT
  }
}, {
  sequelize,
  modelName: 'formation'
});

export const Session = sequelize.define('Session',{
  id_session: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  thème: {
    type: DataTypes.TEXT
  },
  cours: {
    type: DataTypes.TEXT
  },
  durée: {
    type: DataTypes.INTEGER
  }
});

export const EducAdmin = sequelize.define('EducAdmin',{});

export const ElementDefaut = sequelize.define('ElementDefaut',{
  id_élément: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  type: {
    type: DataTypes.TEXT
  },
  picto: {
    type: DataTypes.TEXT
  },
  text: {
    type: DataTypes.TEXT
  },
  audio: {
    type: DataTypes.TEXT
  }
}, {
  sequelize,
  modelName: 'element_defaut'
});

export const FicheIntervention = sequelize.define('FicheIntervention',{
  id_fiche: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  numéro: {
    type: DataTypes.INTEGER
  },
  nom_du_demandeur: {
    type: DataTypes.TEXT
  },
  date_demande: {
    type: DataTypes.NUMERIC
  },
  date_intervention: {
    type: DataTypes.NUMERIC
  },
  durée_intervention: {
    type: DataTypes.TEXT
  },
  localisation: {
    type: DataTypes.TEXT
  },
  description_demande: {
    type: DataTypes.TEXT
  },
  degré_urgence: {
    type: DataTypes.TEXT
  },
  type_intervention: {
    type: DataTypes.TEXT
  },
  nature_intervention: {
    type: DataTypes.TEXT
  },
  couleur_intervention: {
    type: DataTypes.TEXT
  },
  etat_fiche: {
    type: DataTypes.TEXT
  },
  date_création: {
    type: DataTypes.NUMERIC
  }
});

export const LaisserTrace = sequelize.define('LaisserTrace',{
  horodatage: {
    type: DataTypes.NUMERIC,
    primaryKey: true
  },
  intitulé: {
    type: DataTypes.TEXT
  },
  éval_texte: {
    type: DataTypes.TEXT
  },
  commentaire_texte: {
    type: DataTypes.TEXT
  },
  éval_audio: {
    type: DataTypes.TEXT
  },
  commentaire_audio: {
    type: DataTypes.TEXT
  }
});

export const Assister = sequelize.define('Assiter',{});

export const Composer = sequelize.define('Composer',{
  picto: {
    type: DataTypes.TEXT
  },
  text: {
    type: DataTypes.TEXT
  },
  taille_texte: {
    type: DataTypes.TEXT
  },
  police: {
    type: DataTypes.TEXT
  },
  audio: {
    type: DataTypes.TEXT
  },
  couleur: {
    type: DataTypes.TEXT
  },
  couleur_fond: {
    type: DataTypes.TEXT
  },
  niveau: {
    type: DataTypes.INTEGER
  }
}, {
  sequelize,
  modelName: 'composer',
  timestamps: false,
  primaryKey: false
});

// Associations entre les tables
Personnel.hasOne(EducAdmin, { foreignKey: 'id_personnel' });
EducAdmin.belongsTo(Personnel, { foreignKey: 'id_personnel' });

ElementDefaut.belongsTo(EducAdmin, { foreignKey: 'id_personnel' });
EducAdmin.hasMany(ElementDefaut, { foreignKey: 'id_personnel' });

FicheIntervention.belongsTo(Personnel, { foreignKey: 'id_personnel' });
FicheIntervention.belongsTo(Apprenti, { foreignKey: 'id_apprenti' });
Personnel.hasMany(FicheIntervention, { foreignKey: 'id_personnel' });
Apprenti.hasMany(FicheIntervention, { foreignKey: 'id_apprenti' });

LaisserTrace.belongsTo(Personnel, { foreignKey: 'id_personnel' });
LaisserTrace.belongsTo(FicheIntervention, { foreignKey: 'id_fiche' });
Personnel.hasMany(LaisserTrace, { foreignKey: 'id_personnel' });
FicheIntervention.hasMany(LaisserTrace, { foreignKey: 'id_fiche' });

Assister.belongsTo(Apprenti, { foreignKey: 'id_apprenti' });
Assister.belongsTo(Session, { foreignKey: 'id_session' });
Apprenti.belongsToMany(Session, { through: Assister, foreignKey: 'id_apprenti' });
Session.belongsToMany(Apprenti, { through: Assister, foreignKey: 'id_session' });

Composer.belongsTo(ElementDefaut, { foreignKey: 'id_élément' });
Composer.belongsTo(FicheIntervention, { foreignKey: 'id_fiche' });

module.exports = {
  Personnel,
  Apprenti,
  Formation,
  Session,
  EducAdmin,
  ElementDefaut,
  FicheIntervention,
  LaisserTrace,
  Assister,
  Composer,
  sequelize
};
