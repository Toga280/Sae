import React from "react";
function ListeFiches() {
  const data = ["Element 1", "Element 2", "Element 3"];
  const elements = data.map((item, index) => <div key={index}>{item}</div>);

  return (
    <div>
      <h1>Liste d'éléments :</h1>
      {elements}
    </div>
  );
}

export default ListeFiches;
