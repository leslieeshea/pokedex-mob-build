import pokedex from '../data/pokedex.js';
import makeCardTemplate from './cards-component.js';

const pokemonCards = document.getElementById('pokemon-cards');

pokedex.forEach(card => {
    const dom = makeCardTemplate(card);
    pokemonCards.appendChild(dom);
});