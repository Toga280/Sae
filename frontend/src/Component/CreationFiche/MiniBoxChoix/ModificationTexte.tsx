import React from "react";
function ModificationTexte({ setModificationTextePropsFalse }: any) {
  return (
    <div>
      <p>Modificatin du texte : </p>
      <button onClick={setModificationTextePropsFalse}>sauvegarder</button>
    </div>
  );
}

export default ModificationTexte;
