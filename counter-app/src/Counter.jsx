import React,{useState} from "react" 
import './index.css'
function Counter() {

    const [count,setcount] = useState(0)

    const Add = () => {
        setcount(count+1)
    }

    const substract= () => {
        setcount(count-1)
    }

    const reset = () => {
        setcount(0)
    }
     
    return(
        <>
        <h2>Count : {count}</h2>
        <div className="button-container">
        <button className = 'add-button'onClick={Add}>Increment</button>
        <button className= "subtract-button" onClick={substract}>Decrement</button>
        <button className= 'reset-button'onClick= {reset}> Reset</button>
        </div>
        </>
    )


}

export default Counter