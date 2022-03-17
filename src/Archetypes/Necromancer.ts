import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  static instances = 0;
  energy: EnergyType = 'mana';
  
  constructor(name: string) {
    super(name);
    Necromancer.instances += 1;
  }

  static createdArchetypeInstances(): number {
    return this.instances;
  }

  get energyType(): EnergyType {
    return this.energy;
  }
} 