import React, { useState } from "react";

const ProgramThird = () => {
  const [inputData, setInputData] = useState("");
  const [result, setResult] = useState([]);

  let arr = inputData.toLowerCase().split(",");

  const bluringEvent = () => {
    for (let i = 0; i < arr.length; i++) {
      let count = 0;
      for (let j = 0; j < arr[i].length; j++) {
        if (
          arr[i][j] == "a" ||
          arr[i][j] == "e" ||
          arr[i][j] == "i" ||
          arr[i][j] == "o" ||
          arr[i][j] == "u"
        ) {
          count++;
        }
      }
      setResult((pre) => [...pre, `${arr[i]} = ${count}`]);
    }
  };

  return (
    <div>
      <h3 className="mt-5"> Give input like this := virag,shubham,ankur </h3>
      <input
        type="text"
        onChange={(e) => setInputData(e.target.value)}
        value={inputData}
        onBlur={bluringEvent}
        className="mt-3 lowerCase"
      />
      {result.map((res, id) => {
        return <h3 key={id}>{res}</h3>;
      })}
      <hr />
    </div>
  );
};

export default ProgramThird;
