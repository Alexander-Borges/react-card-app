import profilePic from './assets/profile.jpg'

function Card(){
    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture" />
            <h2>Alex Borges</h2>
            <p> Software Engineer</p>
            <p></p>
        </div>
    );
}

export default Card