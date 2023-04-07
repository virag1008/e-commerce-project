import React, { useState } from "react";

const ProgramSixth = () => {
  const [val, setVal] = useState("");
  const [even, setEven] = useState();
  const [odd, setOdd] = useState();

  const handelChane = (e) => {
    const pattern = /^[\d,]*$/;

    if (pattern.test(e.target.value) === true) {
      setVal(e.target.value);
    }
  };

  let arr = val.split(",").map(Number);

  let resEven = {};
  let resOdd = {};

  const handleResult = (e) => {
    if (e.keyCode === 13) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
          for (let j = 0; j < arr[i]; j++) {
            if (j % 2 === 0) {
              if (!resEven[arr[i]]) resEven[arr[i]] = [];

              resEven[arr[i]].push(j);
            }
          }
        } else if (arr[i] % 2 !== 0) {
          for (let k = 0; k < arr[i]; k++) {
            if (k % 2 !== 0) {
              if (!resOdd[arr[i]]) {
                resOdd[arr[i]] = [];
              }
              resOdd[arr[i]].push(k);
            }
          }
        }
      }

      // console.log(resEven);
      // console.log(resOdd);

      const evenResult = Object.entries(resEven);
      setEven(evenResult);
      const oddResult = Object.entries(resOdd);
      setOdd(oddResult);
    }
  };
  return (
    <div className="App">
      <h3>Odd And Even Count</h3>

      <input value={val} onChange={handelChane} onKeyUp={handleResult} />

      <br />
      <br />

      {even &&
        even.map((item, index) => {
          return (
            <h3 key={index}>
              {item[0]}:
              {Array.from(new Set(item[1]))
                .sort((a, b) => b - a)
                .slice(0, -1)
                .toString()
                .split("")}
            </h3>
          );
        })}

      <hr />

      {odd &&
        odd.map((item, index) => {
          return (
            <h3 key={index}>
              {item[0]}:
              {Array.from(new Set(item[1]))
                .sort((a, b) => b - a)
                .toString()
                .split("")}
            </h3>
          );
        })}
    </div>
  );
};

export default ProgramSixth;
