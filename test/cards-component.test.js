import { makeCardTemplate } from '../src/cards-component.js';
const test = QUnit.test;

const card = {
    'pokemon': 'Bulbasaur',
    'color_1': '#78C850',
    'color_2': '#A040A0',
    'url_image': 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
    'hp': 45,
    'attack': 49,
    'defense': 49
};

test('making the card template', assert => {
    //act
    const result = makeCardTemplate(card);
    const expected = /*html*/
    `<li style="background-color: #78C850">
        <h3>Bulbasaur<div class="type-2" style="background-color: #A040A0"></div></h3>
        <img class="image" src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png">
        <p class="stats">
            <span>HP: 45</span>
            <span>A: 49</span>
            <span>D: 49</span>
        </p>
    </li>`;

    //assert
    assert.htmlEqual(result, expected);
});