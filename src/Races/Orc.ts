import Race from './Race';

export default class Orc extends Race {
  public maxLifePoints: number;
  static instances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = 74;
    Orc.instances += 1;
  }

  static createdRacesInstances(): number {
    return this.instances;
  }
}
