import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { CardPlayer } from './js/character.js';
import Enemy from './js/enemy.js';
import Room from './js/room.js';
const data = require('./database.json');

// selects 5 cards from the deck and adds them to the player's hand
// player: player object
function drawHand(player) {
  player.hand = [];

  for (let i=0; i<5; i++) {
    let cardNum = Math.floor(Math.random() * (player.deck.cardId -1) + 1);
    
    if (!player.hand.includes(Object.values(player.deck.cards)[cardNum])) {
      let card = Object.values(player.deck.cards)[cardNum];
      player.hand.push(card);
      displayCard(card, i);
    } else {
      i--;
    }
  }
}

// displays each card in the hand, formatted as a button
// card: the object where the card info is stored
// handID: the spot in the hand array / html id where the card exists
function displayCard(card, handID) {

  $(`#card${handID}`).html("");
  $(`#card${handID}`).html(`<strong>${(card.name).toUpperCase()}</strong><br><em>${card.type} ⚡: ${card.energy}</em><br><strong>Effects:</strong><br><em>${card.effectType1} — ${card.effectValue1}</em><br>`);
  if (card.effectType2 !== undefined) {
    $(`#card${handID}`).append(`<em>${card.effectType2} — ${card.effectValue2}</em>`);
  }
  $(`#card${handID}`).addClass(`${card.type}`);
  if (card.type === "attack") {
    $(`#card${handID}`).removeClass("skill");
  } else if (card.type === "skill") {
    $(`#card${handID}`).removeClass("attack");
  }
  $(`.card`).slideDown();
}

// creates an instance of a room and adds a random number of enemies
// path: location in the database where the room elements are accessed
// x: max number of enemies | y: min number of enemies
function getRoom(path, x, y) {
  $(`.enemies`).html("");
  let enemyCount = Math.floor(Math.random() * x + y);
  let thisRoom = new Room();
  for (let i=0; i<enemyCount; i++) {
    let enemy = new Enemy(path[0]);
    thisRoom.addEnemy(enemy);
  }
  return thisRoom;
}

// displays the hp bar beneath an enemy
// enemy: object where the enemy info is accessed
// i: the index of the enemy's html id
function displayEnemyHP(enemy, i) {
  $(`#enemy${i}`).html(`<img class="sprite" src="${(enemy).sprite}">`);
  $(`#enemy${i}`).append(`<div class="box"><strong>${enemy.HP} / ${enemy.baseHP} ❤️ </strong></div>`);
}

// displays each enemy sprite in the room
// room: the room where the enemies are accessed
function displayEnemies(room) {
  for (let i=0; i<room.currentEnemies; i++) {
    if (Object.values(room.enemies)[i] !== undefined) {
      $(`.enemies`).append(`<div class="col-4 d-flex flex-column align-items-end" id="enemy${i}"><img class="sprite" src="${Object.values(room.enemies)[i].sprite}"></div>`);
      displayEnemyHP(Object.values(room.enemies)[i], i);
    }
  }
}

// displays the player sprite
// player: the player object
function displayPlayer(player) {
  $(".player").html(`<div class="col-12 d-flex flex-column align-items-end" id="playerImage"><img class="sprite" src="/src/assets/images/crab-pink.png"></div>`);
  //$('.player').append(`<img src=''>`);
  displayPlayerHP(player);
}

// display the players HP and Energy values
// player: the player object
function displayPlayerHP(player) {
  $(`#playerImage`).append(`<div class="box"><strong>${player.HP} / ${player.baseHP} ❤️ | ⚡: ${player.baseENERGY}</strong></div>`);
}

// highlights a card from the hand when clicked
// x: index of the card's html id
function cardHighlight(x) {
  $(`#card${x}`).toggleClass("card-highlight");
}

function cardHighlightReset() {
  for (let i=0; i<5; i++) {
    $(`#card${i}`).removeClass("card-highlight");
  }
}

// highlights the selected enemy and removes highlights from the others
// enemies: array of enemies in the room | x: index of selected enemy html id
function enemyHighlight(enemies, x) {
  for (let i=0; i<enemies.length; i++) {
    if (i === x) {
      $(`#enemy${i}`).addClass("enemy-highlight");
    } else if (i !== x) {
      $(`#enemy${i}`).removeClass("enemy-highlight");
    }
  }
}

// resets enemy highlight on new turn
// enemies: array of enemy objects in the current room object
function enemyHighlightReset(enemies) {
  for (let i=0; i<enemies.length; i++) {
    $(`#enemy${i}`).removeClass("enemy-highlight");
  }
}

// resolve events
// player: player object | cards: cards played this turn
// enemy: selected enemy object
function playerTurn(player, cards, enemy) {

  // resolve effects for card.type === skill, based on card.effectType1 and card.effectType2
  for (let i=0; i<cards.length; i++) {

    if(cards[i].type === "skill") {
      switch(cards[i].effectType1) {
      case(undefined):
        break;
      case("shield"):
        player.HP += cards[i].effectValue1;
        break;
      case("weaken"):
        enemy.DEF -= cards[i].effectValue1;
      }

      switch(cards[i].effectType2) {
      case(undefined):
        break;
      case("shield"):
        player.HP += cards[i].effectValue2;
        break;
      case("weaken"):
        enemy.DEF -= cards[i].effectValue2;
        break;
      }
    }
  }

  // resolve effects for card.type === attack, based on card.effectType1 and card.effectType2
  for (let i=0; i<cards.length; i++) {

    if(cards[i].type === "attack") {
      switch(cards[i].effectType1) {
      case("damage"):
        enemy.HP -= (cards[i].effectValue1 + player.ATK) - enemy.DEF;
        break;
      case("shield"):
        player.HP += cards[i].effectValue1;
        break;
      case("weaken"):
        enemy.DEF -= cards[i].effectValue1;
        break;
      }

      switch(cards[i].effectType2) {
      case(undefined):
        break;
      case("damage"):
        enemy.HP -= cards[i].effectValue2;
        break;
      case("shield"):
        player.HP += cards[i].effectValue2;
        break;
      case("weaken"):
        enemy.DEF -= cards[i].effectValue2;
        break;
      }
    }
  }
}

// removes enemies from the room upon defeat
// room: room object where the enemy objects are accessed
function removeEnemies(room) {
  for (let i=0; i<room.currentEnemies; i++) {
    if(Object.values(room.enemies)[i] !== undefined && Object.values(room.enemies)[i].HP <= 0) {
      room.removeEnemy(Object.values(room.enemies)[i].ID);
      $(`#enemy${i}`).hide("slow");
      setTimeout(function() {
        $(`#enemy${i}`).html("");
      }, 500);
    }
  }
}

// handle loading screen event on webpage reload
function loading() {
  $("#loading").remove();
}

$(document).ready(function(){
  setTimeout(loading, 4000);
  let player; // initiate empty player object
  let room; // initialize empty room object
  let selectedCards = []; // initialize empty array for retrieving selected cards from the hand
  let selectedEnemies = []; // initialize empty array for resolving which enemy is selected

  // New Game event: deals 5 cards, instantiates player, player can select an enemy to attack, and cards to spend energy points before ending turn.
  $("#newGame").click(() => {
    player = new CardPlayer("begby");
    room = getRoom(data.enemies, 3, 1);

    selectedCards = [false, false, false, false, false];
    selectedEnemies = [false, false, false];

    displayPlayer(player);
    drawHand(player);
    displayEnemies(room);

    // click events for each card
    $("#card0").click(() => {
      cardHighlight(0);
      if(selectedCards[0] === false){
        selectedCards[0] = true;
      } else if (selectedCards[0] === true){
        selectedCards[0] = false;
      }
    });
    $("#card1").click(() => {
      cardHighlight(1);
      if(selectedCards[1] === false){
        selectedCards[1] = true;
      } else if (selectedCards[1] === true){
        selectedCards[1] = false;
      }
    });
    $("#card2").click(() => {
      cardHighlight(2);
      if(selectedCards[2] === false){
        selectedCards[2] = true;
      } else if (selectedCards[2] === true){
        selectedCards[2] = false;
      }
    });
    $("#card3").click(() => {
      cardHighlight(3);
      if(selectedCards[3] === false){
        selectedCards[3] = true;
      } else if (selectedCards[3] === true){
        selectedCards[3] = false;
      }
    });
    $("#card4").click(() => {
      cardHighlight(4);
      if(selectedCards[4] === false){
        selectedCards[4] = true;
      } else if (selectedCards[4] === true){
        selectedCards[4] = false;
      }
    });

    // click events for each enemy
    $("#enemy0").click(() => {
      enemyHighlight(Object.values(room.enemies), 0);
      selectedEnemies[0] = true;
    });
    $("#enemy1").click(() => {
      enemyHighlight(Object.values(room.enemies), 1);
      selectedEnemies[1] = true;
    });
    $("#enemy2").click(() => {
      enemyHighlight(Object.values(room.enemies), 2);
      selectedEnemies[2] = true;
    });
  }); // end of ("#newGame").click(function(){...})

  // End Turn event
  $("#endTurn").click(() => {
    // reset the card/enemy click events, TO BE IMPROVED
    for (let i=0; i<2; i++) {
      $("#card0").click(() => {
        cardHighlight(0);
        if(selectedCards[0] === false){
          selectedCards[0] = true;
        } else if (selectedCards[0] === true){
          selectedCards[0] = false;
        }
      });
      $("#card1").click(() => {
        cardHighlight(1);
        if(selectedCards[1] === false){
          selectedCards[1] = true;
        } else if (selectedCards[1] === true){
          selectedCards[1] = false;
        }
      });
      $("#card2").click(() => {
        cardHighlight(2);
        if(selectedCards[2] === false){
          selectedCards[2] = true;
        } else if (selectedCards[2] === true){
          selectedCards[2] = false;
        }
      });
      $("#card3").click(() => {
        cardHighlight(3);
        if(selectedCards[3] === false){
          selectedCards[3] = true;
        } else if (selectedCards[3] === true){
          selectedCards[3] = false;
        }
      });
      $("#card4").click(() => {
        cardHighlight(4);
        if(selectedCards[4] === false){
          selectedCards[4] = true;
        } else if (selectedCards[4] === true){
          selectedCards[4] = false;
        }
      });
  
      $("#enemy0").click(() => {
        enemyHighlight(Object.values(room.enemies), 0);
        selectedEnemies[0] = true;
    
      });
      $("#enemy1").click(() => {
        enemyHighlight(Object.values(room.enemies), 1);
        selectedEnemies[1] = true;
      });
      $("#enemy2").click(() => {
        enemyHighlight(Object.values(room.enemies), 2);
        selectedEnemies[2] = true;
      });
  
      let energyCost = 0; // cost of cards selected this turn
      let playCards = []; // array of cards selected for play this turn
      let selectedEnemy = [false, false, false]; // array for resolving which enemy is selected

      // resolve player & enemy turn every half turn
      if(i === 0) {

        // parse selectedCards to populate playCards with only chosen cards
        for (let i=0; i<selectedCards.length; i++) {
          if (selectedCards[i] === true) {
            playCards.push(player.hand[i]);
            energyCost += player.hand[i].energy;
          }
        }

        // parse selectedEnemies to find selectedEnemy
        for (let i=0; i<room.currentEnemies; i++) {
          if (selectedEnemies[i] === true) {
            selectedEnemy = Object.values(room.enemies)[i];
          }
        }

        // reject ("#endTurn").click if the player tries to use too many cards
        if (energyCost > player.baseENERGY) {
          enemyHighlightReset(Object.values(room.enemies));
          cardHighlightReset();
          alert("You don't have enough energy to play those cards");

        // reject ("#endTurn").click if no enemies are selected
        } else if (!selectedEnemies.includes(true)) { 
          alert("You have to select a target before ending your turn");

        // reject ("#endTurn").click if no cards are selected  
        } else if (!selectedCards.includes(true)) {
          enemyHighlightReset(Object.values(room.enemies));
          alert("You need to select at least one card to end your turn");

        // resolve turn after checking to see if turn requirements are met
        } else {
          playerTurn(player, playCards, selectedEnemy);
          displayEnemyHP(selectedEnemy, selectedEnemies.indexOf(true));
          cardHighlightReset();
          enemyHighlightReset(Object.values(room.enemies));
          selectedCards = [false, false, false, false, false];
          selectedEnemies = [false, false, false];
          drawHand(player);
        
          // resolve attacks from each enemy on the player, call displayPlayer to update player hp
          for (let i=0; i<Object.values(room.enemies).length; i++) {
            if (Object.values(room.enemies)[i] !== undefined) {
              (Object.values(room.enemies)[i]).attack(player);
            }
            displayPlayer(player);
          }
          // remove enemies with hp less than 0
          removeEnemies(room); 
        }    
      }
    }
  });  // end of ("#endTurn").click(function(){...})
  
});