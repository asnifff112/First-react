
import React from 'react'

import Task2 from './components/Task2'


export default function App() {
  return (
    <div>
     
      <Task2/>

    </div>
  )
}







// function App (){
//   const names = ["asnif","asiii","bavoos"];
//   return (
//     <div>
//   <ul>
//     {names.map((name, index) =>(
//       <li key={index}>{name}</li>
//     ))}
//   </ul>
//     </div>
//   )
// }

// export default App;


// list and key.............................


// function App (){
// const users = [
//   {id : 1, name : "asnif"},
//   {id : 2 ,name : "shameel",
//    id : 3 ,age  : 18
//   },
// ];

// return(
//   <ul>
//     {users.map((user) => (
//       <li key= {user.id}>{user.name},{user.age}</li>

//     ))}
//   </ul>
// );
// }

// event handling.....................................

// function App (){
//   function handleClicked(){
//     alert("Button clicked");
//   }
//   return <button onClick={handleClicked}>click me</button>
// }


// import React, { useState } from "react";

// function App() {
//   const [inputValue, setInputValue] = useState("");

//   function handleChange(event) {
//     setInputValue(event.target.value);
//   }

//   return (
//     <div>
//       <input type="text" onChange={handleChange} />
//       <p>You typed: {inputValue}</p>
//     </div>
//   );
// }








   