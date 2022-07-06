import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { CardPlayer, Character } from './js/character.js';
import { Enemy } from './js/enemy.js';
// import { Card } from './js/card.js';
import { Room } from './js/room.js';

const data = require('./database.json');
console.log(data);
console.log(data.enemies[0]);


function displayCard(card, handID) {
  $("#playerCards").append(`<div class="card col-2" id="card${handID}">
                            <strong>${card.name} ⚡: ${card.energy}</strong>
                            <em>${card.type}</em>
                            <br>
                            <strong>Effects:</strong>
                            <em>${card.effectType1} — ${card.effectValue1}</em>`);
  if (card.effectType2 !== undefined) {
    $(`#card${card.id}`).append(`<em>${card.effectType2} — ${card.effectValue2}</em>`);
  }
  $("#playerCards").append(`</div>`);
}

/* 
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
 */
let zoom = new CardPlayer("bigerby");
console.log(zoom);

$(document).ready(function(){

  let player;

  $("#newGame").click(function() {
    player = new CardPlayer(25, 12, 4, 1, "yiigvik");
    console.log(player);

    console.log(player.deck.cards);

    $("#playerCards").html("");
    player.hand = [];
    for (let i=0; i<5; i++) {
      let cardNum = Math.floor(Math.random() * player.deck.cardId);
      if (!player.hand.includes(cardNum)) {
        player.hand.push(cardNum);
        let card = Object.values(player.deck.cards)[cardNum];
        displayCard(card, player.hand.length);
      } else {
        i--;
      }
    }
  });

  $(`div#card0`).onclick(function(){
    console.log(player.hand[0]);
  });
  $(`div#card1`).onclick(function(){
    console.log(player.hand[1]);
  });
  $(`div#card2`).onclick(function(){
    console.log(player.hand[2]);
  });
  $(`div#card3`).onclick(function(){
    console.log(player.hand[3]);
  });
  $(`div#card4`).onclick(function(){
    console.log(player.hand[4]);
  });
});