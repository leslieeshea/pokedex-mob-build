import pokedex from '../data/pokedex.js';
import { makeCardTemplate } from './cards-component.js';
import loadPaging from './paging-component.js';
import loadCards from './cards-component.js';
import pageArray from './page-array.js';


loadPaging(pokedex.length, pagingOptions => {
    const pagedPokedex = pageArray(pokedex, pagingOptions);
    loadCards(pagedPokedex);
});