const data = require('./../src/database.json');
import { Character } from '../src/js/character.js';

describe('Character', () =>  {
  let character;

  beforeEach(() => {
    character = new Character(80, 8, 8, 1, "Peat")
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

});

// export class Character {
//   constructor(hp, atk, def, lvl, name) {
//     this.baseHP = hp;
//     this.baseATK = atk;
//     this.baseDEF = def;

//     this.HP = this.baseHP;
//     this.ATK = this.baseATK;
//     this.DEF = this.baseDEF;

//     this.LVL = lvl;
//     this.XP = 0;

//     this.name = name;