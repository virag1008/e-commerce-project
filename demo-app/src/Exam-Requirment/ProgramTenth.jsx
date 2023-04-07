import React, { useState } from "react";

const ProgramTenth = () => {
  const [val, setval] = useState("");
  const [uniq, setuniq] = useState("");
  const [duplicate, setDuplicate] = useState("");
  const changeHandler = (e) => {
    setval(e.target.value);
  };

  let uniq1 = val.split("");

  let arr = uniq1.sort();

  const handelBlur = () => {
    let vall = arr.filter((crr, id) => {
      return arr.indexOf(crr) === id;
    });
    setuniq(vall);

    let val2 = arr.filter((crr, id) => {
      return arr.indexOf(crr) !== id;
    });
    setDuplicate(val2);
  };

  return (
    <>
      <input
        onChange={changeHandler}
        type="text"
        value={val}
        onBlur={handelBlur}
      />
      <h1>
        The accending uniq is {uniq}---- and duplicate is {duplicate}
      </h1>
    </>
  );
};

export default ProgramTenth;
