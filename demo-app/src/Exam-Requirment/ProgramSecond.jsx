import React, { useState } from "react";

const ProgramSecond = () => {
  const [inputData, setInputData] = useState("");

  // validation part start
  let check = Number(inputData);

  if (isNaN(check)) {
    alert("please enter a valid number");
    setInputData(inputData.slice(0, -1));
  }

  if (inputData.includes(".")) {
    setInputData(inputData.slice(0, -1));
  }
  // validation part end

  let arr = inputData.split("").sort((a, b) => b - a);

  let unique = [...new Set(arr)];

  var FirstHighest = unique[0];
  let ThirdHighest = unique[2];

  let countHighest = 0;
  let countThirdHighest = 0;

  for (let i = 0; i < arr.length; i++) {
    if (FirstHighest == arr[i]) {
      countHighest++;
    }
    if (ThirdHighest == arr[i]) {
      countThirdHighest++;
    }
  }

  return (
    <div>
      <p className="mt-5">
        from given number find 1st and 3rd highest number and find occrance of
        it
      </p>
      <input
        type="text"
        onChange={(e) => setInputData(e.target.value)}
        value={inputData}
      />
      {
        <>
          <h3 className="mt-5"> Highest Number = {FirstHighest} </h3>
          <h3> 3rd Highest Number = {ThirdHighest} </h3>
        </>
      }
      {
        <>
          <h2 className="mt-3">
            {" "}
            occarance of {FirstHighest} in given input is = {countHighest}{" "}
          </h2>
          <h2>
            occarance of {ThirdHighest} in given input is = {countThirdHighest}
          </h2>
        </>
      }
    </div>
  );
};

export default ProgramSecond;
