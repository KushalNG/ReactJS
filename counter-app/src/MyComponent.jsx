import React,{useState} from "react"

function MyComponent() { 
    const [name,setname] = useState("Guest")
    const[age,setage] = useState(0)
    const [isEmployed ,setIsEmployed] = useState(false)

    const UpdateName = () => {
        setname("Pari")
    }

    const UpdateAge = () => {
        setage(age +1)
    }

    const toggleEmploymentStauts = () => setIsEmployed(!isEmployed)
    
    return(
    <div>
        <p>Name : {name} </p>
        <button onClick={UpdateName}>Update Name</button>
        
        <p>Age : {age}</p>
        <button onClick={UpdateAge}>Update Age</button>

        <p>Employment : {isEmployed? "Yes" : "No"}</p>
        <button  onClick={toggleEmploymentStauts}>Toggling the status</button>
    </div>)

}

export default MyComponent