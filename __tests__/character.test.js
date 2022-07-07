const data = require('./../src/database.json');
import { Character, CardPlayer } from '../src/js/character.js';
import Enemy from './../src/js/enemy.js';

describe('Character', () =>  {
  let character;
  let cardPlayer1;

  beforeEach(() => {
    character = new Character(80, 8, 8, 1, "Peat")
    cardPlayer1 = new CardPlayer;
  });

  test('should return character Peat with correct stats', () => {
    expect(character.baseHP).toEqual(80);
    expect(character.baseATK).toEqual(8);
    expect(character.baseDEF).toEqual(8);
    expect(character.LVL).toEqual(1);
    expect(character.HP).toEqual(80);
    expect(character.ATK).toEqual(8);
    expect(character.DEF).toEqual(8);
    expect(character.XP).toEqual(0);
    expect(character.name).toEqual("Peat");

  });  

  test('should lower enemy HP by 5', () => {
    const enemy = new Enemy(data.enemies[0]);
    character.attack(enemy);
    expect(enemy.HP).toEqual(35);
  });

  test('should lower enemy HP by 1', () => {
    character.ATK -= 6;
    const enemy = new Enemy(data.enemies[0]);
    character.attack(enemy);
    expect(enemy.HP).toEqual(39);
  });

  test('should increace charater LVL by +1', () => {
    character.lvlUp();
    expect(character.LVL).toEqual(2);
  });

  test('should return a cardPlayer obect with default stats', () => {
    const cardPlayer1 = new CardPlayer("Test");
    expect(cardPlayer1.baseHP).toEqual(25);
    expect(cardPlayer1.baseATK).toEqual(12);
    expect(cardPlayer1.baseDEF).toEqual(4);
    expect(cardPlayer1.LVL).toEqual(1);
    expect(cardPlayer1.name).toEqual("Test");
    expect(cardPlayer1.HP).toEqual(25);
    expect(cardPlayer1.ATK).toEqual(12);
    expect(cardPlayer1.DEF).toEqual(4);
    expect(cardPlayer1.XP).toEqual(0);

  })



});
// (hp, atk, def, lvl, name)
// super(25, 12, 4, 1, name);