import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { Fighter } from './js/character.js';
import { Enemy } from './js/enemy.js';
import { Card } from './js/card.js';
import { Room } from './js/room.js';

const data = require('./database.json');
console.log(data);

let card1 = new Card(data.cards[0].name, data.cards[0].type, data.cards[0].effect, data.cards[0].energy);
let card2 = new Card(data.cards[1].name, data.cards[1].type, data.cards[1].effect, data.cards[1].energy);
let card3 = new Card(data.cards[2].name, data.cards[2].type, data.cards[2].effect, data.cards[2].energy);
let card4 = new Card(data.cards[3].name, data.cards[3].type, data.cards[3].effect, data.cards[3].energy);
console.log(card1);
console.log(card2);
console.log(card3);
console.log(card4);

let turn = 0;
let room1 = new Room;
const Skeleton = data.enemies[0];
const Slime = data.enemies[1];
const Dragon = data.enemies[2];
let skeleton1 = new Enemy(Skeleton.name, Skeleton.HP, Skeleton.ATK, Skeleton.DEF, Skeleton.ENERGY, Skeleton.LVL);
let slime1 = new Enemy(Skeleton.name, Slime.HP, Slime.ATK, Slime.DEF, Slime.ENERGY, Slime.LVL);
let dragon1 = new Enemy(Skeleton.name, Dragon.HP, Dragon.ATK, Dragon.DEF, Dragon.ENERGY, Dragon.LVL);

let player = new Fighter("bigby");
room1.addEnemy(skeleton1);
room1.addEnemy(slime1);
room1.addEnemy(dragon1);

while (player.HP > 0 && room1.currentEnemies > 0) {
  const rand = Math.floor(Math.random() * room1.currentEnemies) + 1;
  let enemies = Object.values(room1.enemies);
  turn++;

  switch(rand) {
  case(1):
    player.attack(enemies[0]);
    break;
  case(2):
    player.attack(enemies[1]);
    break;
  case(3): 
    player.attack(enemies[2]);
    break;
  }

  skeleton1.attack(player);
  slime1.attack(player);
  dragon1.attack(player);
  for (let i=0; i <room1.currentEnemies; i++) {
    if (Object.values(room1.enemies)[i].HP <= 0) {
      room1.removeEnemy(Object.values(room1.enemies)[i].ID);
      console.log("ROOM AFTER ENEMY DEFEAT: ", room1);
    }
  }

  console.log("TURN #", turn);
  console.log("BIGBY HP: ", player.HP);
  for (let i=0; i<enemies.length; i++) {
    console.log(`ENEMY ${i} HP: `, enemies[i].HP);
  }

}


$(document).ready(function(){

});

