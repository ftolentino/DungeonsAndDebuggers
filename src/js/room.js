export class Room {
  constructor () {
    this.enemies = {};
    this.currentID = 0;
    this.currentEnemies = 0;
  }

  addEnemy (enemy) {
    enemy.ID = this.assignID();
    this.enemies[enemy.ID] = enemy;
    this.currentEnemies++;
  }

  assignID () {
    this.currentID += 1;
    return this.currentID;
  }

  removeEnemy (id) {
    if (this.enemies[id] === undefined) {
      return false;
    }
    delete this.enemies[id];
    --this.currentEnemies;
    return true;
  }
}