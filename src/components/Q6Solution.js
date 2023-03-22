import React, { useState } from "react";
import { paragraph } from "../constants";
export default function Q6Solution() {
  const [sum, setsum] = useState(0);
  let storeIndex = [];
  function repeat() {
    for (let i = 0; i < paragraph.length; i++) {
      if (paragraph[i] == "a") {
        setsum((sum) => sum + 1);
        storeIndex.push(i);
      }
    }
    prompt(storeIndex, "ALL INDEXS ");
    storeIndex = [];
  }
  return (
    <div className="common">
      <h1>Solution 6</h1>
      <h3>
        Click to find the number of times, the character "a" is repeated and its
        index position
      </h3>
      <button onClick={() => repeat()}>Find Repeat</button>
      <h4>Number of times repeat = {sum}</h4>
      <hr />
    </div>
  );
}
