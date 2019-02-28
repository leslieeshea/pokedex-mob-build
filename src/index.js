import pokedex from '../data/pokedex.js';
import { makeCardTemplate } from './cards-component.js';
import loadPaging from './paging-component.js';
import loadCards from './cards-component.js';

loadCards(pokedex);

loadPaging(pokedex.length, pagingOptions => {
    console.log(pagingOptions);
});