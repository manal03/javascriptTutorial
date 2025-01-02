import globeImg from '../assets/globe.png'

export default function Header(){
    return(
        <header>
        <nav>
            <img src={globeImg} height="40px" alt="globe-image" />
            <p>my travel journal.</p>
        </nav>
        </header>
        
    )
}