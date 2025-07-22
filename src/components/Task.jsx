import React, {useState} from 'react'

function Task (){
    const [dark,setDark] = useState(false)
 
    return (
        <div className="dd" style={{height :'100vh', background:dark ? 'black' : 'white'}}>
            <button className="btn" onClick={()=>setDark (!dark)}> theme</button>
        </div>
    )
}



export default Task;