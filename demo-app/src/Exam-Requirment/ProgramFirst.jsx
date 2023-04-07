import React, { useState } from "react";

const ProgramFirst = () => {
  const [input, setInput] = useState("");
  const check = Number(input);
  const [values, setValues] = useState();

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  if (isNaN(check)) {
    setInput(input.slice(0, -1));
  }
  if (input.includes(".")) {
    setInput(input.slice(0, -1));
  }

  const handleResult = (e) => {
    const SplitedArr = input.split("").map(Number);
    let arr = SplitedArr.sort((a, b) => b - a).filter((item, index, arr) => {
      return arr.indexOf(item) === index;
    });

    console.log(arr);

    const newArr = arr.slice(0, 3);
    console.log(newArr);

    const res = {};

    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        for (let k = 0; k < arr.length; k++) {
          if (newArr[i] === arr[j] + arr[k] && j <= k) {
            if (!res[newArr[i]]) {
              res[newArr[i]] = [];
            }
            res[newArr[i]].push(`${arr[j]}+${arr[k]},`);
          }
        }
      }
    }

    const toArr = Object.entries(res);
    setValues(toArr);
  };

  return (
    <div className="App">
      <input
        className="mt-5"
        type="text"
        value={input}
        onChange={handleChange}
        onBlur={handleResult}
      />

      {values &&
        values.map((item, index) => {
          return (
            <h1 key={index}>
              <span>{item[0]}</span> : <span>{item[1]}</span>
            </h1>
          );
        })}
    </div>
  );
};

export default ProgramFirst;
