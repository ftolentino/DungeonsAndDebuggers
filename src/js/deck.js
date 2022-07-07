export default class Deck {
  constructor(){
    this.cards = {};
    this.cardId = 0;
  }

  addCard(card) {
    card.id = this.assignId();
    this.cards[this.cardId] = card;
  }

  assignId() {
    this.cardId += 1;
    return this.cardId;
  }

  removeCard(id) {
    delete this.cards[id];
  }

}