import markerImg from '../assets/marker.png'

export default function Entry(props){ //you can also destructure
    return(
    <main className="entry-container">
        <div className="left-side">
        <img src={props.img.src} alt={props.img.alt} />
        </div>
        <div className="right-side">
        <div className="marker-container">
        <img src={markerImg} alt="marker-image" width="10px" height="14px"/><p className="country">{props.country}</p>
        <p><a href={props.googleMapLink}>
        View on Google Maps</a></p>
        </div>
        <h1>{props.title}</h1>
        <p className="date">{props.dates}</p>
        <p className="desc">{props.text}</p>
            </div>
    </main>
    )
}