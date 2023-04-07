import React, { useState } from "react";

const ProgramFourth = () => {
  const [firstInput, setFirstInput] = useState("");
  const [secondInput, setSecondInput] = useState("");
  const [result, setResult] = useState([]);

  const handleFirst = (e) => {
    setFirstInput(e.target.value);
  };
  const handleSecond = (e) => {
    setSecondInput(e.target.value);
  };

  const checkFirst = Number(firstInput);
  const checkSecond = Number(secondInput);

  if (isNaN(checkFirst) || firstInput.includes(".")) {
    setFirstInput(firstInput.slice(0, -1));
  }

  if (isNaN(checkSecond) || secondInput.includes(".")) {
    setSecondInput(secondInput.slice(0, -1));
  }

  const arr = firstInput.split("");
  const sortedArr = arr.sort();
  const uniqueFirst = Array.from(new Set(sortedArr));

  let firstArr = [];
  // console.log(sortedArr);
  // console.log(unique);

  // -----------------------------

  const arr1 = secondInput.split("");
  const sortedArr1 = arr1.sort();
  const uniqueSecond = Array.from(new Set(sortedArr1));

  let secondArr = [];

  const handleResult = (e) => {
    for (let i = 0; i < uniqueFirst.length; i++) {
      if (uniqueFirst[i] !== "0") {
        firstArr.push(uniqueFirst[i]);
      }
    }

    for (let j = 0; j < arr.length; j++) {
      if (!firstArr[j]) {
        firstArr.unshift(0);
      }
    }
    //----------------------------------

    for (let i = 0; i < uniqueSecond.length; i++) {
      if (uniqueSecond[i] !== "0") {
        secondArr.push(uniqueSecond[i]);
      }
    }
    for (let j = 0; j < arr1.length; j++) {
      if (!secondArr[j]) {
        secondArr.push(0);
      }
    }

    // console.log(firstArr);
    // console.log(secondArr);

    const res = [...firstArr, ...secondArr];

    setResult(res);
    console.log(result);
  };

  return (
    <div className="App">
      <p className="mt-4">
        Find The Unique Number And Put Zeros At Start to output From First Input
        And Add Zeros At Last For Second Input Field..
      </p>
      Input 1 :
      <input
        type="text"
        value={firstInput}
        onChange={handleFirst}
        onBlur={handleResult}
      />
      <br />
      <br />
      Input 2 :
      <input
        type="text"
        value={secondInput}
        onChange={handleSecond}
        onBlur={handleResult}
      />
      <br />
      <br />
      <h5>Output</h5>
      {result.map((item, index) => {
        return <span key={index}>{item}</span>;
      })}
      <hr />
    </div>
  );
};

export default ProgramFourth;
