async function getCharacters() {
    let charactersContainer = document.querySelector('#characters-container')
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const data = await response.json();
    console.log(data);
    data.results.forEach(character =>
        charactersContainer.innerHTML += cardCharacter(character.image, character.name, character.status)
    );
};

getCharacters();


function cardCharacter(urlImage, title, description) {
    return (
        `
        <div class="column">
                <div class="card">
                    <img src="${urlImage}" alt="image" class="card-image" />
                    <div class="card-content">
                        <h3 class="card-title">${title}</h3>
                        <p class="card-description">
                            ${description}
                        </p>
                    </div>
                </div>
            </div>
        `
    )
};