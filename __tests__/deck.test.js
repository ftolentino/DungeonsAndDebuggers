import Deck from './../src/js/deck.js';
import Card from './../src/js/card.js';
const data = require('./../src/database.json');

describe('Deck', () => {
  let deck;
  let card1;
  let card2;
  let card3;

  beforeEach(() => {
    card1 = new Card(data.card[0]);
    card2 = new Card(data.card[1]);
    card3 = new Card(data.card[2]);
    deck = new Deck;
  });

  test('add card1, card2, and card3 to a deck', () => {
    deck.addCard(card1);
    deck.addCard(card2);
    deck.addCard(card3);
    expect(deck.cards).toEqual(3);
    expect(deck.cardsId).toEqual(3);
  });

});