import React, { useState } from "react";
import "./App.css";

const SecondProgram = () => {
  const [inputVal, setInputVal] = useState("");
  const [arr, setArr] = useState([]);

  const handleChange = (e) => {
    setInputVal(e.target.value);
  };

  let check = Number(inputVal);

  let even = [];
  let odd = [];

  if (isNaN(check)) {
    alert("Invalid Number");
    setInputVal(inputVal.slice(0, -1));
  }

  if (inputVal.includes(0) || inputVal.includes(".")) {
    setInputVal(inputVal.slice(0, -1));
  } else {
    let getValues = inputVal.split("");

    getValues.filter((val) => {
      arr.push(val);
    });

    getValues.map((val) => {
      if (val % 2 === 0 && val > 0) {
        even.push(val);
      }
    });

    getValues.map((val) => {
      if (val % 2 !== 0 && val > 0) {
        odd.push(val);
      }
    });
  }

  return (
    <div className="App mt-5">
      <input
        type="text"
        onChange={handleChange}
        value={inputVal}
        className="mb-3"
      />
      <p>Even Numbers count :: {even.length}</p>
      <p>Odd Numbers count :: {odd.length}</p>
    </div>
  );
};

export default SecondProgram;
