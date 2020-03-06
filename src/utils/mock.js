let PokemonsLocation = []

for (let i = 0; i < 151; i++) {
    let randomLong = Math.random() < 0.5 ? -1 : 1;
    let randomLat = Math.random() < 0.5 ? -1 : 1;
    PokemonsLocation.push(
        //Generate locations randomly around of Montpellier
             [
                 43.6 + (Math.random()/10) * randomLat ,
               3.8833 + (Math.random()/10) * randomLong
            ]
    )
}

export default PokemonsLocation;