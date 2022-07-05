import Room from './../src/js/room.js';
import Enemy from './../src/js/enemy.js';

describe('Room', () => {
  let enemy;
  let room;

  beforeEach(() => {
    enemy = new Enemy("Nettle", 20, 5, 3, 4, 1); 
    room = new Room;
  })
  
  test('add an enemy to the room', () => {
    room.addEnemy(enemy);
    expect(room.enemies).toEqual({"1": {"ATK": 5, "DEF": 3, "ENERGY": 4, "HP": 20, "ID": 1, "LVL": 1, "baseATK": 5, "baseDEF": 3, "baseHP": 20, "name": "Nettle"}});
    expect(room.currentID).toEqual(1);
    expect(room.currentEnemies).toEqual(1);
  });

  test('remove an enemy from the room', () => {
    room.addEnemy(enemy);
    room.removeEnemy(enemy.ID);
    expect(room.currentEnemies).toEqual(0);
  });

});












