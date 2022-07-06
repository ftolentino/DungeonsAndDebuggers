import Room from './../src/js/room.js';
import Enemy from './../src/js/enemy.js';
const data = require('./../src/database.json');

describe('Room', () => {
  let enemy;
  let room;

  beforeEach(() => {
    enemy = new Enemy(data.enemies[1]); 
    room = new Room();
  });
  
  test('add an enemy to the room', () => {
    room.addEnemy(enemy);
    expect(room.enemies).toEqual();
    expect(room.currentID).toEqual(1);
    expect(room.currentEnemies).toEqual(1);
  });

  test('remove an enemy from the room', () => {
    room.addEnemy(enemy);
    room.removeEnemy(enemy.ID);
    expect(room.currentEnemies).toEqual(0);
  });

});