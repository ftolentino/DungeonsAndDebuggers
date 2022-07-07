export default class Card {

  constructor (path) {
    this.name = path.name;
    this.type = path.type;
    this.energy = path.energy;
    this.json = path;

    this.effectType1 = path.effect[0];
    this.effectValue1 = path.effect[1];
    this.effectType2 = path.effect[2];
    this.effectValue2 = path.effect[3];

  } 
}
