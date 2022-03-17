import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  static instances = 0;
  readonly energy: EnergyType = 'stamina';
  
  constructor(name: string) {
    super(name);
    Warrior.instances += 1;
  }

  static createdArchetypeInstances(): number {
    return this.instances;
  }

  get energyType(): EnergyType {
    return this.energy;
  }
} 