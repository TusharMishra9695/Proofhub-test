import React from "react";
import { debounce } from "debounce";

export default function Q1Solution() {
  series = debounce(series, 800);
  let showSeries = [];

  function series(e) {
    let n = parseInt(e),
      a = -1,
      b = 1,
      c = a + b;
    while (c <= n) {
      showSeries.push(c);
      a = b;
      b = c;
      c = a + b;
    }
    prompt(showSeries);
    showSeries = [];
  }

  return (
    <div className="common">
      <h1>Solution 1</h1>
      <h3>Enter the number upto you want to continue series</h3>
      <input
        type="number"
        placeholder="Enter number"
        onChange={(e) => series(e.target.value)}
      />
      <hr />
    </div>
  );
}
