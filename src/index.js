import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { Fighter } from './js/character.js';
import { Enemy } from './js/enemy.js';
//import { Card } from './js/card.js';
import { Room } from './js/room.js';

const data = require('./database.json');
console.log(data);



let turn = 0;
let room1 = new Room;
const Skeleton = data.enemies[0];
const Slime = data.enemies[1];
const Dragon = data.enemies[2];
let skeleton1 = new Enemy(Skeleton.HP, Skeleton.ATK, Skeleton.DEF, Skeleton.AP, Skeleton.LVL);
let slime1 = new Enemy(Slime.HP, Slime.ATK, Slime.DEF, Slime.AP, Slime.LVL);
let dragon1 = new Enemy(Dragon.HP, Dragon.ATK, Dragon.DEF, Dragon.AP, Dragon.LVL);


let player = new Fighter("bigby");
room1.addEnemy(skeleton1, slime1, dragon1);

while (player.HP > 0 && skeleton1.HP > 0) {
  turn++;
  player.attack(skeleton1);
  skeleton1.attack(player);
  slime1.attack(player);
  dragon1.attack(player);
  console.log("TURN #", turn);
  console.log("BIGBY HP: ", player.HP);
  console.log("SKELETON HP: ", skeleton1.HP);
}

$(document).ready(function(){



});

