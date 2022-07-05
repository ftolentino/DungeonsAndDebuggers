export class Character {
  constructor(hp, atk, def, lvl, name) {
    this.baseHP = hp;
    this.baseATK = atk;
    this.baseDEF = def;

    this.HP = this.baseHP;
    this.ATK = this.baseATK;
    this.DEF = this.baseDEF;

    this.LVL = lvl;
    this.XP = 0;

    this.name = name;
  }

  attack(enemy) {
    enemy.HP -= this.ATK - enemy.DEF;
  }

}

export class Fighter extends Character {
  constructor(name) {
    super(50, 6, 4, 1, name);
  }
}

export class Ranger extends Character {
  constructor(name) {
    super(30, 5, 4, 1, name)
  }
}

export class Wizard extends Character {
  constructor(name) {
    super(25, 4, 2, 1, name);

    this.baseMP = 20;
    this.MP = this.baseMP;
  }
}

