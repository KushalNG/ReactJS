import pic from './assets/150 px - pari 1.jpg'
function Card(){

    return (
        <div className = "card">
            <img className = "card-image"src = {pic} alt = "Profile Picture"></img>
            <h2 className = "card-Name">Kushal N G</h2>
            <h3 className='card-title'>Cricket</h3>
            <p className='card-description'>I am a professional cricketer and i have been playing cricket for the past 15 years.</p>

        </div>
    );   
}

export default Card