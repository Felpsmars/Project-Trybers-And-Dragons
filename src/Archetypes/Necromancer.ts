import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  static numberOfInstances = 0;
  energy: EnergyType = 'mana';
  
  constructor(name: string) {
    super(name);
    Necromancer.numberOfInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return this.numberOfInstances;
  }

  get energyType(): EnergyType {
    return this.energy;
  }
} 