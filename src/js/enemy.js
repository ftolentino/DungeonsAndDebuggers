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
    let damage = Math.floor(Math.random() * (this.ATK+2) + this.ATK);
    if (player.DEF >= damage) {
      player.HP -= 1;
    } else{
      player.HP -= damage - player.DEF;
    }
  }
}