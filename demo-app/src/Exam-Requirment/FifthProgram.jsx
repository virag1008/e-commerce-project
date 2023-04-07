// import { useState } from "react";
// function FifthProgram() {
//   const [num, setNum] = useState("");

//   ///////////////////////////////////////////////////////

//   let check = Number(num);

//   if (isNaN(check)) {
//     alert("Invalid Number");
//     setNum(num.slice(0, -1));
//   }

//   if (num.includes(".")) {
//     setNum(num.slice(0, -1));
//   } else {
//     var B = num.split("");
//     B.sort();
//   }

//   console.log(B);

//   ///////////////////////////////////////////////////////

//   function handleBlur() {
//     function unique_combination(l, sum, K, local, A) {
//       // If a unique combination is found
//       if (sum == K) {
//         document.write("{");
//         for (let i = 0; i < local.length; i++) {
//           if (i != 0) document.write(" ");
//           document.write(local[i]);
//           if (i != local.length - 1) document.write(", ");
//         }
//         document.write("}" + "<br>");
//         return;
//       }

//       // For all other combinations
//       for (let i = l; i < A.length; i++) {
//         // Check if the sum exceeds K
//         if (sum + A[i] > K) continue;

//         // Check if it is repeated or not
//         if (i > l && A[i] == A[i - 1]) continue;

//         // Take the element into the combination
//         local.push(A[i]);

//         // Recursive call
//         unique_combination(i + 1, sum + A[i], K, local, A);

//         // Remove element from the combination
//         local.pop();
//       }
//     }

//     // Function to find all combination
//     // of the given elements
//     function Combination(A, K) {
//       // Sort the given elements
//       document.write("Unique combinations for - " + K + "<br>");
//       //A.sort((a, b) => a - b);

//       // To store combination
//       let local = [];

//       unique_combination(0, 0, K, local, A);
//     }

//     // Driver code

//     // Function call
//     for (let i = 0; i < B.length; i++) {
//       // console.log(B[i]);
//       Combination(B, B[i]);
//       //console.log(B);
//     }
//   }
//   return (
//     <>
//       <h4> Input Numbers Combinations </h4>
//       <input
//         type="text"
//         onChange={(e) => setNum(e.target.value)}
//         value={num}
//         onBlur={handleBlur}
//       />
//     </>
//   );
// }
// export default FifthProgram;

//
//
//
//
//
//
//
//
//
//
//
//
///
//

// import React, { useState } from "react";

// const FifthProgram = () => {
//   const [num, setNum] = useState("");

//   /////////////////// validation part start ///////////////////////

//   let check = Number(num);

//   if (isNaN(check)) {
//     alert("Invalid Number");
//     setNum(num.slice(0, -1));
//   }

//   if (num.includes(".")) {
//     setNum(num.slice(0, -1));
//   } else {
//     var arr = num.split("");
//   }

//   /////////////////// validation part end ///////////////////////

//   var sortedArr = arr.sort();
//   var uniqueVal = [...new Set(sortedArr)];
//   console.log(arr);

//   let obj = {};

//   for (let i = 0; i < uniqueVal.length; i++) {
//     obj[uniqueVal[i]] = [];
//   }
//   console.log(obj);

//   return (
//     <div>
//       <div className="mt-5">
//         <input
//           type="text"
//           onChange={(e) => setNum(e.target.value)}
//           value={num}
//         />
//         <h3 className="mt-3">Given Input :: {num} </h3>

//         {uniqueVal.map((item, id) => {
//           return <p key={id}>{item} : </p>;
//         })}

//       </div>
//     </div>
//   );
// };

// export default FifthProgram;
///////////////////////////////////////////

// // ***********************************************************

// // referance code 1

// function subsetSum(numbers, target, partial) {
//     var s, n, remaining;

//     partial = partial || [];

//     // sum partial
//     s = partial.reduce(function (a, b) {
//       return a + b;
//     }, 0);

//     // check if the partial sum is equals to target
//     if (s === target) {
//       console.log("%s=%s", partial.join("+"), target);
//     }

//     for (var i = 0; i < numbers.length; i++) {
//       n = numbers[i];
//       remaining = numbers.slice(i + 1);
//       subsetSum(remaining, target, partial.concat([n]));
//     }
//   }
//   subsetSum([3, 9, 8, 4, 5, 7, 10], 15);

// // ***********************************************************

// // referance code 2 (hardCoded)

// 0 : 0
// 1 : 1+0
// 2 : 2+0 , 1+1
// 3 : 3+0 , 2+1 , 1+1+1
// 4 : 4+0 , 3+1 , 2+1+1 , 1+1+1+1
// 5 : 5+0 , 4+1 , 3+2 , 3+1+1 , 2+2+1 , 2+1+1+1 , 1+1+1+1+1

// // ***********************************************************

// // referance code 3  (perfect upto 2 digit sum )

import React, { useState } from "react";

const FifthProgram = () => {
  const [input, setInput] = useState("");
  const [values, setValues] = useState([]);

  const getResult = (e) => {
    e.preventDefault();
    if (input === "0" || /^\d*[1-9]\d*\d*$/g.test(input) === false) {
      alert("plese Enter Valid Numbers ");
    } else {
      const splitArr = input.split("").map(Number);

      const arr = splitArr
        .sort((a, b) => {
          return b - a;
        })
        .filter((item, index, arr) => {
          return arr.indexOf(item) === index;
        });

      let result = {};

      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
          for (let k = 0; k < arr.length; k++) {
            if (arr[i] === arr[j] + arr[k] && j <= k) {
              if (!result[arr[i]]) {
                result[arr[i]] = [];
              }
              result[arr[i]].push(` ${arr[j]} + ${arr[k]} `);
            }
          }
        }
      }

      setValues(result);
    }
  };
  console.log(values);

  const table = () => {
    const items = [];

    for (const [key, value] of Object.entries(values)) {
      items.push(
        <table key={key}>
          <tbody>
            <tr>
              <td>{key} = </td>
              {value.map((item, index) => {
                return (
                  <>
                    <th key={index}></th>
                    <td>{item}, </td>
                  </>
                );
              })}
            </tr>
          </tbody>
        </table>
      );
    }

    return items;
  };

  return (
    <>
      <div className="container">
        <form onSubmit={getResult}>
          <h4 className="mt-5"> Input Numbers Combinations program</h4>
          <br />
          <input
            type="number"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onBlur={getResult}
            placeholder="Enter Number"
          />
          <br />
          <br />
        </form>
        <div className="fifth">{table()}</div>
      </div>
    </>
  );
};

export default FifthProgram;
