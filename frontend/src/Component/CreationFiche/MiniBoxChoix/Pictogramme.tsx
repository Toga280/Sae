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
    <div id="ListePicto" style={{ border: "1px solid black" }}>
      <img src={img} alt="Description"></img>
      {/*<button onClick={setModificationPictoPropsFalse}> appliqué </button>*/}
    </div>
  );
}

export default Pictogramme;
