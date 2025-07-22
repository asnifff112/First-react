

 let Todos = () =>{
    let name = "asiiii";
    let getDay = (date) => {
        return Intl.DateTimeFormat('in-US', {weekday:'long'}).format(date)
    }
    return (
        <div>
            <h1 style={{backgroundColor: "red",color:"black"}}> {name} Todos ({getDay(new Date)}) </h1>
            <ul>
                <li>helloooooooooiiiiiiiiii</li>
                <li>how are uhhhhhhhhhhhh</li>
            </ul>
        </div>
    );
} 

export default Todos ;