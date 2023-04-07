import React, { useState } from "react";

const ProgramEighth = () => {
  const [inputNum, setInputNum] = useState("");
  const [res, setRes] = useState([]);

  let arr = inputNum.split(",");

  let NumArr = [];

  for (let i = 0; i < arr.length; i++) {
    NumArr.push(Number(arr[i]));
  }

  console.log(NumArr);

  const bluring = () => {
    for (let i = 1; i <= 100; i++) {
      if (NumArr.indexOf(i) < 0) {
        setRes((pre) => [...pre, i]);
      }
    }
  };

  return (
    <div>
      <h1> find missing number</h1>
      <h3 className="mt-5"> give input like this := 1,5,25,65,70 </h3>
      <p>NOTE - start from 1 upto 100 and give value in ascending order</p>
      <input
        type="text"
        className="mt-2"
        onChange={(e) => setInputNum(e.target.value)}
        value={inputNum}
        onBlur={bluring}
      />
      {res.map((ele, id) => {
        return <p key={id}>{ele}</p>;
      })}
    </div>
  );
};

export default ProgramEighth;
