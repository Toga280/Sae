import React, { useEffect } from "react";

function Pictogramme() {
 
 /* 

 //// FONCTION POUR AFFICHER TOUTES LES IMAGES A MODIFIER ////
  useEffect(() => {
    const parent = document.getElementById('ListePicto');
    if (!parent) return;
    // Clear parent
    if (parent) {
      while (parent.firstChild) {
          parent.removeChild(parent.firstChild);
      }
    }
    for (const image of images) {
      const newImage = document.createElement('img');
      newImage.src = image;
      parent.appendChild(newImage);
    }
  },);
*/

const img =  require("./imagesTestStuart/1.webp");

  return (
    <div id="ListePicto" style={{ border: "1px solid black" }}>
      <img src={img} alt="Description de l'image"></img>
    </div>
  );
}

export default Pictogramme;
