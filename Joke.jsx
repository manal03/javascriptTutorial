import React from "react"
import emptyStar from '../assets/globe.png';
import filledStar from '../assets/marker.png';
export default function Joke() {

    let [unreadMessages, setUnreadMessages] = React.useState([])
     
    return (
        <section>
            {
            unreadMessages.length!==0 && <h1>You have {unreadMessages.length} 
             unread message{unreadMessages.length>1 && "s"}</h1>
            }
            {
                <p>{ unreadMessages.length===0 && "You have no unread messages"}</p>
            }
        </section>
    )
}