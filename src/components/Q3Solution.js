import React, { useState } from "react";
import { debounce } from "debounce";

export default function Q3Solution() {
  const [checkNo, setCheckNo] = useState(null);
  checkNum = debounce(checkNum, 800);

  function checkNum(e) {
    let n = parseInt(e),
      check = ["EVEN", "ODD"];
    setCheckNo(check[n % 2]);
  }

  return (
    <div className="common">
      <h1>Solution 3</h1>
      <h3>
        Enter the number to check even/odd without a conditional statement
      </h3>
      <input
        type="number"
        placeholder="Enter number"
        onChange={(e) => checkNum(e.target.value)}
      />
      <h4>GIVEN NUMBER IS : {checkNo}</h4>

      <hr />
    </div>
  );
}
