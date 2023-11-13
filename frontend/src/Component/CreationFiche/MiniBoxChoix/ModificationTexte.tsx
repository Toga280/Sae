import React from "react";
function ModificationTexte({ setModificationTextePropsFalse }: any) {
  return (
    <div>
      <p>Modificatin du texte : </p>
      <input type="text" className="TextInput" />
      <button onClick={setModificationTextePropsFalse}>sauvegarder</button>
    </div>
  );
}

export default ModificationTexte;
