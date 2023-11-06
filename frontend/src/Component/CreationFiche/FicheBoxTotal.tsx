import React, { useEffect, useState } from "react";
import FicheBox1 from "./FicheBox1";
import FicheBox2 from "./FicheBox2";
import FicheBox3 from "./FicheBox3";
import FicheBox4 from "./FicheBox4";
import FicheBox5 from "./FicheBox5";
import FicheBox6 from "./FicheBox6";
import FicheBox7 from "./FicheBox7";
import FicheBox8 from "./FicheBox8";
function FicheBoxTotal({ onSelectBox }: any) {
  const [numBox, setNumBox] = useState(0);
  const handleClick1 = () => {
    setNumBox(1);
  };
  const handleClick2 = () => {
    setNumBox(2);
  };
  const handleClick3 = () => {
    setNumBox(3);
  };
  const handleClick4 = () => {
    setNumBox(4);
  };
  const handleClick5 = () => {
    setNumBox(5);
  };
  const handleClick6 = () => {
    setNumBox(6);
  };
  const handleClick7 = () => {
    setNumBox(7);
  };
  const handleClick8 = () => {
    setNumBox(8);
  };

  useEffect(() => {
    if (numBox !== 0) {
      onSelectBox(numBox);
      console.log(numBox);
    }
  }, [numBox, onSelectBox]);

  return (
    <div>
      <div onClick={handleClick1}>
        <FicheBox1 />
      </div>
      <div onClick={handleClick2}>
        <FicheBox2 />
      </div>
      <div onClick={handleClick3}>
        <FicheBox3 />
      </div>
      <div onClick={handleClick4}>
        <FicheBox4 />
      </div>
      <div onClick={handleClick5}>
        <FicheBox5 />
      </div>
      <div onClick={handleClick6}>
        <FicheBox6 />
      </div>
      <div onClick={handleClick7}>
        <FicheBox7 />
      </div>
      <div onClick={handleClick8}>
        <FicheBox8 />
      </div>
    </div>
  );
}

export default FicheBoxTotal;
