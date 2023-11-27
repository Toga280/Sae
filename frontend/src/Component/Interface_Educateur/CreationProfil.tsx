import React from "react";
import "./Interface.css";
function CreationFiche({ redirection }: any) {


  return (
    <div>

      <form action="#" method="post" encType="multipart/form-data">
      <p className="txt_espace_élève">Création de profil</p>
        <p> Nom </p>
        <input type="text" className="TextInput" />
        <p> Prenom </p>
        <input type="text" className="TextInput" />
        <p> Image </p>
        <input type="file" id="fileInput" name="fileInput" accept="image/*" multiple />
        
        <label htmlFor="fileInput">Parcourir</label>

        <div id="fileList"></div>
      </form>
    </div>
  );
}

export default CreationFiche;
