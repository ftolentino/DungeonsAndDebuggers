import Enemy from "../src/js/enemy";  
import { Character } from '../src/js/character.js';
const data = require('./../src/database.json');

describe('life', () => {

  test('should return an Enemy object with name, hp, atk, def, ap, and lvl', () =>  {
    const enemy = new Enemy(data.enemies[0]);
    expect(enemy.baseHP).toEqual(40);
    expect(enemy.baseATK).toEqual(5);
    expect(enemy.baseDEF).toEqual(3);
    expect(enemy.ENERGY).toEqual(4);
    expect(enemy.LVL).toEqual(1);
    expect(enemy.HP).toEqual(40);
    expect(enemy.ATK).toEqual(5);
    expect(enemy.DEF).toEqual(3);
    expect(enemy.name).toEqual("goblin");
  });

  test('should lower player HP by 1', () => {
    const player = new Character(40, 5, 6, 4, "Toes");
    const enemy = new Enemy(data.enemies[0]);
    enemy.attack(player);
    expect(player.HP).toEqual(39);
  });

  test('should lower player HP by 2', () => {
    const player = new Character(40, 5, 3, 4, "Toes");
    const enemy = new Enemy(data.enemies[0]);
    enemy.attack(player);
    expect(player.HP).toEqual(38);
  });

});