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
    expect(room.enemies).toEqual({"1": {"ATK": 8, "DEF": 5, "ENERGY": 4, "HP": 80, "ID": 1, "LVL": 1, "baseATK": 8, "baseDEF": 5, "baseHP": 80, "name": "slime", "sprite": undefined}});
    expect(room.currentID).toEqual(1);
    expect(room.currentEnemies).toEqual(1);
  });

  test('remove an enemy from the room', () => {
    room.addEnemy(enemy);
    room.removeEnemy(enemy);
    expect(room.currentEnemies).toEqual(0);
  });

});