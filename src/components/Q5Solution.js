import React from "react";

export default function Q5Solution() {
  function operations() {
    let array = [1, 2]; // array declare.
    array.push(3); // item added
    prompt(array, "new item added");
    array.pop(); // item deleted
    prompt(array, "item deleted");
    array.splice(1, 0, 7); // new item added at 1st index with splice
    prompt(array, "new item added at 1st index with splice");
    array.splice(0, 1); // item deleted from 0th index with splice
    prompt(array, "item deleted from 0th index with splice");
  }
  return (
    <div className="common">
      <h1>Solution 5</h1>
      <h3>Click to perform all operations</h3>
      <button onClick={() => operations()}>Perform Operations</button>
      <hr />
    </div>
  );
}
