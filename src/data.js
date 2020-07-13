async function getCharacters() {
    let charactersContainer = document.querySelector('#characters-container')
    const response = await fetch('https://rickandmortyapi.com/api/character/?page=1');
    const data = await response.json();
    console.log(data);
    data.results.forEach(character =>
        charactersContainer.innerHTML += cardCharacter(
            character.image,
            character.name,
            character.status,
            character.location.name,
            character.origin.name,
            character.specie
        )
    );
};
getCharacters();



async function getCharacters2() {
    let charactersContainer = document.querySelector('#characters-container')
    const response = await fetch('https://rickandmortyapi.com/api/character/?page=2');
    const data = await response.json();
    console.log(data);
    data.results.forEach(character =>
        charactersContainer.innerHTML += cardCharacter(
            character.image,
            character.name,
            character.status,
            character.location.name,
            character.origin.name,
            character.specie
        )
    );
};
getCharacters2();


async function getCharacters3() {
    let charactersContainer = document.querySelector('#characters-container')
    const response = await fetch('https://rickandmortyapi.com/api/character/?page=3');
    const data = await response.json();
    console.log(data);
    data.results.forEach(character =>
        charactersContainer.innerHTML += cardCharacter(
            character.image,
            character.name,
            character.status,
            character.location.name,
            character.origin.name,
            character.specie
        )
    );
};
getCharacters3();











/*Flip card*/ 
function cardCharacter(urlImage, name, status, location, origin, specie) {
    return (
        `
        <div class="column">
                <div class="card">
                    <img src="${urlImage}" alt="image" class="card-image" />
                    <div class="card-content">
                        <h3 class="card-title">${name}</h3>
                        <p class="card-description">
                            Status: ${status}
                        </p>
                        <p class="card-description">
                            Specie: ${specie}
                        </p>
                        <p class="card-description">
                            Origin: ${origin}
                        </p>
                        <p class="card-description">
                            Current location: ${location}
                        </p>
                    </div>        
                   </div>
            </div>
        `
    )
};
