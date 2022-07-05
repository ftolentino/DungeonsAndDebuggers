import Enemy from "../src/js/enemy";  

describe('life', () => {

  test('should return an Enemy object with name, hp, atk, def, ap, and lvl', () =>  {
    const enemy = new Enemy("Nettle", 20, 5, 3, 4, 1); 
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
});