import React,{useState} from "react"

function ColorPicker(){
    const [color,setcolor] = useState("#FFFFFF")

    function handleColorChange (event) {
        setcolor(event.target.value)
    }

    return ( 
        <div className="Color-picker-container">
        <h1>Color Picker</h1><br/>

        <p>Selected Color</p>
        <div className = "Color-Display" style={{background : color}}>
            
        </div>
        

        <label>Choose the color</label>
        <input type = "color" value = {color} onChange={handleColorChange}/>
    </div>

    );

}

export default ColorPicker