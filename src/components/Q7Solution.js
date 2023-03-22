import React from "react";

export default function Q7Solution() {
  function getPrime() {
    let n,
      a = 1,
      b = 100,
      prime = [];
    for (n = a; n <= b; n++) {
      let i;
      for (i = 2; i <= n; i++) {
        if (n % i === 0) break;
      }
      if (i === n) prime.push(i);
    }
    prompt(prime, "Prime no");
    prime = [];
  }
  return (
    <div className="common">
      <h1>Solution 7</h1>
      <h3>All prime numbers between 1 and 100</h3>
      <button onClick={() => getPrime()}>GETPRIME</button>

      <hr />
    </div>
  );
}
