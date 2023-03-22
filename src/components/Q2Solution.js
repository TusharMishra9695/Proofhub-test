import React, { useState } from "react";

export default function Q2Solution() {
  const [even, setEven] = useState(0);
  const [odd, setOdd] = useState(0);
  const [isActive, setisActive] = useState(false);
  function getSum() {
    setisActive(true);
    for (let i = 1; i <= 100; i++) {
      if (i % 2 === 0) {
        setEven((even) => even + i);
      } else {
        setOdd((odd) => odd + i);
      }
    }
  }
  return (
    <div className="common">
      <h1>Solution 2</h1>
      <h3>Click buttton to get a sum of even and odd numbers between 1-100</h3>
      <button onClick={() => (!isActive ? getSum() : null)}>GETSUM</button>
      <h4>SUM EVEN : {even}</h4>
      <h4>SUM ODD : {odd}</h4>
      <hr />
    </div>
  );
}
