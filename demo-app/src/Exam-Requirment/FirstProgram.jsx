import { useState } from "react";

function FirstProgram() {
  const [num, setNum] = useState("");
  const [golden, setgolden] = useState("");

  const check = Number(num);

  console.log(check);

  if (isNaN(check)) {
    alert("please enter a valid number");
    setNum(num.slice(0, -1));
  }

  if (num.includes(".")) {
    setNum(num.slice(0, -1));
  }

  const focusOutEvent = () => {
    const arr = [...num];

    let add = 0;

    const addition = arr.map((ele, id) => {
      return (add += Number(ele));
    });

    let totalLength = num.length;

    if (add % totalLength == 0) {
      setgolden("golden");
    } else {
      setgolden("not golden");
    }
  };

  return (
    <div className="App mt-5">
      <input
        className="mb-4"
        type="text"
        onChange={(e) => setNum(e.target.value)}
        value={num}
        onBlur={focusOutEvent}
      />
      <p> total Length :: {num.length} </p>
      <p>{`The given Number is ::: ${golden}`}</p>
    </div>
  );
}

export default FirstProgram;
