import React from 'react'
import avatar from '../assets/globe.png';
import filledStar from '../assets/marker.png';
export default function Joke(prop) {
    return(
        <header>
            <img src={avatar}/>
            <p>{prop.userName}</p>
        </header>
    )
}