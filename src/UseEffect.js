import React, { useEffect, useState } from "react";

function UseEffect() {
  const [data, setData] = useState(10);
  const [count, setCount] = useState(100);

  useEffect(() => {
    console.warn("UseEffect call");
  });

  return (
    <div className="box">
      <h1>Count : {count}</h1>
      <button className="btn" onClick={() => setCount(count + 1)}>
        Update Count
      </button>
    </div>
  );
}

export default UseEffect;
