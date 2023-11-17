import React, { useEffect } from "react";
import "./imagesTestStuart/1.webp";
function Pictogramme() {
  const images = [
    "./imagesTestStuart/1.webp"
  ];


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
      newImage.setAttribute('src', image);
      parent.appendChild(newImage);
    }
  },);

  return (
    <div id="ListePicto" style={{ border: "1px solid black" }}>
      {/*<img src={image} alt="Description de l'image"></img>*/}
    </div>
  );
}

export default Pictogramme;
