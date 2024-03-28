import React, { useEffect, useState } from 'react';
import './SuiviEleve.css';
import axios from 'axios';
import Chart from 'chart.js/auto';
function SuiviEleve({ redirection, identifiant }: any) {
    const redirectionTwo = () => {
      redirection(2);
    };
    const [eleves, setEleves] = useState<any[]>([]); // État pour stocker la liste des étudiants
    const [nomEleveActuelle, setNomEleveActuelle] = useState(String); // État pour stocker le nom de famille de l'étudiant actuel
    const [prenomEleveActuelle, setPrenomEleveActuelle] = useState(String); // État pour stocker le prénom de l'étudiant actuel
    const [loading, setLoading] = useState(false); // État pour suivre si les images sont en cours de chargement
    const [studentImages, setStudentImages] = useState<string[]>([]); // État pour stocker les images des étudiants récupérées
    const [selectedEleve, setSelectedEleve] = useState<any | null>(null); // État pour l'élève sélectionné pour le suivi
    const [fondEcranUrl, setFondEcranUrl] = useState<string | null>(null);
    const [reactionsEleve, setReactionsEleve] = useState<{ fiches: string[], reactions: string[] }>({ fiches: [], reactions: [] }); // État pour stocker les réactions des élèves

    const handleSuiviClick = (eleve: any) => {
        setNomEleveActuelle(eleve.nom); // Mettre à jour l'état avec le nom de famille de l'élève sélectionné
        setPrenomEleveActuelle(eleve.prenom); // Mettre à jour l'état avec le prénom de l'élève sélectionné
        setSelectedEleve(eleve); // Mettre à jour l'état avec l'élève sélectionné
    };

  
  const [commentaire, setCommentaire] = useState('');
  // Utilisation d'un tableau d'objets pour inclure le commentaire et le timestamp
  const [commentairesList, setCommentairesList] = useState<[string, string][]>([]);

  const handleAjoutCommentaire = async () => {
    const now = new Date();
    const timestamp = now.toLocaleDateString('fr-FR') + ' ' + now.toLocaleTimeString('fr-FR'); 
    const newCommentaire = [timestamp, commentaire];
  
    try {
      await axios.post('http://localhost:5000/POST/comCIP', {
        nom: nomEleveActuelle,
        prenom: prenomEleveActuelle,
        comCIP: newCommentaire
      });
  
      // Après avoir ajouté le commentaire avec succès, récupérez la liste des commentaires mise à jour
      const response = await axios.get('http://localhost:5000/GET/comentaireCIP', {
        params: {
          nomeleve: nomEleveActuelle,
          prenomeleve: prenomEleveActuelle
        }
      });
  
      setCommentairesList(response.data); // Mettre à jour la liste des commentaires avec la réponse mise à jour
    } catch (error) {
      console.error("Erreur lors de l'ajout du commentaire :", error);
    }
  
    setCommentaire('');
  };


    // Fonction pour récupérer les images des étudiants
    const getStudentImages = async () => {
        try {
            setLoading(true);
            const responses = await Promise.all(
                eleves.map(async (eleve: any) => {
                    const imageName = `${eleve.nom}${eleve.prenom}.webp`;
                    try {
                        const imagePath = `http://localhost:5000/GET/piceleve?name=${encodeURIComponent(
                            imageName
                        )}`;
                        const response = await axios.get(imagePath, {
                            responseType: "arraybuffer",
                        });

                        const imageData = `data:image/webp;base64,${btoa(
                            new Uint8Array(response.data).reduce(
                                (data, byte) => data + String.fromCharCode(byte),
                                ""
                            )
                        )}`;

                        return imageData;
                    } catch (error) {
                        console.error(
                            `Erreur lors de la récupération de l'image pour ${eleve.prenom} ${eleve.nom} :`,
                            error
                        );
                        return ""; // Vous pouvez fournir une image par défaut ou gérer l'erreur en conséquence
                    }
                })
            );

            setStudentImages(responses.filter((image) => !!image)); // Filtrer les réponses vides
        } catch (error) {
            console.error(
                "Erreur lors de la récupération des images des étudiants :",
                error
            );
            setStudentImages([]); // Définir un tableau vide en cas d'erreur
        } finally {
            setLoading(false);
        }
    };

    // Récupérer la liste des étudiants lors du montage du composant
    useEffect(() => {
        const getEleve = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/GET/allEleve`);
                setEleves(response.data);
            } catch (error) {
                console.error("Erreur lors de la récupération des étudiants :", error);
            }
        };

        getEleve();
    }, []);

    useEffect(() => {
      const getReactionsEleve = async () => {
        try {
          const response = await axios.get('http://localhost:5000/GET/reactionEleve', {
            params: {
              nomeleve: nomEleveActuelle,
              prenomeleve: prenomEleveActuelle
            }
          });
          setReactionsEleve(response.data);
        } catch (error) {
          console.error("Erreur lors de la récupération des réactions des élèves :", error);
        }
      };

      const getCommentairesEleve = async () => {
        try {
          const response = await axios.get('http://localhost:5000/GET/comentaireCIP', {
            params: {
              nomeleve: nomEleveActuelle,
              prenomeleve: prenomEleveActuelle
            }
          });

          setCommentairesList(response.data);
        } catch (error:any) {
          if (error.response && error.response.status !== 40) {
          console.error("Erreur lors de l'ajout du commentaire :", error);
    }
        }
      }

      if (nomEleveActuelle && prenomEleveActuelle) {
        getReactionsEleve();
        getCommentairesEleve();
      }
    }, [nomEleveActuelle, prenomEleveActuelle]);

    // Récupérer les images des étudiants lorsque la liste des étudiants change
    useEffect(() => {
      const loadStudentImages = async () => {
        await getStudentImages(); // Attendre que les images soient récupérées
        // Maintenant que vous avez les images, vous pouvez en faire quelque chose si nécessaire
      };

      if (eleves.length > 0) {
        loadStudentImages();
      }
    }, [eleves]);

    const data = [12, 5, 6, 7, 9, 10, 3, 7];
    const maxValue = Math.max(...data);

    // Dimensions du graphique
    const width = 500;
    const height = 150;
    const barWidth = width / data.length;

    useEffect(() => {
      const canvas = document.getElementById('myChart') as HTMLCanvasElement; // Ajouter l'assertion de type
      if (canvas) {
          const ctx = canvas.getContext('2d');
          if (ctx) {
              new Chart(ctx, {
                  type: 'bar',
                  data: {
                      labels: reactionsEleve.reactions.map((reaction, index) => index.toString()),
                      datasets: [{
                          label: 'Réactions',
                          data: reactionsEleve.reactions.map(reaction => {
                              if (reaction === "pasbien") {
                                  return 50; // Hauteur pour "pasbien"
                              } else if (reaction === "moyen") {
                                  return 100; // Hauteur pour "moyen"
                              } else if (reaction === "tresbien") {
                                  return 150; // Hauteur pour "bien"
                              }
                          }),
                          backgroundColor: 'teal',
                          borderWidth: 1
                      }]
                  },
                  options: {
                      indexAxis: 'x',
                      scales: {
                          y: {
                              beginAtZero: true,
                              max: 150 // Valeur maximale de l'axe y
                          }
                      }
                  }
              });
          }
      }
  }, [reactionsEleve.reactions]);
  

  
    useEffect(() => {
      // Appeler la requête pour récupérer l'image du fond d'écran
      axios
        .get('http://localhost:5000/GET/fondecran', {
          params: {
            name: identifiant,
          },
          responseType: 'arraybuffer',
        })
        .then((response) => {
          const base64 = btoa(
            new Uint8Array(response.data).reduce(
              (data, byte) => data + String.fromCharCode(byte),
              '',
            ),
          )
          const url = `data:${response.headers[
            'content-type'
          ].toLowerCase()};base64,${base64}`
          setFondEcranUrl(url)
        })
        .catch((error) => console.error(error))
    }, [])

    return (
        <>
            {fondEcranUrl && (
                <style>
                    {`
                        body {
                            background-image: url(${fondEcranUrl});
                            background-size: cover;
                            background-repeat: no-repeat;
                        }
                    `}
                </style>
            )}
            <div>
                {selectedEleve ? (
                              <div>
                          <div className='global_suivi_eleve_perso'>
                            <div className='text_area_container'>
                  <h2 className='nom_eleve_suivi'>Suivi pour {selectedEleve.prenom} {selectedEleve.nom}</h2>
                  <textarea 
                    className='text_area_eleve_suivi' 
                    value={commentaire}
                    onChange={(e) => setCommentaire(e.target.value)}
                  />
                                <button 
                    className='ajout_suivi_commentaire'
                    onClick={handleAjoutCommentaire}
                  >
                    Ajouter
                  </button>
                  {commentairesList.map((item, index) => (
                    <div key={index} className='commentaire_container'>
                      <label className='commentaire_label'>{item[1]}</label>
                      <span className='commentaire_timestamp'>{item[0]}</span>
                    </div>
                  ))}
                </div>

                <div className='global_graph'>
                <canvas id='myChart' width={width} height={height}></canvas>

                </div>

                      </div>
                    <div>
                      <button className="retour_suivi_commentaire" onClick={() => {
                        setSelectedEleve(null);
                        setCommentairesList([]);
                      }}>Retour</button>
                    </div>
          </div>
                ) : (
                    <div>
                        <div className="global_suivi_eleves">
                            <h1 className='suivi_eleves'>Suivi des élèves</h1>

                            <div className="general_logine">
                                {eleves.map((eleve: any, index: number) => (
                                    <div className="login-containers" key={index}>
                                        {loading ? (
                                            <div className="loading-spinner">Chargement...</div>
                                        ) : studentImages[index] ? (
                                            <img
                                                className="user-photos"
                                                src={studentImages[index]}
                                                alt={`Portrait de ${eleve.prenom} ${eleve.nom}`}
                                            />
                                        ) : (
                                            <div className="error-messages">Image non présente</div>
                                        )}
                                        <div className="user-names">{`${eleve.prenom} ${eleve.nom}`}</div>
                                        <button className="login-buttons" onClick={() => handleSuiviClick(eleve)}>Accès au suivi</button>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <button className="bouton_retour_suivi_eleves" onClick={redirectionTwo}>
                            Retour
                        </button>
                    </div>
                )}
            </div>
        </>
    );
}

export default SuiviEleve;
