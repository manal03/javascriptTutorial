import React from "react"
import emptyStar from '../assets/globe.png';
import filledStar from '../assets/marker.png';
export default function Joke() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (212) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: true
    })
    /**
     * Challenge: Fill in the values in the markup
     * using the properties of our state object above
     * (Ignore `isFavorite` for now)
     */
    function toggleFavorite() {
        setContact(
            prevContact=>{
                return{
                    ...prevContact,
                    isFavorite : !contact.isFavorite

                }
            }
            
        )
    }
    let starIcon = contact.isFavorite ? filledStar : emptyStar
    return (
        <main>
            <article className="card">
                <div className="info">
                    <button
                        onClick={toggleFavorite}
                        aria-pressed={false}
                        className="favorite-button"
                    >   
                    <img src={starIcon}
                    className='favourite'
                    alt = {contact.isFavorite ? 'Filled Star Icon' : 'Empty star'} 
                    aria-label = {contact.isFavorite ? 'True' : 'False'}
                    aria-pressed = {contact.isFavorite ? 'Remove from favourites' : 'Add to favourites'}
                    />
                    </button>
                    <h2 className="name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="contact">{contact.phone}</p>
                    <p className="contact">{contact.email}</p>
                </div>

            </article>
        </main>
    )
}