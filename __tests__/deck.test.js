import Deck from './../src/js/deck.js';
import Card from './../src/js/card.js';
const data = require('./../src/database.json');

describe('Deck', () => {
  let deck;
  let card1;
  let card2;
  let card3;

  beforeEach(() => {
    card1 = new Card(data.cards[0]);
    card2 = new Card(data.cards[1]);
    card3 = new Card(data.cards[2]);
    deck = new Deck();
  });

  test('add card1, card2, and card3 to a deck', () => {
    deck.addCard(card1);
    deck.addCard(card2);
    deck.addCard(card3);
    expect(deck.cards).toEqual({"1": {"effectType1": "damage", "effectType2": undefined, "effectValue1": 6, "effectValue2": undefined, "energy": 1, "id": 1, "json": {"effect": ["damage", 6], "effect_count": 1, "energy": 1, "image": "assets/images/sword.png", "name": "strike", "type": "attack"}, "name": "strike", "type": "attack"}, "2": {"effectType1": "shield", "effectType2": undefined, "effectValue1": 7, "effectValue2": undefined, "energy": 1, "id": 2, "json": {"effect": ["shield", 7], "effect_count": 1, "energy": 1, "image": "assets/images/shield.png", "name": "defend", "type": "skill"}, "name": "defend", "type": "skill"}, "3": {"effectType1": "damage", "effectType2": "weaken", "effectValue1": 8, "effectValue2": 2, "energy": 2, "id": 3, "json": {"effect": ["damage", 8, "weaken", 2], "effect_count": 2, "energy": 2, "image": "assets/images/bash.png", "name": "bash", "type": "attack"}, "name": "bash", "type": "attack"}});
    expect(deck.cardId).toEqual(3);
  });

  test('should remove a card from the deck', () => {
    deck.addCard(card1);
    deck.addCard(card2);
    deck.removeCard(1); 
    expect(deck.cards).toEqual({"2": {"effectType1": "shield", "effectType2": undefined, "effectValue1": 7, "effectValue2": undefined, "energy": 1, "id": 2, "json": {"effect": ["shield", 7], "effect_count": 1, "energy": 1, "image": "assets/images/shield.png", "name": "defend", "type": "skill"}, "name": "defend", "type": "skill"}});  
    expect(deck.cardId).toEqual(2);
  });

});