import Card from './../src/js/card.js';
const data = require('./../src/database.json');

describe('Card', () => {

  test('should populate a card object with values from the database', () => {
    const card = new Card(data.cards[0]);
    expect(card.effectType1).toEqual("damage");
    expect(card.effectType2).toEqual(undefined);
    expect(card.effectValue1).toEqual(6);
    expect(card.effectValue2).toEqual(undefined);
    expect(card.energy).toEqual(1);
    expect(card.json.effect[0]).toEqual("damage");
    expect(card.json.effect[1]).toEqual(6);
    expect(card.json.effect_count).toEqual(1);
    expect(card.json.energy).toEqual(1);
    expect(card.json.name).toEqual("strike");
    expect(card.json.type).toEqual("attack");
    expect(card.name).toEqual("strike");
    expect(card.type).toEqual("attack");
  });

});