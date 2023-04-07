import React from "react";
import { useState } from "react";

const ThirdProgram = () => {
  const [inputEve, setInputEve] = useState("");
  const [result, setResult] = useState("");

  let check = Number(inputEve);

  if (isNaN(check)) {
    alert("Invalid Number");
    setInputEve(inputEve.slice(0, -1));
  }

  if (
    inputEve.includes(".") ||
    inputEve.includes(";") ||
    inputEve.includes("-")
  ) {
    setInputEve(inputEve.slice(0, -1));
  } else {
    let arr = [...inputEve];

    let unique = [...new Set(arr)];
    let sorted = unique.sort();
    let newArr = [];

    var bluringEvent = () => {
      for (let i = 0; i < sorted.length; i++) {
        if (sorted[i] !== "0") {
          newArr.push(sorted[i]);
        }
      }

      for (let i = 0; i < inputEve.length; i++) {
        if (!newArr[i]) {
          newArr.push(0);
        }
      }
      setResult(newArr);
    };
  }

  return (
    <div className="mt-5">
      <h4>
        Unique sorted Numbers Program ...repeated numbers converted into zero
        and added in last{" "}
      </h4>
      <input
        type="text"
        className="mt-4"
        onChange={(e) => setInputEve(e.target.value)}
        value={inputEve}
        onBlur={bluringEvent}
        placeholder="enter Numbers only "
      />
      <h3 className="mt-4">Output Value</h3>
      <h3>{result}</h3>
    </div>
  );
};

export default ThirdProgram;
