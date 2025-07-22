import React from "react";


function Pro (){
    return(
        <div>
          <Welcome name ="asnif"  />
          <Welcome name ="anshif" />
        </div>
    );
}

function Welcome(props) {
  return <h1>Hello, {props.name}!</h1> 
}


export default Pro;