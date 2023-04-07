// import React, { useState } from "react";

// const FourthProgram = () => {
//   const [data, setData] = useState("");
//   const [some, setSome] = useState([]);

//   let obj = {};

//   const blurEvent = () => {
//     let arr = data.split(",");

//     for (let i = 0; i < arr.length; i++) {
//       let newArr = arr[i].split("=");
//       setSome((e) => [...e, newArr]);
//     }
//   };

//   some.map((ele) => {
//     if (obj.hasOwnProperty(ele[0])) {
//       return obj[ele[0]].push(Number(ele[1]));
//     } else {
//       return (obj[ele[0]] = [Number(ele[1])]);
//     }
//   });

//   for (const key in obj) {
//     let summation = obj[key].reduce((acc, curr) => {
//       return acc + curr;
//     });
//     let avg = Math.ceil(summation / obj[key].length);
//     obj[key] = avg;
//   }

//   let objKeys = Object.keys(obj);
//   let sortedKeys = objKeys.sort();

//   const finalObj = {};

//   sortedKeys.map((key) => {
//     finalObj[key] = obj[key];
//   });
//   console.log(finalObj);

//   let uiResult = Object.entries(finalObj);
//   console.log(uiResult);

//   return (
//     <div>
//       <p className="mt-4">Enter input in given format: A=30,B=40,A=60 </p>

//       <input
//         type="text"
//         onChange={(e) => setData(e.target.value.toUpperCase())}
//         onBlur={blurEvent}
//         value={data}
//       />
//       <p className="mt-5"> Given Input := {data} </p>
//       <h3> Output </h3>
//       {uiResult.map((item, id) => {
//         return (
//           <div key={id}>
//             <span>
//               {item[0]} = {item[1]}
//             </span>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default FourthProgram;
////////////////////////////////////////////////////////////////////////////////////////

import "./App.css";
import { useState } from "react";

export default function FourthProgram() {
  const [input, setInput] = useState("");
  const [showResult, setShowResult] = useState();

  function handleResult() {
    if (input.length > 0) {
      const str = input;
      const splitedStr = str.split(",");
      const obj = {};

      function createKeyValuePair(key, value) {
        obj[key] = obj[key] || [];
        obj[key].push(value);
      }
      for (let i = 0; i < splitedStr.length; i++) {
        let splitedValue = splitedStr[i].split("=");
        createKeyValuePair(splitedValue[0], splitedValue[1]);
      }
      // console.log(obj);

      // Find the sum of all values and devide by it's length to find the percentage..

      let res = {};

      for (let val in obj) {
        obj[val].reduce((acc, curr) => {
          let sum = acc + Number(curr);
          res[val] = sum / obj[val].length;
          return sum;
        }, 0);
      }

      // console.log(res);

      //-------------------------------------------------------------

      // Sort the object in ascending order..

      const sortedKeys = Object.keys(res).sort();

      const sortedObj = {};

      for (let key of sortedKeys) {
        sortedObj[key] = res[key];
      }
      console.log(sortedObj);

      // Object converted Into Array

      const toAry = Object.entries(sortedObj);
      setShowResult(toAry);
    }
  }

  return (
    <>
      <p className="mt-5">Enter input in given format: A=30,B=40,A=60 </p>
      <div className="App">
        <input
          className="mt-2 mb-3"
          type="text"
          onBlur={handleResult}
          value={input}
          onChange={(e) => {
            setInput(e.target.value.toUpperCase());
          }}
        />

        {input.length > 0 ? (
          <h5 className="p-3">Given Input : {input}</h5>
        ) : null}
      </div>

      {showResult &&
        showResult.map((element, index) => {
          return (
            <h2 key={index}>
              {element[0]} : {element[1]}
            </h2>
          );
        })}
    </>
  );
}
