const data = require('./../database.json');
import Deck from "./deck.js";
import Card from "./card.js";

export class Character {
  constructor(hp, atk, def, energy, lvl, name) {
    this.baseHP = hp;
    this.baseATK = atk;
    this.baseDEF = def;
    this.baseENERGY = energy;

    this.HP = this.baseHP;
    this.ATK = this.baseATK;
    this.DEF = this.baseDEF;
    this.ENERGY = this.baseENERGY;

    this.LVL = lvl;
    this.XP = 0;

    this.name = name;

    this.hand = [];
  }

  attack(enemy) {
    if (enemy.DEF > this.ATK) {
      enemy.HP -= 1;
    } else {
      enemy.HP -= this.ATK - enemy.DEF;
    }
  }

  lvlUp() {
    this.LVL += 1;
  }

}

export class CardPlayer extends Character {
  constructor(name) {
    super(80, 2, 5, 3, 1, name);
    this.deck = new Deck();
    let strike = new Card(data.cards[0]);
    let defend = new Card(data.cards[1]);
    let bash = new Card(data.cards[2]);
    let twinStrike = new Card(data.cards[5]);
    let ironWave = new Card(data.cards[6]);
    let shockWave = new Card(data.cards[8]);
    let uppercut = new Card(data.cards[9]);

    for (let i = 0; i < 8; i++) {
      this.deck.addCard(strike);
      this.deck.addCard(defend);
    }
    for (let i=0; i<2; i++) {
      this.deck.addCard(bash);
      this.deck.addCard(twinStrike);
      this.deck.addCard(ironWave);
      this.deck.addCard(shockWave);
      this.deck.addCard(uppercut);
    }
  }
}
