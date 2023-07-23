import React, { useEffect, useState } from "react";

function User(props) {

  useEffect(() => {
    alert(" count is" + props.count);
  },[props.count]);

  return (
    <div className="box2">
      <h1 >Count props: {props.count}</h1>
      <h1 >Data props: {props.data}</h1>
    </div>
  );
}

export default  User;
