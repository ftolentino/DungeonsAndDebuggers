export default class Enemy {
  constructor(path) {
    this.baseHP = path.HP;
    this.baseATK = path.ATK;
    this.baseDEF = path.DEF;
    this.ENERGY = path.ENERGY;

    this.HP = this.baseHP;
    this.ATK = this.baseATK;
    this.DEF = this.baseDEF;

    this.LVL = path.LVL;

    this.name = path.name;
    this.sprite = path.image;
  }

  attack(player) {
    if (player.DEF >= this.ATK) {
      player.HP -= 1;
    } else{
      player.HP -= this.ATK - player.DEF;
    }
  }
}