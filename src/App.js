import React, { useState } from "react";

function App() {
  //if an anonymous function is passed in useState, it only runs once when the component is loaded
  const [count, setCount] = useState(() => {
    console.log("runs when rendered the first time");
    return 0;
  });
/* 
  //this always runs when the data is changed
  const [count, Count] = useState(test());

  function test() {
    console.log("rendered everytime its data changes");
    return 0;
  }
*/
  function decrementCount(e) {
    setCount((prevCount) => prevCount - 1);
  }
  function incrementCount(e) {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <div>
      <h3>count</h3>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
    </div>
  );
}

export default App;
