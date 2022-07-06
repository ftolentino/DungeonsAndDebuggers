import Enemy from "../src/js/enemy";  
import { Character } from '../src//js/character.js';

describe('life', () => {
  let enemy;

  beforeEach(() => {
    enemy = new Enemy("Nettle", 20, 5, 3, 4, 1); 
  })

  test('should return an Enemy object with name, hp, atk, def, ap, and lvl', () =>  {
    expect(enemy.baseHP).toEqual(20);
    expect(enemy.baseATK).toEqual(5);
    expect(enemy.baseDEF).toEqual(3);
    expect(enemy.ENERGY).toEqual(4);
    expect(enemy.LVL).toEqual(1);
    expect(enemy.HP).toEqual(20);
    expect(enemy.ATK).toEqual(5);
    expect(enemy.DEF).toEqual(3);
    expect(enemy.name).toEqual("Nettle");
  });

  test('should lower player HP by 1', () => {
    const player = new Character(40, 5, 6, 4, "Toes");
    enemy.attack(player);
    expect(player.HP).toEqual(39);
  });

  test('should lower player HP by 2', () => {
    const player = new Character(40, 5, 3, 4, "Toes");
    enemy.attack(player);
    expect(player.HP).toEqual(38);
  });

});