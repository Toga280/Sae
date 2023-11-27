import React, { useState } from "react";
function Pictogramme({ setModificationPictoPropsFalse }: any) {
  
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
  return (
    <div id="PictoIndividuel">
      <img className="picto_selec_list" src={require("./imagesTestStuart/1.webp")} alt="Description"></img>
    </div>
  );
}

export default Pictogramme;
