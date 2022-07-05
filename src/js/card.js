export class Card {

  static attack(player, enemy) {
    enemy.HP -= player.ATK - enemy.DEF;
  }

  static defend(player) {
    player.DEF += 1;
  }

  static magic(player, enemy) {
    enemy.hp -= player.ATK
    player.MP -= 1;
  }
  // Card.attack(player1, goblin);
}
