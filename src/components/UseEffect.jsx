// import { useEffect , useState } from "react";

// import { useContext } from "react";


// function Example(){
//     const [data, setData] = useState([]);

//     useEffect(() =>{
//         fetch("https://jsonplaceholder.typicode.com/users")
//         .then(res => res.json())
//         .then( data => setData(data));
//     },[])
//     return <pre>{JSON.stringify(data,  null, 2)}</pre>
// }

// export default Example


// useRef ..........................................

// useRef

// import { useRef ,useState } from "react";

// function Input(){
//     const inputRef = useRef(0);
//     const [dummy, setDummy] = useState(0)

    

//         const handleClick = () => {
//             inputRef.current += 1;
//             console.log("Ref Count", inputRef.current);
            
//         };
//         return (
//             <>
//              <h2>click Count: {inputRef.current}</h2>
//              <button onClick={handleClick}>increment</button>
//              <button onClick={() => setDummy(dummy +1)}>Force render  </button>
//             </>
//         );
//     }
  
// export default Input


// useContext .............................................

// const MyContext = React.createContext();

// function Context (){
//     return (
//         <MyContext.Provider value="asnif" >
//             <Child/>
//         </MyContext.Provider>
//     );
// }

// function Child(){
//     const name = useContext(MyContext);
//     return <p>{name}</p>
// }

// export default Context;



