const data = require('./../database.json');
import Deck from "./deck.js";
import Card from "./card.js";

export class Character {
  constructor(hp, atk, def, lvl, name) {
    this.baseHP = hp;
    this.baseATK = atk;
    this.baseDEF = def;

    this.HP = this.baseHP;
    this.ATK = this.baseATK;
    this.DEF = this.baseDEF;

    this.LVL = lvl;
    this.XP = 0;

    this.name = name;
  }

  attack(enemy) {
    if (enemy.DEF > this.ATK) {
      enemy.HP -= 1;
    } else {
      enemy.HP -= this.ATK - enemy.DEF;
    }
  }

  lvlup() {
    this.LVL += 1;
  }

}

export class CardPlayer extends Character {
  constructor(name) {
    super(25, 12, 4, 1, name);
    this.deck = new Deck();
    let strike = new Card(data.cards[0]);
    let defend = new Card(data.cards[1]);
    let bash = new Card(data.cards[2]);
    for (let i = 0; i < 5; i++) {
      this.deck.addCard(strike);
      this.deck.addCard(defend);
    }
    this.deck.addCard(bash);
  }
}
