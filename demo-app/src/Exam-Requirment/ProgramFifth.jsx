import React, { useState } from "react";

const ProgramFifth = () => {
  const [inputData, setInputData] = useState("");
  console.log(inputData);

  let toLower = inputData.toLowerCase();

  let arr = toLower.split("");
  console.log(arr);

  let countA = 0;
  let countE = 0;
  let countI = 0;
  let countO = 0;
  let countU = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "a") {
      countA++;
    }
    if (arr[i] == "e") {
      countE++;
    }
    if (arr[i] == "i") {
      countI++;
    }
    if (arr[i] == "o") {
      countO++;
    }
    if (arr[i] == "u") {
      countU++;
    }
  }

  console.log(countA);
  console.log(countE);
  console.log(countI);
  console.log(countO);
  console.log(countU);

  return (
    <div>
      <h5> give input and find vowels in it.. </h5>
      <input
        type="text"
        className="mt-5 lowerCase"
        onChange={(e) => setInputData(e.target.value)}
        value={inputData}
      />
      <h4 className="mt-3 ">Occarance of vowels </h4>

      {toLower.includes("a") ? (
        <h4> {`occarance of a :: ${countA} `} </h4>
      ) : null}

      {toLower.includes("e") ? (
        <h4> {`occarance of e :: ${countE} `} </h4>
      ) : null}

      {toLower.includes("i") ? (
        <h4> {`occarance of i :: ${countI} `} </h4>
      ) : null}

      {toLower.includes("o") ? (
        <h4> {`occarance of o :: ${countO} `} </h4>
      ) : null}

      {toLower.includes("u") ? (
        <h4> {`occarance of u :: ${countU} `} </h4>
      ) : null}
    </div>
  );
};

export default ProgramFifth;
