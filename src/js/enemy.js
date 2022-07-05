export class Enemy {
  constructor(hp, atk, def, ap, lvl) {
    this.baseHP = hp;
    this.baseATK = atk;
    this.baseDEF = def;
    this.AP = ap;
    this.LVL = lvl;

    this.HP = this.baseHP;
    this.ATK = this.baseATK;
    this.DEF = this.baseDEF;
  }

  attack(player) {
    if (player.DEF >= this.ATK) {
      player.HP -= 1;
    } else{
      player.HP -= this.ATK - player.DEF;
    }
  }

}

export class Goblin extends Enemy {
  constructor(hp, atk, def, ap, lvl) {
    super(hp, atk, def, ap, lvl);
  }  

}