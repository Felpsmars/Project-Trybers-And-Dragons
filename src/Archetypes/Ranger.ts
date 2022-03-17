import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  static instances = 0;
  energy: EnergyType = 'stamina';

  constructor(name: string) {
    super(name);
    Ranger.instances += 1;
  }

  static createdArchetypeInstances(): number {
    return this.instances;
  }

  get energyType(): EnergyType {
    return this.energy;
  }
}
