export default class Enemy {
  constructor(name, hp, atk, def, ap, lvl) {
    this.baseHP = hp;
    this.baseATK = atk;
    this.baseDEF = def;
    this.ENERGY = ap;

    this.HP = this.baseHP;
    this.ATK = this.baseATK;
    this.DEF = this.baseDEF;

    this.LVL = lvl;

    this.name = name;
  }

  attack(player) {
    if (player.DEF >= this.ATK) {
      player.HP -= 1;
    } else{
      player.HP -= this.ATK - player.DEF;
    }
  }

}