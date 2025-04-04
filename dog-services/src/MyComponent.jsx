import React,{useState} from "react"
import "./index.css";

function MyComponent() { 

    const [name,setname] =useState("")
    const [age,setage] = useState()
    const [comment,setComment] = useState("")
    const [breed,setbreed] = useState("")
    const [services,setservices] = useState("")

    function handleNameChange(event){
        setname(event.target.value)
    }

    function handleAgechange(event){
        setage(event.target.value)
    }

    function handleCommentChange(event){
        setComment(event.target.value)
    }

    function handleBreedChange(event){
        setbreed(event.target.value)
    }

    function handleServicesChange(event){
        setservices(event.target.value)
    }

    return (
        <div className='page-display'> 
            <p> Name : {name}</p>
            <input value = {name} onChange={handleNameChange} />
            
            <p>Age :{age}</p>
            <input value = {age} onChange={handleAgechange} type='number'/>
           
            <p>Treats :</p>
            <textarea value = {comment} onChange={handleCommentChange}
            placeholder="Enter the favourite treats"/>

            <p>Breed</p>
            <select value = {breed}onChange={handleBreedChange}
            placeholder="Select your breed" >
            
            <option value = 'German Shepherd'>German Shepherd</option>
            <option value = 'Husky'>Husky</option>
            <option value = 'Labrador'>Labrador</option>
            </select>

            <p>Services : </p>       
            <label>
                <input type="radio" value="Hair Cut"
                checked = { services ==="Hair Cut"}
                Onchange={handleServicesChange}/>
                Hair Cut  
            </label>     <br/>

            <label>
                <input type="radio" value="Bath"
                checked = { services ==="Bath"}
                Onchange={handleServicesChange}/>
                Bath  
            </label> <br/>

            <label>
                <input type="radio" value="Zoomies"
                checked = { services ==="Zoomies"}
                Onchange={handleServicesChange}/>
                Zoomies  
            </label>

        </div>

    )
}

export default MyComponent