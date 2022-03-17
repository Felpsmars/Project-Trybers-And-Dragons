import Race from './Race';

export default class Elf extends Race {
  public maxLifePoints: number;
  static instances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = 99;
    Elf.instances += 1;
  }

  static createdRacesInstances(): number {
    return this.instances;
  }
} 