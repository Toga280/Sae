import axios from "axios";
import React, { useEffect, useState } from "react";
import "./ListeFiches.css";
import fonctionsMiniBoxInfoJson from "../CreationFiche/MiniBoxInfoFunction";
import AffecterListe from "./AffecterListe";

function ListeFiches({ redirection, refreshFiche }: any) {
  const [FichesNames, setFichesNames] = useState([]);
  const [affichageAffecterListe, setAffichageAffecterListe] = useState(Boolean);
  const [nomFicheSelectionner, setNomFicheSelectionner] = useState(String);
  const setAffichageAffecterListeFalse = () => {
    setAffichageAffecterListe(false);
  };
  const deleteFiche = (nomFiche: string) => {
    const confirmation = window.confirm(
      `Êtes-vous sûr de vouloir supprimer cette fiche ${nomFiche} ?`
    );

    if (confirmation) {
      axios
        .get(
          `http://localhost:5000/DELETE/ficheName?name=${encodeURIComponent(
            nomFiche
          )}`
        )
        .then((response) => {
          if (response.data) {
            console.log("fiche supprimée avec succès");
            allFicheNames();
          }
        })
        .catch((error) => {
          console.error("Erreur lors de la requête vers le serveur :", error);
        });
    }
  };

  const affecterFiche = (item: string) => {
    console.log(item);
    setAffichageAffecterListe(true);
    setNomFicheSelectionner(item);
  };

  const elements = FichesNames.map((item, index) => (
    <div className="global_liste_nom_fiches_crée">
      <div
        className="liste_nom_fiches_crée"
        key={index}
        onClick={() => SetUpModificationFiche(item)}
      >
        {item}
      </div>
      <img
        src={require("./delete-icon.png")}
        alt="delete-icon"
        className="delete-icon"
        style={{ width: "30px", height: "40px", cursor: "pointer" }}
        onClick={() => deleteFiche(item)}
      />
      <button
        className="affecter_fiche_crée"
        onClick={() => affecterFiche(item)}
      >
        Affecter
      </button>
      <button
        className="dupliquer_fiche_crée"
        onClick={() => dupliquerFiche(item)}
      >
        Dupliquer
      </button>
      <button
        className="modif_nom_fiche_crée"
        onClick={() => {
          const newNom = prompt("Entrez le nouveau nom de la fiche :");
          if (newNom !== null) {
            modifnomfiche(item, newNom);
          }
        }}
      >
        Modifier le nom
      </button>
    </div>
  ));

  const allFicheNames = () => {
    axios
      .get("http://localhost:5000/GET/allFicheNames")
      .then((response) => {
        setFichesNames(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors de la requête vers le serveur :", error);
      });
  };

  const FicheNames = async (nameValue: string) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/GET/nameFiche?name=${encodeURIComponent(
          nameValue
        )}`
      );
      fonctionsMiniBoxInfoJson.setNewJson(response.data);
    } catch (error) {
      console.error("Erreur lors de la requête vers le serveur :", error);
    }
  };

  const SetUpModificationFiche = async (item: string) => {
    await FicheNames(item);
    refreshFiche();
    redirection(3);
  };

  useEffect(() => {
    allFicheNames();
  }, []);

  const setRedirectionTwo = () => {
    redirection(2);
  };

  const modifnomfiche = async (oldnom: string, newnom: string )  => {
    try {
      await axios.post(`http://localhost:5000/POST/ficheUpdateName`, {
        name: oldnom,
        newName: newnom
      });
    } catch (error) {
      console.error(error);
    }
  };

  const dupliquerFiche = async (nomf: string) => {
    try {
      await axios.post("http://localhost:5000/POST/ficheDuplicate", {
        name: nomf,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {affichageAffecterListe === true ? (
        <AffecterListe
          setAffichageAffecterListeFalse={setAffichageAffecterListeFalse}
          nomFicheSelectionner={nomFicheSelectionner}
        />
      ) : (
        <div className="global_all_fiche">
          <h1 className="titre_h1_fiche_crée">Liste de vos fiches :</h1>
          {elements}
        </div>
      )}
      <button
        className="bouton_retour_liste_fiche_crée_edu"
        onClick={setRedirectionTwo}
      >
        Retour
      </button>
    </div>
  );
}

export default ListeFiches;
