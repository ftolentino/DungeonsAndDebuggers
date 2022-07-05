export class Card {
<<<<<<< HEAD

  constructor (name, type, effect, energy) {
    this.name = name;
    this.type = type;
    this.effect = effect;
    this.energy = energy;
  }

  

=======
  constructor (path) {
    this.name = path.name;
    this.type = path.type;
    this.energy = path.energy;
  }
>>>>>>> 81c3bc891795805762d041aee264dd5880dc4caf
}
