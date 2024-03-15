import pic from './assets/pic.jpg'

function Carte(){
    
    return(
        <div className="card">
            <img className='card-image' src={pic} alt="profile" height={150} width={150}/>
            <h2 className='card-title'>lorince101</h2>
            <p className='card-text'>Software developer, Backend developer and godot Game developer.</p>
        </div>
    );
}
export default Carte