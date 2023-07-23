import React, { useEffect, useState } from "react";
import User from "./User";

function UseEffect() {
  const [data, setData] = useState(10);
  const [count, setCount] = useState(100);


  return (
    <div className="box">
      <User count = {count} data = {data}></User>
      <button className="btn" onClick={() => setCount(count + 1)}>Update Count</button>
      <button className="btn leftM" onClick={() => setData(count + 1)}>Update Data</button>
    </div>
  );
}

export default UseEffect;
