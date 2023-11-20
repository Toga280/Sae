import React, { useState } from "react";
import PageLoginEducateur from "./pageLoginEducateur";
import "./pageConnection.css";
function PageConnection() {
  const [selectBoutton, setSelectBoutton] = useState(false);

  const BoutonCliquezConnection = (etat : boolean) => {
    setSelectBoutton(etat);
  };

  return (
    <div className="login_prof">
      {!selectBoutton && (
        <button className="button_connection_edu" onClick={() => BoutonCliquezConnection(true)}>
          Connexion éducateur
        </button>
      )}
      {selectBoutton ? <PageLoginEducateur /> : null}
      {selectBoutton && (
        <button className="bouton_retour_connection_edu" onClick={() => BoutonCliquezConnection(false)}>Retour</button>
      )}

    </div>
    
  );
}

export default PageConnection;
