/*FETCH METHOD*/
fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    .then(response => {
        if(!response.ok){
            throw new Error('Does not exist');
        }
    return response.json();
    }
    )
    .then(response =>(console.log(response)))
    .catch(error => (console.log(error)))

// async function pokemonHandler(){
//     try{
//         const pokemonInput = document.getElementById('pokemonInput').value.toLowerCase();
//         const imagePokemon = document.getElementById('pokemonImg')
//         const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonInput}`);
        
//         if(!response.ok){
//             throw new Error('Does not exist');
//         }
//         //response.json() parses the http request into json
//         //because when you parse with fetch the response body
//         //responds with a ReadableStream which needs to parse into
//         //reusable format
//         const responseData = await response.json();
//         imagePokemon.src = responseData.sprites.back_default;
//         imagePokemon.style.display = "block"
//         console.log(responseData);
//     }
//     catch(error){
//         console.log(error);
//     }
// }