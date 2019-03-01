export function makeCardTemplate(card) {
    const html = 
    `<li style="background-color: ${card.color_1}">
    <h3>${card.pokemon}<div class="type-2" style="background-color: ${card.color_2}"></div></h3>
    <img class="image" src="${card.url_image}">
    <p class="stats">
        <span>HP: ${card.hp}</span>
        <span>A: ${card.attack}</span>
        <span>D: ${card.defense}</span>
    </p>
    </li>`;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

export default function loadCards(pokedex) {
    const pokemonCards = document.getElementById('pokemon-cards');
    while(pokemonCards.firstChild) {
        pokemonCards.firstChild.remove();
    }

    pokedex.forEach(card => {
        const dom = makeCardTemplate(card);
        pokemonCards.appendChild(dom);
    });
}

