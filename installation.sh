#!/bin/bash

# Fonction pour afficher une barre de progression
function afficher_progression() {
    local progression=$1
    local bar_length=50
    local num_char=$(($progression * $bar_length / 100))
    local bar=$(printf "[%-${bar_length}s]" "${num_char}")
    printf "\r%s %d%%" "$bar" "$progression"
}

# Mise à jour du système
echo "Mise à jour du système en cours..."
sudo apt-get update -y
sudo apt-get upgrade -y
echo "Mise à jour du système terminée."

# Installation de paquets nécessaires
echo "Installation de paquets nécessaires..."

# Installation des paquets avec capture de la sortie pour afficher la progression
{
    sudo apt-get install -y package1 package2 > /dev/null
} 2>&1 | {
    let progression=0
    while read -r ligne; do
        if [[ $ligne == "Lecture des listes de paquets..." ]]; then
            afficher_progression $progression
        elif [[ $ligne == "Dépaquetage de "* ]]; then
            let progression+=10
            afficher_progression $progression
        fi
    done
    echo ""
}

echo "Installation de paquets terminée."
echo "Script terminé."