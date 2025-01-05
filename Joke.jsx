import React from "react"
import emptyStar from '../assets/globe.png';
import filledStar from '../assets/marker.png';
export default function Joke() {
     function refreshClick(formData){
        const email = formData.get("email")
        const password = formData.get("password")
        console.log(email)

    }
    return (
        <section>
            <h1>Sign Up Form</h1>
            <form action={refreshClick}>
                <label htmlFor="email">Email:
                <input id="email" type="text" name="email" placeholder="joe@schmoe.com"/>
                </label>
                <br />
                <label htmlFor="password"> Password: 
                <input type="password" name="password" placeholder="password12"/>
                </label>
                <br />
                <input type="submit" value="Click"/>
            </form>
        </section>
    )
}