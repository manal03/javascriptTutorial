import React from "react"
import emptyStar from '../assets/globe.png';
import filledStar from '../assets/marker.png';
export default function Joke() {
     function refreshClick(formData){
        const email = formData.get("email")
        const password = formData.get("password")
        console.log(email)
        console.log(password)
        const textArea = formData.get("description")
        const employmentStatus = formData.get("employmentStatus")
        const dietaryRestrictions = formData.getAll("dietaryRestrictions")

        console.log(textArea)
        console.log(employmentStatus)
        console.log(dietaryRestrictions)

    }
    return (
        <section>
            <h1>Sign Up Form</h1>
            <form className="thing" action={refreshClick}>
                <label htmlFor="email">Email:
                <input id="email" type="text" name="email" placeholder="joe@schmoe.com"/>
                </label>
                <br />
                <label htmlFor="password"> Password: 
                <input type="password" name="password" placeholder="password12"/>
                </label>
                <br />
                <input type="submit" value="Click"/>
                <label htmlFor="description">Description:</label>
                <textarea id="description" name="description" defaultValue={"this is a empty desciprtion"}></textarea>

                <fieldset>
                    <legend>Employment Status</legend>
                <label>
                <input type="radio" name="employmentStatus" value="unemployed"/>
                Unemployed
                </label>
                <label>
                <input type="radio" name="employmentStatus" value="part-time"/>
                Part time
                </label>
                <label>
                <input type="radio" name="employmentStatus" value="full-time"/>
                Full time
                </label>
                </fieldset>


                <fieldset>
                    <legend>Dietary Restrictions</legend>
                <label>
                <input type="checkbox" name="dietaryRestrictions" value="kosher"/>
                Kosher
                </label>
                <label>
                <input type="checkbox" name="dietaryRestrictions" value="vegan"/>
                Vegan
                </label>
                <label>
                <input type="checkbox" name="dietaryRestrictions" value="gluten-free"/>
                Gluten Free
                </label>
                </fieldset>

                
            </form>
        </section>
    )
}