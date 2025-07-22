import React, { useState } from "react";

function Counter (){
  const [count , setCount] = useState(0);

  return(
    <div className="App1">
      <p>{count}</p>
       <span>
      <button  className="Bt1" onClick={() => setCount(count + 1)}>+</button>
      <button  className="Bt1" onClick={() =>setCount(count -1)}>-</button>
      </span>
      <button className= "Bt1" onClick={() => setCount(0)}>reset</button>
    </div>
  );
}


export default Counter;